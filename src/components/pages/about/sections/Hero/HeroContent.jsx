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
        className="rounded-full border w-fit border-primary/20 bg-primary/10 py-2 px-4 text-sm font-medium tracking-wide text-primary"
      >
        About Us
      </motion.span>
      <motion.h1
        variants={fadeUp}
        className="text-4xl lg:text-6xl text-center lg:text-start max-w-2xl font-bold text-foreground"
      >
        Passionate About Building Modern Digital Experiences
      </motion.h1>
      <motion.p
        variants={fadeUp}
        className="text-lg leading-relaxed text-center lg:text-start text-muted max-w-xl"
      >
        We are a digital agency dedicated to creating fast, responsive, and
        user-focused websites. By combining thoughtful design with clean
        development, we help businesses establish a strong online presence and
        achieve long-term growth.
      </motion.p>
      <motion.div
        variants={fadeUp}
        className="flex flex-col sm:flex-row items-center gap-4 mt-2"
      >
        <Button variant="primary" size="md">
          Our Services
        </Button>
        <Button variant="outline" size="md">
          Let's Talk
        </Button>
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
