// src/components/ProjectList/ProjectList.jsx
import React from "react";
import ProjectCard from "./ProjectCard";
import Rr from "../../../assets/images/rr.png";
import Growup from "../../../assets/images/growup.png";
import Rnb from "../../../assets/images/rnb.png";
import "./projectList.css";

const ProjectList = () => {
  const data = [
    {
      header: "Redy Rahadian",
      description:
        "RR - Freelance web design project. Redy Rahadian is an accomplished sculpture artist in Indonesia. This project is a request by Redy Rahadian to re-design the old website.",
      category: "Freelance",
      role: "Web Designer",
      status: "On Going",
      images: Rr,
    },
    {
      header: "Grow Up",
      description:
        "Grow up - A web development competition organized by BEM FTI Untar 2022. This is a team competition consisting of Albert, Vaness, and Ndaru. We managed to win 2nd Place in this event.",
      category: "Competition",
      role: "Web Designer",
      status: "Finished",
      images: Growup,
    },
    {
      header: "RnB Outdoor Living",
      description:
        "Randy n Brandon - A freelance project requested by a business owner. A Landing page to showcase furniture products. This project was created by Albert and Chris. We managed to get 60 plus users in a month.",
      category: "Freelance",
      role: "Web Designer, Front End",
      status: "Finished",
      images: Rnb,
    },
  ];

  return (
    <div className="project-list">
      <div className="list-container px-[100px]">
        {data.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>
    </div>
  );
};

export default ProjectList;
