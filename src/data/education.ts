export interface EducationItem {
  degree: string;
  field: string;
  institution: string;
  location: string;
  duration: string;
  status: string;
  grade?: string;
  description: string;
}

export const educationData: EducationItem[] = [
  {
    degree: "Master of Science (MSc)",
    field: "Artificial Intelligence & Data Science",
    institution: "Rathinam Global University",
    location: "Coimbatore, Tamil Nadu",
    duration: "2026 – 2028",
    status: "Currently Pursuing",
    description:
      "Advanced studies covering machine learning algorithms, deep learning, statistical data modeling, and intelligent software systems.",
  },
  {
    degree: "Bachelor of Computer Applications (BCA)",
    field: "Computer Applications",
    institution: "The American College",
    location: "Madurai, Tamil Nadu",
    duration: "June 2023 – April 2026",
    status: "Graduated",
    grade: "CGPA: 7.6 / 10 (70.8%)",
    description:
      "Core foundation in computer science, software programming, relational database management systems, algorithms, and web development.",
  },
];
