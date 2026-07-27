import React from "react";
import Container from "../../../../ui/Container";
import SectionHeading from "../../../../ui/SectionHeading";
import ProcessGrid from "./ProcessGrid";
const Process = () => {
  return (
    <section className="py-20 lg:py28 bg-background">
      <Container>
        <SectionHeading
          badge="Our Process"
          title="From Idea to Launch in Four Simple Steps"
          description="We follow a proven workflow that keeps every project organized, transparent, and focused on delivering the best possible results."
        />
        <ProcessGrid />
      </Container>
    </section>
  );
};

export default Process;
