import React from "react";

const SectionHeading = ({ title, subtitle, description }) => {
  return (
    <div className="flex flex-col gap-2">
      <p className="text-primary mb-1.5 font-medium uppercase tracking-wider">
        {subtitle}
      </p>
      <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl tracking-tight max-w-4xl mb-2">
        {title}
      </h2>
      <p className="text-muted max-w-2xl">{description}</p>
    </div>
  );
};

export default SectionHeading;
