import React from "react";
import arrowRight from "../../assets/images/arrow-right.svg";
import Magnetic from "../Magnetic/index";
const FooterContact = ({ data }) => {
  return (
    <div className="footer-contact">
      <div>
        <p className="leading-tight text-sm">
          Feel free to drop me an email with your project briefs. It would be my
          pleasure to help you solve your problems.
        </p>
      </div>
      <div className="flex flex-col text-sm">
        <span className="flex">
          email
          <Magnetic>
            <img className="ml-1" src={arrowRight} alt="" />
          </Magnetic>
        </span>
        <a href="mailTo:albertbarnabas10@gmail.com">
          albertbarnabas10@gmail.com
        </a>
      </div>
      <div className="flex flex-col text-sm">
        {data.map((datas, index) => (
          <Magnetic>
            <a key={index} href={datas.href} className="pb-[4px]">
              {datas.name}
            </a>
          </Magnetic>
        ))}
      </div>
      <div>
        <span className="leading-[1] text-sm">
          Made with<span>💖</span>
          {/* <br /> */}
          by Albert Barnabas.
          <br />
          2024 &copy;
        </span>
      </div>
    </div>
  );
};

export default FooterContact;
