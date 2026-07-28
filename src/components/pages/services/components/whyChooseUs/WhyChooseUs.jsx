import React from "react";
import Container from "../../../../ui/Container";
import WhyChooseUsContent from "./WhyChooseUsContent";
import WhyChooseUsImage from "./WhyChooseUsImage";
import SectionHeading from "../../../../ui/SectionHeading";

const WhyChooseUs = () => {
  return (
    <section className="py-20 lg:py-28 bg-muted/20">
      <Container>
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          <WhyChooseUsContent />
          <WhyChooseUsImage />
        </div>
      </Container>
    </section>
  );
};

export default WhyChooseUs;
