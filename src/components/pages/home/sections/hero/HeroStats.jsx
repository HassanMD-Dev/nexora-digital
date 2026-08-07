import React from "react";
import heroStats from "../../../../../data/heroStats";
import { motion } from "framer-motion";
import { heroStagger, fadeUp } from "../../../../../animations/variants";
const HeroStats = () => {
  return (
    <motion.div
      variants={heroStagger}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="grid grid-cols-3 gap-6 w-full"
    >
      {heroStats.map((stat) => (
        <motion.div
          variants={fadeUp}
          className="flex flex-col items-center lg:items-start"
          key={stat.id}
        >
          <p className="text-3xl font-bold text-primary">
            {stat.value}
            {stat.suffix}
          </p>

          <p className="text-sm text-muted-foreground">{stat.label}</p>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default HeroStats;
