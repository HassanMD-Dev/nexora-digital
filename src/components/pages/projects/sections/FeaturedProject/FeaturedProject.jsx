import React from "react";
import Container from "../../../../ui/Container";
import SectionHeading from "../../../../ui/SectionHeading";
import projectsPData from "../../../../../data/projectsPData";
import Button from "../../../../ui/Button";

const FeaturedProject = () => {
  const featuredProject = projectsPData.find(
    (feature) => feature.featured === true,
  );
  const {
    title,
    category,
    description,
    image,
    technologies,
    featured,
    liveDemo,
    caseStudy,
  } = featuredProject;

  return (
    <section className="py-20 lg:py-28 bg-background">
      <Container>
        <SectionHeading
          badge="Featured Work"
          title="Our Featured Project"
          description="Take a closer look at one of our highlighted projects, built with modern technologies, responsive design, and a strong focus on user experience."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
          <div className="relative group rounded-3xl overflow-hidden shadow-lg border border-border transition-all duration-300 hover:shadow-2xl">
            <img
              src={image}
              alt={title}
              className="object-cover w-full h-full transition-all duration-300 group-hover:scale-105"
            />
            <span className="absolute top-5 left-5 rounded-full bg-primary text-background text-xs px-4 py-2">
              Featured Project
            </span>
          </div>
          <div className="flex flex-col gap-5 justify-center">
            <span className="inline-flex rounded-full w-fit bg-primary/10 text-primary text-sm font-medium px-4 py-2">
              {category}
            </span>
            <h2 className="text-4xl font-bold text-foreground mt-4">{title}</h2>
            <p className="text-muted leading-8 mt-2">{description}</p>
            <div className="flex flex-wrap gap-3 mt-8">
              {technologies.map((tech, index) => (
                <span
                  key={index}
                  className="rounded-full border bg-muted/30 px-4 py-2 text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex gap-4 mt-10">
              <Button variant="primary" size="md">
                Live Demo
              </Button>
              <Button variant="outline" size="md">
                Case Study
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default FeaturedProject;
