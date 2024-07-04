import React from "react";
import { motion } from "framer-motion";
import Star from "../../../public/stars4.svg";
import ProjectList from "./ProjectList/ProjectList";

const Projects = () => {
  return (
    <div className="projects">
      <div className="projects-container">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 1,
            },
          }}
          viewport={{ once: true }}
          className="projects-heading h-screen flex items-center justify-center"
        >
          <span className="px-10 spin-animation">
            <img src={Star} alt="" />
          </span>
          <h1 className="text-8xl text-white uppercase font-black tracking-tight">
            Projects
          </h1>
          <span className="px-10 spin-animation">
            <img src={Star} alt="" />
          </span>
        </motion.div>
        <ProjectList />
      </div>
    </div>
  );
};

export default Projects;
