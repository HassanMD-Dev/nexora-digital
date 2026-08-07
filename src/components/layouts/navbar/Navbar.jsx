import React, { useEffect, useState } from "react";
import Container from "../../ui/Container";
import Logo from "../navbar/Logo";
import NavLinks from "../navbar/NavLinks";
import CTAButton from "../navbar/CTAButton";
import MobileMenuButton from "../navbar/MobileMenuButton";
import MobileMenu from "./MobileMenu";
import { AnimatePresence, motion } from "framer-motion";
import { fadeLeft, fadeRight, fadeUp } from "../../../animations/variants";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);

  useEffect(() => {
    let lastScroll = window.scrollY;

    const handleScroll = () => {
      if (window.scrollY > lastScroll && window.scrollY > 100) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      lastScroll = window.scrollY;
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <motion.header
      animate={{
        y: showNavbar ? 0 : -120,
        opacity: showNavbar ? 1 : 0,
      }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative sticky top-2 mx-4 z-50 flex justify-center"
    >
      <nav className="w-full rounded-2xl max-w-7xl bg-background/20 backdrop-blur-2xl z-50 border border-border shadow-sm">
        <Container className="flex items-center justify-between h-20">
          <motion.div variants={fadeLeft} initial="hidden" animate="visible">
            <Logo />
          </motion.div>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
          >
            <NavLinks />
          </motion.div>
          <motion.div
            variants={fadeRight}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.4 }}
          >
            <CTAButton />
          </motion.div>
          <MobileMenuButton
            onClickHan={() => setIsOpen((prev) => !prev)}
            isOpen={isOpen}
          />
        </Container>
      </nav>
      <AnimatePresence>
        {isOpen && <MobileMenu setIsOpen={setIsOpen} />}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
