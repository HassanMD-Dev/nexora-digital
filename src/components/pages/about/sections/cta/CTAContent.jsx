import React from "react";
import CTAButtons from "./CTAButtons";

const CTAContent = () => {
  return (
    <div className="flex flex-col gap-6 items-center">
      <span className="rounded-full w-fit flex flex-col items-center border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-medium tracking-wide text-primary">
        Let's Build Together
      </span>
      <h1 className="mt-6 text-4xl lg:text-5xl text-center font-bold leading-tight text-foreground max-w-4xl mx-auto">
        Ready to Turn Your Vision Into Reality?
      </h1>
      <p className="mt-6 text-lg leading-relaxed text-center text-muted max-w-2xl mx-auto">
        Whether you're launching a new business, refreshing your online
        presence, or building a custom web solution, our team is ready to help
        you achieve your goals with confidence.
      </p>
      <CTAButtons />
    </div>
  );
};

export default CTAContent;
