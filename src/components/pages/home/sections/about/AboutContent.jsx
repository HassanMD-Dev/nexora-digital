import React from "react";
import AboutFeature from "./AboutFeature";
import AboutStats from "./AboutStats";
import Button from "../../../../ui/Button";
import { ArrowRight } from "lucide-react";

const AboutContent = () => {
  return (
    <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
      <div className="mb-4">
        <p className="rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-medium tracking-wide text-primary">
          About Us
        </p>
      </div>
      <div className="mb-6">
        <h2 className="max-w-xl font-heading text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
          Helping Businesses Grow with Data Driven Digital Marketing
        </h2>
      </div>
      <div className="mb-8">
        <p className="max-w-lg text-lg leading-relaxed text-muted">
          We help businesses strengthen their online presence through SEO,
          social media marketing, paid advertising, content strategy, and
          high-converting websites. Our goal is to deliver measurable results
          that drive growth and long-term success.
        </p>
      </div>
      <div className="mb-8 w-full">
        <AboutFeature />
      </div>
      <div className="mb-10">
        <Button className="flex gap-2 items-center" variant="primary" size="md">
          Learn More <ArrowRight size={18} />
        </Button>
      </div>
      {/* <div className="mb-10 mt-10 border-t border-border pt-8">
        <AboutStats />
      </div> */}
      <div className="w-full"></div>
    </div>
  );
};

export default AboutContent;
