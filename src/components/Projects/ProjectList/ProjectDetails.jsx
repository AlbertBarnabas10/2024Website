import React from "react";

const ProjectDetails = ({ project }) => (
  <div>
    <div className="px-5 py-3 text-white">
      <h1 className="text-5xl font-medium mb-6">{project.header}</h1>
      <p className="font-light w-[450px]">{project.description}</p>
    </div>
    <div className="px-5 py-3 text-white">
      <div className="flex w-full gap-x-4 pb-2">
        <span className="text-base italic w-[150px]">Category:</span>
        <span>{project.category}</span>
      </div>
      <div className="flex w-full gap-x-4 pb-2">
        <span className="text-base italic w-[150px]">Role:</span>
        <span>{project.role}</span>
      </div>
      <div className="flex w-full gap-x-4 pb-2">
        <span className="text-base italic w-[150px]">Status:</span>
        <span>{project.status}</span>
      </div>
    </div>
  </div>
);

export default ProjectDetails;
