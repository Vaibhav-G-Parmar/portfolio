export type Project = {
  title: string;
  description: string;
  tags: readonly string[];
  links: {
    live?: string;
    repo?: string;
    googlePlay?: string;
    appStore?: string;
  };
  accent?: "ocean" | "ember" | "aurora";
};

export const projects: readonly Project[] = [
  {
    title: "HPBU2028: The Countdown",
    description:
      "Single-page event countdown site for an upcoming community gathering. React 18, Vite 5, CSS Modules. Fullscreen crossfade slideshow with randomized transitions, privacy mode toggle, slide lock panel (5 min to 1 day), and config-driven architecture. Deployed on Netlify with GitHub Actions CI/CD.",
    tags: ["React", "Vite", "CSS Modules", "GitHub Actions", "Netlify"],
    links: {
      live: "https://hpbu2028-the-countdown.netlify.app",
    },
    accent: "aurora",
  },
  {
    title: "Harmony With Heart",
    description:
      "Community and event management app for Yogi Divine Society Canada, covering registration, food service planning, and guest hosting. Scalable Node.js/TypeScript/Express APIs on AWS, JWT/OAuth auth, RBAC, Jest/Mocha/Supertest (~85% coverage), and CI/CD via AWS CodePipeline with CloudWatch monitoring.",
    tags: ["Node.js", "TypeScript", "AWS", "JWT", "iOS", "Android"],
    links: {
      googlePlay:
        "https://play.google.com/store/apps/details?id=org.ydscanada.harmonywithheart",
      appStore: "https://apps.apple.com/ca/app/harmony-with-heart/id6517349467",
    },
    accent: "ocean",
  },
  {
    title: "Chronicle: Travel Journal",
    description:
      "Full-stack travel journal with forums and social discovery. Helps users store, relive, and share travel memories. Next.js, React, Tailwind, Node/Express, MongoDB with indexing that cut query time ~40%, Leaflet maps with Places autocomplete, Dropbox-backed media, Passport/Bcrypt/JWT auth.",
    tags: ["Next.js", "React", "MongoDB", "Express", "Leaflet", "JWT"],
    links: {
      live: "https://chronicle-web-app-eight.vercel.app",
    },
    accent: "ember",
  },
  {
    title: "Fragments: Data Management Microservice",
    description:
      "Production microservice for text and image fragments. Node.js/Express on AWS with Cognito RBAC, S3/DynamoDB optimizations (~40% faster queries), Dockerized UI and API, GitHub Actions CI/CD, ECS orchestration, CloudFormation IaC, CloudWatch observability.",
    tags: ["Node.js", "AWS", "Docker", "DynamoDB", "Cognito", "CloudFormation"],
    links: {},
    accent: "aurora",
  },
];
