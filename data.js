// ============================================================
// PORTFOLIO DATA — Edit this file to update ALL website content
// ============================================================

const portfolioData = {

  // --- Personal Info ---
  personal: {
    name: "Naveen Kumar G",
    title: "Aspiring Data Analyst",
    tagline: "Turning raw data into actionable business insights through Python, SQL & Power BI",
    location: "Bengaluru, Karnataka, India",
    email: "naveen0109.exe@gmail.com",
    phone: "+91 7871876756",
    linkedin: "https://linkedin.com/in/naveen-kumar-g",
    github: "https://github.com/nk618",
    resumeLink: "Naveen_Kumar_G_Resume%20new.pdf",
  },

  // --- About Me ---
  about: {
    heading: "About Me",
    paragraphs: [
      "I'm a B.Sc. Computer Science (AI & Data Science) graduate with a deep passion for uncovering stories hidden within data. My expertise spans data cleaning, exploratory data analysis, and building interactive dashboards that drive informed decision-making.",
      "With hands-on experience in Python, SQL, and Power BI, I specialize in transforming complex datasets into clear, compelling visualizations and actionable insights. I thrive in collaborative environments where data-driven strategies shape business outcomes.",
      "Beyond analytics, my background in AI/ML internships and NCC leadership has equipped me with strong problem-solving skills, discipline, and the ability to work effectively under pressure."
    ]
  },

  // --- Skills (grouped by category) ---
  skills: [
    {
      category: "Programming",
      icon: "code", // maps to a Lucide icon name
      items: [
        { name: "SQL", level: 85 },
        { name: "Python", level: 80 },
        { name: "Java", level: 65 }
      ]
    },
    {
      category: "Web Development",
      icon: "globe",
      items: [
        { name: "HTML", level: 80 },
        { name: "CSS", level: 75 }
      ]
    },
    {
      category: "Data Analysis",
      icon: "bar-chart-2",
      items: [
        { name: "NumPy", level: 75 },
        { name: "Pandas", level: 85 }
      ]
    },
    {
      category: "Visualization",
      icon: "pie-chart",
      items: [
        { name: "Power BI", level: 85 },
        { name: "Seaborn", level: 70 },
        { name: "Matplotlib", level: 75 }
      ]
    },
    {
      category: "Tools",
      icon: "wrench",
      items: [
        { name: "MySQL", level: 80 },
        { name: "MS Excel", level: 85 },
        { name: "MS Word", level: 80 },
        { name: "Microsoft 365", level: 80 }
      ]
    }
  ],

  // --- Experience (timeline) ---
  experience: [
    {
      role: "AI & ML Intern",
      company: "Edu Tantr",
      period: "Nov 2025 – Feb 2026",
      bullets: [
        "Performed data cleaning and preprocessing on real-world datasets using Python & Pandas, improving data quality for downstream analysis.",
        "Conducted exploratory data analysis (EDA) and built predictive models to identify trends and forecast key metrics.",
        "Designed and developed interactive Power BI dashboards for stakeholders, enabling data-driven decision-making.",
        "Collaborated with cross-functional teams on AI/ML projects, contributing to model development and evaluation."
      ]
    }
  ],

  // --- Education ---
  education: [
    {
      degree: "B.Sc. Computer Science (AI & Data Science)",
      institution: "AVS College of Arts and Science (Autonomous), Salem",
      university: "Periyar University",
      period: "2023 – 2026",
      details: ""
    },
    {
      degree: "Higher Secondary (Maths & Computer Science)",
      institution: "Bharathi Vidyalaya HR. Sec. School, Salem",
      university: "",
      period: "",
      details: "Score: 72%"
    }
  ],

  // --- Certifications ---
  certifications: [
    { title: "Core Java Programming", year: "2023", issuer: "" },
    { title: "Web Development", year: "2024", issuer: "" },
    { title: "Masterclass in AI", year: "2025", issuer: "" },
    { title: "NCC A/B/C Certificate Holder", year: "", issuer: "National Cadet Corps" }
  ],

  // --- Achievements ---
  achievements: [
    {
      title: "All India Thal Sainik Training",
      description: "Selected for Inter Directorate Service Shooting Camp 2025, Pondicherry — a prestigious national-level selection recognizing discipline, marksmanship, and leadership."
    },
    {
      title: "Active NCC Participant",
      description: "Actively participated in NCC activities including parades, camps, and community service initiatives, earning A, B, and C certificates."
    }
  ],

  // ============================================================
  // ADD YOUR REAL PROJECTS HERE — duplicate this object for each new project
  // Each project object has: title, description, tags, githubLink, demoLink, image
  // ============================================================
  projects: [
    {
      title: "World Happiness Report Dashboard (2015-2019)",
      description: "Interactive data visualization dashboard analyzing global happiness metrics, country rankings, financial/health factors, and trend correlations across 5 years.",
      tags: ["HTML", "JavaScript", "Chart.js", "Data Visualization"],
      githubLink: "https://github.com/nk618/portfolio/blob/main/world_happiness_dashboard.html",
      demoLink: "world_happiness_dashboard.html",
      image: "assets/project1.png"
    },
    {
      title: "Sales Data Dashboard",
      description: "Interactive Power BI dashboard analyzing regional sales trends, revenue KPIs, and performance metrics to support data-driven business strategy.",
      tags: ["Power BI", "SQL", "Excel"],
      githubLink: "#",
      demoLink: "",
      image: ""
    },
    {
      title: "Exploratory Data Analysis",
      description: "Cleaned and analyzed real-world datasets to uncover hidden patterns, correlations, and outliers using Python's data science stack.",
      tags: ["Python", "Pandas", "Matplotlib", "Seaborn"],
      githubLink: "#",
      demoLink: "",
      image: ""
    }
  ],

  // --- Languages ---
  languages: [
    { name: "English" },
    { name: "Tamil" },
    { name: "Telugu" }
  ],

  // --- Navigation Links ---
  navLinks: [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Education", href: "#education" },
    { label: "Contact", href: "#contact" }
  ]
};

// Make data available globally
window.portfolioData = portfolioData;
