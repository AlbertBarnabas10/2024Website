import React, { useState, useEffect } from "react";
import Header from "../../../src/components/Header/Header";
import Growimg from "../../assets/images/Growup Landing.png";
import GrowupContext from "./GrowupContext";
import Footer from "../../components/Footer/Footer";
import Loader from "../../../src/components/Loader/Loader";
const Growup = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);
  if (isLoading) {
    return <Loader projectName="Grow Up" />;
  }
  return (
    <div className="growup">
      <div className="grow-header h-[120vh] flex flex-col justify-between">
        <Header />
        <div className="grow-heading w-full mx-auto px-[100px]">
          <div className="grow-title flex flex-col items-center justify-center text-white">
            <h1 className="text-4xl font-semibold mb-10">GrowUp</h1>
          </div>
          <div className="grow-img w-[1200px] mx-auto mb-6">
            <img src={Growimg} alt="" />
          </div>
        </div>
      </div>
      {/* growup context */}
      <GrowupContext />
      <Footer />
    </div>
  );
};

export default Growup;
