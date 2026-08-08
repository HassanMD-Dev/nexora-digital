import React from "react";
import projectCategories from "../../../../../data/projectCategories";
import Button from "../../../../ui/Button";
import { motion } from "framer-motion";
import { fadeUp, heroStagger } from "../../../../../animations/variants";

const FilterButtons = ({ activeCategory, setActiveCategory }) => {
  return (
    <motion.div
      variants={heroStagger}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="flex gap-4 justify-center flex-wrap items-center"
    >
      {projectCategories.map((category, index) => (
        <motion.div
          key={index}
          variants={fadeUp}
          whileHover={{ y: -3 }}
          transition={{ duration: 0.2 }}
        >
          <Button
            onClick={() => setActiveCategory(category)}
            variant={category === activeCategory ? "primary" : "outline"}
            size="md"
          >
            {category}
          </Button>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default FilterButtons;
