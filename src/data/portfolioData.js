/**
 * PARI.OS Portfolio Data
 * Content configured to accurately represent a Computer Science student
 * who is actively learning programming, web development, and AI by building projects.
 */

export const personalInfo = {
  name: "Pari Rojivadiya",
  callsign: "PARI.OS",
  role: "Computer Science Student",
  status: "LEARNING & BUILDING",
  version: "v2.6.4",
  location: "India",
  headline: "Learning, building and experimenting with software, AI and modern web technologies.",
  secondaryText: "I enjoy turning ideas into small working projects while continuously improving my technical skills.",
  shortBio:
    "I am a Computer Science student who enjoys learning by building. I am exploring software development, AI, web technologies and problem solving through college projects, personal experiments and practical learning. I am still learning and improving every day, and this portfolio is a collection of the things I have built and explored along the way.",
  email: "pari.rojivadiya@example.com",
  github: "https://github.com/parirojivadiya",
  linkedin: "https://linkedin.com/in/pari-rojivadiya",
  resumeUrl: "#resume", // Link to resume file or download
};

export const aboutData = {
  summary: [
    "I am a Computer Science student who enjoys learning by building. I am exploring software development, AI, web technologies and problem solving through college projects, personal experiments and practical learning.",
    "I am still learning and improving every day, and this portfolio is a collection of the things I have built and explored along the way."
  ],
  focusAreas: [
    {
      title: "Computer Science Studies",
      tagline: "Core Foundations & Problem Solving",
      description: "Learning fundamental concepts in programming, data structures, algorithms, and computer systems.",
      icon: "Binary"
    },
    {
      title: "Software Development",
      tagline: "Clean Code & Practical Projects",
      description: "Practicing object-oriented programming, modular file structure, and writing readable, organized code.",
      icon: "CodeXml"
    },
    {
      title: "Web Development",
      tagline: "React, Modern CSS & Responsive UIs",
      description: "Building responsive web interfaces, experimenting with modern frontend tools, and learning best practices.",
      icon: "Layers"
    },
    {
      title: "Exploring AI",
      tagline: "Concepts, APIs & Experiments",
      description: "Exploring machine learning basics, vector embeddings, and building small AI-assisted project prototypes.",
      icon: "Cpu"
    },
    {
      title: "Learning by Building",
      tagline: "Turning Ideas into Working Code",
      description: "Believing that the best way to understand technology is to experiment, build small projects, and learn through practice.",
      icon: "Rocket"
    }
  ],
  stats: [
    { label: "Current Status", value: "CS Student" },
    { label: "Primary Focus", value: "Web & AI" },
    { label: "Core Approach", value: "Learn by Building" },
    { label: "Daily Mindset", value: "Continuous Learning" }
  ]
};

export const skillsData = {
  categories: [
    {
      id: "programming",
      name: "Programming",
      description: "Languages for core logic and problem solving",
      icon: "Terminal",
      skills: [
        { name: "Java", level: "Learning & Practicing", highlight: "OOP principles, collections, and foundational logic" },
        { name: "Python", level: "Building with", highlight: "Utility scripts, basic data handling, and API experiments" },
        { name: "C++", level: "Learning & Practicing", highlight: "Data structures, memory basics, and problem solving" },
        { name: "JavaScript", level: "Building with", highlight: "ES6+, async flows, and dynamic browser logic" }
      ]
    },
    {
      id: "web-dev",
      name: "Web Development",
      description: "Building responsive, modern user interfaces",
      icon: "Layout",
      skills: [
        { name: "HTML", level: "Building with", highlight: "Semantic layout structure and clean document hierarchy" },
        { name: "CSS", level: "Building with", highlight: "Flexbox, Grid, custom styling, and responsive design" },
        { name: "React", level: "Building with & Learning", highlight: "Component design, hooks, and reactive UI state" },
        { name: "Vite", level: "Building with", highlight: "Fast dev server and modern build workflow" },
        { name: "Tailwind CSS", level: "Building with", highlight: "Utility styling and responsive design systems" }
      ]
    },
    {
      id: "tools",
      name: "Tools",
      description: "Development environment and version control",
      icon: "Wrench",
      skills: [
        { name: "Git", level: "Learning & Using", highlight: "Version control, branching, commits, and project history" },
        { name: "GitHub", level: "Using", highlight: "Hosting repositories, tracking code, and sharing projects" },
        { name: "VS Code", level: "Daily Editor", highlight: "Workspace customization, debugging, and terminal" }
      ]
    },
    {
      id: "exploring",
      name: "Exploring",
      description: "Emerging libraries and technologies I am currently exploring",
      icon: "Sparkles",
      skills: [
        { name: "AI/ML", level: "Exploring", highlight: "Basic ML principles, text embeddings, and AI tool experimentation" },
        { name: "Three.js", level: "Exploring", highlight: "3D scenes, WebGL geometries, and camera navigation" },
        { name: "React Three Fiber", level: "Exploring", highlight: "Declarative 3D Canvas integration with React" },
        { name: "APIs", level: "Learning & Exploring", highlight: "Connecting web frontends with backend endpoints and services" }
      ]
    }
  ]
};

import { projects } from './projects';
export { projects };
export const projectsData = projects;

/**
 * Learning Journey Data Store
 * Chronological timeline representing studies, projects, and activities.
 * Easily editable.
 */
