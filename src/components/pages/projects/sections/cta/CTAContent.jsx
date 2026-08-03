import React from "react";
import CTAButtons from "./CTAButtons";

const CTAContent = () => {
  return (
    <div className="flex flex-col gap-6 items-center">
      <span className="rounded-full w-fit flex flex-col items-center border border-background/10 bg-primary px-4 py-2 text-sm font-medium tracking-wide text-background">
        Ready to Build?
      </span>
      <h1 className="mt-6 text-4xl lg:text-5xl text-center font-bold leading-tight text-background max-w-4xl mx-auto">
        Let's Create Your Next Digital Success Story
      </h1>
      <p className="mt-6 text-lg leading-relaxed text-center text-gray-300 max-w-2xl mx-auto">
        Whether you need a business website, e-commerce store, or a
        high-converting landing page, we're ready to bring your ideas to life
        with modern design and clean code.
      </p>
      <CTAButtons />
    </div>
  );
};

export default CTAContent;
