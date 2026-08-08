import React from "react";
import heroImg from "../../../../../assets/images/serviceImg.svg";
import { motion } from "framer-motion";
import { fadeRight, heroStagger } from "../../../../../animations/variants";

const HeroImage = () => {
  return (
    <motion.div
      variants={heroStagger}
      initial="hidden"
      animate="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="flex-1 flex items-center justify-center"
    >
      <motion.div variants={fadeRight} className="relative w-full max-w-xl">
        <img
          src={heroImg}
          alt="service image"
          className="w-full h-auto object-contain drop-shadow-2xl transition-all duration-500 hover:scale-105"
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroImage;
