import React from "react";
import Image1 from "../../assets/images/img1.png";
import Image2 from "../../assets/images/img2.png";
import Image3 from "../../assets/images/img3.png";

const FooterImages = () => {
  return (
    <div className="footer-images relative">
      <img src={Image2} alt="" className="px-5" />
      <img src={Image1} alt="" className="px-5" />
      <img src={Image3} alt="" className="px-5" />
    </div>
  );
};

export default FooterImages;
