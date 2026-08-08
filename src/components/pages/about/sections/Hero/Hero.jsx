import React from "react";
import Container from "../../../../ui/Container";
import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";
import { motion } from "framer-motion";
import { fadeRight, heroStagger } from "../../../../../animations/variants";

const Hero = () => {
  return (
    <section className="py-20 lg:py-28 bg-muted/20">
      <Container>
        <motion.div
          variants={heroStagger}
          initial="hidden"
          animate="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-col lg:flex-row items-center justify-between gap-12 "
        >
          <HeroContent />
          <motion.div variants={fadeRight} className="w-full lg:w-1/2">
            <HeroImage />
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};

export default Hero;
