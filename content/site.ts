/** SEO / Open Graph blurb (~155-180 chars ideal) */
export const seoDescription =
  "Vaibhav Parmar - AI Software Engineer in Toronto. Mainframe, full-stack distributed systems, and AI-assisted delivery. 4+ years shipping enterprise web, mobile, and integration workloads.";

export const siteProfile = {
  name: "Vaibhav Parmar",
  title: "AI Software Engineer",
  /** Hero lead */
  tagline:
    "Mainframe to modern. APIs, distributed systems, and AI-assisted delivery.",
  email: "vaibhav.parmar3@outlook.com",
  /** E.164-style for tel: links */
  phone: "+16476763539",
  phoneDisplay: "(647) 676-3539",
  github: "https://github.com/Vaibhav-G-Parmar",
  linkedin: "https://www.linkedin.com/in/vaibhav-parmar-a37a86229",
  location: "Toronto, ON",
} as const;

export const heroCopy = {
  badge: "Mainframe · Distributed Systems · AI-Assisted Dev",
  /** Hero second paragraph */
  supporting:
    "Systems that hold up under real traffic. Mainframe backends connected to modern consumers through APIs, event-driven flows, and automation that keeps releases moving.",
  primaryCta: "Projects",
  secondaryCta: "Get in touch",
  resumeCta: "Download resume",
} as const;

/** Hero stat cards (labels stay short for layout) */
export const heroHighlights = [
  { k: "Mainframe", v: "z/OS - DB2 - legacy to modern" },
  { k: "Full-Stack Distributed", v: "APIs - Kafka - cloud - web & mobile" },
  { k: "AI", v: "Copilot - agents - prompt workflows" },
] as const;

export const aboutHeading =
  "Mainframe depth, distributed delivery, fewer surprises in production.";

export const aboutCopy = {
  bio: [
    "AI Software Engineer in Toronto. 4+ years. I connect z/OS and DB2 backends to modern consumers through REST APIs, messaging, and integrations that hold up at scale.",
    "AI-assisted engineering - agentic workflows with GitHub Copilot (chat, agents, skills, custom instructions) and Cursor to accelerate code reviews, generation, and delivery.",
    "Java, TypeScript, React, Node, Spring Boot, Python, Kafka, AWS, Azure, Docker, Kubernetes, CI/CD. Mainframe data paths (DB2, batch, service interfaces). Mobile (iOS, Android). Observability (Splunk, Dynatrace, Datadog). Testing (Jest, Mocha, Supertest). Seneca CPA Co-op - Advanced Diploma, High Honors (4.0 CGPA). Hackathon finalist. Kafka and full-stack certifications.",
  ],
} as const;

export const skillGroups = [
  {
    label: "Languages",
    items: ["Java", "TypeScript", "JavaScript", "Python", "SQL", "C++", "Swift", "Bash"],
  },
  {
    label: "Frameworks & runtime",
    items: ["React", "Next.js", "Node.js", "Express", "Spring Boot", "Angular", "Hibernate"],
  },
  {
    label: "Cloud & DevOps",
    items: ["AWS", "Azure", "Docker", "Kubernetes", "CI/CD", "GitHub Actions", "Jenkins"],
  },
  {
    label: "Mainframe & data",
    items: ["z/OS", "DB2", "Batch", "Kafka", "MongoDB", "Redis", "DynamoDB"],
  },
  {
    label: "AI & automation",
    items: ["GitHub Copilot", "Copilot Agents", "Cursor IDE", "Prompt Engineering"],
  },
  {
    label: "Observability & QA",
    items: ["Splunk", "Dynatrace", "Datadog", "Jest", "Mocha", "Supertest"],
  },
] as const;

export const projectsHeading = "Shipping outcomes you can trace end to end.";

export const contactHeading = "Tell me what \"better\" looks like for your team.";
export const contactLead =
  "If that sounds like your situation, say hi. Email, LinkedIn, or phone all work.";

/** Footer one-liner under social links */
export const brandPromise =
  "Mainframe to modern - distributed delivery - software that fits how your teams already work.";
