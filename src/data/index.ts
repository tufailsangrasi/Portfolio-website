// ─── Personal Info ───────────────────────────────────────────────────────────
export const personalInfo = {
  name: "Tufail Ahmed",
  title: "ML/DL Engineer",
  subtitle:
    "Designing intelligent systems that learn, scale, and solve real-world problems.",
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
}

export const skills: Skill[] = [
  { name: "Java", color: "#ED8B00" },
  { name: "Spring Boot", color: "#6DB33F" },
  { name: "Hibernate", color: "#59666C" },
  { name: "Python", color: "#3776AB" },
  { name: "FastAPI", color: "#009688" },
  { name: "NumPy", color: "#013243" },
  { name: "Pandas", color: "#150458" },
  { name: "Scikit-learn", color: "#F7931E" },
  { name: "TensorFlow", color: "#FF6F00" },
  { name: "PyTorch", color: "#EE4C2C" },
  { name: "Keras", color: "#D00000" },
  { name: "n8n", color: "#EA4B71" },
  { name: "PostgreSQL", color: "#336791" },
  { name: "MongoDB", color: "#13AA52" },
  { name: "GraphQL", color: "#E535AB" },
  { name: "Git", color: "#F05032" },
  { name: "Redis", color: "#DC382D" },
  { name: "BullMQ", color: "#E0234E" },
  { name: "Pinecone", color: "#00D4AA" },
  { name: "Docker", color: "#2496ED" },
];

// ─── Projects ─────────────────────────────────────────────────────────────────
export interface Project {
  title: string;
  description: string;
  tags: string[];
  github: string;
  live?: string;
  /** Placeholder — drop banner images into /public/images/ */
  image?: string;
  period: string;
}

export const projects: Project[] = [
  {
    title: "MedInsight",
    description:
      "An AI-powered medical insight and diagnosis-assistance platform. Ingests patient data in real time, runs deep-learning inference behind a FastAPI service, and surfaces predictive insights to clinicians through a clean dashboard.",
    tags: ["Python", "FastAPI", "TensorFlow", "PyTorch", "PostgreSQL", "Docker"],
    github: "https://github.com/tufailahmed/medinsight",
    period: "Jan 2025 – Feb 2025",
    image: "/images/project-medinsight.png",
  },
  {
    title: "n8n-Synapse Data Pipeline",
    description:
      "An automated ML data pipeline orchestrated with n8n — ingests raw data, triggers preprocessing jobs, trains models on schedule, and notifies the team on Slack. Replaced a manual nightly cron workflow and cut data-prep time by 70%.",
    tags: ["n8n", "Python", "Pandas", "FastAPI", "PostgreSQL"],
    github: "https://github.com/tufailahmed/n8n-synapse",
    period: "Aug 2025 – Nov 2025",
    image: "/images/project-n8n.png",
  },
  {
    title: "Helix Inference Service",
    description:
      "A scalable GraphQL-based ML inference backend with Redis caching and BullMQ job queues. Handles concurrent model-serving requests with circuit-breaker fallbacks and per-tenant rate limits.",
    tags: ["GraphQL", "FastAPI", "Redis", "BullMQ", "Docker", "PyTorch"],
    github: "https://github.com/tufailahmed/helix-inference",
    period: "Mar 2026 – Jun 2026",
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
    title: "Hack for Humanity – 2025",
    organization: "Dev Post",
    description:
      "Built MedInsight, an AI-powered medical insight platform, during the 48-hour Hack for Humanity hackathon.",
    date: "Jan – Feb 2025",
    bullets: [
      "Designed an AI-driven medical insight tool that analyzes patient data and surfaces diagnostic hints in real time.",
      "Trained and served deep-learning models (TensorFlow / PyTorch) behind a FastAPI inference endpoint.",
      "Built a scalable Python backend with PostgreSQL for storing patient records and model predictions.",
      // TODO: replace with real result / ranking / award name from the actual hackathon
      "Placed Top 10 out of 120+ teams and received the Best Use of AI in Healthcare track award.",
    ],
    url: "https://devpost.com/",
    urlLabel: "Dev Post",
  },
  {
    title: "Bachelor's in Computer Science",
    organization: "University of Karachi",
    // TODO: replace with your real degree, specialization, and year
    description:
      "Studied computer science with a focus on AI, machine learning, and software engineering. Graduated with distinction.",
  },
  {
    title: "Deep Learning Specialization",
    organization: "DeepLearning.AI",
    // TODO: replace with your real certification / platform / year
    description:
      "Completed a multi-course deep learning specialization covering CNNs, sequence models, and transformer architectures applied to real-world ML problems.",
  },
];