import React from "react";
import heroStats from "../../../../../data/heroStats";

const HeroStats = () => {
  return (
    <div className="grid grid-cols-3 gap-6 w-full">
      {heroStats.map((stat) => (
        <div
          className="flex flex-col items-center lg:items-start"
          key={stat.id}
        >
          <p className="text-3xl font-bold text-primary">{stat.value}</p>
          <p className="text-sm text-muted-foreground">{stat.label}</p>
        </div>
      ))}
    </div>
  );
};

export default HeroStats;
