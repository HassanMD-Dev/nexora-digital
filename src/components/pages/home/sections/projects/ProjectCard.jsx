import React from "react";
import Button from "../../../../ui/Button";
import { ArrowRight } from "lucide-react";

const ProjectCard = ({ project }) => {
  const { icon: Icon, image, category, title, description } = project;
  return (
    <div className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-background shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-primary hover:shadow-2xl">
      <div className="relative overflow-hidden">
        <img
          className="h-72 lg:h-80 w-full object-cover transition-transform duration-500 group-hover:scale-105"
          src={image}
          alt={title}
        />
        <span className="absolute top-6 left-6 inline-flex rounded-full bg-background/90 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary backdrop-blur-sm">
          {category}
        </span>
        <div className="absolute bottom-5 right-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/20 bg-primary text-primary-foreground shadow-xl backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
          <Icon className="h-6 w-6" />
        </div>
      </div>
      <div className="flex flex-1 flex-col p-8">
        <h3 className="mb-4 text-2xl font-bold text-foreground">{title}</h3>
        <p className="mb-8 flex-1 leading-relaxed text-muted">{description}</p>
        <Button
          className="w-44 inline-flex justify-center items-center gap-2"
          variant="outline"
          size="md"
        >
          View Project <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default ProjectCard;
