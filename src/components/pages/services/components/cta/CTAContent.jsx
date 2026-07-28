import React from "react";
import CTAButtons from "./CTAButtons";

const CTAContent = () => {
  return (
    <div className="flex flex-col gap-6 items-center">
      <span className="rounded-full w-fit flex flex-col items-center border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-medium tracking-wide text-primary">
        Let's Build Together
      </span>
      <h1 className="mt-6 text-4xl lg:text-5xl text-center font-bold leading-tight text-foreground max-w-4xl mx-auto">
        Ready to Start Your Next Project?
      </h1>
      <p className="mt-6 text-lg leading-relaxed text-center text-muted max-w-2xl mx-auto">
        Whether you need a modern website, responsive design, or a complete
        digital solution, we're here to help bring your vision to life.
      </p>
      <CTAButtons />
    </div>
  );
};

export default CTAContent;
