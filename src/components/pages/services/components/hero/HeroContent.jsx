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
        className="rounded-full border border-primary/20 bg-primary/10 py-2 px-4 text-sm font-medium tracking-wide text-primary"
      >
        Our Services
      </motion.span>
      <motion.h1
        variants={fadeUp}
        className="text-4xl lg:text-6xl text-center lg:text-start max-w-2xl font-bold text-foreground"
      >
        Digital Solutions That Help Your Business Grow
      </motion.h1>
      <motion.p
        variants={fadeUp}
        className="text-lg leading-relaxed text-center lg:text-start text-muted max-w-xl"
      >
        From modern web development to responsive design and performance
        optimization, we create digital experiences that help businesses stand
        out and achieve measurable results.
      </motion.p>
      <motion.div
        variants={fadeUp}
        className="flex flex-col sm:flex-row gap-4 mt-2"
      >
        <Button variant="primary" size="md">
          Explore Services
        </Button>
        <Button variant="outline" size="md">
          Get a Free Quote
        </Button>
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
