/* ==========================================================================
   THE TEACHER VAULT — APP DATABASE
   ==========================================================================
   This is the ONLY place you need to edit to add, change or remove apps.
   Every page (home, teacher tools, revision, browse all, and the app detail
   template) reads from this one file, so you never have to update the same
   product in five different places.

   ------------------------------------------------------------------------
   HOW TO ADD A NEW APP
   ------------------------------------------------------------------------
   1. Copy an existing object below (the { ... } block for a similar app).
   2. Paste it into the APPS array, just above the closing bracket.
   3. Change each field — see the guide under "FIELD REFERENCE" below.
   4. Give it a unique "id" (lowercase, hyphens, no spaces).
   5. Save the file. The new app will automatically appear on every page
      it qualifies for (home, teacher tools / revision, browse all).

   ------------------------------------------------------------------------
   HOW TO CHANGE A GUMROAD LINK
   ------------------------------------------------------------------------
   Find the app's object and replace the "gumroadUrl" value with the real
   Gumroad product URL, e.g. "https://gumroad.com/l/report-writer-lite".
   Leave it as one of the GUMROAD_..._URL placeholders until you have a
   real link — the site will still work, the button just won't go anywhere
   useful yet.

   ------------------------------------------------------------------------
   HOW TO MARK AN APP AS NEW
   ------------------------------------------------------------------------
   Set   isNew: true

   ------------------------------------------------------------------------
   HOW TO MARK AN APP AS COMING SOON
   ------------------------------------------------------------------------
   Set   comingSoon: true
   Coming Soon apps are shown with a "Coming Soon" badge and no working
   download/purchase button, so you never advertise something that isn't
   ready yet.

   ------------------------------------------------------------------------
   HOW TO CHANGE A PRICE
   ------------------------------------------------------------------------
   Edit the "price" field, e.g. "£4.99". Use "Free" for free apps.

   ------------------------------------------------------------------------
   HOW TO CONNECT A LITE APP TO ITS PRO VERSION
   ------------------------------------------------------------------------
   On the Lite app, set  proVersionId: "the-id-of-the-pro-app"
   On the Pro app, set   liteVersionId: "the-id-of-the-lite-app"

   ------------------------------------------------------------------------
   HOW TO ADD A SCREENSHOT
   ------------------------------------------------------------------------
   Put an image file in the /images folder (create it if it doesn't exist)
   and set  image: "images/your-screenshot.jpg"
   If "image" is left empty, a neutral placeholder is shown instead — the
   site will not break if you haven't added screenshots yet.

   ------------------------------------------------------------------------
   FIELD REFERENCE
   ------------------------------------------------------------------------
   id            unique slug, used in the app's URL (app.html?id=...)
   title         product name shown everywhere
   tagline       short one-line hook shown on cards
   description   1-3 sentence description shown on cards and detail pages
   category      "teacher"  |  "revision"  |  "cliffnotes"
   subject       "Maths" | "Science" | "History" | "Business" | "English" |
                 "Languages" | "Primary" | "General" | "" (blank = none)
   audience      who it's for, e.g. "Secondary teachers", "GCSE students"
   tier          "lite"  |  "pro"  |  "free"
   price         display price, e.g. "Free" or "£6.99"
   gumroadUrl    the Gumroad product link (or a GUMROAD_..._URL placeholder).
                 Leave blank ("") for apps that use "fileUrl" instead.
   fileUrl       path to a PDF (or other file) hosted directly on this site,
                 e.g. "downloads/macbeth-cliff-notes.pdf". When this is set,
                 the card/detail page shows a direct "Download PDF" button
                 instead of a Gumroad button — no gumroadUrl needed. Used for
                 Cliff Notes study guides, which download straight from the
                 site rather than through Gumroad.
   image         path to a screenshot, or "" for a placeholder
   icon          optional: "skull" | "potion" | "pocketWatch" | any name from
                 the ICONS list in script.js. Used as the card thumbnail only
                 when "image" is blank — lets a card get a fitting icon
                 instead of the generic category default.
   featured      true = may appear in the homepage "Featured" strip
   isNew         true = shows a "New" tag
   comingSoon    true = shows "Coming Soon" instead of a working button
   proVersionId  id of the matching Pro app (Lite apps only)
   liteVersionId id of the matching Lite app (Pro apps only)
   questionCount approximate number of questions (revision apps only)
   features      array of short feature strings shown on the detail page
   worksOffline  true/false — only set true if the Gumroad listing confirms it
   noAccount     true/false — whether the app itself needs no account/login
   ========================================================================== */

