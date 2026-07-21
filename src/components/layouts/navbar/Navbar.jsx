import React, { useState } from "react";
import Container from "../../ui/Container";
import Logo from "../navbar/Logo";
import NavLinks from "../navbar/NavLinks";
import CTAButton from "../navbar/CTAButton";
import MobileMenuButton from "../navbar/MobileMenuButton";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="relative sticky top-4 z-50 flex justify-center">
      <nav className="w-full rounded-2xl bg-background z-50 border border-border shadow-sm">
        <Container className="flex items-center justify-between h-20">
          <Logo />
          <NavLinks />
          <CTAButton />
          <MobileMenuButton
            onClickHan={() => setIsOpen((prev) => !prev)}
            isOpen={isOpen}
          />
        </Container>
      </nav>
      {isOpen && <MobileMenu setIsOpen={setIsOpen} />}
    </header>
  );
};

export default Navbar;
