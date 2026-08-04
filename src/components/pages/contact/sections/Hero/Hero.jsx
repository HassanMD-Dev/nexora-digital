import React from "react";
import Container from "../../../../ui/Container";
import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";

const Hero = () => {
  return (
    <section className="py-20 lg:py-28 bg-muted/20">
      <Container>
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <HeroContent />
          <HeroImage />
        </div>
      </Container>
    </section>
  );
};

export default Hero;
