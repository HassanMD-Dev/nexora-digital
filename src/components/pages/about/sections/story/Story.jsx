import React from "react";
import Container from "../../../../ui/Container";
import SectionHeading from "../../../../ui/SectionHeading";
import StoryContent from "./StoryContent";
import StoryImage from "./StoryImage";
const Story = () => {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <Container>
        <SectionHeading
          badge="Our Story"
          title="Building Meaningful Digital Experiences That Drive Growth"
          description="Our journey is built on creativity, innovation, and a commitment to helping businesses succeed through modern web solutions."
        />
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          <StoryImage />
          <StoryContent />
        </div>
      </Container>
    </section>
  );
};

export default Story;
