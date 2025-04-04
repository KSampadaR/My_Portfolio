import React from "react";
import { motion } from "framer-motion";
import Reveal from "./Reveal";
import mudhoji from "../assets/mudhoji.png";
import hp from "../assets/hp.jpg";
import image from "../assets/image.png";

const educations = [
  {
    logo: image,
    title: "Vishwakarma Institute of Technology",
    degree: "Bachelor of Computer Engineering(Artificial Intelligence)",
    period: "2022 - Present",
    grade: "8.49",
    description:
      "I am currently pursuing a Bachelor's degree in Computer at VIT, Pune. I have completed 5 semesters and have a CGPA of 8.49.",
  },
  {
    logo: mudhoji,
    title: "Mudhoji Highschool and Junior College, Phaltan",
    degree: "HSC(XII),  PCM with Information Technology ",
    period: "2021 - 2022",
    grade: "84.85%",
    description:
      "I completed my class 12 education at Mudhoji Highschool and Junior College, Phaltan , where i studied Physics, Chemistry and Mathematics with Information Technology and English",
  },
  {
    logo: hp,
    title: "Shri. Hanumantrao Pawar High School & Jr. College Phaltan",
    degree: "SSC(X)",
    period: "2019 - 2020",
    grade: "95.20%",
    description:
      "I completed my class 10 education at Shri. Hanumantrao Pawar High School & Jr. College , Phaltan only, where I studied all subjects",
  },
];

const Education = () => {
  return (
    <div className="p-8 max-w-[800px] mx-auto">
      <h1 className="text-4xl text-gray-200 font-bold text-center mb-12">
        Education
      </h1>
      <p className="text-gray-400 text-center mb-8">
        My education has been a journey of self-discovery and growth. My
        educational details are as follows.
      </p>
      <motion.div className="space-y-8" initial="hidden" animate="visible">
        {educations.map((education, index) => (
          <Reveal key={index}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 1 }}
              className="border border-purple-600 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 bg-purple-700/10 flex items-start space-x-4"
            >
              <img
                src={education.logo}
                alt="Institution Logo"
                className="w-16 h-16 object-cover"
              />
              <div>
                <h2 className="text-gray-100 text-2xl font-semibold">
                  {education.title}
                </h2>
                <p className="text-gray-300 text-sm">{education.degree}</p>
                <p className="text-gray-400 text-sm mb-2">{education.period}</p>
                <p className="text-purple-300 font-medium text-sm">
                  Grade: {education.grade}
                </p>
                <p className="text-gray-400 mt-4 text-sm">
                  {education.description}
                </p>
              </div>
            </motion.div>
          </Reveal>
        ))}
      </motion.div>
    </div>
  );
};

export default Education;
