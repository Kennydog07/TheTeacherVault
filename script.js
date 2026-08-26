/* ==========================================================================
   THE TEACHER VAULT — SITE SCRIPT
   Handles the shared header/footer, navigation, app card rendering and the
   filtering on the Browse All page. No build step, no dependencies.
   ========================================================================== */

/* --------------------------------------------------------------------------
   Small inline icon set (currentColor, no external requests)
   -------------------------------------------------------------------------- */

const ICONS = {
  external: '<svg class="ext-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>',
  gumroad: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M8.5 12.5a3.5 3.5 0 1 0 3.2-3.48"/></svg>',
  check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>',
  search: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>',
  menu: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>',
  close: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>',
  arrowUp: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="12" y1="19" x2="12" y2="5"/><polyline points="5 12 12 5 19 12"/></svg>',
  book: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>',
  clipboard: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="8" y="2" width="8" height="4" rx="1"/><path d="M9 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-3"/><line x1="8" y1="12" x2="16" y2="12"/><line x1="8" y1="16" x2="13" y2="16"/></svg>',
  mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m2 7 10 6 10-6"/></svg>',
  share: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.6" y1="13.5" x2="15.4" y2="17.5"/><line x1="15.4" y1="6.5" x2="8.6" y2="10.5"/></svg>',
  gumroadMark: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 8v8"/><path d="M9 11h6"/></svg>',
  bolt: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polygon points="13 2 3 14 11 14 10 22 21 10 13 10 13 2"/></svg>',
  target: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/></svg>',
  coin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M9.5 15.2c.5.6 1.4 1 2.5 1 1.7 0 3-.8 3-2s-1.3-1.7-3-2-3-.8-3-2 1.3-2 3-2c1.1 0 2 .4 2.5 1"/><path d="M12 6.5v11"/></svg>',
  noSub: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="6" width="18" height="14" rx="2"/><path d="M3 10h18"/><line x1="6" y1="14.5" x2="10" y2="14.5"/><line x1="4" y1="3" x2="20" y2="20"/></svg>',
  teacher: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="4" width="18" height="13" rx="1.5"/><path d="M8 21h8M12 17v4"/><path d="M7.5 12.5l2.5-3 2 2 3.5-4"/></svg>',
  student: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M2 9l10-4 10 4-10 4-10-4z"/><path d="M6 11v5c0 1.5 2.7 3 6 3s6-1.5 6-3v-5"/><path d="M22 9v6"/></svg>',
  chart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 20V10M12 20V4M20 20v-7"/><path d="M2 20h20"/></svg>',
  repeat: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M17 2l4 4-4 4"/><path d="M3 12v-2a4 4 0 0 1 4-4h14"/><path d="M7 22l-4-4 4-4"/><path d="M21 12v2a4 4 0 0 1-4 4H3"/></svg>',
  download: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3v12"/><polyline points="7 10 12 15 17 10"/><path d="M4 19h16"/></svg>',
  skull: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3C7.6 3 4.5 6.2 4.5 10.2c0 2.6 1.3 4.4 2.5 5.6V19a1 1 0 0 0 1 1h1.5v-2h1v2h3v-2h1v2H16a1 1 0 0 0 1-1v-3.2c1.2-1.2 2.5-3 2.5-5.6C19.5 6.2 16.4 3 12 3z"/><circle cx="9.2" cy="10.5" r="1.4"/><circle cx="14.8" cy="10.5" r="1.4"/><path d="M11 13.2h2l-1 1.6-1-1.6z"/></svg>',
  potion: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M10 2h4"/><path d="M10.5 2v4.2L7 12.5c-.9 1.6-1.1 2.7-1.1 3.8 0 3 2.7 5.2 6.1 5.2s6.1-2.2 6.1-5.2c0-1.1-.2-2.2-1.1-3.8L13.5 6.2V2"/><path d="M8 15.5c1 .8 2.3 1.2 4 1.2s3-.4 4-1.2"/><circle cx="10.5" cy="12.5" r="0.6" fill="currentColor" stroke="none"/><circle cx="13" cy="14" r="0.5" fill="currentColor" stroke="none"/><circle cx="11.5" cy="15.5" r="0.5" fill="currentColor" stroke="none"/></svg>',
  pocketWatch: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 2.5v1.8"/><path d="M10.3 2.5h3.4"/><circle cx="12" cy="13" r="8.5"/><path d="M12 8v5l3 2"/><path d="M9 5.5 7 3.5"/></svg>',
  facebook: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z"/></svg>',
  pinterest: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.171-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.098.12.112.225.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146 1.123.345 2.312.531 3.55.531 6.607 0 11.985-5.365 11.985-11.987C23.97 5.365 18.592.001 11.985.001z"/></svg>'
};

