import React from "react";
import { NavLink } from "react-router-dom";
import navLinks from "../../../data/navLinks";

const NavLinks = ({ mobile = false, setIsOpen }) => {
  const layoutStyling = mobile
    ? "flex flex-col lg:hidden"
    : "hidden lg:flex lg:flex-row";

  const closedMenu = () => {
    if (mobile) {
      setIsOpen?.(false);
    }
  };
  return (
    <nav>
      <ul className={`${layoutStyling} items-center gap-8`}>
        {navLinks.map((link) => (
          <li key={link.id} >
            <NavLink
            onClick={closedMenu}
              className={({ isActive }) =>
                `font-body font-medium text-foreground hover:text-primary transition-colors duration-300 ${isActive ? "text-primary" : ""}`
              }
              to={link.path}
            >
              {link.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavLinks;
