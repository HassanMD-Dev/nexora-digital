import React from "react";
import teamData from "../../../../../data/teamData";
import TeamCard from "./TeamCard";
const TeamGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {teamData.map((team) => (
        <TeamCard key={team.id} team={team} />
      ))}
    </div>
  );
};

export default TeamGrid;
