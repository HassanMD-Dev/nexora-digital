import React from "react";
import CTAButtons from "./CTAButtons";
import { motion } from "framer-motion";
import { fadeUp, heroStagger } from "../../../../../animations/variants";
const CTAContent = () => {
  return (
    <motion.div
      variants={heroStagger}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="flex flex-col gap-6 items-center"
    >
      <motion.span
        variants={fadeUp}
        className="rounded-full w-fit flex flex-col items-center border border-background/10 bg-primary px-4 py-2 text-sm font-medium tracking-wide text-background"
      >
        Ready to Build?
      </motion.span>
      <motion.h1
        variants={fadeUp}
        className="mt-6 text-4xl lg:text-5xl text-center font-bold leading-tight text-background max-w-4xl mx-auto"
      >
        Let's Create Your Next Digital Success Story
      </motion.h1>
      <motion.p
        variants={fadeUp}
        className="mt-6 text-lg leading-relaxed text-center text-gray-300 max-w-2xl mx-auto"
      >
        Whether you need a business website, e-commerce store, or a
        high-converting landing page, we're ready to bring your ideas to life
        with modern design and clean code.
      </motion.p>
      <motion.div variants={fadeUp}>
        <CTAButtons />
      </motion.div>
    </motion.div>
  );
};

export default CTAContent;
