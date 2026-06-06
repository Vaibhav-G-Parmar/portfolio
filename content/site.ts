/** SEO / Open Graph blurb (~155-180 chars ideal) */
export const seoDescription =
  "Vaibhav Parmar - Full-Stack Software Engineer in Toronto. MERN, cloud, mobile, mainframe, and z/OS Connect. 4+ years shipping web, mobile, and enterprise integration workloads.";

export const siteProfile = {
  name: "Vaibhav Parmar",
  title: "Full-Stack Software Engineer",
  tagline:
    "Full-stack MERN, cloud-native, mobile, mainframe, and everything in between.",
  email: "vaibhav.parmar3@outlook.com",
  phone: "+16476763539",
  phoneDisplay: "(647) 676-3539",
  github: "https://github.com/Vaibhav-G-Parmar",
  linkedin: "https://www.linkedin.com/in/vaibhav-parmar-a37a86229",
  location: "Toronto, ON",
} as const;

export const heroCopy = {
  badge: "Full-Stack MERN · Cloud · Mobile · Mainframe · z/OS Connect",
  supporting:
    "I build full-stack web apps with the MERN stack, deploy them on AWS and Azure, ship native mobile experiences on Android and iOS, and connect it all to mainframe backends through z/OS Connect and REST APIs.",
  primaryCta: "Projects",
  secondaryCta: "Get in touch",
  resumeCta: "Download resume",
} as const;

/** Animated stat counters under the hero */
export const heroStats = [
  { value: 4, suffix: "+", decimals: 0, label: "Years shipping in production" },
  { value: 4.0, suffix: "", decimals: 1, label: "CGPA - High Honors" },
  { value: 85, suffix: "%", decimals: 0, label: "Test coverage on services" },
  { value: 40, suffix: "%", decimals: 0, label: "Faster queries after tuning" },
] as const;

export type TerminalLine = {
  text: string;
  tone?: "cmd" | "ok" | "dim" | "json";
};

export type ExpertiseDomain = {
  id: string;
  index: string;
  title: string;
  description: string;
  tags: readonly string[];
  terminal: {
    label: string;
    lines: readonly TerminalLine[];
  };
};

export const expertiseHeading =
  "What I bring to the table.";

export const expertise: readonly ExpertiseDomain[] = [
  {
    id: "fullstack",
    index: "01",
    title: "Full-Stack Web",
    description:
      "End-to-end MERN applications from database to UI. MongoDB for data, Express and Node for APIs, React and Next.js for interfaces. JWT auth, server-side rendering, real-time updates, and test suites that run before every deploy.",
    tags: ["MongoDB", "Express", "React", "Node.js", "Next.js", "TypeScript", "Tailwind", "Jest", "REST APIs"],
    terminal: {
      label: "chronicle-app",
      lines: [
        { text: "$ mongosh --eval 'db.users.find().limit(2)'", tone: "cmd" },
        { text: '{ _id: ObjectId("..."), name: "Vaibhav" }', tone: "json" },
        { text: "$ npm test -- --coverage", tone: "cmd" },
        { text: "✓ 142 passed · 87% coverage · 0 failures", tone: "ok" },
      ],
    },
  },
  {
    id: "cloud",
    index: "02",
    title: "Cloud & DevOps",
    description:
      "Production workloads on AWS and Azure. Dockerized services orchestrated with Kubernetes, event-driven pipelines through Kafka, and infrastructure defined in code. CI/CD through GitHub Actions and AWS CodePipeline with CloudWatch and Datadog for observability.",
    tags: ["AWS", "Azure", "Docker", "Kubernetes", "Kafka", "CI/CD", "GitHub Actions", "Terraform", "CloudFormation"],
    terminal: {
      label: "eks-prod",
      lines: [
        { text: "$ kubectl get pods -n production", tone: "cmd" },
        { text: "api-7f8b4   1/1   Running   eks-prod", tone: "dim" },
        { text: "$ kafka-topics --describe --topic txn-events", tone: "cmd" },
        { text: "Partitions: 12 · Replication: 3 · ISR: 3", tone: "dim" },
      ],
    },
  },
  {
    id: "mobile",
    index: "03",
    title: "Mobile Apps",
    description:
      "Native Android and iOS applications shipped to both stores. SwiftUI for Apple platforms including WatchOS companions, Kotlin and Material 3 for Android. Push notifications, offline-first sync, and CI/CD through Fastlane for automated store submissions.",
    tags: ["Android", "iOS", "SwiftUI", "WatchOS", "Kotlin", "React Native", "Fastlane"],
    terminal: {
      label: "harmony-app",
      lines: [
        { text: "$ xcodebuild -scheme App -sdk iphoneos", tone: "cmd" },
        { text: "✓ SwiftUI · WatchOS companion · signed", tone: "ok" },
        { text: "$ ./gradlew assembleRelease", tone: "cmd" },
        { text: "✓ Android APK · Material 3 · ready", tone: "ok" },
      ],
    },
  },
  {
    id: "mainframe",
    index: "04",
    title: "Mainframe",
    description:
      "Standalone COBOL programs, JCL job streams, and batch scheduling through CA-7. Day-to-day work in TSO/ISPF, source control via Endevor, and debugging with IDz. DB2 for relational data, IMS DB for hierarchical. Enterprise batch that processes millions of records overnight.",
    tags: ["COBOL", "JCL", "CA-7", "TSO", "ISPF", "Endevor", "IDz", "DB2", "IMS DB"],
    terminal: {
      label: "zos-batch",
      lines: [
        { text: "$ submit //ACCTJOB JOB (ACCT),'BATCH'", tone: "cmd" },
        { text: "IEF403I ACCTJOB - STARTED", tone: "dim" },
        { text: "ACCT001  STEP01  COBRUN  RC=0000", tone: "ok" },
        { text: "$ ca7 DEMAND,JOB=NIGHTBAT,SCHID=042", tone: "cmd" },
      ],
    },
  },
  {
    id: "zos-connect",
    index: "05",
    title: "API + z/OS Connect",
    description:
      "The bridge between mainframe and modern. z/OS Connect maps CICS COMMAREA and DB2 result sets to clean REST/JSON endpoints that any React app, mobile client, or microservice can consume. OAuth, JWT, and Zowe CLI for automation. Legacy data, modern interface.",
    tags: ["z/OS Connect", "REST", "JSON", "JWT", "OAuth", "Zowe CLI", "CICS", "SAML"],
    terminal: {
      label: "zos-api",
      lines: [
        { text: "$ zcon build service AccountSvc.sar", tone: "cmd" },
        { text: "✓ SAR built · COMMAREA mapped to JSON", tone: "ok" },
        { text: "$ curl https://zos-api/v1/accounts/4821", tone: "cmd" },
        { text: '{ "id": 4821, "balance": 19420.50 }', tone: "json" },
      ],
    },
  },
] as const;

export const projectsEyebrow = "Projects";
export const projectsHeading = "Shipping outcomes you can trace end to end.";

export const contactHeading = "Tell me what \"better\" looks like for your team.";
export const contactLead =
  "If that sounds like your situation, say hi. Email, LinkedIn, or phone all work.";

export const brandPromise =
  "Full-stack MERN - cloud-native - mobile - mainframe to modern via z/OS Connect - software that fits how your teams already work.";