const WHY_CARDS = [
  { icon: "bolt", title: "Simple", text: "Open the tool and get started. No unnecessary setup." },
  { icon: "target", title: "Useful", text: "Every app is built to solve one specific problem well." },
  { icon: "coin", title: "Affordable", text: "Many apps are free, with optional paid Pro tools for regular use." },
  { icon: "noSub", title: "No subscriptions", text: "Products are purchased individually unless explicitly stated otherwise." },
  { icon: "teacher", title: "Teacher-focused", text: "Designed around actual everyday education tasks." },
  { icon: "student", title: "Student-friendly", text: "Student apps are straightforward and distraction-free." }
];

const TRUST_ITEMS = [
  "Free student apps",
  "No subscription required for free resources",
  "Instant, browser-based tools",
  "Growing app library"
];

/* Full subject list used by the subject dropdown on Student Apps and
   Browse All. To add a subject, add it here and it appears in both
   dropdowns automatically — you'll still need to set that subject on
   an app in apps-data.js before anything shows up under it. */
const SUBJECT_LIST = [
  "English", "Maths", "Science", "Biology", "Chemistry", "Physics",
  "History", "Geography", "Business", "French", "Spanish", "German",
  "Computer Science", "RE", "Art/Design", "Design/Tech", "Music",
  "PE", "Citizenship", "Primary", "Other"
];

/* Key Stage branches shown as separate sections on the Student Apps page.
   Order here is the order they appear on the page. To add a branch, add
   it here with a value/label/blurb — you'll still need to set that
   keyStage on an app in apps-data.js before anything shows up under it. */
const KEY_STAGE_LIST = [
  { value: "KS2", label: "KS2 (SATs)", blurb: "Revision for Year 6 SATs." },
  { value: "KS3", label: "KS3", blurb: "Revision and practice for Years 7 to 9." },
  { value: "KS4", label: "KS4 (GCSE)", blurb: "Revision for GCSE exams." },
  { value: "KS5", label: "KS5 (A-Level)", blurb: "Revision for A-Level and sixth form study." },
  { value: "General", label: "General Revision", blurb: "Tools and practice that aren't tied to one specific exam stage." }
];

function renderWhyGrid(container, lightCards) {
  if (!container) return;
  container.innerHTML = WHY_CARDS.map(function (c) {
    return '<div class="feature-card"' + (lightCards ? ' style="background:#fff;border-color:rgba(20,36,29,0.08);"' : '') + '>' +
      '<div class="feature-card__icon">' + ICONS[c.icon] + '</div>' +
      '<h3>' + c.title + '</h3>' +
      '<p>' + c.text + '</p>' +
    '</div>';
  }).join("");
}

function renderTrustStrip(container) {
  if (!container) return;
  container.innerHTML = TRUST_ITEMS.map(function (t) {
    return '<span class="trust-strip__item">' + ICONS.check + ' ' + t + '</span>';
  }).join("");
}

/* --------------------------------------------------------------------------
   Newsletter signup CTA — shared across index/teacher-tools/student-apps
   -------------------------------------------------------------------------- */

const NEWSLETTER_URL = "https://theteachervault.beehiiv.com/subscribe?utm_source=theteachervault&utm_medium=website&utm_campaign=newsletter_signup";

