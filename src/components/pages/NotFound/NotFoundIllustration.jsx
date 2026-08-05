import React from "react";
import NotFoundImg from "../../../assets/images/404.svg";
const NotFoundIllustration = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="max-w-lg w-full">
        <img src={NotFoundImg} alt="NotFound Illustration" />
      </div>
    </div>
  );
};

export default NotFoundIllustration;