const APPS = [

  /* ---------------------- TEACHER PRODUCTIVITY: LITE ---------------------- */

  {
    id: "report-writer-lite",
    title: "Report Writer Lite",
    tagline: "Structure clear pupil reports in a fraction of the time.",
    description: "A free report-writing assistant that helps you turn rough notes into clear, consistent pupil reports without starting from a blank page each time.",
    category: "teacher",
    subject: "General",
    audience: "Primary and secondary teachers",
    tier: "lite",
    price: "Free",
    gumroadUrl: "GUMROAD_REPORT_WRITER_LITE_URL",
    image: "images/report-writer-lite.jpg",
    featured: true,
    isNew: false,
    comingSoon: false,
    proVersionId: "report-writer-pro",
    features: [
      "Sentence starters and structure prompts for common report sections",
      "Built-in tone options, from formal to encouraging",
      "Quick-edit layout so reports stay in your own words",
      "Works directly in your browser"
    ],
    worksOffline: false,
    noAccount: true
  },
  {
    id: "lesson-planner-lite",
    title: "Lesson Planner Lite",
    tagline: "Structure lessons and activities without the paperwork.",
    description: "A free planning tool that helps you lay out lesson objectives, activities and timings quickly, so planning takes minutes rather than a whole evening.",
    category: "teacher",
    subject: "General",
    audience: "Primary and secondary teachers",
    tier: "lite",
    price: "Free",
    gumroadUrl: "GUMROAD_LESSON_PLANNER_LITE_URL",
    image: "images/lesson-planner-lite.jpg",
    featured: true,
    isNew: false,
    comingSoon: false,
    proVersionId: "lesson-planner-pro",
    features: [
      "Simple objective, activity and timing structure",
      "Reusable lesson templates",
      "Printable and screen-friendly layout",
      "No account needed to use the tool"
    ],
    worksOffline: false,
    noAccount: true
  },

  /* ----------------------- TEACHER PRODUCTIVITY: PRO ----------------------- */

  {
    id: "report-writer-pro",
    title: "Report Writer Pro",
    tagline: "The full report-writing toolkit for regular use.",
    description: "Everything in Report Writer Lite, plus extra banks of subject-specific phrasing, saved pupil profiles and faster batch report-writing for a full class.",
    category: "teacher",
    subject: "General",
    audience: "Teachers writing reports for a full class or year group",
    tier: "pro",
    price: "£9.99",
    gumroadUrl: "https://idamaemann.gumroad.com/l/unjcn",
    image: "images/report-writer-pro.jpg",
    featured: false,
    isNew: false,
    comingSoon: false,
    liteVersionId: "report-writer-lite",
    features: [
      "Everything included in Report Writer Lite",
      "Expanded, subject-specific phrase banks",
      "Save and reuse pupil profiles across terms",
      "Faster workflow for writing a full class set of reports"
    ],
    worksOffline: false,
    noAccount: true
  },
  {
    id: "lesson-planner-pro",
    title: "Lesson Planner Pro",
    tagline: "Advanced planning for regular, everyday use.",
    description: "Everything in Lesson Planner Lite, plus scheme-of-work views, saved templates by topic, and more advanced options for planning across a full term.",
    category: "teacher",
    subject: "General",
    audience: "Teachers planning regularly across a term or year",
    tier: "pro",
    price: "£9.99",
    gumroadUrl: "GUMROAD_LESSON_PLANNER_PRO_URL",
    image: "images/lesson-planner-pro.jpg",
    featured: false,
    isNew: false,
    comingSoon: false,
    liteVersionId: "lesson-planner-lite",
    features: [
      "Everything included in Lesson Planner Lite",
      "Scheme-of-work style overview across multiple lessons",
      "Save and organise templates by topic",
      "Advanced timing and activity controls"
    ],
    worksOffline: false,
    noAccount: true
  },

  /* ---------------------- TEACHER PRODUCTIVITY: LITE (cont.) ---------------------- */

  {
    id: "mark-my-class-lite",
    title: "Mark My Class Lite",
    tagline: "A no-frills way to total pupil marks and see class averages.",
    description: "A simple, no-frills tool for totalling pupil assessment marks and seeing class averages at a glance — free, and ready in seconds.",
    category: "teacher",
    subject: "General",
    audience: "Primary and secondary teachers",
    tier: "lite",
    price: "Free",
    gumroadUrl: "GUMROAD_MARK_MY_CLASS_LITE_URL",
    image: "images/mark-my-class-lite.jpg",
    featured: false,
    isNew: true,
    comingSoon: false,
    proVersionId: "mark-my-class-pro",
    features: [
      "Enter pupil marks and get instant totals",
      "Class average calculated automatically",
      "Clean, distraction-free layout",
      "Works directly in your browser"
    ],
    worksOffline: false,
    noAccount: true
  },
  {
    id: "differentiator",
    title: "Differentiator",
    tagline: "Turn one activity into Support, Core and Stretch versions.",
    description: "Paste in a classroom activity and get three ready-to-use versions — Support, Core and Stretch — without writing three separate lessons from scratch.",
    category: "teacher",
    subject: "General",
    audience: "Primary and secondary teachers",
    tier: "lite",
    price: "Free",
    gumroadUrl: "GUMROAD_DIFFERENTIATOR_URL",
    image: "images/differentiator.jpg",
    featured: false,
    isNew: true,
    comingSoon: false,
    features: [
      "Generates Support, Core and Stretch versions of one activity",
      "Suggested teacher prompts and common stumbling points",
      "Optional TA briefing summary",
      "Copy, print or clear results in one click",
      "Works directly in your browser"
    ],
    worksOffline: false,
    noAccount: true
  },

  /* ----------------------- TEACHER PRODUCTIVITY: PRO (cont.) ----------------------- */

  {
    id: "mark-my-class-pro",
    title: "Mark My Class Pro",
    tagline: "Spot misconceptions and generate reteach priorities.",
    description: "Everything in Mark My Class Lite, plus deeper analysis of pupil assessment marks — spot class-wide misconceptions and generate reteach priorities in seconds.",
    category: "teacher",
    subject: "General",
    audience: "Teachers who regularly analyse assessment data",
    tier: "pro",
    price: "£9.99",
    gumroadUrl: "GUMROAD_MARK_MY_CLASS_PRO_URL",
    image: "images/mark-my-class-pro.jpg",
    featured: false,
    isNew: true,
    comingSoon: false,
    liteVersionId: "mark-my-class-lite",
    features: [
      "Everything included in Mark My Class Lite",
      "Automatic detection of class-wide misconceptions",
      "Generated reteach priorities",
      "Faster workflow for a full class set of results"
    ],
    worksOffline: false,
    noAccount: true
  },

  /* --------------------- TEACHER PRODUCTIVITY: COMING SOON ------------------ */

  {
    id: "rubric-generator",
    title: "Rubric Generator",
    tagline: "Build marking rubrics for any task in minutes.",
    description: "A focused tool for building clear, consistent marking rubrics for assignments, projects and assessments.",
    category: "teacher",
    subject: "General",
    audience: "Secondary teachers",
    tier: "lite",
    price: "TBC",
    gumroadUrl: "",
    image: "",
    featured: false,
    isNew: false,
    comingSoon: true,
    features: [
      "Customisable criteria and grading bands",
      "Printable and digital-friendly layout",
      "Reusable rubric templates"
    ],
    worksOffline: false,
    noAccount: true
  },
  {
    id: "worksheet-builder",
    title: "Worksheet Builder",
    tagline: "Put together classroom worksheets quickly.",
    description: "A simple tool for building printable worksheets and classroom activities without wrestling with a word processor.",
    category: "teacher",
    subject: "General",
    audience: "Primary and secondary teachers",
    tier: "lite",
    price: "TBC",
    gumroadUrl: "",
    image: "",
    featured: false,
    isNew: false,
    comingSoon: true,
    features: [
      "Flexible question and activity layout",
      "Print-ready formatting",
      "Reusable worksheet templates"
    ],
    worksOffline: false,
    noAccount: true
  },

  /* ------------------------------ GCSE REVISION ----------------------------- */

  {
    id: "gcse-maths",
    title: "GCSE Maths Revision",
    tagline: "Hundreds of questions across the key GCSE Maths topics.",
    description: "An interactive GCSE Maths revision app containing hundreds of questions across key GCSE topics, with instant feedback and clear explanations.",
    category: "revision",
    subject: "Maths",
    audience: "GCSE students",
    tier: "free",
    price: "Free",
    gumroadUrl: "GUMROAD_GCSE_MATHS_URL",
    image: "images/gcse-maths.jpg",
    featured: true,
    isNew: false,
    comingSoon: false,
    questionCount: "300+",
    features: [
      "Foundation and Higher content where applicable",
      "Topic filtering, so students can focus on weak areas",
      "Instant feedback with worked explanations",
      "Progress tracking within the app",
      "Spaced repetition of trickier questions",
      "Runs locally in a modern browser",
      "No login required"
    ],
    worksOffline: true,
    noAccount: true
  },
  {
    id: "gcse-science",
    title: "GCSE Combined Science Revision",
    tagline: "Interactive revision across Biology, Chemistry and Physics.",
    description: "An interactive Combined Science revision app covering the core Biology, Chemistry and Physics topics students need for their GCSE exams.",
    category: "revision",
    subject: "Science",
    audience: "GCSE students",
    tier: "free",
    price: "Free",
    gumroadUrl: "GUMROAD_GCSE_SCIENCE_URL",
    image: "images/gcse-science.jpg",
    featured: true,
    isNew: false,
    comingSoon: false,
    questionCount: "300+",
    features: [
      "Covers Biology, Chemistry and Physics topic areas",
      "Topic filtering by subject and specification area",
      "Instant feedback with explanations",
      "Progress tracking within the app",
      "Spaced repetition of trickier questions",
      "Runs locally in a modern browser",
      "No login required"
    ],
    worksOffline: true,
    noAccount: true
  },
  {
    id: "gcse-history",
    title: "GCSE History Revision",
    tagline: "Interactive revision for key GCSE History topics.",
    description: "An interactive GCSE History revision app to help students test their knowledge of key topics, people and events with instant feedback.",
    category: "revision",
    subject: "History",
    audience: "GCSE students",
    tier: "free",
    price: "Free",
    gumroadUrl: "GUMROAD_GCSE_HISTORY_URL",
    image: "images/gcse-history.jpg",
    featured: true,
    isNew: false,
    comingSoon: false,
    questionCount: "200+",
    features: [
      "Topic filtering by unit and period",
      "Instant feedback with explanations",
      "Progress tracking within the app",
      "Spaced repetition of trickier questions",
      "Runs locally in a modern browser",
      "No login required"
    ],
    worksOffline: true,
    noAccount: true
  },
  {
    id: "gcse-business",
    title: "GCSE Business Revision",
    tagline: "Interactive revision for GCSE Business Studies.",
    description: "An interactive GCSE Business revision app covering key concepts, case studies and terminology, with instant feedback as students work through questions.",
    category: "revision",
    subject: "Business",
    audience: "GCSE students",
    tier: "free",
    price: "Free",
    gumroadUrl: "GUMROAD_GCSE_BUSINESS_URL",
    image: "images/gcse-business.jpg",
    featured: true,
    isNew: false,
    comingSoon: false,
    questionCount: "200+",
    features: [
      "Topic filtering by unit",
      "Instant feedback with explanations",
      "Progress tracking within the app",
      "Spaced repetition of trickier questions",
      "Runs locally in a modern browser",
      "No login required"
    ],
    worksOffline: true,
    noAccount: true
  },

  /* -------------------------- REVISION: COMING SOON -------------------------- */

  {
    id: "gcse-english",
    title: "GCSE English Revision",
    tagline: "Revision for GCSE English Language and Literature.",
    description: "Interactive revision covering key GCSE English Language and Literature topics.",
    category: "revision",
    subject: "English",
    audience: "GCSE students",
    tier: "free",
    price: "Free",
    gumroadUrl: "",
    image: "",
    featured: false,
    isNew: false,
    comingSoon: true,
    features: ["Topic filtering", "Instant feedback with explanations", "No login required"],
    worksOffline: true,
    noAccount: true
  },
  {
    id: "gcse-german",
    title: "GCSE German Revision",
    tagline: "Vocabulary and grammar revision for GCSE German.",
    description: "Interactive revision covering key GCSE German vocabulary, grammar and topic areas.",
    category: "revision",
    subject: "Languages",
    audience: "GCSE students",
    tier: "free",
    price: "Free",
    gumroadUrl: "",
    image: "",
    featured: false,
    isNew: false,
    comingSoon: true,
    features: ["Topic and vocabulary filtering", "Instant feedback with explanations", "No login required"],
    worksOffline: true,
    noAccount: true
  },
  {
    id: "gcse-religious-studies",
    title: "GCSE Religious Studies Revision",
    tagline: "Revision for key GCSE Religious Studies topics.",
    description: "Interactive revision covering key beliefs, practices and themes for GCSE Religious Studies.",
    category: "revision",
    subject: "Other",
    audience: "GCSE students",
    tier: "free",
    price: "Free",
    gumroadUrl: "",
    image: "",
    featured: false,
    isNew: false,
    comingSoon: true,
    features: ["Topic filtering", "Instant feedback with explanations", "No login required"],
    worksOffline: true,
    noAccount: true
  },
  {
    id: "sats-english",
    title: "Year 6 SATs English Revision",
    tagline: "Reading and SPaG revision for Year 6 SATs.",
    description: "Interactive revision covering Reading and SPaG (spelling, punctuation and grammar) for Year 6 SATs preparation.",
    category: "revision",
    subject: "Primary",
    audience: "Year 6 pupils",
    tier: "free",
    price: "Free",
    gumroadUrl: "",
    image: "",
    featured: false,
    isNew: false,
    comingSoon: true,
    features: ["Reading comprehension practice", "SPaG topic filtering", "Instant feedback"],
    worksOffline: true,
    noAccount: true
  },
  {
    id: "sats-maths",
    title: "Year 6 SATs Maths Revision",
    tagline: "Interactive Maths revision for Year 6 SATs.",
    description: "Interactive revision covering key Year 6 Maths topics ahead of SATs.",
    category: "revision",
    subject: "Primary",
    audience: "Year 6 pupils",
    tier: "free",
    price: "Free",
    gumroadUrl: "",
    image: "",
    featured: false,
    isNew: false,
    comingSoon: true,
    features: ["Topic filtering", "Instant feedback with explanations", "No login required"],
    worksOffline: true,
    noAccount: true
  },

  /* ------------------------------ CLIFF NOTES ------------------------------
     Study guide PDFs. These download directly from this website (see
     "fileUrl" above) rather than through Gumroad, so gumroadUrl is left
     blank on these entries. */

  {
    id: "cliffnotes-jekyll-and-hyde",
    title: "Jekyll & Hyde Cliff Notes",
    tagline: "A clear, exam-focused study guide to Stevenson's novella.",
    description: "A concise study guide to Strange Case of Dr Jekyll and Mr Hyde, covering plot, characters, themes and key quotations for GCSE English Literature.",
    category: "cliffnotes",
    subject: "English",
    audience: "GCSE English Literature students",
    tier: "free",
    price: "Free",
    gumroadUrl: "",
    fileUrl: "downloads/jekyll-and-hyde-cliff-notes.pdf",
    image: "images/cliffnotes-jekyll-and-hyde.jpg",
    icon: "potion",
    featured: false,
    isNew: true,
    comingSoon: false,
    features: [
      "Chapter-by-chapter plot summary",
      "Key characters and their significance",
      "Core themes and context",
      "Selected quotations with brief analysis",
      "Downloads instantly as a PDF"
    ],
    worksOffline: true,
    noAccount: true
  },
  {
    id: "cliffnotes-an-inspector-calls",
    title: "An Inspector Calls Cliff Notes",
    tagline: "A clear, exam-focused study guide to Priestley's play.",
    description: "A concise study guide to An Inspector Calls, covering plot, characters, themes and key quotations for GCSE English Literature.",
    category: "cliffnotes",
    subject: "English",
    audience: "GCSE English Literature students",
    tier: "free",
    price: "Free",
    gumroadUrl: "",
    fileUrl: "downloads/an-inspector-calls-cliff-notes.pdf",
    image: "images/cliffnotes-an-inspector-calls.jpg",
    icon: "pocketWatch",
    featured: false,
    isNew: true,
    comingSoon: false,
    features: [
      "Act-by-act plot summary",
      "Key characters and their significance",
      "Core themes and historical context",
      "Selected quotations with brief analysis",
      "Downloads instantly as a PDF"
    ],
    worksOffline: true,
    noAccount: true
  },
  {
    id: "cliffnotes-macbeth",
    title: "Macbeth Cliff Notes",
    tagline: "A clear, exam-focused study guide to Shakespeare's tragedy.",
    description: "A concise study guide to Macbeth, covering plot, characters, themes and key quotations for GCSE English Literature.",
    category: "cliffnotes",
    subject: "English",
    audience: "GCSE English Literature students",
    tier: "free",
    price: "Free",
    gumroadUrl: "",
    fileUrl: "downloads/macbeth-cliff-notes.pdf",
    image: "images/cliffnotes-macbeth.jpg",
    icon: "skull",
    featured: false,
    isNew: true,
    comingSoon: false,
    features: [
      "Act-by-act plot summary",
      "Key characters and their significance",
      "Core themes and context",
      "Selected quotations with brief analysis",
      "Downloads instantly as a PDF"
    ],
    worksOffline: true,
    noAccount: true
  },
  {
    id: "cliffnotes-christmas-carol",
    title: "A Christmas Carol Cliff Notes",
    tagline: "A clear, exam-focused study guide to Dickens' novella.",
    description: "A concise study guide to A Christmas Carol, covering plot, characters, themes and key quotations for GCSE English Literature.",
    category: "cliffnotes",
    subject: "English",
    audience: "GCSE English Literature students",
    tier: "free",
    price: "Free",
    gumroadUrl: "",
    image: "",
    icon: "book",
    featured: false,
    isNew: false,
    comingSoon: true,
    features: ["Stave-by-stave plot summary", "Key characters and themes", "Selected quotations with analysis"],
    worksOffline: true,
    noAccount: true
  },
  {
    id: "cliffnotes-romeo-and-juliet",
    title: "Romeo and Juliet Cliff Notes",
    tagline: "A clear, exam-focused study guide to Shakespeare's tragedy.",
    description: "A concise study guide to Romeo and Juliet, covering plot, characters, themes and key quotations for GCSE English Literature.",
    category: "cliffnotes",
    subject: "English",
    audience: "GCSE English Literature students",
    tier: "free",
    price: "Free",
    gumroadUrl: "",
    image: "",
    icon: "book",
    featured: false,
    isNew: false,
    comingSoon: true,
    features: ["Act-by-act plot summary", "Key characters and themes", "Selected quotations with analysis"],
    worksOffline: true,
    noAccount: true
  }

  // ADD NEW TEACHER VAULT APPS HERE
  // Copy an object above, paste it just before this line, and update the fields.

];

/* ==========================================================================
   Helper functions used across the site. You shouldn't need to edit
   anything below this line.
   ========================================================================== */

function getAppById(id) {
  return APPS.find(function (app) { return app.id === id; });
}

function getFeaturedApps() {
  return APPS.filter(function (app) { return app.featured && !app.comingSoon; });
}

function getAppsByCategory(category) {
  return APPS.filter(function (app) { return app.category === category && !app.comingSoon; });
}

function getComingSoonApps() {
  return APPS.filter(function (app) { return app.comingSoon; });
}

function getRelatedApps(app, limit) {
  limit = limit || 3;
  return APPS
    .filter(function (a) {
      return a.id !== app.id && !a.comingSoon &&
        (a.category === app.category || a.subject === app.subject);
    })
    .slice(0, limit);
}