function renderNewsletterCTA(container, url) {
  if (!container) return;
  container.innerHTML =
    '<div class="container">' +
      '<div class="newsletter-cta__panel">' +
        '<h2>Get New Free Resources</h2>' +
        '<p class="lede">New teacher tools, classroom resources and pupil revision materials from The Teacher Vault &mdash; straight to your inbox.</p>' +
        '<a href="' + (url || NEWSLETTER_URL) + '" class="btn btn--primary newsletter-cta__btn" aria-label="Subscribe to The Teacher Vault newsletter to get free teacher and pupil resources">Get Free Resources</a>' +
        '<p class="newsletter-cta__note">Free resources &bull; No spam &bull; Unsubscribe anytime</p>' +
      '</div>' +
    '</div>';
}

/* --------------------------------------------------------------------------
   Chalk logo markup — one function, used in header / hero / footer
   -------------------------------------------------------------------------- */

function chalkLogo(size) {
  size = size || "md";
  return (
    '<span class="chalk-logo chalk-logo--' + size + '">' +
      '<img src="/images/logo.png" alt="The Teacher Vault" class="chalk-logo__img" width="320" height="320">' +
    '</span>'
  );
}

/* --------------------------------------------------------------------------
   Header + footer templates

   All hrefs here are root-relative (leading "/") rather than page-relative.
   This is shared markup injected on pages at every folder depth (root,
   quick-notes/, revision-apps/, teacher-apps/, guides/), so a page-relative
   "teacher-tools.html" would resolve incorrectly from inside a subfolder.
   -------------------------------------------------------------------------- */

const NAV_LINKS = [
  { href: "/index.html", label: "Home" },
  { href: "/teacher-tools.html", label: "Teacher Tools" },
  { href: "/student-apps.html", label: "Student Apps" },
  { href: "/quick-notes.html", label: "Quick Notes" },
  { href: "/apps.html?tier=pro", label: "Pro Apps" },
  { href: "/about.html", label: "About" },
  { href: "/faq.html", label: "FAQ" }
];

function currentFile() {
  const path = window.location.pathname.split("/").pop();
  return "/" + (path === "" ? "index.html" : path);
}

function renderHeader() {
  const here = currentFile();
  const hereWithQuery = here + window.location.search;
  const linkHtml = function (extra) {
    return NAV_LINKS.map(function (l) {
      const active = l.href.indexOf("?") > -1 ? l.href === hereWithQuery : l.href === here;
      return '<a href="' + l.href + '"' + (active ? ' aria-current="page"' : '') + '>' + l.label + '</a>';
    }).join("");
  };

  return (
    '<div class="site-header__inner">' +
      '<a href="/index.html" aria-label="The Teacher Vault — home">' + chalkLogo("sm") + '</a>' +
      '<nav class="main-nav" aria-label="Primary">' +
        '<div class="main-nav__links">' + linkHtml() + '</div>' +
      '</nav>' +
      '<div class="header-cta">' +
        '<a href="/apps.html" class="btn btn--ghost btn--sm">Browse All Apps</a>' +
        '<button class="nav-toggle" id="navToggle" aria-expanded="false" aria-controls="mobileNav" aria-label="Open menu">' + ICONS.menu + '</button>' +
      '</div>' +
    '</div>' +
    '<div class="mobile-nav" id="mobileNav">' +
      linkHtml() +
      '<a href="/contact.html"' + (here === "/contact.html" ? ' aria-current="page"' : '') + '>Contact</a>' +
      '<a href="/apps.html" class="btn btn--primary btn--sm">Browse All Apps</a>' +
    '</div>'
  );
}

function renderFooter() {
  const year = new Date().getFullYear();
  return (
    '<div class="container">' +
      '<div class="footer-grid">' +
        '<div class="footer-col">' +
          chalkLogo("footer") +
          '<p class="footer-desc">Practical tools for teachers. Free revision resources for students.</p>' +
          '<p class="gumroad-note">Teacher tools are fulfilled through Gumroad. Student apps and Quick Notes open or download directly from this site.</p>' +
        '</div>' +
        '<div class="footer-col">' +
          '<h4>Explore</h4>' +
          '<ul>' +
            '<li><a href="/teacher-tools.html">Teacher Tools</a></li>' +
            '<li><a href="/student-apps.html">Student Apps</a></li>' +
            '<li><a href="/quick-notes.html">Quick Notes</a></li>' +
            '<li><a href="/apps.html?tier=free">Free Apps</a></li>' +
            '<li><a href="/apps.html?tier=pro">Pro Apps</a></li>' +
          '</ul>' +
        '</div>' +
        '<div class="footer-col">' +
          '<h4>Company</h4>' +
          '<ul>' +
            '<li><a href="/about.html">About</a></li>' +
            '<li><a href="/faq.html">FAQ</a></li>' +
            '<li><a href="/contact.html">Contact</a></li>' +
          '</ul>' +
        '</div>' +
        '<div class="footer-col">' +
          '<h4>Legal</h4>' +
          '<ul>' +
            '<li><a href="/privacy.html">Privacy</a></li>' +
            '<li><a href="/terms.html">Terms</a></li>' +
          '</ul>' +
        '</div>' +
      '</div>' +
      '<div class="footer-bottom">' +
        '<span>&copy; ' + year + ' The Teacher Vault. All rights reserved.</span>' +
        '<span>Built for teachers and students &mdash; not a faceless platform.</span>' +
      '</div>' +
    '</div>'
  );
}

