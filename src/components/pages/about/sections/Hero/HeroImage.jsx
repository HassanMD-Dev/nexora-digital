import React from "react";
import AboutImg from "../../../../../assets/images/AbtHeroImg.svg";

const HeroImage = () => {
  return (
    <div className="flex-1 flex items-center justify-center">
      <div className="relative w-full max-w-2xl">
        <img
          src={AboutImg}
          alt="Team collaboration illustration"
          className="w-full h-auto object-contain drop-shadow-2xl transition-all duration-500 hover:scale-105"
        />
      </div>
    </div>
  );
};

export default HeroImage;
