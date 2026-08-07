import React from "react";
import Container from "../../../../ui/Container";
import AboutContent from "./AboutContent";
import AboutImage from "./AboutImage";
import { motion } from "framer-motion";
import { heroStagger } from "../../../../../animations/variants";

const About = () => {
  return (
    <section className="py-20 lg:py-28">
      <Container>
        <motion.div
          variants={heroStagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          <AboutImage />
          <AboutContent />
        </motion.div>
      </Container>
    </section>
  );
};

export default About;
