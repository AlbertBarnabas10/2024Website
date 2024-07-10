import React from "react";
import Lomba from "../../assets/images/Lomba.png";
import "./grow.css";
import Growupresearch from "./Growupresearch";
import Growupcontent from "./Growupcontent";
const GrowupContext = () => {
  return (
    <div className="growup-context px-[100px] bg-white">
      <div className="context py-10">
        <div className="context-content">
          <h1
            className="uppercase font-semibold pb-2"
            style={{
              fontFamily: "Montserrat",
              fontSize: "32px",
            }}
          >
            Context
          </h1>
          <p className="text-[18px] font-light">
            This website is a project used by I and my team to win 2nd place in
            web development competition held by I/O FTI UNTAR on 2022. GrowUp is
            an original idea based on what happened during Covid-19 Pandemic.
            GrowUp is an online mentoring application takes the form of a class
            with Learning Management System (LMS) features.
          </p>
          <br />
          <p className="text-[18px] font-light">
            The purpose of this application are opening an opportunity for
            individuals to implement their expertise through teaching classes
            and to help improve the quality of human resources in Indonesia,
            empowering them to compete in the world of Industry 4.0.
          </p>
          <div className="context-data py-5">
            <p className="text-lg font-semibold pb-2">
              <span className="italic text-lg mr-2">Timeline:</span> 2024
            </p>
            <p className="text-lg font-semibold pb-2">
              <span className="italic text-lg mr-2">Category:</span> Competition
            </p>
            <p className="text-lg font-semibold pb-2">
              <span className="italic text-lg mr-2">Role:</span> Designer &
              Developer
            </p>
            <p className="text-lg font-semibold pb-2">
              <span className="italic text-lg mr-2">Tools:</span> Figma
            </p>
          </div>
        </div>
        <div className="context-img">
          <img src={Lomba} alt="" />
        </div>
      </div>
      <div className="problem-container grid grid-cols-2 gap-5 pb-10">
        <div className="problem">
          <h1
            className="uppercase font-semibold pb-2"
            style={{
              fontFamily: "Montserrat",
              fontSize: "32px",
            }}
          >
            The problem
          </h1>
          <p className="text-[18px] font-light">
            During the competition, we were forced to hard design and code to
            completed the website application. While we focus on coding, the
            design wasn’t fully done missing a lot of important steps such as
            testing, research and many more. Besides that, a lot of improvement
            from the interface needed to be done.
          </p>
        </div>
        <div className="deployment">
          <h1
            className="uppercase font-semibold pb-2"
            style={{
              fontFamily: "Montserrat",
              fontSize: "32px",
            }}
          >
            deployment
          </h1>
          <p className="text-[18px] font-light">
            You can check the previous version of the design while surfing
            through the deployed website by accessing this link below:
            growup.ndaruhes.com
          </p>
        </div>
      </div>
      <hr className="border-[#D9D9D9] h-[1px] pb-10" />
      <Growupresearch />
      <Growupcontent />
    </div>
  );
};

export default GrowupContext;
