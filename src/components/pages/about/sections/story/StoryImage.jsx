import React from "react";
import StoryImg from "../../../../../assets/images/storyImg.svg";
const StoryImage = () => {
  return (
    <div className="flex-1 flex items-center justify-center">
      <div className="relative w-full max-w-2xl">
        <img
          src={StoryImg}
          alt="Our Story"
          className="w-full h-auto object-contain drop-shadow-2xl"
        />
      </div>
    </div>
  );
};

export default StoryImage;
