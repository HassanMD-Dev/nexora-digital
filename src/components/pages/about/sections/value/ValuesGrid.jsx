import React from "react";
import aboutValueData from "../../../../../data/aboutValuesData";
import ValueCard from "./ValueCard";
const ValuesGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {aboutValueData.map((value) => (
        <ValueCard key={value.id} value={value} />
      ))}
    </div>
  );
};

export default ValuesGrid;
