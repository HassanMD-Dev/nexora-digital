import React from "react";
import Container from "../../../../ui/Container";
import SectionHeading from "../../../../ui/SectionHeading";
import ProjectGrid from "./ProjectGrid";
const Projects = () => {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <Container>
        <SectionHeading
          badge="Featured Projects"
          title="Projects That Deliver Real Business Results"
          description="Explore some of our recent work across web development, SEO, and paid advertising. Every project is focused on helping businesses grow through modern digital solutions."
        />
        <div className="mt-16">
          <ProjectGrid />
        </div>
      </Container>
    </section>
  );
};

export default Projects;
