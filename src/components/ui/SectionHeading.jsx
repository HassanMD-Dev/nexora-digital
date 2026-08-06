import { motion } from "framer-motion";
import React from "react";
import { fadeUp } from "../../animations/variants";

const SectionHeading = ({ title, badge, description }) => {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="flex flex-col"
    >
      <div className="mb-5">
        <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-5 py-2 text-sm font-medium tracking-wide text-primary">
          {badge}
        </span>
      </div>

      <h2 className="mb-6 max-w-4xl font-heading text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
        {title}
      </h2>

      <p className="max-w-2xl leading-relaxed text-muted">{description}</p>
    </motion.div>
  );
};

export default SectionHeading;
