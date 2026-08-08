import React from "react";
import Button from "../../../../ui/Button";
import { motion } from "framer-motion";
import { fadeUp, heroStagger } from "../../../../../animations/variants";
const HeroContent = () => {
  return (
    <motion.div
      variants={heroStagger}
      initial="hidden"
      animate="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="flex flex-col items-center lg:items-start gap-6"
    >
      <motion.span
        variants={fadeUp}
        className="rounded-full border border-primary/20 bg-primary/10 text-primary px-4 py-2 text-sm font-medium tracking-wide"
      >
        Our Portfolio
      </motion.span>
      <motion.h1
        variants={fadeUp}
        className="text-4xl lg:text-6xl text-center lg:text-start font-bold leading-tight text-foreground max-w-2xl"
      >
        Projects That Drive Business Growth
      </motion.h1>
      <motion.p
        variants={fadeUp}
        className="text-lg leading-relaxed text-center lg:text-start text-muted max-w-xl"
      >
        Explore a selection of websites and digital experiences we've crafted to
        help businesses grow, engage customers, and achieve measurable results.
      </motion.p>
      <motion.div
        variants={fadeUp}
        className="flex flex-col sm:flex-row items-center gap-4 mt-4"
      >
        <Button variant="primary" size="md">
          Explore Projects
        </Button>
        <Button variant="outline" size="md">
          Start Your Project
        </Button>
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
