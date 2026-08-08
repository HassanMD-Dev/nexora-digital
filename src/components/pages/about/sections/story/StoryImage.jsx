import React from "react";
import StoryImg from "../../../../../assets/images/storyImg.svg";
import { motion } from "framer-motion";
import { fadeLeft, heroStagger } from "../../../../../animations/variants";

const StoryImage = () => {
  return (
    <motion.div
      variants={heroStagger}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="flex-1 flex items-center justify-center"
    >
      <motion.div variants={fadeLeft} className="relative w-full max-w-2xl">
        <img
          src={StoryImg}
          alt="Our Story"
          className="w-full h-auto object-contain drop-shadow-2xl"
        />
      </motion.div>
    </motion.div>
  );
};

export default StoryImage;
