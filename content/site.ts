/** SEO / Open Graph blurb (~155-180 chars ideal) */
export const seoDescription =
  "Vaibhav Parmar - AI Software Engineer in Toronto. Mainframe, full-stack distributed systems, and AI agentic workflows. 4+ years shipping enterprise web, mobile, and integration workloads.";

export const siteProfile = {
  name: "Vaibhav Parmar",
  title: "AI Software Engineer",
  /** Hero lead */
  tagline:
    "Mainframe to modern. APIs, distributed systems, and AI agentic workflows.",
  email: "vaibhav.parmar3@outlook.com",
  /** E.164-style for tel: links */
  phone: "+16476763539",
  phoneDisplay: "(647) 676-3539",
  github: "https://github.com/Vaibhav-G-Parmar",
  linkedin: "https://www.linkedin.com/in/vaibhav-parmar-a37a86229",
  location: "Toronto, ON",
} as const;

export const heroCopy = {
  badge: "Mainframe · Distributed Systems · AI Agentic Workflows",
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
  { k: "AI Agentic Workflows", v: "Copilot - Cursor IDE - prompt eng." },
] as const;

export const aboutHeading =
  "Mainframe depth, distributed delivery, fewer surprises in production.";

export const aboutCopy = {
  bio: [
    "AI Software Engineer in Toronto. 4+ years. I connect z/OS and DB2 backends to modern consumers through REST APIs, messaging, and integrations that hold up at scale.",
    "AI agentic workflows - GitHub Copilot (chat, agents, skills, custom instructions) and Cursor to accelerate code reviews, generation, and delivery.",
    "Java, TypeScript, React, Node, Spring Boot, Python, Kafka, AWS, Azure, Docker, Kubernetes, CI/CD. Mainframe data paths (DB2, batch, service interfaces). Mobile (iOS, Android). Observability (Splunk, Dynatrace, Datadog). Testing (Jest, Mocha, Supertest). Seneca CPA Co-op - Advanced Diploma, High Honors (4.0 CGPA). Hackathon finalist. Kafka and full-stack certifications.",
  ],
} as const;

export const skillGroups = [
  {
    label: "Languages",
    items: ["Java", "TypeScript", "JavaScript", "Python", "SQL", "PL/SQL", "C++", "SwiftUI", "Bash", "YAML", "HTML", "CSS"],
  },
  {
    label: "Frameworks",
    items: ["Spring", "Spring Boot", "Hibernate", "WebFlux", "React", "Next.js", "Node.js", "Angular", "Redux", "Express"],
  },
  {
    label: "Cloud & DevOps",
    items: ["AWS", "Azure", "GCP", "Docker", "Kubernetes", "CI/CD", "GitHub Actions", "Azure DevOps", "Maven", "Git", "PowerShell"],
  },
  {
    label: "Mainframe",
    items: ["COBOL", "JCL", "SAS", "TSO", "ISPF", "CA-7", "AWF", "Endevor", "z/OS Connect", "IDz", "DB2", "IMS DB"],
  },
  {
    label: "Data & messaging",
    items: ["MongoDB", "Redis", "DynamoDB", "Kafka", "Kafka Streams", "Kafka Connect", "KSQL", "Confluent Cloud"],
  },
  {
    label: "APIs & integration",
    items: ["REST", "JSON", "XML", "JWT", "OAuth", "SAML", "SASL", "Zowe CLI"],
  },
  {
    label: "Mobile",
    items: ["Android", "iOS", "SwiftUI", "WatchOS"],
  },
  {
    label: "AI agentic workflows",
    items: ["GitHub Copilot", "Copilot Agents", "Cursor IDE", "Prompt Engineering"],
  },
  {
    label: "Testing",
    items: ["Jest", "Mocha", "Supertest", "Unit", "Integration", "Regression", "Performance"],
  },
  {
    label: "Observability & tools",
    items: ["Splunk", "Dynatrace", "Datadog", "Jira", "ServiceNow", "Confluence", "Figma", "Postman"],
  },
] as const;

export const projectsHeading = "Shipping outcomes you can trace end to end.";

export const contactHeading = "Tell me what \"better\" looks like for your team.";
export const contactLead =
  "If that sounds like your situation, say hi. Email, LinkedIn, or phone all work.";

/** Footer one-liner under social links */
export const brandPromise =
  "Mainframe to modern - distributed delivery - software that fits how your teams already work.";
