import React from "react";
import Container from "../../ui/Container";
import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";

const Hero = () => {
  return (
    <section>
      <Container>
        <HeroContent />
        <HeroImage />
      </Container>
    </section>
  );
};

export default Hero;
