import React from "react";
import { motion } from "framer-motion";
const About = () => {
  return (
    <div className="about h-screen bg-white">
      <motion.div className="about-container h-screen px-[100px] flex flex-col justify-center">
        <motion.p
          initial={{ opacity: 0, y: 100 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 1,
            },
          }}
          viewport={{ once: true }}
          className="text-5xl mb-10 w-[1200px] leading-[130%] text-[#171717]"
        >
          I’m Albert, currently working as a freelance designer focusing on
          website design. I love crafting cool interfaces. My goal is to become
          a Product Designer or UX Engineer and, hey, maybe even start my own
          creative agency down the road!{" "}
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 100 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 1,
            },
          }}
          viewport={{ once: true }}
          className="text-5xl w-[1200px] leading-[130%] text-[#171717]"
        >
          I admire those who can code, transitioning from visual to interactive
          interfaces really caught my eyes. That’s why I’m half way learning
          too.
        </motion.p>
      </motion.div>
    </div>
  );
};

export default About;
