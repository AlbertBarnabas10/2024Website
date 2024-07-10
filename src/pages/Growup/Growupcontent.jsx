import React from "react";
import Section from "./Section"; // Make sure to adjust the import path as needed
import hmw from "../../assets/images/hmw.png";
import sketch from "../../assets/images/sketch.png";
import logo from "../../assets/images/logo.png";
import uf1 from "../../assets/images/uf1.png";
import uf2 from "../../assets/images/uf2.png";
import wireframe from "../../assets/images/wireframe.png";
import landing from "../../assets/images/landing.png";
import dashboard from "../../assets/images/dashboard.png";

const sections = [
  {
    title: "how might we",
    description:
      "From the research finding above, this is how i might resolve the problems.",
    imageSrcs: [hmw],
  },
  {
    title: "sketching",
    description:
      "Sketching some layout before finally move to low fidelity mockup in Figma.",
    imageSrcs: [sketch],
  },
  {
    title: "Logo design",
    description:
      "Decided to change the logo left to right while maintaining the context of the website application.",
    imageSrcs: [logo],
  },
  {
    title: "User flow",
    description:
      "Created user flow that was missing during the competition. What we did was just drawing and put it on note. So I decided to create one using FigJam.",
    imageSrcs: [uf1, uf2],
  },
  {
    title: "wireframing",
    description:
      "Created a low fidelity mockup from the sketch above, and adding some additional layers.",
    imageSrcs: [wireframe],
  },
  {
    title: "Visualization",
    description:
      "Created high fidelity design by using the wireframe created above.",
    imageSrcs: [landing],
  },
  {
    title: "Dashboard",
    description: "",
    imageSrcs: [dashboard],
  },
];

const Growupcontent = () => {
  return (
    <div>
      {sections.map((section, index) => (
        <Section
          key={index}
          title={section.title}
          description={section.description}
          imageSrcs={section.imageSrcs}
        />
      ))}
      <hr className="border-[#D9D9D9] h-[1px] pb-10" />
      <div className="key-container grid grid-cols-2 gap-5 pb-10">
        <div className="key-learning">
          <h1
            className="uppercase font-semibold pb-2"
            style={{
              fontFamily: "Montserrat",
              fontSize: "32px",
            }}
          >
            key learning
          </h1>
          <p className="text-[18px] font-light">
            During working on this study case, I have learnt a lot of lesson
            such as:
            <ul>
              <li className="list-disc list-inside font-light text-base leading-snug">
                The ability to value every feedback from user (empathy)
              </li>
              <li className="list-disc list-inside font-light text-base leading-snug">
                To understand every role of the user of the web application
              </li>
              <li className="list-disc list-inside font-light text-base leading-snug">
                To be able to finished what I have started in the past (empathy)
              </li>
              <li className="list-disc list-inside font-light text-base leading-snug">
                Learn bento grid layout
              </li>
              <li className="list-disc list-inside font-light text-base leading-snug">
                and many more
              </li>
            </ul>
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
            summary
          </h1>
          <p className="text-[18px] font-light">
            I created each and every features that should’ve existed like
            dashboard for mentor and mentee as well as they function. I also
            created a style guide for the project to have a consistent colors,
            fonts, spacing and even grid layout. Thank you for staying till the
            end, I will put the Figma link below this section, once again thank
            you
          </p>
        </div>
      </div>
      <hr className="border-[#D9D9D9] h-[1px] pb-10" />
    </div>
  );
};

export default Growupcontent;
