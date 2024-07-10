import React from "react";
import Star from "../../../public/stars4.svg";
import Magnetic from "../Magnetic/index";
const Links = () => {
  const data = [
    {
      name: "Behance",
      href: "https://www.behance.net/albertbarnabas10",
    },
    {
      name: "Linkedin",
      href: "https://www.linkedin.com/in/albert-barnabas/",
    },
    {
      name: "Github",
      href: "https://www.github.com/AlbertBarnabas10",
    },
  ];
  return (
    <div className="links w-full h-[80px] flex items-center">
      <div className="links-container flex px-[100px] items-center w-full justify-between">
        <div className="address flex text-white">
          <span>
            <img src={Star} alt="" className="mr-3 spin-animation" />
          </span>
          <p>Jakarta Indonesia</p>
        </div>
        <ul className="link-List flex text-white">
          {data.map((datas, index) => {
            return (
              <Magnetic>
                <li key={index} className="pr-[20px] cursor-pointer">
                  <a href={datas.href}>{datas.name}</a>
                </li>
              </Magnetic>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Links;
