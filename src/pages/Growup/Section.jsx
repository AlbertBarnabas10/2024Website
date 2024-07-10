import React from "react";

const Section = ({ title, description, imageSrcs }) => {
  return (
    <div className="section pb-10">
      <div className="w-[50%]">
        <h1
          className="uppercase font-semibold pb-2"
          style={{
            fontFamily: "Montserrat",
            fontSize: "32px",
          }}
        >
          {title}
        </h1>
        <p className="text-[18px] font-light pb-10">{description}</p>
      </div>
      <div className="section-img">
        {imageSrcs.map((src, index) => (
          <img src={src} alt="" className="w-full" key={index} />
        ))}
      </div>
    </div>
  );
};

export default Section;
