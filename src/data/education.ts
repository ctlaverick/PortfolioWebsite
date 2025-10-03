export interface EducationEntry {
  degree: string;
  institution: string;
  period: string;
  description: string[];
}

const education: EducationEntry[] = [
  {
    degree: "Bachelor of Computer Science",
    institution: "Northumbria University",
    period: "2022–2026",
    description: [
      "Currently completing a BSc in Computer Science, building strong foundations in software development, algorithms, and data management.",
      "Modules covered include software architecture, human-computer interaction, mobile and web application development, evolutionary computing, and data security.",
      "As part of my degree, I worked on a consultancy project designing and developing a prototype front-end car dealership website, applying modern web technologies and user-focused design principles.",
      "Currently undertaking a dissertation in collaboration with a Canadian financial company, developing a bespoke software solution to support their business processes.",
      "These experiences have strengthened my technical and problem-solving skills, and taught me how to adapt work to real-world requirements and professional contexts."
    ]
  },
  {
    degree: "A Levels",
    institution: "North East Futures UTC",
    period: "2020–2022",
    description: [
      "Completed A Levels in Physics (B), Mathematics (C) and Chemistry (C).",
    ]
  },
  {
    degree: "GCSEs",
    institution: "North East Futures UTC",
    period: "2018–2020",
    description: [
      "Completed my GCSEs.",
    ]
  },
];

export default education;
