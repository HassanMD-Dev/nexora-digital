import React from "react";
import Button from "../../../../ui/Button";
const HeroContent = () => {
  return (
    <div className="flex flex-col items-center lg:items-start gap-6">
      <span className="rounded-full border border-primary/20 bg-primary/10 text-primary px-4 py-2 text-sm font-medium tracking-wide">
        Get In Touch
      </span>
      <h1 className="text-4xl lg:text-6xl text-center lg:text-start font-bold leading-tight text-foreground max-w-2xl">
        Let's Build Something Amazing Together
      </h1>
      <p className="text-lg leading-relaxed text-center lg:text-start text-muted max-w-xl">
        Have a project in mind or need a modern website for your business? We'd
        love to hear your ideas and help turn them into reality.
      </p>
      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
        <Button variant="primary" size="md">
          Start Your Project
        </Button>
        <Button variant="outline" size="md">
          View Our Work
        </Button>
      </div>
    </div>
  );
};

export default HeroContent;
