import React from "react";
import Button from "../../../../ui/Button";
const HeroContent = () => {
  return (
    <div className="flex flex-col items-center lg:items-start gap-6">
      <span className="rounded-full border border-primary/20 bg-primary/10 text-primary px-4 py-2 text-sm font-medium tracking-wide">
        Pricing Plans
      </span>
      <h1 className="text-4xl lg:text-6xl text-center lg:text-start font-bold leading-tight text-foreground max-w-2xl">
        Flexible Pricing for Every Business
      </h1>
      <p className="text-lg leading-relaxed text-center lg:text-start text-muted max-w-xl">
        Choose a pricing plan that fits your business goals. From startups to
        growing companies, we provide transparent pricing and high-quality
        digital solutions with no hidden costs.
      </p>
      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
        <Button variant="primary" size="md">
          Get Started
        </Button>
        <Button variant="outline" size="md">
          Compare Plans
        </Button>
      </div>
    </div>
  );
};

export default HeroContent;
