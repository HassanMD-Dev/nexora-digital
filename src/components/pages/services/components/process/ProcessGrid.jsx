import React from "react";
import processData from "../../../../../data/processData";
import ProcessCard from "./ProcessCard";

const ProcessGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-16 gap-8">
      {processData.map((process) => (
        <ProcessCard key={process.id} process={process} />
      ))}
    </div>
  );
};

export default ProcessGrid;
