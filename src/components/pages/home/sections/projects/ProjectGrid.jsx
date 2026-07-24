import React from "react";
import projectData from "../../../../../data/projectData";
import ProjectCard from "./ProjectCard";

const ProjectGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
      {projectData.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
};

export default ProjectGrid;
