import React from "react";
import FeatureList from "./FeatureList";
import whyChoosePSData from "../../../../../data/whyChoosePSData";
import Button from "../../../../ui/Button";

const WhyChooseUsContent = () => {
  return (
    <div className="flex-1 flex flex-col items-center lg:items-start">
      <div>
        <span className="rounded-full border border-primary/10 px-5 py-3 text-sm font-medium tracking-wide text-primary">
          Why Choose Us
        </span>
        <h1 className="mt-6 text-4xl lg:text-5xl font-bold leading-tight text-foreground max-w-xl">
          The Right Partner for Your Digital Growth
        </h1>
        <p className="mt-6 text-lg leading-relaxed mb-12 text-muted max-w-xl">
          We focus on creating modern, high-performing websites that combine
          beautiful design, clean development, and long-term scalability to help
          your business succeed online.
        </p>
      </div>
      <div className="flex flex-col gap-2">
        {whyChoosePSData.map((whyChoose) => (
          <FeatureList key={whyChoose.id} whyChoose={whyChoose} />
        ))}
      </div>
      <Button className="mt-10 w-60" variant="primary" size="md">
        Let's Work Together
      </Button>
    </div>
  );
};

export default WhyChooseUsContent;
