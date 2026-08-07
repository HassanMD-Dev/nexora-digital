import React from "react";
import { NavLink } from "react-router-dom";

const FooterLinks = ({ links, title }) => {
  return (
    <div className="flex flex-col gap-6">
      <h3 className="text-xl font-semibold text-white">{title}</h3>
      {links.map((link) => (
        <NavLink
          key={link.id}
          className="text-white/70 transition-all duration-300 hover:text-primary hover:translate-x-1"
          to={link.href}
        >
          {link.title}
        </NavLink>
      ))}
    </div>
  );
};

export default FooterLinks;
