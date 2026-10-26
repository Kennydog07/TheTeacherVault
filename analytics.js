/* Cloudflare Web Analytics (cookieless, no consent banner needed).
   This is the ONLY place the token lives. Every page loads this file with
   <script defer src="/analytics.js"></script>.
   To switch analytics on, replace the placeholder below with the site token
   from Cloudflare dashboard > Analytics & Logs > Web Analytics. While the
   placeholder is still here the beacon is not loaded, so nothing is sent and
   no console errors appear. */
(function () {
  var CF_BEACON = '{"token": "[PLACEHOLDER_CF_TOKEN]"}';
  try {
    if (CF_BEACON.indexOf("PLACEHOLDER") !== -1) return;
    if (document.querySelector("script[data-cf-beacon]")) return;
    var s = document.createElement("script");
    s.defer = true;
    s.src = "https://static.cloudflareinsights.com/beacon.min.js";
    s.setAttribute("data-cf-beacon", CF_BEACON);
    document.head.appendChild(s);
  } catch (e) { /* analytics must never break the page */ }
})();
