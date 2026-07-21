import React from "react";
import NavLinks from "./NavLinks";
import CTAButton from "./CTAButton";

const MobileMenu = ({ setIsOpen }) => {
  return (
    <nav className="absolute top-full left-0 z-50 w-full flex flex-col gap-6 bg-background border-b border-border px-4 py-4 lg:hidden">
      <NavLinks setIsOpen={setIsOpen} mobile />
      <CTAButton mobile />
    </nav>
  );
};

export default MobileMenu;
