import React from "react";
import aboutImage from "../../../../../assets/images/aboutImage.svg";
import { BadgeCheck, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import { fadeLeft } from "../../../../../animations/variants";

const AboutImage = () => {
  return (
    <motion.div
      variants={fadeLeft}
      className="relative flex items-center justify-center"
    >
      <div className="w-full max-w-2xl overflow-hidden rounded-3xl border border-border shadow-xl hover:-translate-y-2 transition-all duration-500 hover:shadow-2xl">
        <img
          className="h-auto w-full object-cover transition-transform duration-500 lg:scale-105"
          src={aboutImage}
          alt="About Us"
        />
      </div>
      {/* Floating Card 1 */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5 }}
        whileHover={{
          y: -5,
          scale: 1.03,
        }}
        className="absolute top-4 left-4 md:top-8 md:left-6 z-10 flex items-center gap-3 rounded-2xl border border-border bg-background px-4 py-2 shadow-lg transition-all duration-300 hover:-translate-y-1"
      >
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
          <TrendingUp className="h-10 w-10" />
        </div>
        <div>
          <p className="text-xl font-bold text-foreground">+45%</p>
          <p className="text-sm text-muted">Growth Rate</p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default AboutImage;
