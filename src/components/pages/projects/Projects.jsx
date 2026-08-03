import React, { useState } from "react";
import Hero from "./sections/Hero/Hero";
import FeaturedProject from "./sections/FeaturedProject/FeaturedProject";
import FilterSection from "./sections/FilterSection/FilterSection";
import projectsPData from "../../../data/projectsPData";
import ProjectGrid from "./sections/ProjectsGrid/ProjectGrid";
import CTA from "./sections/cta/CTA";

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const filteredProjects =
    activeCategory === "All"
      ? projectsPData
      : projectsPData.filter((project) => project.category === activeCategory);

  return (
    <div>
      <Hero />
      <FeaturedProject />
      <FilterSection
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />
      <ProjectGrid projects={filteredProjects} />
      <CTA />
    </div>
  );
};

export default Projects;
