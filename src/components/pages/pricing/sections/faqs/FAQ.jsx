import React, { useState } from "react";
import SectionHeading from "../../../../ui/SectionHeading";
import Container from "../../../../ui/Container";
import faqsData from "../../../../../data/faqsData";
import FAQAccordion from "./FAQAccordion";
const FAQ = () => {
  const [activeId, setActiveId] = useState(null);
  return (
    <section className="py-20 lg:py-28 bg-muted/20">
      <Container>
        <SectionHeading
          badge="Frequently Asked Questions"
          title="Everything You Need to Know"
          description="Find answers to the most common questions about our pricing, services, and project process."
        />
        <div className=" flex flex-col gap-4 mt-16">
          {faqsData.map((faq) => (
            <FAQAccordion activeId={activeId} setActiveId={setActiveId} key={faq.id} faq={faq} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default FAQ;
