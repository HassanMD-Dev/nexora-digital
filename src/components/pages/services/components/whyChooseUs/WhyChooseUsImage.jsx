import React from "react";
import TeamImg from "../../../../../assets/images/TeamWork.svg";
const WhyChooseUsImage = () => {
  return (
    <div className="flex-1 flex justify-center items-center">
      <div className="relative w-full max-w-xl">
        <img
          src={TeamImg}
          alt="Why Choose"
          className="w-full h-auto object-contain drop-shadow-2xl"
        />
      </div>
    </div>
  );
};

export default WhyChooseUsImage;
