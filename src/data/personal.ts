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
  tags: string[];
}

export const personalData: PersonalInfo = {
  name: "DRAVID RAJA N",
  shortName: "Dravid",
  fullName: "Dravid Raja N",
  degreeTrack: "MSc Artificial Intelligence & Data Science",
  role: "Aspiring Python Developer · AI & Data Science",
  email: "ndravidraja@gmail.com",
  phone: "+91 63744 43527",
  location: "Tamil Nadu, India",
  summary:
    "MSc Artificial Intelligence & Data Science student at Rathinam Global University and BCA graduate from The American College, Madurai. I build practical applications using Python, SQL, Flask, React, and computer-vision tools. My projects include CodeHealth-AI and DriveGuard.",
  heroBio:
    "MSc Artificial Intelligence & Data Science student and BCA graduate, building practical software with Python, SQL, Flask, and modern web technologies.",
  tags: [
    "Python",
    "SQL",
    "Flask",
    "CodeHealth-AI",
  ],
};
