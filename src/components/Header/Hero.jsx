import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="hero flex flex-col items-center">
      <motion.div
        className="hero-heading flex w-[800px] flex-wrap justify-center"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: {
            duration: 1.5,
          },
        }}
      >
        <h1 className="text-white text-8xl tracking-tight  uppercase font-black text-center mb-5 leading-[120px]">
          Crafting Digital Design.
        </h1>
      </motion.div>
      <motion.p
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0, transition: { duration: 2 } }}
        className="text-white text-l"
      >
        Freelance UI/UX Designer
      </motion.p>
    </div>
  );
};

export default Hero;
