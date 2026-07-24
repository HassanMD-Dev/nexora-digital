import React from "react";
import Button from "../../../../ui/Button";
import { ArrowRight } from "lucide-react";
const ServicesCard = ({ service }) => {
  const { icon: Icon, title, description } = service;
  return (
    <div className="flex h-full flex-col rounded-3xl border border-border bg-background p-8 shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-primary">
      <div className="h-14 w-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6">
        <Icon className="h-7 w-7" />
      </div>
      <h3 className="text-2xl font-semibold text-foreground mb-4">{title}</h3>
      <p className="leading-relaxed text-muted mb-8">{description}</p>
      <div className="mt-auto">
        <Button
          variant="outline"
          size="md"
          className="group inline-flex items-center gap-2"
        >
          Learn More
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Button>
      </div>
    </div>
  );
};

export default ServicesCard;
