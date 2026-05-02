/** SEO / Open Graph (~155–180 chars): growth + systems hook + role */
export const seoDescription =
  "Vaibhav Parmar — Software Engineer in Toronto. I enhance business growth by optimizing team processes, reducing friction in existing systems, and delivering user-centric solutions at TD Bank and beyond.";

export const siteProfile = {
  name: "Vaibhav Parmar",
  title: "Software Engineer",
  /** Hero lead — primary value proposition */
  tagline:
    "I enhance business growth by optimizing team processes and delivering user-centric solutions.",
  email: "vaibhav.parmar3@outlook.com",
  /** E.164-style for tel: links */
  phone: "+16476763539",
  phoneDisplay: "(647) 676-3539",
  github: "https://github.com/Vaibhav-G-Parmar",
  linkedin: "https://www.linkedin.com/in/vaibhav-parmar-a37a86229",
  location: "Toronto, ON",
} as const;

export const heroCopy = {
  badge: "Growth · Less friction · Stronger teams",
  /** Hero second paragraph — friction + collaboration */
  supporting:
    "I'm passionate about problem-solving, collaboration, and continuous improvement—and I thrive on impactful results. I reduce friction in your existing systems and make them work better for the people who rely on them.",
  primaryCta: "View selected work",
  secondaryCta: "Get in touch",
  resumeCta: "Download resume",
} as const;

/** Hero stat cards (labels stay short for layout) */
export const heroHighlights = [
  { k: "Growth", v: "Sharper processes · user-centric delivery" },
  { k: "Systems", v: "Less friction in what you already run" },
  { k: "Proof", v: "TD Bank · Full-stack · Agile delivery" },
] as const;

export const aboutHeading =
  "Better workflows, stronger outcomes—not rip-and-replace for its own sake.";

export const aboutCopy = {
  bio: [
    "I enhance business growth by optimizing how teams work and what lands in users' hands. That means clearer ownership, sustainable pace, and solutions centered on real problems—so delivery compounds instead of stalling.",
    "Technically, I reduce friction inside existing stacks: automation where it counts, APIs that hide legacy complexity, and interfaces teams can adopt without a rewrite fantasy. I'm a Software Engineer with four years shipping secure web and mobile apps—Java and JavaScript ecosystems, React, Node, Spring, Python, cloud, and Kafka-style delivery—in Agile environments at TD Bank and in production products.",
    "Proof points: Seneca Computer Programming & Analysis (Co-op), Advanced Diploma with High Honors (4.0 CGPA); hackathon finalist; certifications across Kafka and full-stack engineering. If you're hiring for someone who improves the system you have while growing the business you want, let's talk.",
  ],
} as const;

export const skillGroups = [
  {
    label: "Languages",
    items: ["Java", "TypeScript", "JavaScript", "Python", "SQL", "Swift"],
  },
  {
    label: "Frameworks",
    items: ["React", "Node.js", "Express", "Spring Boot", "Angular", "Hibernate"],
  },
  {
    label: "Cloud, data & delivery",
    items: ["AWS", "Azure", "Docker", "Kafka", "MongoDB", "REST APIs", "CI/CD"],
  },
] as const;

export const projectsHeading = "Shipping outcomes you can trace end to end.";

export const contactHeading = "Tell me what “better” looks like for your team.";
export const contactLead =
  "If you need less friction in existing systems, clearer workflows, and user-centric delivery—we should connect. Email, LinkedIn, or phone works.";

/** Footer one-liner under social links */
export const brandPromise =
  "Growth through better processes—and software that fits how your teams already work.";