function mountLayout() {
  const headerEl = document.getElementById("site-header");
  const footerEl = document.getElementById("site-footer");
  if (headerEl) headerEl.innerHTML = renderHeader();
  if (footerEl) footerEl.innerHTML = renderFooter();

  const toggle = document.getElementById("navToggle");
  if (toggle) {
    toggle.addEventListener("click", function () {
      const open = document.body.classList.toggle("nav-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      toggle.innerHTML = open ? ICONS.close : ICONS.menu;
    });
  }
}

/* --------------------------------------------------------------------------
   Back to top button
   -------------------------------------------------------------------------- */

function mountBackToTop() {
  const btn = document.createElement("button");
  btn.className = "back-to-top";
  btn.id = "backToTop";
  btn.setAttribute("aria-label", "Back to top");
  btn.innerHTML = ICONS.arrowUp;
  document.body.appendChild(btn);

  window.addEventListener("scroll", function () {
    btn.classList.toggle("visible", window.scrollY > 500);
  });
  btn.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

/* --------------------------------------------------------------------------
   App card rendering — used on home, teacher-tools, revision, apps pages
   -------------------------------------------------------------------------- */

function tierBadge(app) {
  if (app.comingSoon) return '<span class="badge badge--soon">Coming Soon</span>';
  if (app.tier === "pro") return '<span class="badge badge--pro">Pro</span>';
  if (app.tier === "lite") return '<span class="badge badge--lite">Lite &middot; Free</span>';
  return '<span class="badge badge--free">Free</span>';
}

function categoryLabel(app) {
  if (app.category === "teacher") return "Teacher Tool";
  if (app.category === "quicknotes") return "Quick Notes";
  return "Student App";
}

function thumbIcon(app) {
  if (app.icon && ICONS[app.icon]) return ICONS[app.icon];
  if (app.category === "teacher") return ICONS.clipboard;
  return ICONS.book;
}

function thumbMedia(app) {
  if (app.image) {
    return '<img src="' + app.image + '" alt="" loading="lazy" class="app-card__thumb-img">';
  }
  return thumbIcon(app);
}

function ctaFor(app) {
  if (app.comingSoon) {
    return '<span class="btn btn--dark btn--block" aria-disabled="true">Coming Soon</span>';
  }
  if (app.fileUrl && app.fileType === "app") {
    return '<a class="btn btn--dark btn--block" href="' + app.fileUrl + '" target="_blank" rel="noopener">Open App ' + ICONS.external + '</a>';
  }
  if (app.fileUrl && app.fileType === "poster") {
    return '<a class="btn btn--dark btn--block" href="' + app.fileUrl + '" download>Download Poster ' + ICONS.download + '</a>' +
      '<a class="btn btn--outline-dark btn--block" href="' + app.fileUrl + '" target="_blank" rel="noopener">Open in New Window ' + ICONS.external + '</a>';
  }
  if (app.fileUrl) {
    return '<a class="btn btn--dark btn--block" href="' + app.fileUrl + '" download>Download PDF ' + ICONS.download + '</a>';
  }
  if (!app.gumroadUrl) {
    return '<span class="btn btn--dark btn--block" aria-disabled="true">Coming Soon</span>';
  }
  const label = app.tier === "pro" ? "Get Pro on Gumroad" : "Download Free on Gumroad";
  return '<a class="btn ' + (app.tier === "pro" ? "btn--primary" : "btn--dark") + ' btn--block" href="' + app.gumroadUrl + '" target="_blank" rel="noopener">' + label + ' ' + ICONS.external + '</a>';
}

function proNote(app) {
  if (app.tier === "lite" && app.proVersionId) {
    const pro = getAppById(app.proVersionId);
    if (pro) return '<p class="app-card__pro-note">Pro version available &mdash; <a href="' + (pro.landingUrl || ('/app.html?id=' + pro.id)) + '">' + pro.title + '</a></p>';
  }
  if (app.tier === "pro" && app.liteVersionId) {
    const lite = getAppById(app.liteVersionId);
    if (lite) return '<p class="app-card__pro-note">Free Lite version available &mdash; <a href="' + (lite.landingUrl || ('/app.html?id=' + lite.id)) + '">' + lite.title + '</a></p>';
  }
  return "";
}

function renderAppCard(app) {
  const subjectBadge = (app.subject && app.subject !== "General")
    ? '<span class="badge badge--subject">' + app.subject + '</span>' : "";
  const newBadge = app.isNew ? '<span class="badge badge--new">New</span>' : "";
  const detailsUrl = app.landingUrl || ('/app.html?id=' + app.id);

  return (
    '<article class="app-card" data-id="' + app.id + '" data-category="' + app.category + '" data-tier="' + app.tier + '" data-subject="' + (app.subject || "") + '" data-comingsoon="' + !!app.comingSoon + '">' +
      '<a href="' + detailsUrl + '" class="app-card__thumb' + (!app.image && app.category === "quicknotes" ? " app-card__thumb--board" : "") + '" aria-hidden="true" tabindex="-1">' +
        thumbMedia(app) +
        '<span class="app-card__badges">' + tierBadge(app) + newBadge + '</span>' +
      '</a>' +
      '<div class="app-card__body">' +
        '<span class="app-card__category"><span class="app-card__category-icon" aria-hidden="true">' + thumbIcon(app) + '</span>' + categoryLabel(app) + '</span>' +
        '<h3 class="app-card__title"><a href="' + detailsUrl + '">' + app.title + '</a></h3>' +
        '<p class="app-card__desc">' + app.tagline + '</p>' +
        '<div class="app-card__meta">' + subjectBadge + '</div>' +
        '<div class="app-card__foot">' +
          ctaFor(app) +
          '<a href="' + detailsUrl + '" class="btn btn--outline-dark btn--sm btn--block">View details</a>' +
          proNote(app) +
        '</div>' +
      '</div>' +
    '</article>'
  );
}

function renderCardGrid(container, apps) {
  if (!container) return;
  if (!apps.length) {
    container.innerHTML = '<div class="empty-state"><p>No apps match those filters yet. Try clearing a filter or search term.</p></div>';
    return;
  }
  container.innerHTML = apps.map(renderAppCard).join("");
}

/* --------------------------------------------------------------------------
   Scroll-triggered chalk underlines + "New" badge pop-in (Phase 4)
   Each element animates once, then is unobserved. Skipped entirely when
   prefers-reduced-motion is set, since the CSS already shows the final
   state instantly in that case.
   -------------------------------------------------------------------------- */

function initScrollReveals() {
  if (!("IntersectionObserver" in window)) return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const headings = document.querySelectorAll(".section-head h2");
  if (headings.length) {
    const headingObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("in-view");
        headingObserver.unobserve(entry.target);
      });
    }, { threshold: 0.4 });
    headings.forEach(function (h) { headingObserver.observe(h); });
  }

  const newBadges = document.querySelectorAll(".badge--new");
  if (newBadges.length) {
    const badgeObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("in-view");
        badgeObserver.unobserve(entry.target);
      });
    }, { threshold: 0.3 });
    newBadges.forEach(function (b) { badgeObserver.observe(b); });
  }
}

/* --------------------------------------------------------------------------
   Init
   -------------------------------------------------------------------------- */

document.addEventListener("DOMContentLoaded", function () {
  mountLayout();
  mountBackToTop();
  initScrollReveals();
});
