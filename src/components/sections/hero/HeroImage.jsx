import React from "react";
import heroIllustration from "../../../assets/images/heroImage.svg";

const HeroImage = () => {
  return (
    <div className="relative flex items-center justify-center">
      <div className="absolute -z-10 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
        <img
          className="h-auto w-full hover:scale-105 transition-transform duration-500"
          src={heroIllustration}
          alt="Digital Marketing Dashboard"
        />
      </div>
  );
};

export default HeroImage;
