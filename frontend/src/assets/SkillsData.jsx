import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaBootstrap,
  FaRuler,
  FaMicrosoft,
} from "react-icons/fa";


import {
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiRedux,
  SiPostman,
  SiVercel,
  SiAutocad,
  SiAutodeskrevit,
} from "react-icons/si";



import { VscVscodeInsiders } from "react-icons/vsc";





export const techSkillsData = [
  {
    name: "HTML",
    level: "Advance",
    icon: <FaHtml5 className="text-amber-400" />,
  },
  {
    name: "CSS",
    level: "Advance",
    icon: <FaCss3Alt className="text-red-400" />,
  },
  {
    name: "Java Script",
    level: "Intermediate",
    icon: <FaJsSquare className="text-green-400" />,
  },
  {
    name: "Tailwind CSS",
    level: "Advance",
    icon: <SiTailwindcss className="text-cyan-400" />,
  },
  {
    name: "React.js",
    level: "Intermediate",
    icon: <FaReact className="text-red-500" />,
  },
  {
    name: "Redux Toolkit",
    level: "Beginner",
    icon: <SiRedux className="text-pink-400" />,
  },
  {
    name: "Bootstrap",
    level: "Intermediate",
    icon: <FaBootstrap className="text-blue-500" />,
  },
  {
    name: "Node.js",
    level: "Intermediate",
    icon: <FaNodeJs className="text-blue-500" />,
  },
  {
    name: "Express.js",
    level: "Intermediate",
    icon: <SiExpress className="text-amber-400" />,
  },
  {
    name: "MongoDB",
    level: "Advance",
    icon: <SiMongodb className="text-green-500" />,
  },
];




export const techToolsData = [
  {
    name: "Git",
    level: "Beginner",
    icon: <FaGitAlt className="text-red-500" />,
  },
  {
    name: "GitHub",
    level: "Beginner",
    icon: <FaGithub className="text-cyan-400" />,
  },
  {
    name: "VS Code",
    level: "Advance",
    icon: <VscVscodeInsiders className="text-blue-500" />,
  },
  {
    name: "Postman",
    level: "Advance",
    icon: <SiPostman className="text-orange-600" />,
  },
  {
    name: "Vercel",
    level: "Beginner",
    icon: <SiVercel className="text-amber-500 " />,
  }
];



export const engToolsData = [
  {
    name: "AutoCAD",
    level: "Advance",
    icon: <SiAutocad className="text-cyan-500" />,
  },
  {
    name: "Revit",
    level: "Intermediate",
    icon: <SiAutodeskrevit className="text-green-500" />,
  },
  {
    name: "MS Office",
    level: "Advance",
    icon: <FaMicrosoft className="text-red-500" />,
  },
];



export const engSkillsData = [
  {
    name: "Structural Analysis",
    level: "Beginner",
    icon: "Structural",
  },
  {
    name: "Reinforced Concrete Design",
    level: "Beginner",
    icon: "R.C.C",
  },
  {
    name: "Surveying & Levelling",
    level: "Beginner",
    icon: <FaRuler className="text-cyan-500" />,
  },
];


