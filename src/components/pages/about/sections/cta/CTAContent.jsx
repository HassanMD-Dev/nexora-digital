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
        className="rounded-full w-fit flex flex-col items-center border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-medium tracking-wide text-primary"
      >
        Let's Build Together
      </motion.span>
      <motion.h1
        variants={fadeUp}
        className="mt-6 text-4xl lg:text-5xl text-center font-bold leading-tight text-foreground max-w-4xl mx-auto"
      >
        Ready to Turn Your Vision Into Reality?
      </motion.h1>
      <motion.p
        variants={fadeUp}
        className="mt-6 text-lg leading-relaxed text-center text-muted max-w-2xl mx-auto"
      >
        Whether you're launching a new business, refreshing your online
        presence, or building a custom web solution, our team is ready to help
        you achieve your goals with confidence.
      </motion.p>
      <motion.div variants={fadeUp}>
        <CTAButtons />
      </motion.div>
    </motion.div>
  );
};

export default CTAContent;
