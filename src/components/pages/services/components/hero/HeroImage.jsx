import React from "react";
import heroImg from "../../../../../assets/images/serviceImg.svg";

const HeroImage = () => {
  return (
    <div className="flex-1 flex items-center justify-center">
      <div className="relative w-full max-w-xl">
        <img
          src={heroImg}
          alt="service image"
          className="w-full h-auto object-contain drop-shadow-2xl"
        />
      </div>
    </div>
  );
};

export default HeroImage;
