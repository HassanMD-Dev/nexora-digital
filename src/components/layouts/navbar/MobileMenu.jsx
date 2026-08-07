import React from "react";
import NavLinks from "./NavLinks";
import CTAButton from "./CTAButton";
import { motion } from "framer-motion";
import { fadeUp, heroStagger } from "../../../animations/variants";

const MobileMenu = ({ setIsOpen }) => {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="absolute top-22 rounded-xl w-full left-0 z-50 flex flex-col gap-6 bg-background border-b border-border px-4 py-4 lg:hidden"
    >
      <motion.div variants={heroStagger} initial="hidden" animate="visible">
        <motion.div className="mb-2" variants={fadeUp}>
          <NavLinks setIsOpen={setIsOpen} mobile />
        </motion.div>

        <motion.div
          className="w-full flex justify-center border-t border-muted/10"
          variants={fadeUp}
        >
          <CTAButton mobile />
        </motion.div>
      </motion.div>
    </motion.nav>
  );
};

export default MobileMenu;
