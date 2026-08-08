import React from "react";
import processData from "../../../../../data/processData";
import ProcessCard from "./ProcessCard";
import { motion } from "framer-motion";
import { cardStagger, fadeUp } from "../../../../../animations/variants";
const ProcessGrid = () => {
  return (
    <motion.div
      variants={cardStagger}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-16 gap-8"
    >
      {processData.map((process) => (
        <motion.div key={process.id} variants={fadeUp}>
          <ProcessCard process={process} />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default ProcessGrid;
