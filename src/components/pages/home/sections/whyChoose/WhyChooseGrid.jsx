import React from "react";
import whyChooseData from "../../../../../data/whyChooseData";
import WhyChooseCard from "./WhyChooseCard";
import { motion } from "framer-motion";
import { cardStagger, fadeUp } from "../../../../../animations/variants";

const WhyChooseGrid = () => {
  return (
    <motion.div
      variants={cardStagger}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"
    >
      {whyChooseData.map((whyChoose) => (
        <motion.div variants={fadeUp} key={whyChoose.id}>
          <WhyChooseCard whyChoose={whyChoose} />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default WhyChooseGrid;
