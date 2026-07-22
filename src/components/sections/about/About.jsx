import React from "react";
import Container from "../../ui/Container";
import AboutContent from "./AboutContent";
import AboutImage from "./AboutImage";

const About = () => {
  return (
    <section className="py-20 lg:py-28">
      <Container className="grid lg:grid-cols-2 gap-12 items-center">
        <AboutImage />
        <AboutContent />
      </Container>
    </section>
  );
};

export default About;
