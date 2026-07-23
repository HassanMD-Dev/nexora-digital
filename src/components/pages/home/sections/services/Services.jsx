import React from "react";
import Container from "../../../../ui/Container";
import SectionHeading from "../../../../ui/SectionHeading";
import ServiceGrid from "./ServiceGrid";
const Services = () => {
  return (
    <section className="bg-muted/20 py-20 lg:py-28">
      <Container>
        <SectionHeading
          badge="Our Services"
          title="Digital Marketing Services That Drive Real Growth"
          description="From SEO and paid advertising to social media marketing and modern web development, we help businesses attract more customers and grow online."
        />
        <div className="mt-16">
        <ServiceGrid />
        </div>
      </Container>
    </section>
  );
};

export default Services;
