import { 
  FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaReact, FaNodeJs, FaDatabase, 
  FaCode, FaHtml5, FaCss3Alt, FaWordpress
} from 'react-icons/fa';
import { 
  SiExpress, SiMongodb, SiFirebase, SiTailwindcss, SiJavascript, 
  SiCplusplus, SiPython 
} from 'react-icons/si';

export const personalInfo = {
  name: "Surya Prakash Gadi",
  title: "Backend & Full Stack Developer",
  email: "suryagadi385@gmail.com",
  phone: "+91-7013691772",
  linkedin: "https://linkedin.com/in/suryaprakash-gadi",
  github: "https://github.com/suryaprakash-Gadi",
  leetcode: "https://leetcode.com/u/surya_gadi/",
  resumeLink: "/public/SuryaPrakashGadiResume.pdf",
  bio: "Backend-focused Software Developer with experience in Python, FastAPI, PostgreSQL, and multi-tenant SaaS architectures. Skilled in building scalable backend systems, real-time integrations, and full-stack applications.",
  shortBio: "I build scalable backend systems and full-stack applications."
};

export const education = [
  {
    institution: "Kakinada Institute of Engineering & Technology",
    degree: "B.Tech in Computer Science",
    duration: "Nov 2021 – Apr 2025",
    score: "CGPA: 7.65/10",
  },
  {
    institution: "C.V. Raman Junior College",
    degree: "Intermediate (M.P.C)",
    duration: "Jun 2019 – Apr 2021",
    score: "73%",
  },
  {
    institution: "Zilla Parishad High School",
    degree: "SSC",
    duration: "Jun 2018 – Mar 2019",
    score: "87%",
  }
];

export const experience = [
  {
    role: "Software Developer Intern",
    organization: "Kapil IT Solutions",
    duration: "May 2025 – Present",
    points: [
      "Built a secure real estate platform (Ramya Constructions) with Cashfree Payment Gateway integration.",
      "Implemented Cashfree Webhooks for real-time transaction updates, improving payment tracking accuracy.",
      "Developed a multi-tenant agricultural system using FastAPI + PostgreSQL schema cloning for isolated tenants.",
      "Created unified admin dashboard and tenant-based access system improving scalability and maintainability."
    ],
  }
];

export const projects = [
  {
    title: "Quizzy – Online Quiz Application",
    tech: ["React.js", "FastAPI", "PostgreSQL"],
    description: "Full-stack quiz platform with user authentication, dynamic quizzes, score tracking, and leaderboard system.",
    date: "2024",
    githubLink: "https://github.com/suryaprakash-Gadi/Quizzy",
    liveLink: null,
    category: "Full Stack",
    icon: <FaReact size={24} className="text-accent-1" />
  },
  {
    title: "Mail Easy – Chrome Extension",
    tech: ["React.js", "OpenAI API"],
    description: "Chrome extension generating personalized job messages using resume + job description using OpenAI API.",
    date: "2024",
    githubLink: "https://github.com/suryaprakash-Gadi/mail-easy-extension",
    liveLink: null,
    category: "AI / Chrome Extension",
    icon: <FaReact size={24} className="text-accent-1" />
  },
  {
    title: "Human Pose Estimation",
    tech: ["Python", "OpenCV", "MediaPipe"],
    description: "Real-time human pose detection system using Python, keypoint estimation, and motion analysis.",
    date: "2024",
    githubLink: "https://github.com/suryaprakash-Gadi/Human-Pose-Estimation",
    liveLink: null,
    category: "AI / Computer Vision",
    icon: <SiPython size={24} className="text-accent-1" />
  }
];

export const skills = {
  languages: [
    { name: "Python", icon: <SiPython /> },
    { name: "Java", icon: <FaCode /> },
    // { name: "C/C++", icon: <SiCplusplus /> },
    { name: "JavaScript", icon: <SiJavascript /> },
    { name: "HTML5", icon: <FaHtml5 /> },
    { name: "CSS3", icon: <FaCss3Alt /> }
  ],
  frameworksAndLibraries: [
    { name: "FastAPI", icon: <FaCode /> },
    { name: "Django", icon: <FaCode /> },
    { name: "React JS", icon: <FaReact /> },
    { name: "Node JS", icon: <FaNodeJs /> },
    { name: "Express JS", icon: <SiExpress /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    { name: "Shadcn/UI", icon: <FaCode /> },
  ],
  toolsAndPlatforms: [
    { name: "PostgreSQL", icon: <FaDatabase /> },
    { name: "SQLite3", icon: <FaDatabase /> },
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "Firebase", icon: <SiFirebase /> },
    { name: "Git & GitHub", icon: <FaGithub /> },
    { name: "Postman", icon: <FaCode /> },
    { name: "Jira", icon: <FaCode /> },
    { name: "DigitalOcean", icon: <FaCode /> },
    { name: "Figma", icon: <FaCode /> },
  ],
  coreCompetencies: [
    "Problem Solving",
    "Team Collaboration",
    "Time Management",
    "Scalable Backend Architecture",
    "API Development",
  ]
};

export const leadershipAndInvolvement = [
    {
    role: "Software Developer Intern",
    organization: "Kapil IT Solutions",
    duration: "May 2025 – Present",
    points: [
      "Developed multi-tenant backend systems using FastAPI and PostgreSQL schema-based isolation.",
      "Implemented Cashfree Payment Gateway and Webhooks for real-time transaction updates.",
      "Built an admin dashboard and improved API workflows, enhancing scalability and maintainability."
    ],
  },
  {
    role: "Devpost Aviation Hack Winner",
    organization: "Devpost Hackathon 2023",
    duration: "2023",
    points: [
      "Won the Aviation Hackathon by building a Django-powered platform for real-time flight updates.",
      "Collaborated with a team to design and deploy an innovative solution under time constraints."
    ],
  },
  {
    role: "AI-THON – 3rd Place",
    organization: "KIET College",
    duration: "2023",
    points: [
      "Secured 3rd place for developing Python-based AI solutions using computer vision techniques.",
      "Demonstrated strong analytical thinking and rapid prototyping skills during the event."
    ],
  },
  {
    role: "Certified Developer",
    organization: "Edyst | EduSkills | IBM",
    duration: "2022 – 2024",
    points: [
      "Completed certifications in Python Programming, Full Stack Web Development, and AI Fundamentals.",
      "Gained hands-on experience through structured learning paths, real-world projects, and assessments."
    ],
  },
];


export const socialLinks = {
  linkedin: { url: personalInfo.linkedin, icon: <FaLinkedin size={24} /> },
  github: { url: personalInfo.github, icon: <FaGithub size={24} /> },
  email: { url: `mailto:${personalInfo.email}`, icon: <FaEnvelope size={24} /> },
  phone: { url: `tel:${personalInfo.phone}`, icon: <FaPhone size={24} /> },
  leetcode: { url: personalInfo.leetcode, icon: <FaCode size={24} /> },
};
