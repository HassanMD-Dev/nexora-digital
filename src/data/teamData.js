

import { GrGithub } from "react-icons/gr";
import team1 from "../assets/images/team/team1.svg";
import team2 from "../assets/images/team/team2.svg";
import team3 from "../assets/images/team/team3.svg";
import team4 from "../assets/images/team/team4.svg";
import { FaGithub, FaLinkedin } from "react-icons/fa";


const teamData = [
  {
    id: 1,
    name: "Alex Carter",
    role: "Creative Director",
    image: team1,
    description:
      "Leads creative vision with innovative ideas, ensuring every project delivers a unique and impactful digital experience.",
    socials: [
      {
        id: 1,
        icon: FaLinkedin,
        href: "#",
      },
      {
        id: 2,
        icon: FaGithub,
        href: "#",
      },
    ],
  },

  {
    id: 2,
    name: "Sophia Wilson",
    role: "UI/UX Designer",
    image: team2,
    description:
      "Designs intuitive, user-friendly interfaces that balance aesthetics, usability, and seamless user experiences.",
    socials: [
      {
        id: 1,
        icon: FaLinkedin,
        href: "#",
      },
      {
        id: 2,
        icon: FaGithub,
        href: "#",
      },
    ],
  },

  {
    id: 3,
    name: "James Anderson",
    role: "Frontend Developer",
    image: team3,
    description:
      "Builds fast, responsive, and scalable websites using modern technologies with clean, maintainable code.",
    socials: [
      {
        id: 1,
        icon: FaLinkedin,
        href: "#",
      },
      {
        id: 2,
        icon: FaGithub,
        href: "#",
      },
    ],
  },

  {
    id: 4,
    name: "Emma Brown",
    role: "Project Manager",
    image: team4,
    description:
      "Coordinates projects efficiently, ensuring smooth collaboration, timely delivery, and exceptional client satisfaction.",
    socials: [
      {
        id: 1,
        icon: FaLinkedin,
        href: "#",
      },
      {
        id: 2,
        icon: FaGithub,
        href: "#",
      },
    ],
  },
];

export default teamData;
