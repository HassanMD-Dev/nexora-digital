import React from "react";
import Container from "../../../../ui/Container";
import SectionHeading from "../../../../ui/SectionHeading";
import TeamGrid from "./TeamGrid";

const Team = () => {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <Container>
        <SectionHeading
          badge="Meet Our Team"
          title="The People Behind Every Successful Project"
          description="Our talented team combines creativity, technical expertise, and strategic thinking to deliver modern digital solutions that help businesses grow with confidence."
        />
        <div className="mt-16">
          <TeamGrid />
        </div>
      </Container>
    </section>
  );
};

export default Team;
