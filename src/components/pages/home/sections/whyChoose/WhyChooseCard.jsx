import React from "react";

const WhyChooseCard = ({ whyChoose }) => {
  const { icon: Icon, title, description } = whyChoose;
  return (
    <div className="group flex flex-col h-full border border-border rounded-3xl bg-background p-8 shadow-lg transition-all duration-300 hover:border-primary hover:-translate-y-2 hover:shadow-2xl">
      <div className="h-14 w-14 rounded-2xl  bg-primary/10 text-primary flex items-center justify-center mb-6 transition-all duration-500 group-hover:bg-primary/20 group-hover:scale-110">
        <Icon className="h-7 w-7" />
      </div>
      <h3 className="font-bold text-2xl mb-4 text-foreground">{title}</h3>
      <p className="text-muted flex-1 leading-relaxed ">{description}</p>
    </div>
  );
};

export default WhyChooseCard;
