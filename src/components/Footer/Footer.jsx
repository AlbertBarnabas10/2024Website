import React from "react";
import FooterText from "./FooterText";
import FooterImages from "./FooterImages";
import FooterContact from "./FooterContact";
import "./footer.css";

const Footer = () => {
  const data = [
    {
      name: "Behance",
      href: "/",
    },
    {
      name: "Linkedin",
      href: "/",
    },
    {
      name: "Github",
      href: "/",
    },
  ];
  return (
    <div className="footer h-screen bg-white">
      <div className="footer-container px-[100px] py-10 flex flex-col justify-between h-full">
        <div className="footer-content">
          <FooterText />
          <FooterImages />
        </div>
        <FooterContact data={data} />
      </div>
    </div>
  );
};

export default Footer;
