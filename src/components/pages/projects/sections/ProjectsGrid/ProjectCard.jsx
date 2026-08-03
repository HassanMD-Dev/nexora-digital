import React from "react";
import Button from "../../../../ui/Button";

const ProjectCard = ({ project }) => {
  const { title, category, description, image, technologies, liveDemo } =
    project;
  return (
    <div className="group rounded-3xl border border-border bg-background shadow-md overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
      <img
        src={image}
        alt={title}
        className="object-cover aspect-video transition-all duration-300 group-hover:scale-110 border-b border-muted/30"
      />
      <div className="flex flex-col gap-5 p-6">
        <span className="inline-flex rounded-full w-fit bg-primary/10 text-primary text-sm font-medium px-4 py-2">
          {category}
        </span>
        <h2 className="text-xl font-bold text-foreground">{title}</h2>
        <p className="text-muted leading-7">{description}</p>
        <div className="flex flex-wrap gap-2 border-t border-muted/30 pt-5">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="rounded-full border bg-muted/20 text-sm px-3 py-1"
            >
              {tech}
            </span>
          ))}
        </div>
        <Button className="w-fit mt-2" variant="primary" size="md">
          Live Demo
        </Button>
      </div>
    </div>
  );
};

export default ProjectCard;
