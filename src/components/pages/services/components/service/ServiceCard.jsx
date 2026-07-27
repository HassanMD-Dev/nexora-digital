import React from "react";
import Button from "../../../../ui/Button";
import { ArrowRight } from "lucide-react";
const ServiceCard = ({ service }) => {
  const { icon: Icon, title, description } = service;
  return (
    <div className="group rounded-3xl flex flex-col h-full border border-border bg-background p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-primary hover:shadow-2xl">
      <div className="h-14 w-14 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110">
        <Icon className="h-7 w-7" />
      </div>
      <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary">
        {title}
      </h3>
      <p className="leading-relaxed text-muted mb-6 flex-grow">{description}</p>
      <div className="inline-flex items-center gap-2 font-medium text-primary transition-all duration-300 group-hover:gap-3">
        Learn More
        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
      </div>
    </div>
  );
};

export default ServiceCard;
