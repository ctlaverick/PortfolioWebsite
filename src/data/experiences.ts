export interface Experience {
  title: string;
  role: string;
  company: string;
  period: string;
  description: string;
}

const experiences: Experience[] = [
  {
    title: "Nando’s",
    role: "Front of House",
    company: "Nando’s",
    period: "2024 - Present",
    description:
      "Provide front-of-house service in one of the busiest Nando’s restaurants in the region. Recognised as “Host of the Year” at the Nandoscars awards for outstanding hospitality and teamwork."
  },
  {
    title: "John Lewis Place to Eat",
    role: "Catering Assistant",
    company: "John Lewis",
    period: "2022",
    description:
      "Worked in a fast-paced café environment during the busy Christmas season, developing time management, teamwork, and customer service skills."
  },
  {
    title: "Accenture",
    role: "Work Experience",
    company: "Accenture",
    period: "2021",
    description:
      "Participated in a virtual work experience programme, learning about problem-solving approaches, developer workflows, and IT consulting practices in a global tech company."
  },
  {
    title: "UTC Cybersecurity Challenge",
    role: "Participant",
    company: "North East Futures UTC",
    period: "2021",
    description:
      "Competed against other UTC schools in immersive labs, solving cybersecurity tasks under time constraints to score points and test practical knowledge."
  },
  {
    title: "Orange Bus UX & Programming",
    role: "Work Experience",
    company: "Orange Bus",
    period: "2019",
    description:
      "Completed a placement in user-centered design and UX. Shadowed and collaborated with teams across IT, development, DevOps, design, and project management."
  },
  {
    title: "Fujitsu Project",
    role: "Project Leader",
    company: "Fujitsu",
    period: "2019",
    description:
      "Developed a gamification-based approach to increase customer feedback engagement. Created a demo and presented to Fujitsu leadership."
  },
  {
    title: "NBS Project Day",
    role: "Project Leader",
    company: "NBS",
    period: "2019",
    description:
      "Guided a team in creating solutions to improve efficiency and client involvement in architectural modelling processes."
  },
  {
    title: "Newcastle Business College Project",
    role: "Project Leader",
    company: "Newcastle Business College",
    period: "2018",
    description:
      "Led a project team tasked with addressing a UN Sustainable Development Goal, developing creative solutions and presenting findings effectively."
  },
  {
    title: "Ubisoft Project",
    role: "Project Leader",
    company: "Ubisoft",
    period: "2018",
    description:
      "Led a project exploring accessibility in gaming. Designed a concept for a customizable controller for players with impairments."
  },
  {
    title: "Newcastle City Cricket Club",
    role: "Bar Staff",
    company: "Newcastle City Cricket Club",
    period: "2015 - 2017",
    description:
      "Assisted in serving refreshments and snacks, developing strong customer service and teamwork skills."
  },
  {
    title: "Newcastle City Cricket Club",
    role: "Team Scorer",
    company: "Newcastle City Cricket Club",
    period: "2015 - 2017",
    description:
      "Acted as first team scorer, demonstrating focus, attention to detail, and commitment during long match days."
  }
];

export default experiences;
