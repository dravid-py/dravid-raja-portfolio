export interface SkillCategory {
  title: string;
  skills: {
    name: string;
    description: string;
  }[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Programming",
    skills: [
      {
        name: "Python",
        description: "Core language for data analysis, ML modeling, scripting, and backend development",
      },
    ],
  },
  {
    title: "Web",
    skills: [
      {
        name: "HTML",
        description: "Semantic document structuring, accessible layout architecture",
      },
      {
        name: "CSS",
        description: "Modern layouts, responsive design, custom styling, animations",
      },
      {
        name: "Flask",
        description: "Python micro-framework for RESTful APIs, web routing, and backend dashboards",
      },
    ],
  },
  {
    title: "Database",
    skills: [
      {
        name: "SQL",
        description: "Relational database querying, schema design, data filtering, and analysis",
      },
    ],
  },
  {
    title: "Tools",
    skills: [
      {
        name: "Git",
        description: "Version control, branching workflows, and commit management",
      },
      {
        name: "GitHub",
        description: "Repository hosting, collaborative workflows, and version tracking",
      },
      {
        name: "Visual Studio Code",
        description: "Primary development environment and debugging tools",
      },
    ],
  },
];
