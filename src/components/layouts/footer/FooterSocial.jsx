import React from "react";
import { socialLinks } from "../../../data/footerData";

const FooterSocial = () => {
  return (
    <div>
      <h3 className="text-xl font-semibold text-white mb-6">Follow Us</h3>
      <div className="flex items-center gap-4">
        {socialLinks.map((social) => {
          const Icon = social.icon;
          return (
            <div
              key={social.id}
              className="h-11 w-11 rounded-full border border-white/20 flex items-center justify-center text-white/70 transition-all duration-300 hover:bg-primary hover:border-primary hover:text-white hover:-translate-y-1"
            >
              <a
                href={social.href}
                className="flex h-full w-full items-center justify-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon className="h-5 w-5" />
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FooterSocial;
