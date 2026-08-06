import React from "react";
import Container from "../../../../ui/Container";
import SectionHeading from "../../../../ui/SectionHeading";
import TestimonialCarousel from "./TestimonialCarousel";

const Testimonial = () => {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <Container>
        <SectionHeading
          badge={"Testimonials"}
          title={"Trusted by Happy Clients"}
          description={
            "We take pride in building strong relationships and delivering results that exceed expectations. Here's what our clients have to say about working with us."
          }
        />
        <div className="mt-16">
          <TestimonialCarousel />
        </div>
      </Container>
    </section>
  );
};

export default Testimonial;
