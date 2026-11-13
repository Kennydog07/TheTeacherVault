/* The Teacher Vault analytics: Umami (cookieless, no consent banner needed).
   =====================================================================
   HOW TO SWITCH IT ON
   1. Create a free account at https://cloud.umami.is and add the website
      theteachervault.com.
   2. Copy the Website ID shown under Settings > Websites (it looks like
      a1b2c3d4-e5f6-7890-abcd-ef1234567890).
   3. Paste it between the quotes on the UMAMI_WEBSITE_ID line below,
      commit, and deploy. That is the ONLY change needed: every page
      already loads this file with <script defer src="/analytics.js">.

   While UMAMI_WEBSITE_ID is empty this file does nothing at all: no
   script is loaded, nothing is sent and no errors are thrown.

   WHAT IS TRACKED (once switched on)
   - Page views (Umami's automatic tracking), only on the domains in
     UMAMI_DOMAINS, so Netlify deploy previews are never counted.
   - "download" event for every click on a link to a .pdf file, with
     file  = the PDF file name, e.g. 01-EYFS-CVC-Words.pdf
     page  = the page the click came from, e.g. /guides/cvc-words-parent-guide
   - "gumroad-click" event for every click on an outbound Gumroad link,
     with url = the Gumroad link and page = the page it was clicked from.
   No cookies, no personal data, no Google Analytics. */
(function () {
  var UMAMI_WEBSITE_ID = "";                       // <-- paste the Umami Website ID here
  var UMAMI_SCRIPT = "https://cloud.umami.is/script.js";
  var UMAMI_DOMAINS = "theteachervault.com,www.theteachervault.com";

  try {
    if (!UMAMI_WEBSITE_ID || !/^[0-9a-f-]{36}$/i.test(UMAMI_WEBSITE_ID)) return;
    var host = window.location.hostname;
    if (UMAMI_DOMAINS.split(",").indexOf(host) === -1) return;

    if (!document.querySelector("script[data-website-id]")) {
      var s = document.createElement("script");
      s.defer = true;
      s.src = UMAMI_SCRIPT;
      s.setAttribute("data-website-id", UMAMI_WEBSITE_ID);
      s.setAttribute("data-domains", UMAMI_DOMAINS);
      document.head.appendChild(s);
    }

    var queue = [];
    function send(name, data) {
      if (window.umami && typeof window.umami.track === "function") {
        window.umami.track(name, data);
      } else if (queue.length < 20) {
        queue.push([name, data]);
      }
    }
    var flushTimer = setInterval(function () {
      if (window.umami && typeof window.umami.track === "function") {
        clearInterval(flushTimer);
        while (queue.length) { var q = queue.shift(); window.umami.track(q[0], q[1]); }
      }
    }, 500);
    setTimeout(function () { clearInterval(flushTimer); }, 30000);

    function onClick(e) {
      try {
        if (e.type === "auxclick" && e.button !== 1) return;
        var a = e.target && e.target.closest ? e.target.closest("a[href]") : null;
        if (!a) return;
        var url = new URL(a.getAttribute("href"), window.location.href);
        var page = window.location.pathname;
        if (/\.pdf$/i.test(url.pathname)) {
          var file = decodeURIComponent(url.pathname.split("/").pop() || "");
          send("download", { file: file, page: page });
        } else if (/(^|\.)gumroad\.com$/i.test(url.hostname)) {
          send("gumroad-click", { url: url.origin + url.pathname, page: page });
        }
      } catch (err) { /* analytics must never break the page */ }
    }
    document.addEventListener("click", onClick, true);
    document.addEventListener("auxclick", onClick, true);
  } catch (e) { /* analytics must never break the page */ }
})();
