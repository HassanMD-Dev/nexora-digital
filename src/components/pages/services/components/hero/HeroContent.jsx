import React from "react";
import Button from "../../../../ui/Button";

const HeroContent = () => {
  return (
    <div className="flex flex-col items-start gap-6">
      <span className="rounded-full border border-primary/20 bg-primary/10 py-2 px-4 text-sm font-medium tracking-wide text-primary">
        Our Services
      </span>
      <h1 className="text-4xl lg:text-6xl max-w-2xl font-bold text-foreground">
        Digital Solutions That Help Your Business Grow
      </h1>
      <p className="text-lg leading-relaxed text-muted max-w-xl">
        From modern web development to responsive design and performance
        optimization, we create digital experiences that help businesses stand
        out and achieve measurable results.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 mt-2">
        <Button variant="primary" size="md">
          Explore Services
        </Button>
        <Button variant="outline" size="md">
          Get a Free Quote
        </Button>
      </div>
    </div>
  );
};

export default HeroContent;
