import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div className="flex items-center">
      <Link to={"/"}>
        <h2 className="font-heading font-bold cursor-pointer text-3xl">
          Nexora<span className="text-primary text-2xl rounded-full">.</span>
        </h2>
      </Link>
    </div>
  );
};

export default Logo;
