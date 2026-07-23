import React from "react";

const SectionHeading = ({ title, badge, description }) => {
  return (
    <div className="flex flex-col">
      <div className="mb-5">
        <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-5 py-2 text-sm font-medium tracking-wide text-primary">
          {badge}
        </span>
      </div>

      <h2 className="mb-6 max-w-4xl font-heading text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
        {title}
      </h2>

      <p className="max-w-2xl leading-relaxed text-muted">{description}</p>
    </div>
  );
};

export default SectionHeading;
