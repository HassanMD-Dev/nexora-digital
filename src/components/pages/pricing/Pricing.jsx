import React from "react";
import Hero from "./sections/Hero/Hero";
import PricingPlans from "./sections/PricingPlans/PricingPlans";
import FAQ from "./sections/faqs/FAQ";
import CTA from "../pricing/sections/cta/CTA"
const Pricing = () => {
  return (
    <div>
      <Hero />
      <PricingPlans />
      <FAQ />
      <CTA />
    </div>
  );
};

export default Pricing;
