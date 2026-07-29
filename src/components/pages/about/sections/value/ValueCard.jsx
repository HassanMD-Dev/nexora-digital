import React from "react";

const ValueCard = ({ value }) => {
  const { icon: Icon, title, description } = value;
  return (
    <div className="group rounded-3xl border border-border bg-background p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-primary">
      <div className="h-14 w-14 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110">
        <Icon className="h-7 w-7" />
      </div>
      <h2 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
        {title}
      </h2>
      <p className="text-muted leading-relaxed">{description}</p>
    </div>
  );
};

export default ValueCard;
