import React from "react";
import Container from "../../ui/Container";
import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";

const Hero = () => {
  return (
    <section className="py-20 lg:py-28">
      <Container className="grid lg:grid-cols-2 gap-16 items-center">
        <HeroContent />
        <HeroImage />
      </Container>
    </section>
  );
};

export default Hero;
