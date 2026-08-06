import React from "react";
import projectData from "../../../../../data/projectData";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";
import { cardStagger, fadeUp } from "../../../../../animations/variants";

const ProjectGrid = () => {
  return (
    <motion.div
      variants={cardStagger}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"
    >
      {projectData.map((project) => (
        <motion.div variants={fadeUp} key={project.id}>
          <ProjectCard project={project} />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default ProjectGrid;
