export interface PersonalInfo {
  name: string;
  shortName: string;
  fullName: string;
  degreeTrack: string;
  role: string;
  email: string;
  phone: string;
  location: string;
  summary: string;
  heroBio: string;
  resumeUrl: string;
  tags: string[];
}

export const personalData: PersonalInfo = {
  name: "DRAVID RAJA N",
  shortName: "Dravid",
  fullName: "Dravid Raja N",
  degreeTrack: "MSc Artificial Intelligence & Data Science",
  role: "MSc Artificial Intelligence & Data Science",
  email: "ndravidraja@gmail.com",
  phone: "+91 63744 43527",
  location: "Tamil Nadu, India",
  summary:
    "MSc Artificial Intelligence & Data Science student at Rathinam Global University, Coimbatore, with a BCA degree from The American College, Madurai. Background in Python development, Flask web applications, SQL databases, and source code quality tooling with CodeHealth-AI.",
  heroBio:
    "Currently pursuing MSc Artificial Intelligence & Data Science at Rathinam Global University, Coimbatore. BCA graduate from The American College, Madurai.",
  resumeUrl: "/DRAVID-RAJA-N-Resume.pdf",
  tags: [
    "Python",
    "SQL",
    "Flask",
    "CodeHealth-AI",
  ],
};
