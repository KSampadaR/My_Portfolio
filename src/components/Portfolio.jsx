import React, { useState } from "react";
import { FaFilePdf } from "react-icons/fa";
import Reveal from "./Reveal";

// Project Images
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";
import DEMO from "../assets/DEMO.mp4";
import project5 from "../assets/project5.png";

// Certificate Images
import project11 from "../assets/project1.png";
import project12 from "../assets/project1.png";
import project13 from "../assets/project1.png";
import project14 from "../assets/project1.png";
import project15 from "../assets/project1.png";
import project16 from "../assets/project1.png";
import project17 from "../assets/project1.png";
import project18 from "../assets/project1.png";

// Research Paper PDFs
const researchPapers = [
  { title: "Paper 1", link: "/pdfs/research1.pdf" },
  { title: "Paper 2", link: "/pdfs/research2.pdf" },
  { title: "Paper 3", link: "/pdfs/research3.pdf" },
];

const Certificates = [
  project11,
  project12,
  project13,
  project14,
  project15,
  project16,
  project17,
  project18,
];

const projects = [
  {
    img: project1,
    title: "Solar Energy Prediction System Using AQI Data",
    description:
      "Designed a tool to predict solar energy output by analyzing AQI, pollutant, and Irradiance.",
    links: {
      GitHub: "https://github.com/coder-ram123/Solar_Energy_Prediction",
    },
  },
  {
    img: project2,
    title: "Brain Tumor Detection via image processing ",
    description:
      "Patients can upload MRI scans and obtain quick results using advanced image analysis techniques in MATLAB and Python.",
    links: {
      GitHub:
        "https://github.com/KSampadaR/brain_tumor_detection_using_image_processing",
    },
  },
  {
    img: project3,
    title:
      "Automatic Door Opening And Closing using Face Recognition and Attendance System for Classrooms",
    description:
      "Developed a system that connects to a real-time database to manage and track student attendance with Automated door operations for better learning management.",
    links: {
      GitHub:
        "https://github.com/KSampadaR/automatic_door_opening_closing_and_automated_attendance_management-",
    },
  },
  {
    img: null,
    video: DEMO,
    title: "Landslide Awareness Website (2024)",
    description:
      "Created an interactive landslide awareness website using HTML, CSS, and JavaScript. Integrated 3D models from Blender and Sketchfab to visualize landslide causes, prevention methods, and real-life stories. Developed a responsive interface to provide users with detailed insights on landslide risk factors.",
    links: {
      GitHub: "https://github.com/KSampadaR/landslide_awareness_project",
    },
  },
  {
    img: "https://eatbeat.ai/wp-content/uploads/2024/05/1-2.webp",
    title: "NutriGen: AI-powered Nutritional App",
    description:
      "NutriGen is an AI-powered app that helps users make better food choices through personalized nutrition insights, tailored meal plans, and quick recipe suggestions. It solves challenges like understanding nutrition, managing health conditions, optimizing meal timing, and providing menstrual cycle-based dietary support.",
    links: {
      GitHub:
        "https://www.figma.com/design/71eBsU9UFA81zbmfRd0OWG/Neutrigen?node-id=0-1",
      View_Project: "https://nutrigen-ai-app.netlify.app/",
    },
  },
];

const Portfolio = () => {
  const [selectedproject1, setSelectedproject1] = useState(null);

  return (
    <div className="max-w-[1000px] mx-auto p-6 md:my-20" id="portfolio">
      <h2 className="text-3xl font-bold text-gray-200 mb-8">Portfolio</h2>
      {projects.map((project, index) => (
        <Reveal key={index}>
          <div
            className={`flex flex-col md:flex-row ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            } mb-12`}
          >
            <div className="w-full md:w-1/2 p-4">
              {project.img ? (
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-full object-cover rounded-lg shadow-lg"
                />
              ) : project.video ? (
                <video
                  src={project.video}
                  controls
                  className="w-full h-full rounded-lg shadow-lg"
                />
              ) : null}
            </div>
            <div className="w-full md:w-1/2 p-4 flex flex-col justify-center">
              <h3 className="text-xl font-semibold text-gray-200 mb-4">
                {project.title}
              </h3>
              <p className="text-gray-300 text-lg mb-4">
                {project.description}
              </p>
              {project.links && project.links.GitHub && (
                <div className="flex space-x-4">
                  <a
                    href={project.links.GitHub}
                    className="px-3 py-1 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700 transition duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                  <a
                    href={project.links.View_Project}
                    className="px-3 py-1 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Project
                  </a>
                </div>
              )}
            </div>
          </div>
        </Reveal>
      ))}

      {/* Certificates & Research Papers Section */}
      <h3 className="text-3xl font-bold text-gray-200 mb-8 text-center">
        Certificates and Research Papers
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        {/* Certificates Section */}
        <div className="border border-gray-700 p-6 rounded-lg bg-gray-800 shadow-lg">
          <h3 className="text-2xl font-bold text-center mb-4 text-gray-200">
            Certificates
          </h3>
          <div className="grid grid-cols-2 gap-4">
            {Certificates.map((project1, index) => (
              <div
                key={index}
                className="cursor-pointer border border-gray-600 rounded-lg overflow-hidden"
                onClick={() => setSelectedproject1(project1)}
              >
                <img
                  src={project1}
                  alt={`Certificate ${index + 1}`}
                  className="w-full h-32 object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Research Papers Section */}
        <div className="border border-gray-700 p-6 rounded-lg bg-gray-800 shadow-lg">
          <h3 className="text-2xl font-bold text-center mb-4 text-gray-200">
            Research Papers
          </h3>
          <div className="flex flex-col space-y-4">
            {researchPapers.map((paper, index) => (
              <a
                key={index}
                href={paper.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 bg-gray-900 p-3 rounded-lg hover:bg-gray-700 transition duration-300"
              >
                <FaFilePdf className="text-red-500 text-2xl" />
                <span className="text-gray-300">{paper.title}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
