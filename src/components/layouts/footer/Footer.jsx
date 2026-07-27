import React from "react";
import Container from "../../ui/Container";
import Logo from "../navbar/Logo";
import FooterLinks from "./FooterLinks";
import { quickLinks, services } from "../../../data/footerData";
import FooterSocial from "./FooterSocial";
import FooterBottom from "./FooterBottom";
const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-20 lg:py-28">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <Logo />
            <p className="text-white/70 mt-2 leading-relaxed max-w-sm">
              We create modern websites and digital experiences that help
              businesses grow through clean design, performance, and strategy.
            </p>
          </div>
          <div>
            <FooterLinks links={quickLinks} title={"Quick Links"} />
          </div>
          <div>
            <FooterLinks links={services} title={"Services"} />
          </div>
          <div>
            <FooterSocial />
          </div>
        </div>
        <FooterBottom />
      </Container>
    </footer>
  );
};

export default Footer;
