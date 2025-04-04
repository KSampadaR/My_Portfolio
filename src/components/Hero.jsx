import React from "react";
import sampada from "../assets/sampada.jpg";
import resume from "../assets/My Resume.pdf";
import { TypeAnimation } from "react-type-animation";
import ShinyEffect from "./ShinyEffect";
import {
  AiOutlineGithub,
  AiOutlineInstagram,
  AiOutlineLinkedin,
} from "react-icons/ai";
import { SiTailwindcss } from "react-icons/si";
import {
  DiCss3,
  DiHtml5,
  DiJavascript1,
  DiReact,
  DiDatabase,
} from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="mt-24 md:mt-36 max-w-[1200px] mx-auto relative">
      <div className="grid md:grid-cols-2 place-items-center gap-8">
        <motion.div
          className="ml-4"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <TypeAnimation
            sequence={[
              "UI UX Design",
              1000,
              "Web Developer",
              1000,
              "Machine learning",
              1000,
              "DSA",
              1000,
            ]}
            speed={50}
            repeat={Infinity}
            className="font-bold text-gray-400 text-xl md:text-5xl italic- mb-4"
          />
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-gray-200 md:text-7xl text-5xl tracking-tight mb-4"
          >
            HEY, I AM <br />
            <span className="text-purple-500">Sampada Khopade</span>
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1 }}
            className="text-gray-300 max-w-[300px] md:max-w-[500px] md:text-2xl text-lg mb-6"
          >
            I am Passionate developer skilled in UI/UX Design, MERN Stack, DSA,
            and basic Machine Learning, focused on building user-friendly and
            efficient web solutions.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1.5 }}
            className="flex flex-row items-center gap-6 my-4 md:mb-0"
          >
            <motion.a
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.3)",
              }}
              href={resume}
              download="Sampada_Khopade_Resume.pdf"
              className="z-10 cursor-pointer font-bold text-gray-200 md:w-auto p-4 border border-purple-400 rounded-xl"
            >
              Download CV
            </motion.a>
            <div className="flex gap-6 flex-row text-4xl md:text-6xl text-purple-400 z-20">
              <motion.a
                whileHover={{ scale: 1.2 }}
                href="https://github.com/KSampadaR"
              >
                <AiOutlineGithub />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2 }}
                href="https://www.linkedin.com/in/sampada-khopade-517999282/"
              >
                <AiOutlineLinkedin />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2 }}
                href="https://www.instagram.com/sampada_khopade/"
              >
                <AiOutlineInstagram />
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
        <figure className="scale-up h-[450px] w-[350px] md:w-[450px] overflow-hidden rounded-full border-[2px] border-white">
          <img src={sampada} alt="Profile Pic" className="object-contain" />
        </figure>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 2 }}
        className="flex flex-col text-7xl px-12 md:px-0 w-full justify-center items-center py-24"
      >
        <p className="text-gray-200 text-4xl mb-8">My Tech Stack</p>
        <div className="flex flex-row flex-wrap justify-center items-center gap-4 text-6xl">
          <DiHtml5 className="text-orange-600 mx-2" />
          <DiCss3 className="text-blue-600 mx-2" />
          <DiJavascript1 className="text-yellow-500 mx-2" />
          <DiReact className="text-blue-500 mx-2" />
          <SiTailwindcss className="text-blue-500 mx-2" />
          <FaNodeJs className="text-green-600 mx-2" />
          <DiDatabase className="text-green-500 mx-2" />
        </div>
      </motion.div>
      <div className="absolute inset-0 hidden md:block">
        <ShinyEffect left={0} top={0} size={1400} />
      </div>
    </div>
  );
};

export default Hero;
