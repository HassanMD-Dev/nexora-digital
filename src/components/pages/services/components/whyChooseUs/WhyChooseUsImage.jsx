import React from "react";
import TeamImg from "../../../../../assets/images/TeamWork.svg";
import { motion } from "framer-motion";
import { fadeRight, heroStagger } from "../../../../../animations/variants";
const WhyChooseUsImage = () => {
  return (
    <motion.div
      variants={heroStagger}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="flex-1 flex justify-center items-center"
    >
      <motion.div variants={fadeRight} className="relative w-full max-w-xl">
        <img
          src={TeamImg}
          alt="Why Choose"
          className="w-full h-auto object-contain drop-shadow-2xl"
        />
      </motion.div>
    </motion.div>
  );
};

export default WhyChooseUsImage;
