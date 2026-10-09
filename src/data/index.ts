// ─── Personal Info ───────────────────────────────────────────────────────────
export const personalInfo = {
  name: "Tufail Ahmed",
  title: "Full Stack Developer",
  subtitle:
    "Building intelligent Fintech systems that automate processes, scale reliably, and solve real world financial challenges",
  email: "tufailahmedsangrasi11@gmail.com",
  phone: "+92 327 2668910",
  location: "Karachi, Pakistan",
  github: "https://github.com/tufailahmed",
  linkedin: "https://linkedin.com/in/tufailahmed",
  about: [
    "I'm an ML/DL Engineer passionate about building intelligent, data-driven systems. I enjoy designing models and backend services that turn raw data into real-world impact — from research notebooks to production inference APIs.",
    "I'm skilled across the ML lifecycle with Python, FastAPI, TensorFlow, PyTorch, Keras, and classical ML libraries like Scikit-learn, NumPy, and Pandas. I also build production backends with Java and Spring Boot, so I'm comfortable owning a model from training all the way to a deployed, observable service.",
    "Always learning, I enjoy automating workflows with tools like n8n, and I thrive on solving challenging real-world problems through collaborative engineering and clean, reliable code.",
  ],
};

// ─── Skills ──────────────────────────────────────────────────────────────────
export interface Skill {
  name: string;
  /** Brand color used for the icon background/foreground fallback. */
  color: string;
  logo?: string;
}

export const skills: Skill[] = [
  { name: "Java", color: "#ED8B00", logo: "/skills/java.svg" },
  { name: "Spring Boot", color: "#6DB33F", logo: "/skills/spring-boot.svg" },
  { name: "Hibernate", color: "#59666C", logo: "/skills/hibernate.svg" },
  { name: "Python", color: "#3776AB", logo: "/skills/python.svg" },
  { name: "FastAPI", color: "#009688", logo: "/skills/fastapi.svg" },
  { name: "C#", color: "#013243", logo: "/skills/csharp.svg" },
  { name: "ASP.NET", color: "#150458", logo: "/skills/asp-net.svg" },
  { name: "Scikit-learn", color: "#F7931E", logo: "/skills/scikit-learn.svg" },
  { name: "TensorFlow", color: "#FF6F00", logo: "/skills/tensorflow.svg" },
  { name: "PyTorch", color: "#EE4C2C", logo: "/skills/pytorch.svg" },
  { name: "Keras", color: "#D00000", logo: "/skills/keras.svg" },
  { name: "n8n", color: "#EA4B71", logo: "/skills/n8n.svg" },
  { name: "PostgreSQL", color: "#336791", logo: "/skills/postgresql.svg" },
  { name: "MongoDB", color: "#13AA52", logo: "/skills/mongodb.svg" },
  { name: "GraphQL", color: "#E535AB", logo: "/skills/graphql.svg" },
  { name: "Git", color: "#F05032", logo: "/skills/git.svg" },
  { name: "Redis", color: "#DC382D", logo: "/skills/redis.svg" },
  { name: "BullMQ", color: "#E0234E" },
  { name: "Pinecone", color: "#00D4AA" },
  { name: "Docker", color: "#2496ED", logo: "/skills/docker.svg" },
];

// ─── Projects ─────────────────────────────────────────────────────────────────
export interface Project {
  name: string;
  description: string;
  githubUrl: string;
  language?: string | null;
  topics: string[];
  stars?: number;
  forks?: number;
  updatedAt: string;
  live?: string;
  /** Placeholder — drop banner images into /public/images/ */
  image?: string;
}

export const projects: Project[] = [
  {
    name: "MedInsight",
    description:
      "An AI-powered medical insight and diagnosis-assistance platform. Ingests patient data in real time, runs deep-learning inference behind a FastAPI service, and surfaces predictive insights to clinicians through a clean dashboard.",
    topics: ["Python", "FastAPI", "TensorFlow", "PyTorch", "PostgreSQL", "Docker"],
    githubUrl: "https://github.com/tufailahmed/medinsight",
    updatedAt: "2025-02-01T00:00:00Z",
    image: "/images/project-medinsight.png",
  },
  {
    name: "n8n-Synapse Data Pipeline",
    description:
      "An automated ML data pipeline orchestrated with n8n — ingests raw data, triggers preprocessing jobs, trains models on schedule, and notifies the team on Slack. Replaced a manual nightly cron workflow and cut data-prep time by 70%.",
    topics: ["n8n", "Python", "Pandas", "FastAPI", "PostgreSQL"],
    githubUrl: "https://github.com/tufailahmed/n8n-synapse",
    updatedAt: "2025-11-01T00:00:00Z",
    image: "/images/project-n8n.png",
  },
  {
    name: "Helix Inference Service",
    description:
      "A scalable GraphQL-based ML inference backend with Redis caching and BullMQ job queues. Handles concurrent model-serving requests with circuit-breaker fallbacks and per-tenant rate limits.",
    topics: ["GraphQL", "FastAPI", "Redis", "BullMQ", "Docker", "PyTorch"],
    githubUrl: "https://github.com/tufailahmed/helix-inference",
    updatedAt: "2026-06-01T00:00:00Z",
    image: "/images/project-helix.png",
  },
];

