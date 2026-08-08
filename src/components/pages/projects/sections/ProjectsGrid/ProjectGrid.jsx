import React from "react";
import ProjectCard from "./ProjectCard";
import Container from "../../../../ui/Container";
import { motion } from "framer-motion";
import { cardStagger, fadeUp } from "../../../../../animations/variants";
const ProjectGrid = ({ projects }) => {
  return (
    <section className="pb-20 bg-muted/20">
      <Container>
        <motion.div
          variants={cardStagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"
        >
          {projects.map((proj) => (
            <motion.div variants={fadeUp}>
              <ProjectCard key={proj.id} project={proj} />
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
};

export default ProjectGrid;
