import React from "react";
import storyHighlights from "../../../../../data/aboutData";
import { motion } from "framer-motion";
import {
  cardStagger,
  fadeRight,
  fadeUp,
} from "../../../../../animations/variants";

const StoryContent = () => {
  return (
    <motion.div
      variants={fadeRight}
      className="flex-1 flex flex-col items-start gap-8 mt-12"
    >
      <motion.h3
        variants={fadeUp}
        className="text-4xl lg:text-5xl font-bold text-foreground"
      >
        Our Mission
      </motion.h3>
      <motion.p
        variants={fadeUp}
        className="text-lg leading-relaxed text-muted max-w-xl"
      >
        We believe every business deserves a website that not only looks modern
        but also delivers real value. Our focus is on creating digital
        experiences that are fast, user-friendly, and built to help brands grow
        with confidence.
      </motion.p>
      <motion.p
        variants={fadeUp}
        className="text-lg leading-relaxed text-muted max-w-xl"
      >
        By combining thoughtful design, clean development, and long-term
        support, we build solutions that strengthen online presence and create
        meaningful connections between businesses and their customers.
      </motion.p>
      <motion.div
        variants={cardStagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="flex flex-col mt-8 gap-5"
      >
        {storyHighlights.map((story) => {
          const Icon = story.icon;
          return (
            <motion.div
              variants={fadeUp}
              key={story.id}
              className="flex items-center gap-4"
            >
              <div className="h-10 w-10 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                <Icon className="h-5 w-5" />
              </div>
              <p className="font-medium text-foreground leading-6">
                {story.title}
              </p>
            </motion.div>
          );
        })}
      </motion.div>
    </motion.div>
  );
};

export default StoryContent;
