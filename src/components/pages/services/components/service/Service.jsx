import React from "react";
import Container from "../../../../ui/Container";
import SectionHeading from "../../../../ui/SectionHeading";
import ServiceGrid from "./ServiceGrid";

const Service = () => {
  return (
    <section className="py-20 lg:py-28 bg-muted/20">
      <Container>
        <SectionHeading
          badge="What We Offer"
          title="Solutions Designed for Your Success"
          description="Explore our range of digital services crafted to help businesses build a strong online presence, improve user experience, and achieve measurable growth."
        />
      <ServiceGrid />
      </Container>
    </section>
  );
};

export default Service;
