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
   category      "teacher"  |  "revision"  |  "quicknotes"
   keyStage      "KS2" | "KS3" | "KS4" | "KS5" | "General"  — only used on
                 "revision" apps. This is what splits the Student Apps page
                 into separate sections. "General" is for anything not tied
                 to one specific Key Stage.
   subject       one of the values in SUBJECT_LIST (see script.js) — e.g.
                 "Maths", "English", "Biology"... or "General" for teacher
                 tools that aren't subject-specific, or "" for none.
   audience      who it's for, e.g. "Secondary teachers", "GCSE students"
   tier          "lite"  |  "pro"  |  "free"
   price         display price, e.g. "Free" or "£6.99"
   gumroadUrl    the Gumroad product link (or a GUMROAD_..._URL placeholder).
                 Leave blank ("") for apps that use "fileUrl" instead.
   fileUrl       path to a file hosted directly on this site, e.g.
                 "downloads/macbeth-quick-notes.pdf" or
                 "revision-apps/gcse-maths.html". When this is set, the
                 card/detail page shows a direct button instead of a
                 Gumroad button — no gumroadUrl needed.
   fileType      "pdf"  |  "app"  — only used alongside fileUrl.
                 "pdf" shows a "Download PDF" button that saves the file
                 (used for Quick Notes study guides).
                 "app" shows an "Open App" button that opens the file in
                 a new browser tab instead of downloading it (used for the
                 GCSE revision apps, which are self-contained HTML apps).
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
    gumroadUrl: "https://idamaemann.gumroad.com/l/ublscf",
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
    gumroadUrl: "https://idamaemann.gumroad.com/l/wlndh",
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
    gumroadUrl: "https://idamaemann.gumroad.com/l/eghxdm?wanted=true",
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
    gumroadUrl: "https://idamaemann.gumroad.com/l/itgzlc",
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
    gumroadUrl: "https://idamaemann.gumroad.com/l/cqabkt",
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
    gumroadUrl: "https://idamaemann.gumroad.com/l/ftfzhu",
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
    tagline: "Build a clear marking rubric from an assignment brief in seconds.",
    description: "Enter an assignment brief, subject and year group and get a ready-to-use marking rubric, drawn from a bank of criteria and descriptors matched to the subject.",
    category: "teacher",
    subject: "General",
    audience: "Secondary teachers",
    tier: "lite",
    price: "Free",
    gumroadUrl: "https://idamaemann.gumroad.com/l/pfqlh",
    image: "images/rubric-generator.jpg",
    featured: false,
    isNew: true,
    comingSoon: false,
    proVersionId: "rubric-generator-pro",
    features: [
      "Generates 3-6 criteria with grading-band descriptors from a subject-aware bank",
      "Four preset grade-level scales (Excellent/Good/Satisfactory/Needs Improvement, A-D, Distinction-Not Yet, 4-1)",
      "Copy as text or print, ready to attach to an assignment",
      "Works directly in your browser"
    ],
    worksOffline: false,
    noAccount: true
  },
  {
    id: "rubric-generator-pro",
    title: "Rubric Generator Pro",
    tagline: "Fully editable rubrics with weightings and saved templates.",
    description: "Everything in Rubric Generator Lite, plus up to 8 editable criteria, custom grade-level labels, criterion weightings, CSV export and saved rubrics you can reload for next time.",
    category: "teacher",
    subject: "General",
    audience: "Secondary teachers who set rubrics regularly",
    tier: "pro",
    price: "£9.99",
    gumroadUrl: "https://idamaemann.gumroad.com/l/abucli",
    image: "images/rubric-generator-pro.jpg",
    featured: false,
    isNew: true,
    comingSoon: false,
    liteVersionId: "rubric-generator",
    features: [
      "Everything included in Rubric Generator Lite",
      "Up to 8 criteria, each fully editable — name, descriptors and wording",
      "Add your own custom criteria alongside the generated ones",
      "Custom grade-level labels and per-criterion weightings",
      "Export as CSV, or save and reload rubrics on this device"
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
    keyStage: "KS4",
    subject: "Maths",
    audience: "GCSE students",
    tier: "free",
    price: "Free",
    gumroadUrl: "",
    fileUrl: "revision-apps/gcse-maths.html",
    fileType: "app",
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
    keyStage: "KS4",
    subject: "Science",
    audience: "GCSE students",
    tier: "free",
    price: "Free",
    gumroadUrl: "",
    fileUrl: "revision-apps/gcse-combined-science.html",
    fileType: "app",
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
    keyStage: "KS4",
    subject: "History",
    audience: "GCSE students",
    tier: "free",
    price: "Free",
    gumroadUrl: "",
    fileUrl: "revision-apps/gcse-history.html",
    fileType: "app",
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
    keyStage: "KS4",
    subject: "Business",
    audience: "GCSE students",
    tier: "free",
    price: "Free",
    gumroadUrl: "",
    fileUrl: "revision-apps/gcse-business.html",
    fileType: "app",
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
    keyStage: "KS4",
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
    keyStage: "KS4",
    subject: "German",
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
    keyStage: "KS4",
    subject: "RE",
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
    keyStage: "KS2",
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
    keyStage: "KS2",
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

  /* ------------------------------ KS3 STUDENT APPS -------------------------
     Self-contained HTML apps that open in a new tab (fileType: "app"),
     same pattern as the GCSE revision apps above. */

  {
    id: "ks3-maths-diagnostics",
    title: "KS3 Maths Skills Diagnostic Test",
    tagline: "Quickly spot which KS3 Maths topics need more work.",
    description: "A diagnostic test covering core KS3 Maths skills, designed to quickly identify which topics a student needs to focus on.",
    category: "revision",
    keyStage: "KS3",
    subject: "Maths",
    audience: "KS3 students",
    tier: "free",
    price: "Free",
    gumroadUrl: "",
    fileUrl: "revision-apps/ks3-maths-diagnostics.html",
    fileType: "app",
    image: "images/ks3-maths-diagnostics.jpg",
    icon: "target",
    featured: false,
    isNew: true,
    comingSoon: false,
    features: ["Covers core KS3 Maths topics", "Instant feedback", "Highlights weak areas to focus on", "Opens instantly in a new browser tab"],
    worksOffline: true,
    noAccount: true
  },
  {
    id: "ks3-maths-end-of-year-assessment",
    title: "KS3 Maths End-of-Year Assessment & Revision Pack",
    tagline: "A structured revision pack ahead of KS3 end-of-year maths exams.",
    description: "An end-of-year assessment and revision pack covering the key KS3 Maths topics students need before their exams.",
    category: "revision",
    keyStage: "KS3",
    subject: "Maths",
    audience: "KS3 students",
    tier: "free",
    price: "Free",
    gumroadUrl: "",
    fileUrl: "revision-apps/ks3-maths-end-of-year-assessment.html",
    fileType: "app",
    image: "images/ks3-maths-end-of-year-assessment.jpg",
    icon: "chart",
    featured: false,
    isNew: true,
    comingSoon: false,
    features: ["Structured end-of-year revision pack", "Covers key KS3 Maths topics", "Instant feedback", "Opens instantly in a new browser tab"],
    worksOffline: true,
    noAccount: true
  },
  {
    id: "ks3-maths-formula-methods",
    title: "KS3 Maths Formula & Methods Vault",
    tagline: "A quick-reference vault of KS3 Maths formulas and methods.",
    description: "A reference and practice tool covering the key formulas and methods KS3 Maths students need to know.",
    category: "revision",
    keyStage: "KS3",
    subject: "Maths",
    audience: "KS3 students",
    tier: "free",
    price: "Free",
    gumroadUrl: "",
    fileUrl: "revision-apps/ks3-maths-formula-methods.html",
    fileType: "app",
    image: "images/ks3-maths-formula-methods.jpg",
    icon: "check",
    featured: false,
    isNew: true,
    comingSoon: false,
    features: ["Key KS3 Maths formulas and methods", "Quick reference plus practice", "Opens instantly in a new browser tab"],
    worksOffline: true,
    noAccount: true
  },
  {
    id: "ks3-maths-topic-practice",
    title: "KS3 Maths Topic Practice",
    tagline: "Topic-by-topic practice questions for KS3 Maths.",
    description: "Practice questions organised by topic, so KS3 Maths students can focus revision exactly where it's needed.",
    category: "revision",
    keyStage: "KS3",
    subject: "Maths",
    audience: "KS3 students",
    tier: "free",
    price: "Free",
    gumroadUrl: "",
    fileUrl: "revision-apps/ks3-maths-topic-practice.html",
    fileType: "app",
    image: "images/ks3-maths-topic-practice.jpg",
    icon: "repeat",
    featured: false,
    isNew: true,
    comingSoon: false,
    features: ["Topic-by-topic practice questions", "Instant feedback", "Opens instantly in a new browser tab"],
    worksOffline: true,
    noAccount: true
  },
  {
    id: "ks3-maths-problem-solving",
    title: "KS3 Maths Problem-Solving Challenge Bank",
    tagline: "Multi-step problem-solving challenges for KS3 Maths.",
    description: "A bank of multi-step problem-solving challenges to stretch KS3 Maths students beyond routine practice questions.",
    category: "revision",
    keyStage: "KS3",
    subject: "Maths",
    audience: "KS3 students",
    tier: "free",
    price: "Free",
    gumroadUrl: "",
    fileUrl: "revision-apps/ks3-maths-problem-solving.html",
    fileType: "app",
    image: "images/ks3-maths-problem-solving.jpg",
    icon: "bolt",
    featured: false,
    isNew: true,
    comingSoon: false,
    features: ["Multi-step problem-solving challenges", "Stretches beyond routine practice", "Opens instantly in a new browser tab"],
    worksOffline: true,
    noAccount: true
  },
  {
    id: "ks3-poetry-analysis-toolkit",
    title: "KS3 Poetry Analysis Toolkit",
    tagline: "A structured toolkit for analysing poetry at KS3.",
    description: "A toolkit that walks KS3 English students through analysing poetry — form, language, sound and tone — step by step.",
    category: "revision",
    keyStage: "KS3",
    subject: "English",
    audience: "KS3 students",
    tier: "free",
    price: "Free",
    gumroadUrl: "",
    fileUrl: "revision-apps/ks3-poetry-analysis-toolkit.html",
    fileType: "app",
    image: "images/ks3-poetry-analysis-toolkit.jpg",
    icon: "book",
    featured: false,
    isNew: true,
    comingSoon: false,
    features: ["Structured poetry analysis toolkit", "Covers form, language, sound and tone", "Opens instantly in a new browser tab"],
    worksOffline: true,
    noAccount: true
  },
  {
    id: "ks3-shakespeare-study-pack",
    title: "KS3 Shakespeare Study Pack",
    tagline: "A study pack introducing Shakespeare at KS3.",
    description: "A study pack covering the essentials of a KS3 Shakespeare text — plot, characters, themes and key language.",
    category: "revision",
    keyStage: "KS3",
    subject: "English",
    audience: "KS3 students",
    tier: "free",
    price: "Free",
    gumroadUrl: "",
    fileUrl: "revision-apps/ks3-shakespeare-study-pack.html",
    fileType: "app",
    image: "images/ks3-shakespeare-study-pack.jpg",
    icon: "book",
    featured: false,
    isNew: true,
    comingSoon: false,
    features: ["Plot, characters and themes", "Key language explained simply", "Opens instantly in a new browser tab"],
    worksOffline: true,
    noAccount: true
  },
  {
    id: "ks3-spag-vocabulary-trainer",
    title: "KS3 SPaG & Vocabulary Trainer",
    tagline: "Spelling, punctuation, grammar and vocabulary practice.",
    description: "Practice covering spelling, punctuation, grammar and vocabulary, built for KS3 English students.",
    category: "revision",
    keyStage: "KS3",
    subject: "English",
    audience: "KS3 students",
    tier: "free",
    price: "Free",
    gumroadUrl: "",
    fileUrl: "revision-apps/ks3-spag-vocabulary-trainer.html",
    fileType: "app",
    image: "images/ks3-spag-vocabulary-trainer.jpg",
    icon: "book",
    featured: false,
    isNew: true,
    comingSoon: false,
    features: ["Spelling, punctuation and grammar practice", "Vocabulary building", "Opens instantly in a new browser tab"],
    worksOffline: true,
    noAccount: true
  },
  {
    id: "ks3-story-starter-generator",
    title: "KS3 Story Starter Generator",
    tagline: "Generates creative writing prompts for KS3 English.",
    description: "A story starter generator that gives KS3 English students a prompt to kick off a piece of creative writing.",
    category: "revision",
    keyStage: "KS3",
    subject: "English",
    audience: "KS3 students",
    tier: "free",
    price: "Free",
    gumroadUrl: "",
    fileUrl: "revision-apps/ks3-story-starter-generator.html",
    fileType: "app",
    image: "images/ks3-story-starter-generator.jpg",
    icon: "book",
    featured: false,
    isNew: true,
    comingSoon: false,
    features: ["Generates creative writing prompts", "Helps beat a blank page", "Opens instantly in a new browser tab"],
    worksOffline: true,
    noAccount: true
  },
  {
    id: "ks3-reading-comprehension-practice",
    title: "KS3 Reading Comprehension Practice",
    tagline: "Reading comprehension practice for KS3 English.",
    description: "Reading comprehension passages and questions, built to give KS3 English students regular, focused practice.",
    category: "revision",
    keyStage: "KS3",
    subject: "English",
    audience: "KS3 students",
    tier: "free",
    price: "Free",
    gumroadUrl: "",
    fileUrl: "revision-apps/ks3-reading-comprehension-practice.html",
    fileType: "app",
    image: "images/ks3-reading-comprehension-practice.jpg",
    icon: "book",
    featured: false,
    isNew: true,
    comingSoon: false,
    features: ["Reading passages with comprehension questions", "Instant feedback", "Opens instantly in a new browser tab"],
    worksOffline: true,
    noAccount: true
  },
  {
    id: "ks3-biology-cells-organisation",
    title: "KS3 Biology: Cells & Organisation",
    tagline: "Interactive revision on cells and levels of organisation for KS3 Biology.",
    description: "Covers animal and plant cell structure, cell function, and how cells build up into tissues, organs and organ systems, for KS3 Biology.",
    category: "revision",
    keyStage: "KS3",
    subject: "Biology",
    audience: "KS3 students",
    tier: "free",
    price: "Free",
    gumroadUrl: "",
    fileUrl: "revision-apps/ks3-biology-cells-organisation.html",
    fileType: "app",
    image: "images/ks3-biology-cells-organisation.jpg",
    icon: "target",
    featured: false,
    isNew: true,
    comingSoon: false,
    features: ["Covers cell structure and function", "Levels of organisation from cell to organism", "Instant feedback", "Opens instantly in a new browser tab"],
    worksOffline: true,
    noAccount: true
  },
  {
    id: "ks3-biology-human-body-systems",
    title: "KS3 Biology: Human Body Systems",
    tagline: "Interactive revision on the human body's major organ systems.",
    description: "Covers the major organ systems in the human body — including the skeleton, digestive, respiratory and circulatory systems — for KS3 Biology.",
    category: "revision",
    keyStage: "KS3",
    subject: "Biology",
    audience: "KS3 students",
    tier: "free",
    price: "Free",
    gumroadUrl: "",
    fileUrl: "revision-apps/ks3-biology-human-body-systems.html",
    fileType: "app",
    image: "images/ks3-biology-human-body-systems.jpg",
    icon: "check",
    featured: false,
    isNew: true,
    comingSoon: false,
    features: ["Covers major human organ systems", "Clear diagrams and explanations", "Instant feedback", "Opens instantly in a new browser tab"],
    worksOffline: true,
    noAccount: true
  },
  {
    id: "ks3-biology-knowledge-organiser-quiz",
    title: "KS3 Biology Knowledge Organiser & Quiz",
    tagline: "A knowledge organiser and quiz covering core KS3 Biology topics.",
    description: "A knowledge organiser summarising key KS3 Biology facts and definitions, paired with a quiz to test recall.",
    category: "revision",
    keyStage: "KS3",
    subject: "Biology",
    audience: "KS3 students",
    tier: "free",
    price: "Free",
    gumroadUrl: "",
    fileUrl: "revision-apps/ks3-biology-knowledge-organiser-quiz.html",
    fileType: "app",
    image: "images/ks3-biology-knowledge-organiser-quiz.jpg",
    icon: "book",
    featured: false,
    isNew: true,
    comingSoon: false,
    features: ["Knowledge organiser of key facts and terms", "Quiz to test recall", "Instant feedback", "Opens instantly in a new browser tab"],
    worksOffline: true,
    noAccount: true
  },
  {
    id: "ks3-biology-reproduction-inheritance",
    title: "KS3 Biology: Reproduction & Inheritance",
    tagline: "Practice questions on reproduction and inheritance for KS3 Biology.",
    description: "Practice questions covering human reproduction, embryonic development and the basics of inheritance, for KS3 Biology.",
    category: "revision",
    keyStage: "KS3",
    subject: "Biology",
    audience: "KS3 students",
    tier: "free",
    price: "Free",
    gumroadUrl: "",
    fileUrl: "revision-apps/ks3-biology-reproduction-inheritance.html",
    fileType: "app",
    image: "images/ks3-biology-reproduction-inheritance.jpg",
    icon: "bolt",
    featured: false,
    isNew: true,
    comingSoon: false,
    features: ["Covers reproduction and embryonic development", "Introduces the basics of inheritance", "Instant feedback", "Opens instantly in a new browser tab"],
    worksOffline: true,
    noAccount: true
  },
  {
    id: "ks3-biology-ecosystems-interdependence",
    title: "KS3 Biology: Ecosystems & Interdependence",
    tagline: "Practice questions on ecosystems and interdependence for KS3 Biology.",
    description: "Practice questions covering food chains, producers and consumers, decomposers and how organisms depend on each other within an ecosystem.",
    category: "revision",
    keyStage: "KS3",
    subject: "Biology",
    audience: "KS3 students",
    tier: "free",
    price: "Free",
    gumroadUrl: "",
    fileUrl: "revision-apps/ks3-biology-ecosystems-interdependence.html",
    fileType: "app",
    image: "images/ks3-biology-ecosystems-interdependence.jpg",
    icon: "repeat",
    featured: false,
    isNew: true,
    comingSoon: false,
    features: ["Covers food chains and ecosystem roles", "Explains interdependence between organisms", "Instant feedback", "Opens instantly in a new browser tab"],
    worksOffline: true,
    noAccount: true
  },
  {
    id: "ks3-chemistry-acids-alkalis-ph",
    title: "KS3 Chemistry: Acids, Alkalis & pH",
    tagline: "Interactive revision on acids, alkalis and the pH scale.",
    description: "Covers acids, alkalis, neutralisation and how the pH scale is used to measure them, for KS3 Chemistry.",
    category: "revision",
    keyStage: "KS3",
    subject: "Chemistry",
    audience: "KS3 students",
    tier: "free",
    price: "Free",
    gumroadUrl: "",
    fileUrl: "revision-apps/ks3-chemistry-acids-alkalis-ph.html",
    fileType: "app",
    image: "images/ks3-chemistry-acids-alkalis-ph.jpg",
    icon: "target",
    featured: false,
    isNew: true,
    comingSoon: false,
    features: ["Covers acids, alkalis and neutralisation", "Explains the pH scale", "Instant feedback", "Opens instantly in a new browser tab"],
    worksOffline: true,
    noAccount: true
  },
  {
    id: "ks3-chemistry-chemical-reactions",
    title: "KS3 Chemistry: Chemical Reactions",
    tagline: "Interactive revision on chemical reactions for KS3 Chemistry.",
    description: "Covers what happens in a chemical reaction, signs a reaction has occurred, and the difference between reactants and products, for KS3 Chemistry.",
    category: "revision",
    keyStage: "KS3",
    subject: "Chemistry",
    audience: "KS3 students",
    tier: "free",
    price: "Free",
    gumroadUrl: "",
    fileUrl: "revision-apps/ks3-chemistry-chemical-reactions.html",
    fileType: "app",
    image: "images/ks3-chemistry-chemical-reactions.jpg",
    icon: "bolt",
    featured: false,
    isNew: true,
    comingSoon: false,
    features: ["Covers signs of a chemical reaction", "Reactants and products explained", "Instant feedback", "Opens instantly in a new browser tab"],
    worksOffline: true,
    noAccount: true
  },
  {
    id: "ks3-chemistry-earth-atmosphere-resources",
    title: "KS3 Chemistry: Earth, Atmosphere & Resources",
    tagline: "Interactive revision on the Earth's atmosphere and resources.",
    description: "Covers the composition of the atmosphere, the carbon cycle, and how Earth's natural resources are used, for KS3 Chemistry.",
    category: "revision",
    keyStage: "KS3",
    subject: "Chemistry",
    audience: "KS3 students",
    tier: "free",
    price: "Free",
    gumroadUrl: "",
    fileUrl: "revision-apps/ks3-chemistry-earth-atmosphere-resources.html",
    fileType: "app",
    image: "images/ks3-chemistry-earth-atmosphere-resources.jpg",
    icon: "check",
    featured: false,
    isNew: true,
    comingSoon: false,
    features: ["Covers atmosphere composition and the carbon cycle", "Introduces Earth's natural resources", "Instant feedback", "Opens instantly in a new browser tab"],
    worksOffline: true,
    noAccount: true
  },
  {
    id: "ks3-chemistry-particles-elements-compounds-mixtures",
    title: "KS3 Chemistry: Particles, Elements, Compounds & Mixtures",
    tagline: "Interactive revision on particles, elements, compounds and mixtures.",
    description: "Covers atoms, elements, compounds and mixtures, and how particle diagrams represent each one, for KS3 Chemistry.",
    category: "revision",
    keyStage: "KS3",
    subject: "Chemistry",
    audience: "KS3 students",
    tier: "free",
    price: "Free",
    gumroadUrl: "",
    fileUrl: "revision-apps/ks3-chemistry-particles-elements-compounds-mixtures.html",
    fileType: "app",
    image: "images/ks3-chemistry-particles-elements-compounds-mixtures.jpg",
    icon: "book",
    featured: false,
    isNew: true,
    comingSoon: false,
    features: ["Covers atoms, elements, compounds and mixtures", "Particle diagrams explained", "Instant feedback", "Opens instantly in a new browser tab"],
    worksOffline: true,
    noAccount: true
  },
  {
    id: "ks3-chemistry-periodic-table-explorer",
    title: "KS3 Chemistry: Periodic Table Explorer",
    tagline: "An interactive explorer for the periodic table at KS3.",
    description: "Lets students explore the periodic table — groups, periods and key element properties — building familiarity for KS3 Chemistry.",
    category: "revision",
    keyStage: "KS3",
    subject: "Chemistry",
    audience: "KS3 students",
    tier: "free",
    price: "Free",
    gumroadUrl: "",
    fileUrl: "revision-apps/ks3-chemistry-periodic-table-explorer.html",
    fileType: "app",
    image: "images/ks3-chemistry-periodic-table-explorer.jpg",
    icon: "repeat",
    featured: false,
    isNew: true,
    comingSoon: false,
    features: ["Interactive periodic table explorer", "Covers groups, periods and element properties", "Opens instantly in a new browser tab"],
    worksOffline: true,
    noAccount: true
  },
  {
    id: "gcse-revision-planner",
    title: "GCSE Revision Planner",
    tagline: "Build a weekly GCSE revision plan and track your progress.",
    description: "A GCSE revision planner for Years 10-11 — build a weekly plan across subjects, track daily streaks, schedule past papers, and see a weakness dashboard showing where to focus next.",
    category: "revision",
    keyStage: "KS4",
    subject: "Other",
    audience: "GCSE students",
    tier: "free",
    price: "Free",
    gumroadUrl: "",
    fileUrl: "revision-apps/gcse-revision-planner.html",
    fileType: "app",
    image: "images/gcse-revision-planner.jpg",
    icon: "chart",
    featured: false,
    isNew: true,
    comingSoon: false,
    features: ["Build a weekly revision plan across all your subjects", "Track daily streaks and activity", "Schedule past papers", "Weakness dashboard highlights where to focus", "Examiner tips on using revision time well", "Opens instantly in a new browser tab"],
    worksOffline: true,
    noAccount: true
  },

  /* ------------------------------ QUICK NOTES ------------------------------
     Study guides. Most are self-contained HTML apps that open in a new
     tab (fileType: "app"); some may instead be a downloadable PDF
     (fileType: "pdf") — see "fileUrl"/"fileType" above. Either way they
     come straight from this website rather than through Gumroad, so
     gumroadUrl is left blank on these entries. */

  {
    id: "quicknotes-jekyll-and-hyde",
    title: "Jekyll & Hyde Quick Notes",
    tagline: "A clear, exam-focused study guide to Stevenson's novella.",
    description: "A concise study guide to Strange Case of Dr Jekyll and Mr Hyde, covering plot, characters, themes and key quotations for GCSE English Literature.",
    category: "quicknotes",
    subject: "English",
    audience: "GCSE English Literature students",
    tier: "free",
    price: "Free",
    gumroadUrl: "",
    fileUrl: "quick-notes/jekyll-and-hyde.html",
    fileType: "app",
    image: "images/quicknotes-jekyll-and-hyde.jpg",
    icon: "potion",
    featured: false,
    isNew: true,
    comingSoon: false,
    features: [
      "Chapter-by-chapter plot summary",
      "Key characters and their significance",
      "Core themes and context",
      "Selected quotations with brief analysis",
      "Opens instantly in a new browser tab"
    ],
    worksOffline: true,
    noAccount: true
  },
  {
    id: "quicknotes-an-inspector-calls",
    title: "An Inspector Calls Quick Notes",
    tagline: "A clear, exam-focused study guide to Priestley's play.",
    description: "A concise study guide to An Inspector Calls, covering plot, characters, themes and key quotations for GCSE English Literature.",
    category: "quicknotes",
    subject: "English",
    audience: "GCSE English Literature students",
    tier: "free",
    price: "Free",
    gumroadUrl: "",
    fileUrl: "quick-notes/an-inspector-calls.html",
    fileType: "app",
    image: "images/quicknotes-an-inspector-calls.jpg",
    icon: "pocketWatch",
    featured: false,
    isNew: true,
    comingSoon: false,
    features: [
      "Act-by-act plot summary",
      "Key characters and their significance",
      "Core themes and historical context",
      "Selected quotations with brief analysis",
      "Opens instantly in a new browser tab"
    ],
    worksOffline: true,
    noAccount: true
  },
  {
    id: "quicknotes-macbeth",
    title: "Macbeth Quick Notes",
    tagline: "A clear, exam-focused study guide to Shakespeare's tragedy.",
    description: "A concise study guide to Macbeth, covering plot, characters, themes and key quotations for GCSE English Literature.",
    category: "quicknotes",
    subject: "English",
    audience: "GCSE English Literature students",
    tier: "free",
    price: "Free",
    gumroadUrl: "",
    fileUrl: "quick-notes/macbeth.html",
    fileType: "app",
    image: "images/quicknotes-macbeth.jpg",
    icon: "skull",
    featured: false,
    isNew: true,
    comingSoon: false,
    features: [
      "Act-by-act plot summary",
      "Key characters and their significance",
      "Core themes and context",
      "Selected quotations with brief analysis",
      "Opens instantly in a new browser tab"
    ],
    worksOffline: true,
    noAccount: true
  },
  {
    id: "quicknotes-christmas-carol",
    title: "A Christmas Carol Quick Notes",
    tagline: "A clear, exam-focused study guide to Dickens' novella.",
    description: "A concise study guide to A Christmas Carol, covering plot, characters, themes and key quotations for GCSE English Literature.",
    category: "quicknotes",
    subject: "English",
    audience: "GCSE English Literature students",
    tier: "free",
    price: "Free",
    gumroadUrl: "",
    fileUrl: "quick-notes/christmas-carol.html",
    fileType: "app",
    image: "images/quicknotes-christmas-carol.jpg",
    icon: "book",
    featured: false,
    isNew: true,
    comingSoon: false,
    features: ["Stave-by-stave plot summary", "Key characters and themes", "Selected quotations with analysis", "Opens instantly in a new browser tab"],
    worksOffline: true,
    noAccount: true
  },
  {
    id: "quicknotes-romeo-and-juliet",
    title: "Romeo and Juliet Quick Notes",
    tagline: "A clear, exam-focused study guide to Shakespeare's tragedy.",
    description: "A concise study guide to Romeo and Juliet, covering plot, characters, themes and key quotations for GCSE English Literature.",
    category: "quicknotes",
    subject: "English",
    audience: "GCSE English Literature students",
    tier: "free",
    price: "Free",
    gumroadUrl: "",
    fileUrl: "quick-notes/romeo-and-juliet.html",
    fileType: "app",
    image: "images/quicknotes-romeo-and-juliet.jpg",
    icon: "book",
    featured: false,
    isNew: true,
    comingSoon: false,
    features: ["Act-by-act plot summary", "Key characters and themes", "Selected quotations with analysis", "Opens instantly in a new browser tab"],
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
