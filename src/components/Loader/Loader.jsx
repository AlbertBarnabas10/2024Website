import React from "react";

const Loader = ({ projectName }) => {
  return (
    <div className="h-screen bg-black w-full flex justify-center items-center text-center">
      <h1 className="text-5xl text-white">{projectName}</h1>
    </div>
  );
};

export default Loader;