// ─── Achievements ─────────────────────────────────────────────────────────────
export interface Achievement {
  title: string;
  organization: string;
  description: string;
  bullets?: string[];
  date?: string;
  url?: string;
  urlLabel?: string;
}

export const achievements: Achievement[] = [
  {
    title: "AI in Fintech Intern",
    organization: "Avanza Solutions",
    description:
      "Worked on fintech engineering and digital payment systems at Avanza Solutions, focusing on ISO messaging standards, transaction processing, and payment gateway integration for banking clients across the region.",
    date: "Jun – Aug 2025",
    bullets: [
      "Developed and tested ISO 8583 message parsers for real-time card transaction authorization, handling 5,000+ daily test transactions across multiple acquiring channels.",
      "Contributed to the migration of legacy payment message formats to ISO 20022 (MX) standard, mapping 40+ data elements from MT to MX schemas for cross-border payment flows.",
      "Built Python-based validation scripts to verify end-to-end message integrity across switch, gateway, and core banking simulator environments.",
      "Collaborated with the QA and integration teams to troubleshoot settlement discrepancies and reconcile transaction logs against ISO 8583 bitmap field specifications.",
      "Documented API contracts and message flow diagrams for internal payment orchestration services, improving onboarding time for new developers by 30%.",
    ],
    url: "https://www.avanzasolutions.com/",
    urlLabel: "Avanza Solutions",
  },
  {
    title: "Hack for Humanity – 2025",
    organization: "Dev Post",
    description:
      "Built MedInsight, an AI-powered medical insight platform, during the 48-hour Hack for Humanity hackathon. The project demonstrated real-time diagnostic assistance using deep learning models.",
    date: "Jan – Feb 2025",
    bullets: [
      "Designed an AI-driven medical insight tool that analyzes patient data and surfaces diagnostic hints in real time.",
      "Trained and served deep-learning models (TensorFlow / PyTorch) behind a FastAPI inference endpoint with sub-200ms latency.",
      "Built a scalable Python backend with PostgreSQL for storing patient records and model predictions.",
      "Placed Top 10 out of 120+ teams and received the Best Use of AI in Healthcare track award.",
    ],
    url: "https://devpost.com/",
    urlLabel: "Dev Post",
  },
  {
    title: "Bachelor's in Software Engineering",
    organization: "MUET, Jamshoro",
    description:
      "Pursued a Bachelor's degree in Software Engineering at Mehran University of Engineering & Technology (MUET), Jamshoro — one of Pakistan's top public engineering universities.",
    date: "2021 – 2025",
    bullets: [
      "Completed coursework in data structures, algorithms, operating systems, database management, software design patterns, and artificial intelligence.",
      "Built multiple semester projects including an e-commerce platform, a hospital management system, and a machine-learning based sentiment analyzer.",
      "Participated in university-level programming competitions and hackathons, consistently ranking among the top performers.",
      "Served as a peer mentor for junior students in introductory programming and object-oriented design courses.",
    ],
  },
  {
    title: "Web Development Course",
    organization: "National Freelancing Training Program",
    description:
      "Completed an intensive web development training program under Pakistan's National Freelancing Training Program (NFTP), gaining hands-on experience with modern full-stack technologies.",
    date: "2024",
    bullets: [
      "Mastered front-end fundamentals including HTML5, CSS3, JavaScript (ES6+), and responsive design with Bootstrap and Tailwind CSS.",
      "Built full-stack applications using React.js for the front end and Node.js/Express for RESTful API backends.",
      "Learned version control with Git/GitHub, deployment workflows, and basics of cloud hosting on platforms like Vercel and Netlify.",
      "Developed a capstone freelancing portfolio project showcasing real-world client deliverables and modern UI/UX principles.",
    ],
  },
];