import React from "react";
import Container from "../../ui/Container";
import Logo from "../navbar/Logo";
import FooterLinks from "./FooterLinks";
import { quickLinks, services } from "../../../data/footerData";
import FooterSocial from "./FooterSocial";
import FooterBottom from "./FooterBottom";
import { motion } from "framer-motion";
import { heroStagger, fadeUp } from "../../../animations/variants";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-20 lg:py-28">
      <Container>
        <motion.div
          variants={heroStagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10"
        >
          <motion.div variants={fadeUp}>
            <Logo />
            <p className="text-white/70 mt-2 leading-relaxed max-w-sm">
              We create modern websites and digital experiences that help
              businesses grow through clean design, performance, and strategy.
            </p>
          </motion.div>
          <motion.div variants={fadeUp}>
            <FooterLinks links={quickLinks} title={"Quick Links"} />
          </motion.div>
          <motion.div variants={fadeUp}>
            <FooterLinks links={services} title={"Services"} />
          </motion.div>
          <motion.div variants={fadeUp}>
            <FooterSocial />
          </motion.div>
        </motion.div>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ delay: 0.4 }}
        >
          <FooterBottom />
        </motion.div>
      </Container>
    </footer>
  );
};

export default Footer;
