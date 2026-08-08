import React from "react";
import aboutValueData from "../../../../../data/aboutValuesData";
import ValueCard from "./ValueCard";
import { motion } from "framer-motion";
import { cardStagger, fadeUp } from "../../../../../animations/variants";

const ValuesGrid = () => {
  return (
    <motion.div
      variants={cardStagger}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
    >
      {aboutValueData.map((value) => (
        <motion.div key={value.id} variants={fadeUp}>
          <ValueCard value={value} />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default ValuesGrid;
