/** SEO / Open Graph blurb (~155-180 chars ideal) */
export const seoDescription =
  "Vaibhav Parmar, Software Engineer in Toronto. I focus on growth by improving how teams work and reducing friction in existing systems, with practical delivery at TD Bank and beyond.";

export const siteProfile = {
  name: "Vaibhav Parmar",
  title: "Software Engineer",
  /** Hero lead */
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
  /** Hero second paragraph */
  supporting:
    "I like collaborative problem solving and steady improvement when it shows up in real results. A lot of my work is easing friction in systems you already run and making things a bit easier for the people who rely on them.",
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
  "Better workflows and stronger outcomes, without replacing everything just for show.";

export const aboutCopy = {
  bio: [
    "I grow the business by sharpening how teams operate and what actually reaches users. When clearer ownership lines up with a sustainable pace and work tied to real constraints, delivery keeps compounding instead of stalling.",
    "Technically I spend most of my time calming down existing stacks: automation where it helps, APIs that paper over legacy quirks, and interfaces teams can ship without a risky full rewrite. I've been a Software Engineer for about four years, building web and mobile in Java and JavaScript (React, Node, Spring, Python, cloud work, Kafka-flavored patterns), mostly Agile teams at TD Bank and products in production.",
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
  "If that sounds like your situation, say hi. Email, LinkedIn, or phone all work.";

/** Footer one-liner under social links */
export const brandPromise =
  "Growth from better processes and software that fits how your teams already work.";
