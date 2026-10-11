
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
    "I'm a Full Stack Developer experienced in building modern web applications with React.js on the frontend and .NET on the backend. I enjoy developing clean, scalable, and reliable solutions that solve real-world problems.",

    "I'm also skilled in Python, Scikit-learn, PyTorch, and TensorFlow, with a focus on Machine Learning and Deep Learning. I enjoy exploring AI-driven solutions, developing predictive models, and turning data into practical insights.",

    "I have foundational knowledge of Blockchain and hands-on experience building and deploying small smart contract projects using Solidity. I'm continuously learning and exploring technologies to build innovative, impactful solutions."
  ],

};

export interface Skill {
  name: string;
  
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
    title: "Avanza Solutions Intern",
    organization: "Avanza Solutions",
    description:
      "Intern at Avanza Solutions, learning and taking a deep dive into the world of digital payments.",
    date: "Jun – July 2026",
    bullets: [
      "Studied ISO 8583 message flows, including data element parsing and on-us vs. off-us routing decisions within a payment switch.",
      "Learned how a switch interacts with core banking systems to authorize and settle transactions.",
      "Explored 1LINK's role as Pakistan's interbank switch for ATM and funds transfer traffic.",
      "Examined how Raast operates as SBP's instant payment rail using ISO 20022 messaging.",
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
      "Pursued a Bachelor's degree in Software Engineering at Mehran University of Engineering & Technology Jamshoro,one of Pakistan's top public engineering universities.",
    date: "2022 – 2026",
    bullets: [
      "Completed coursework in Object oriented programming, Data structures & Algorithms, Operating Systems, DBMS , Software Project Management, Agent Based Intelligence System , Data Science and Analytics ,Mobile Application Development, Cloud Computing.",
      "Built multiple semester projects including an e-commerce platform, a hospital management system, and a machine-learning based sentiment analyzer.",
      "Participated in university-level programming competitions and hackathons, consistently ranking among the top performers.",
      "Served as a peer mentor for junior students in introductory programming and object-oriented design courses.",
    ],
  },
  {
    title: "Web Development Course",
    organization: "National Freelancing Training Program",
    description:
      "Completed an intensive web development training program under Pakistan's National Freelancing Training Program (NFTP), gaining hands-on experience with modern full stack technologies.",
    date: "2024",
    bullets: [
      "Mastered front-end fundamentals including HTML5, CSS3, JavaScript (ES6+), and responsive design with Bootstrap and Tailwind CSS.",
      "Built full-stack applications using React.js for the front end and Node.js/Express for RESTful API backends.",
      "Learned version control with Git/GitHub, deployment workflows, and basics of cloud hosting on platforms like Vercel and Netlify.",
      "Developed a capstone freelancing portfolio project showcasing real-world client deliverables and modern UI/UX principles.",
    ],
  },
];