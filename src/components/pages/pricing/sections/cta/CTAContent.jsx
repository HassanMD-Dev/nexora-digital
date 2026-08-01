import React from "react";
import CTAButtons from "./CTAButtons";

const CTAContent = () => {
  return (
    <div className="flex flex-col gap-6 items-center">
      <span className="rounded-full w-fit flex flex-col items-center border border-background/10 bg-primary px-4 py-2 text-sm font-medium tracking-wide text-background">
        Ready to Get Started?
      </span>
      <h1 className="mt-6 text-4xl lg:text-5xl text-center font-bold leading-tight text-background max-w-4xl mx-auto">
        Choose the Perfect Plan for Your Business
      </h1>
      <p className="mt-6 text-lg leading-relaxed text-center text-gray-300 max-w-2xl mx-auto">
        Select the plan that best fits your goals and let us build a fast, modern, and high-converting website for your business.
      </p>
      <CTAButtons />
    </div>
  );
};

export default CTAContent;
