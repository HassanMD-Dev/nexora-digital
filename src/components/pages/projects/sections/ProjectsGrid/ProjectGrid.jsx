import React from "react";
import ProjectCard from "./ProjectCard";
import Container from "../../../../ui/Container";
const ProjectGrid = ({ projects }) => {
  return (
    <section className="pb-20 bg-muted/20">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((proj) => (
            <ProjectCard key={proj.id} project={proj} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ProjectGrid;
