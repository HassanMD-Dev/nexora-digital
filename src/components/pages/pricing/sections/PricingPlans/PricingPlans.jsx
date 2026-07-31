import React from "react";
import Container from "../../../../ui/Container";
import SectionHeading from "../../../../ui/SectionHeading";
import PricingGrid from "./PricingGrid";
const PricingPlans = () => {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <Container>
        <SectionHeading
          badge="Pricing Plans"
          title="Choose the Perfect Plan for Your Business"
          description="Simple, transparent pricing designed to fit businesses of every size. Choose the plan that best matches your goals and start building your online presence with confidence."
        />
        <div className="mt-16">
          <PricingGrid />
        </div>
      </Container>
    </section>
  );
};

export default PricingPlans;
