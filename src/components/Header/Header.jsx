import React from "react";
import Magnetic from "../Magnetic/index";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="header h-[80px] flex items-center w-full">
      <div className="header-container px-[100px] flex justify-between items-center w-full">
        <Link className="header-logo" to="/">
          <h1 className="text-2xl text-white font-bold">ab.</h1>
        </Link>
        <Magnetic>
          <div className="header-link text-sm px-6 py-3 text-white font-base">
            <a href="mailTo:albertbarnabas10@gmail.com">Let's Talk</a>
          </div>
        </Magnetic>
      </div>
    </div>
  );
};

export default Header;
