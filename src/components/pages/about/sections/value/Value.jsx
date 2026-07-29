import React from "react";
import Container from "../../../../ui/Container";
import SectionHeading from "../../../../ui/SectionHeading";
import ValuesGrid from "./ValuesGrid";

const Value = () => {
  return (
    <section className="py-20 lg:py-28 bg-muted/20">
      <Container>
        <SectionHeading
          badge="Our Values"
          title="The Principles That Guide Everything We Build"
          description="Our work is driven by strong values that help us deliver high-quality digital solutions while building lasting relationships with every client."
        />
        <div className="mt-16">
        <ValuesGrid />
        </div>
      </Container>
    </section>
  );
};

export default Value;
