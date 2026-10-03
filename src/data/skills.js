/**
 * Technical Skills Data Store
 * Currently Learning & Using
 * Factual, humble student descriptions without arbitrary proficiency percentages or exaggerated claims.
 */

export const skillCategories = [
  { id: 'all', name: 'All Topics', count: 16 },
  { id: 'programming', name: 'Programming', count: 4 },
  { id: 'web-dev', name: 'Web Development', count: 5 },
  { id: 'tools', name: 'Tools', count: 3 },
  { id: 'exploring', name: 'Exploring', count: 4 }
];

export const skills = [
  // 1. Programming
  {
    id: 'java',
    name: 'Java',
    category: 'programming',
    categoryName: 'Programming',
    iconType: 'Java',
    status: 'Learning & Practicing',
    application: 'Learning object-oriented principles, collection frameworks, and computational logic',
    projectUse: 'Coursework assignments and practicing foundational data structures'
  },
  {
    id: 'python',
    name: 'Python',
    category: 'programming',
    categoryName: 'Programming',
    iconType: 'Python',
    status: 'Building with & Exploring',
    application: 'Building utility scripts, exploring basic data processing, and simple backend logic',
    projectUse: 'Used in project experiments, data exploration, and script-based tools'
  },
  {
    id: 'cpp',
    name: 'C++',
    category: 'programming',
    categoryName: 'Programming',
    iconType: 'C++',
    status: 'Learning & Practicing',
    application: 'Practicing memory concepts, pointer fundamentals, and standard template library (STL) basics',
    projectUse: 'Practicing data structures, algorithmic problem solving, and lab exercises'
  },
  {
    id: 'javascript',
    name: 'JavaScript',
    category: 'programming',
    categoryName: 'Programming',
    iconType: 'JavaScript',
    status: 'Building with & Learning',
    application: 'Writing modern ES6+ syntax, asynchronous functions, and client-side logic for the browser',
    projectUse: 'Core logic, dynamic events, and interactivity across web projects'
  },

  // 2. Web Development
  {
    id: 'html',
    name: 'HTML',
    category: 'web-dev',
    categoryName: 'Web Development',
    iconType: 'HTML',
    status: 'Building with',
    application: 'Structuring accessible semantic page layouts, document headings, and form controls',
    projectUse: 'Fundamental document structure for all frontend web projects'
  },
  {
    id: 'css',
    name: 'CSS',
    category: 'web-dev',
    categoryName: 'Web Development',
    iconType: 'CSS',
    status: 'Building with',
    application: 'Styling responsive layouts with Flexbox, CSS Grid, media queries, and animations',
    projectUse: 'Custom visual styling, theme variables, and layout structure'
  },
  {
    id: 'react',
    name: 'React',
    category: 'web-dev',
    categoryName: 'Web Development',
    iconType: 'React',
    status: 'Building with & Learning',
    application: 'Designing modular component hierarchies, using hooks, and managing component state',
    projectUse: 'Frontend library used to build interactive user interfaces across projects'
  },
  {
    id: 'vite',
    name: 'Vite',
    category: 'web-dev',
    categoryName: 'Web Development',
    iconType: 'Vite',
    status: 'Building with',
    application: 'Fast modern build tooling, rapid local development server, and asset bundling',
    projectUse: 'Primary build and development setup for modern React projects'
  },
  {
    id: 'tailwind',
    name: 'Tailwind CSS',
    category: 'web-dev',
    categoryName: 'Web Development',
    iconType: 'Tailwind',
    status: 'Building with',
    application: 'Utility-first styling, rapid responsive prototyping, and consistent spacing systems',
    projectUse: 'Used for styling and design tokens across web applications'
  },

  // 3. Tools
  {
    id: 'git',
    name: 'Git',
    category: 'tools',
    categoryName: 'Tools',
    iconType: 'Git',
    status: 'Learning & Using',
    application: 'Practicing version control, branching, committing changes, and managing history',
    projectUse: 'Tracking code changes across personal and college project repositories'
  },
  {
    id: 'github',
    name: 'GitHub',
    category: 'tools',
    categoryName: 'Tools',
    iconType: 'GitHub',
    status: 'Using',
    application: 'Hosting project repositories, publishing code, managing pull requests, and sharing work',
    projectUse: 'Sharing project codebases and tracking personal build progress'
  },
  {
    id: 'vs-code',
    name: 'VS Code',
    category: 'tools',
    categoryName: 'Tools',
    iconType: 'VSCode',
    status: 'Daily Editor',
    application: 'Primary code editor for writing code, debugging, and terminal workflows',
    projectUse: 'Main development environment for programming and web development'
  },

  // 4. Exploring
  {
    id: 'ai-ml',
    name: 'AI/ML',
    category: 'exploring',
    categoryName: 'Exploring',
    iconType: 'AI',
    status: 'Exploring',
    application: 'Learning foundational machine learning concepts, text embeddings, and AI tool integrations',
    projectUse: 'Exploring intelligent features and prompt-assisted workflows in student projects'
  },
  {
    id: 'three-js',
    name: 'Three.js',
    category: 'exploring',
    categoryName: 'Exploring',
    iconType: 'ThreeJS',
    status: 'Exploring',
    application: 'Exploring 3D graphics in the browser, WebGL scene graphs, cameras, and geometry',
    projectUse: 'Learning 3D interactive graphics and visual experimentations'
  },
  {
    id: 'react-three-fiber',
    name: 'React Three Fiber',
    category: 'exploring',
    categoryName: 'Exploring',
    iconType: 'R3F',
    status: 'Exploring',
    application: 'Exploring declarative 3D canvas rendering with React components and Drei utilities',
    projectUse: 'Rendering the interactive 3D core visualization in this portfolio'
  },
  {
    id: 'apis',
    name: 'APIs',
    category: 'exploring',
    categoryName: 'Exploring',
    iconType: 'API',
    status: 'Learning & Exploring',
    application: 'Learning RESTful API concepts, fetching JSON data, handling errors, and connecting services',
    projectUse: 'Connecting frontend interfaces with backend logic and external services'
  }
];

export default skills;
