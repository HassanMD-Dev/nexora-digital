import React from "react";

const ProcessCard = ({ process }) => {
  const { icon: Icon, title, description, id } = process;
  return (
    <div className="group rounded-3xl border border-border bg-background p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-primary hover:shadow-2xl flex flex-col h-full">
      <span className="text-5xl font-bold text-primary/20 mb-6">{id}</span>
      <div className="h-14 w-14 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110">
        <Icon className="h-7 w-7" />
      </div>
      <h3 className="text-2xl font-bold text-foreground mb-3 transition-colors duration-300 group-hover:text-primary">
        {title}
      </h3>
      <p className="leading-relaxed text-muted">{description}</p>
    </div>
  );
};

export default ProcessCard;
