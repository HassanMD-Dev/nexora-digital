import React from "react";
import Container from "../../../../ui/Container";
import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";
const Hero = () => {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <Container>
        <div className="flex justify-between flex-col lg:flex-row  gap-12 items-center">
          <HeroContent />
          <HeroImage />
        </div>
      </Container>
    </section>
  );
};

export default Hero;
