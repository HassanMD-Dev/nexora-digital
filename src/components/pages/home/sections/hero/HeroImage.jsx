import React from "react";
import heroIllustration from "../../../../../assets/images/heroImage.svg";
import { motion } from "framer-motion";
import { fadeRight } from "../../../../../animations/variants";

const HeroImage = () => {
  return (
    <motion.div
      variants={fadeRight}
      initial="hidden"
      animate="visible"
      className="relative flex items-center justify-center"
    >
      <div className="absolute -z-10 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
      <img
        className="h-auto w-full hover:scale-[1.03] transition-transform duration-500"
        src={heroIllustration}
        alt="Digital Marketing Dashboard"
      />
    </motion.div>
  );
};

export default HeroImage;
