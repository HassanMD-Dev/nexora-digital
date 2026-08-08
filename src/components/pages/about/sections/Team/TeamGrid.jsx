import React from "react";
import teamData from "../../../../../data/teamData";
import TeamCard from "./TeamCard";
import { motion } from "framer-motion";
import { cardStagger, fadeUp } from "../../../../../animations/variants";
const TeamGrid = () => {
  return (
    <motion.div
      variants={cardStagger}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
    >
      {teamData.map((team) => (
        <motion.div variants={fadeUp}>
          <TeamCard key={team.id} team={team} />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default TeamGrid;
