/**
 * Projects & Experiments Data Store
 * Easily editable list of projects with githubUrl and liveUrl.
 *
 * Button rules:
 * - If liveUrl is provided: Displays clickable [ Launch Live Demo ]
 * - If liveUrl is empty: Automatically displays [ Live Demo Coming Soon ] as a non-clickable status
 * - If githubUrl is provided: Displays clickable [ GitHub Repository ] with GitHub icon
 */

export const projects = [
  {
    id: "smart-allocation-engine",
    name: "AI-Based Smart Allocation Engine",
    projectNumber: "01",
    title: "AI-Based Smart Allocation Engine",
    subtitle: "Student Exploration in Constrained Matching & Skill-Based Allocation",
    category: "AI & Algorithm Exploration",
    status: "Project & Experiment",

    // Project description as requested
    description:
      "A project exploring how AI-based matching can be used to connect applicants with suitable internship opportunities using factors such as skills, preferences and eligibility constraints.",

    overview:
      "A project exploring how AI-based matching can be used to connect applicants with suitable internship opportunities using factors such as skills, preferences and eligibility constraints.",

    context:
      "Built as a learning and project exploration to understand how algorithmic matching concepts can pair candidates with internship opportunities based on skills, preferences, and eligibility rules.",

    learningFocus:
      "Created to learn and demonstrate how matching algorithms work with multi-factor constraints, exploring vector similarity concepts and rule-based assignment logic.",

    features: [
      {
        title: "Skill Matching Exploration",
        description:
          "Experimented with text embeddings to compare applicant skills with opportunity requirements beyond exact keywords."
      },
      {
        title: "Constraint Handling",
        description:
          "Explored rules for balancing hard constraints like location or eligibility alongside candidate preferences."
      },
      {
        title: "Transparent Factor Breakdown",
        description:
          "Built an experimental view showing why particular matches were suggested based on scoring criteria."
      },
      {
        title: "Interactive Review Interface",
        description:
          "A prototype interface allowing a reviewer to inspect sample allocations and constraint criteria."
      }
    ],

    technologies: [
      { name: "React", category: "Frontend" },
      { name: "JavaScript", category: "Language" },
      { name: "Python", category: "Backend / Logic" },
      { name: "Vite", category: "Build Tool" },
      { name: "Tailwind CSS", category: "Styling" }
    ],

    resultImpact:
      "Built as a learning project to understand matching algorithms and web development. Allowed me to practice integrating frontend interfaces with data models and rule-based logic.",

    // Action URLs - easily editable
    githubUrl: "https://github.com/parirojivadiya/smart-allocation-engine",
    liveUrl: "", // Empty: UI will automatically display non-clickable "Live Demo Coming Soon"

    previewMeta: {
      type: "allocation-dashboard",
      badge: "STUDENT EXPERIMENT",
      accentColor: "cyan",
      kpis: [
        { label: "Project Type", value: "Learning Prototype" },
        { label: "Focus", value: "Matching Logic" },
        { label: "Status", value: "Experimental" }
      ]
    }
  },

  {
    id: "legal-aid",
    name: "LegalAId",
    projectNumber: "02",
    title: "LegalAId",
    subtitle: "AI & Structured Guidance Prototype for Common Legal Information",
    category: "Civic Tech & UI Experiment",
    status: "Project & Experiment",

    // Project description as requested
    description:
      "A learning project exploring how AI and structured information can make common legal information easier to understand for users who may not have a legal background.",

    overview:
      "A learning project exploring how AI and structured information can make common legal information easier to understand for users who may not have a legal background.",

    context:
      "Created to learn and demonstrate how guided questionnaires and structured summaries can help simplify complex documents.",

    learningFocus:
      "Built as a learning project exploring step-by-step form flows, client-side data handling, and translating complex domain information into clear explanations.",

    features: [
      {
        title: "Guided Step-by-Step Forms",
        description:
          "Explored breaking down complex legal inquiry into intuitive, plain-language questions."
      },
      {
        title: "Plain-Language Summaries",
        description:
          "Experimented with summarizing common consumer and tenancy rights into clear, accessible bullet points."
      },
      {
        title: "Draft Notice Formatting",
        description:
          "Generates formatted draft documents from user input to practice structured document generation."
      },
      {
        title: "Client-Side Privacy",
        description:
          "Explored keeping user inputs in the client-side session to learn about browser-based data handling."
      }
    ],

    technologies: [
      { name: "React", category: "Frontend" },
      { name: "JavaScript", category: "Language" },
      { name: "HTML / Canvas", category: "Document Export" },
      { name: "Vite", category: "Build Tool" },
      { name: "Tailwind CSS", category: "Styling" }
    ],

    resultImpact:
      "Built as a student exploration in accessible user experience and form design, helping me learn how to handle multi-step user workflows in React.",

    // Action URLs - easily editable
    githubUrl: "https://github.com/parirojivadiya/legal-aid-platform",
    liveUrl: "", // Empty: UI will automatically display non-clickable "Live Demo Coming Soon"

    previewMeta: {
      type: "legal-flow",
      badge: "CIVIC TECH EXPERIMENT",
      accentColor: "blue",
      kpis: [
        { label: "Project Type", value: "Student Project" },
        { label: "Focus", value: "Guided UI Flows" },
        { label: "Status", value: "Experimental" }
      ]
    }
  }
];

export default projects;
