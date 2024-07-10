import React from "react";
import ProjectDetails from "./ProjectDetails";
import Button from "../../RoundedButton/index";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const ProjectCard = ({ project, index }) => {
  const getProjectPath = (header) => {
    if (header === "Grow Up") {
      return "/projects/growup";
    }
    // Add more conditions for other projects
    return "#";
  };

  return (
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
      key={index}
      className="card h-[110vh] py-20"
    >
      <div className="list-content flex flex-col justify-between">
        <ProjectDetails project={project} />
        <div className="list-button flex px-5 py-3 items-center gap-6 text-white">
          <p className="text-[40px]">View Project</p>
          <Button>
            <Link
              to={getProjectPath(project.header)}
              style={{ border: "none", padding: "20px" }}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 17.59L15.59 7H9V5H19V15H17V8.41L6.41 19L5 17.59Z"
                  fill="white"
                />
              </svg>
            </Link>
          </Button>
        </div>
      </div>
      <div className="list-image">
        <img src={project.images} alt="" />
      </div>
    </motion.div>
  );
};

export default ProjectCard;
