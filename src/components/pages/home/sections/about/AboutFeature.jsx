import React from "react";
import aboutFeature from "../../../../../data/aboutFeature";
import { motion } from "framer-motion";
import { heroStagger, fadeUp } from "../../../../../animations/variants";

const AboutFeature = () => {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
      {aboutFeature.map((feature) => {
        const Icon = feature.icon;

        return (
          <div className="flex items-center gap-3" key={feature.id}>
            <Icon className="h-6 w-6 text-primary flex-shrink-0" />
            <h3 className="font-body font-medium text-foreground">
              {feature.title}
            </h3>
          </div>
        );
      })}
    </div>
  );
};

export default AboutFeature;
