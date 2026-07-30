import React from "react";
import Button from "../../../../ui/Button";

const PricingCard = () => {
  return (
    <div className="group rounded-3xl relative flex flex-col h-full border bg-background p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
      {popular === true ? (
        <span className="absolute top-6 right-6 rounded-full bg-primary text-white px-4 py-2 text-xs font-semibold">
          Most Popular
        </span>
      ) : (
        ""
      )}
      <div className="flex flex-col gap-3 items-center">
        <h2 className="text-2xl font-bold text-foreground"></h2>
        <h1 className="text-5xl font-semibold text-primary"></h1>
        <span className="text-sm text-muted font-medium"></span>
        <p className="text-muted leading-relaxed teaxt-base"></p>
      </div>
      <div className="flex flex-col items-center gap-4 border-t border-border my-6">
        <Icon className="h-5 w-5 text-primary" />
        <span className="text-muted text-base"></span>
      </div>
      <Button variant="primary" size="md"></Button>
    </div>
  );
};

export default PricingCard;
