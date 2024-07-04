import React from "react";
import Header from "./Header/Header";
import Hero from "./Header/Hero";
import Links from "./Header/Links";

const Home = () => {
  return (
    <div className="home flex flex-col justify-between items-center w-full min-h-screen">
      <Header />
      <Hero />
      <Links />
    </div>
  );
};

export default Home;
