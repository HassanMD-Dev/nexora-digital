import React from "react";

const FeatureList = ({ whyChoose }) => {
  const { icon: Icon, title } = whyChoose;
  return (
    <div className="flex items-center gap-4">
      <div className="h-10 w-10 rounded-full border-primary/20 bg-primary/10 text-primary flex items-center justify-center">
        <Icon className="h-5 w-5" />
      </div>
      <p className="font-medium text-foreground text-lg">{title}</p>
    </div>
  );
};

export default FeatureList;