export const experienceData = [
  {
    id: "journey-1",
    period: "Ongoing",
    role: "Computer Science Studies",
    organization: "Undergraduate Degree",
    type: "Academics",
    location: "Campus",
    description:
      "Studying core computer science fundamentals through coursework and practical lab work, covering Data Structures, Algorithms, Object-Oriented Programming, Database Systems, and Computer Networks.",
    highlights: [
      "Building a solid theoretical and practical foundation in core CS subjects",
      "Completing coursework assignments and labs in Java, Python, and C++",
      "Practicing structured problem-solving and algorithmic thinking"
    ],
    skills: ["Data Structures", "Algorithms", "Java", "Python", "C++"]
  },
  {
    id: "journey-2",
    period: "2024 — Present",
    role: "Personal & Experimental Projects",
    organization: "Independent Learning",
    type: "Personal Projects",
    location: "Self-Paced",
    description:
      "Turning ideas into small working applications to apply what I learn. Building interactive web tools, exploring AI-assisted matching concepts, and experimenting with modern frontend UI libraries.",
    highlights: [
      "Building practical web projects using React, Vite, and Tailwind CSS",
      "Designing responsive interfaces and modular component structures",
      "Exploring API integrations and simple matching logic in student prototypes"
    ],
    skills: ["React", "JavaScript", "Python", "Vite", "Tailwind CSS"]
  },
  {
    id: "journey-3",
    period: "2024",
    role: "College Projects & Collaborative Work",
    organization: "Academic Coursework & Teams",
    type: "College Projects",
    location: "Campus",
    description:
      "Collaborating with classmates on term projects and team assignments. Practicing version control with Git, coordinating tasks, and writing cleaner, well-documented code.",
    highlights: [
      "Collaborating in student teams on software and web assignments",
      "Using Git and GitHub for version control and collaborative code sharing",
      "Practicing clean code conventions and documenting project steps"
    ],
    skills: ["Git", "GitHub", "Team Collaboration", "Documentation"]
  },
  {
    id: "journey-4",
    period: "2023 — Present",
    role: "Technical Club Activities & Peer Learning",
    organization: "Campus Developer Community",
    type: "Club Activities",
    location: "Campus",
    description:
      "Participating in student tech club sessions, attending coding meetups, and learning alongside peers who share a passion for technology.",
    highlights: [
      "Attending technical workshops on web development and modern tools",
      "Participating in peer discussions and coding study groups",
      "Sharing project ideas and learning new developer tools with peers"
    ],
    skills: ["Peer Learning", "Technical Discussions", "Community"]
  },
  {
    id: "journey-5",
    period: "Ongoing",
    role: "Learning New Technologies & Experimentation",
    organization: "Continuous Exploration",
    type: "Learning & Exploring",
    location: "Self-Directed",
    description:
      "Continuously exploring modern web frameworks, 3D graphics in the browser with Three.js and React Three Fiber, and experimenting with AI and developer tooling.",
    highlights: [
      "Learning Three.js and React Three Fiber to build interactive 3D web visuals",
      "Experimenting with AI APIs and prompt-driven applications",
      "Following modern frontend best practices and improving code quality"
    ],
    skills: ["Three.js", "React Three Fiber", "AI APIs", "Modern Web"]
  }
];

/**
 * What I'm Working On (Replaces unverified achievements)
 * Factual, authentic areas of current technical growth and practice.
 */
export const workingOnData = [
  {
    id: "work-1",
    title: "Improving Problem-Solving Skills",
    category: "Problem Solving",
    period: "Daily Practice",
    status: "Active Goal",
    description:
      "Consistently solving coding problems and algorithmic puzzles to strengthen logical reasoning, pattern recognition, and computational thinking.",
    tag: "Core Habit"
  },
  {
    id: "work-2",
    title: "Learning Data Structures & Algorithms",
    category: "Computer Science",
    period: "Ongoing Study",
    status: "Active Learning",
    description:
      "Deepening my understanding of fundamental data structures—including arrays, linked lists, stacks, queues, trees, and graphs—along with search and sort algorithms.",
    tag: "Fundamentals"
  },
  {
    id: "work-3",
    title: "Building Practical Web Projects",
    category: "Web Development",
    period: "Project Work",
    status: "Building",
    description:
      "Creating interactive, responsive web applications using React, modern CSS, and Vite to turn concepts into small working tools.",
    tag: "Hands-On"
  },
  {
    id: "work-4",
    title: "Exploring AI Development",
    category: "AI & ML",
    period: "Exploration",
    status: "Experimenting",
    description:
      "Learning core artificial intelligence concepts, experimenting with modern AI APIs, vector embeddings, and exploring how AI can assist developer workflows.",
    tag: "Curiosity"
  },
  {
    id: "work-5",
    title: "Improving Git & GitHub Workflow",
    category: "Developer Tools",
    period: "Practice",
    status: "Refining",
    description:
      "Practicing disciplined Git branching, clear and atomic commit messages, pull request reviews, and organized repository management.",
    tag: "Best Practices"
  },
  {
    id: "work-6",
    title: "Learning Modern Frontend Technologies",
    category: "Frontend",
    period: "Ongoing Study",
    status: "Exploring",
    description:
      "Exploring modern CSS techniques, component design patterns, accessibility, and 3D graphics in the browser using Three.js and React Three Fiber.",
    tag: "Modern Web"
  }
];

// Alias for backward compatibility
export const achievementsData = workingOnData;

/**
 * Verified Certifications Data Store
 * Only certifications that are explicitly provided are shown here.
 * If left empty, the Certifications section automatically stays hidden.
 */
export const certificationsData = [];

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Journey", href: "#journey" },
  { label: "What I'm Working On", href: "#working-on" },
  { label: "Contact", href: "#contact" }
];
