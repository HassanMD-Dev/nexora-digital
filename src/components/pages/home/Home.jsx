import React from "react";
import Hero from "./sections/hero/Hero";
import About from "./sections/about/About";
import Services from "./sections/services/Services";
import Projects from "./sections/projects/Projects";
import WhyChoose from "./sections/whyChoose/WhyChoose";
import Testimonial from "./sections/testimonials/Testimonial";

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Services />
      <Projects />
      <WhyChoose />
      <Testimonial />
    </div>
  );
};

export default Home;
