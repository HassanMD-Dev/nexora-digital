import React from "react";
import Hero from "./sections/hero/Hero";
import About from "./sections/about/About";
import Services from "./sections/services/Services";
import Projects from "./sections/projects/Projects";
import WhyChoose from "./sections/whyChoose/WhyChoose";
import Testimonial from "./sections/testimonials/Testimonial";
import CTA from "./sections/cta/CTA";
import Contact from "./sections/contact/Contact";

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Services />
      <Projects />
      <WhyChoose />
      <Testimonial />
      <CTA />
      <Contact />
    </div>
  );
};

export default Home;
