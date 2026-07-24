import React from "react";
import Container from "../../../../ui/Container";
import SectionHeading from "../../../../ui/SectionHeading";
import WhyChooseGrid from "./WhyChooseGrid";

const WhyChoose = () => {
  return (
    <section className="py-20 lg:py-28 bg-muted/20">
      <Container>
        <SectionHeading
          badge="Why Choose Us"
          title="The Right Partner for Your Digital Growth"
          description="We combine strategy, creativity, and technology to help businesses grow with confidence. Every solution is tailored to your goals and focused on delivering measurable results."
        />
        <div className="mt-16">
          <WhyChooseGrid />
        </div>
      </Container>
    </section>
  );
};

export default WhyChoose;
