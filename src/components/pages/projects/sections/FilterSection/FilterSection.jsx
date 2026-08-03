import React from "react";
import Container from "../../../../ui/Container";
import SectionHeading from "../../../../ui/SectionHeading";
import FilterButtons from "./FilterButtons";

const FilterSection = ({activeCategory, setActiveCategory}) => {
  return (
    <section className="py-20 lg:py-28 bg-muted/20">
      <Container>
        <SectionHeading
          badge="Browse Projects"
          title="Explore Projects by Category"
          description="Browse our portfolio by category to discover websites and digital solutions tailored for different industries and business needs."
        />
        <div className="mt-12">
            <FilterButtons activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
        </div>
      </Container>
    </section>
  );
};

export default FilterSection;
