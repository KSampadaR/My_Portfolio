import React from "react";
import {
  DiHtml5,
  DiCss3,
  DiJavascript1,
  DiReact,
  DiMaterializecss,
  DiGithubBadge,
  DiMongodb,
  DiNodejsSmall,
} from "react-icons/di";
import {
  SiRedux,
  SiTailwindcss,
  SiFirebase,
  SiExpress,
  SiMysql,
} from "react-icons/si";
import { VscVscodeInsiders } from "react-icons/vsc";
import { FaBrain, FaCode, FaLinux, FaClock, FaUsers } from "react-icons/fa"; // Added FaClock import
import Reveal from "./Reveal";

const skills = [
  {
    category: "Frontend",
    technologies: [
      { name: "HTML", icon: <DiHtml5 className="text-orange-600" /> },
      { name: "CSS", icon: <DiCss3 className="text-blue-600" /> },
      { name: "Redux", icon: <SiRedux className="text-pink-600" /> },
      { name: "TailWind", icon: <SiTailwindcss className="text-blue-600" /> },
      {
        name: "JavaScript",
        icon: <DiJavascript1 className="text-yellow-500" />,
      },
      { name: "React", icon: <DiReact className="text-blue-500" /> },
    ],
  },
  {
    category: "Backend",
    technologies: [
      { name: "Node.js", icon: <DiNodejsSmall className="text-green-600" /> },
      { name: "Express", icon: <SiExpress className="text-gray-600" /> },
      { name: "Postman", icon: <SiExpress className="text-orange-500" /> },
    ],
  },
  {
    category: "Database",
    technologies: [
      { name: "MongoDB", icon: <DiMongodb className="text-green-600" /> },
      { name: "MySQL", icon: <SiMysql className="text-blue-500" /> },
    ],
  },
  {
    category: "Tools",
    technologies: [
      { name: "FireBase", icon: <SiFirebase className="text-red-600" /> },
      { name: "Git", icon: <DiGithubBadge className="text-blue-600" /> },
      {
        name: "VS Code",
        icon: <VscVscodeInsiders className="text-blue-500" />,
      },
      { name: "GitHub", icon: <DiGithubBadge className="text-gray-600" /> },
      {
        name: "Material UI",
        icon: <DiMaterializecss className="text-pink-600" />,
      },
    ],
  },
  {
    category: "Other Skills",
    technologies: [
      {
        name: "Machine Learning",
        icon: <FaBrain className="text-green-600 text-4xl" />,
      },
      {
        name: "Data Structures & Algorithms",
        icon: <FaCode className="text-yellow-600 text-4xl" />,
      },
      {
        name: "Artificial Intelligence",
        icon: <FaBrain className="text-blue-600 text-4xl" />,
      },
      {
        name: "Operating Systems",
        icon: <FaLinux className="text-black text-4xl" />,
      },
    ],
  },
  {
    category: "Core Skills",
    technologies: [
      {
        name: "Problem Solving",
        icon: <FaCode className="text-orange-600 text-4xl" />,
      },
      {
        name: "Time Management",
        icon: <FaClock className="text-yellow-600 text-4xl" />,
      },
      {
        name: "Research & Learning",
        icon: <FaBrain className="text-blue-600 text-4xl" />,
      },
      {
        name: "Collaboration",
        icon: <FaUsers className="text-green-600 text-4xl" />,
      },
    ],
  },
];

const Skills = () => {
  return (
    <div
      className="max-w-[1200px] mx-auto flex flex-col justify-center px-4 text-gray-200 pb-8 md:py-12"
      id="skills"
    >
      <Reveal>
        <h2 className="text-4xl font-bold mb-6 text-center">Skills</h2>
        <p className="text-lg text-center mb-10">
          I worked on various projects. Check them below.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="border border-purple-900 p-8 rounded-lg bg-purple-900/20 shadow-lg h-[400px] flex flex-col"
            >
              <h3 className="text-2xl font-bold text-center mb-8">
                {skill.category}
              </h3>
              <div className="grid grid-cols-2 gap-6 justify-center items-start">
                {skill.technologies.map((tech, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col items-center space-y-3"
                  >
                    <span className="text-4xl">{tech.icon}</span>
                    <span className="text-lg text-center">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </div>
  );
};

export default Skills;
