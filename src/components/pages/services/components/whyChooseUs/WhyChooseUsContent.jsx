import React from "react";
import FeatureList from "./FeatureList";
import whyChoosePSData from "../../../../../data/whyChoosePSData";
import Button from "../../../../ui/Button";
import { motion } from "framer-motion";
import {
  cardStagger,
  fadeUp,
  heroStagger,
} from "../../../../../animations/variants";
const WhyChooseUsContent = () => {
  return (
    <motion.div
      variants={heroStagger}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="flex-1 flex flex-col items-center lg:items-start"
    >
      <div>
        <motion.span
          variants={fadeUp}
          className="rounded-full border border-primary/10 px-5 py-3 text-sm font-medium tracking-wide text-primary"
        >
          Why Choose Us
        </motion.span>
        <motion.h1
          variants={fadeUp}
          className="mt-6 text-4xl lg:text-5xl font-bold leading-tight text-foreground max-w-xl"
        >
          The Right Partner for Your Digital Growth
        </motion.h1>
        <motion.p
          variants={fadeUp}
          className="mt-6 text-lg leading-relaxed mb-12 text-muted max-w-xl"
        >
          We focus on creating modern, high-performing websites that combine
          beautiful design, clean development, and long-term scalability to help
          your business succeed online.
        </motion.p>
      </div>
      <motion.div
        variants={cardStagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="flex flex-col gap-2"
      >
        {whyChoosePSData.map((whyChoose) => (
          <motion.div key={whyChoose.id} variants={fadeUp}>
            <FeatureList whyChoose={whyChoose} />
          </motion.div>
        ))}
      </motion.div>
      <motion.div variants={fadeUp}>
        <Button className="mt-10 w-60" variant="primary" size="md">
          Let's Work Together
        </Button>
      </motion.div>
    </motion.div>
  );
};

export default WhyChooseUsContent;
