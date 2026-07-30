import React from "react";
import Hero from "./sections/Hero/Hero";
import Story from "./sections/story/Story";
import Value from "./sections/value/Value";
import Team from "./sections/Team/Team";
import CTA from "./sections/cta/CTA"

const About = () => {
  return (
    <div>
      <Hero />
      <Story />
      <Value />
      <Team />
      <CTA />
    </div>
  );
};

export default About;
