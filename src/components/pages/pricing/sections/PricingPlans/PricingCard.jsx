import React from "react";
import Button from "../../../../ui/Button";
import { CheckCircle2 } from "lucide-react";

const PricingCard = ({ pricing }) => {
  const { title, price, duration, description, features, buttonText, popular } =
    pricing;
  const Icon = CheckCircle2;
  return (
    <div
      className={`${popular === true ? "border-primary border-2 bg-primary/5 shadow-[0_20px_45px_rgba(37,99,235,0.18)] hover:shadow-[0_25px_60px_rgba(37,99,235,0.25)] scale-[1.03]" : ""} group rounded-3xl relative flex flex-col h-full border bg-background p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl`}
    >
      {popular === true ? (
        <span className="absolute -top-3 left-53 lg:-top-7 lg:left-34 rounded-full bg-primary text-white px-4 py-2 text-xs font-semibold">
          Most Popular
        </span>
      ) : (
        ""
      )}
      <div className="flex flex-col gap-3 items-center">
        <h2 className="text-2xl font-bold text-foreground">{title}</h2>
        <h1
          className={`text-5xl ${popular === true ? "font-bold" : "font-semibold"} mb-2 text-primary`}
        >
          {price}
        </h1>
        <span className="text-sm text-muted font-medium">{duration}</span>
        <p className="text-muted text-center leading-relaxed text-base">
          {description}
        </p>
      </div>
      <div className="flex flex-col pt-6 gap-4 border-t border-border my-6">
        {features.map((feature, index) => (
          <div className="flex items-center gap-3">
            <Icon className="h-5 w-5 text-primary" />
            <span key={index} className="text-muted text-base">
              {feature}
            </span>
          </div>
        ))}
      </div>
      <Button
        className={`mt-auto ${popular === true ? "hover:bg-[#2563EB] bg-[#1D4ED8]" : ""}`}
        variant="primary"
        size="md"
      >
        {buttonText}
      </Button>
    </div>
  );
};

export default PricingCard;
