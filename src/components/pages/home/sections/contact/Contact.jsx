import React from "react";
import SectionHeading from "../../../../ui/SectionHeading";
import Container from "../../../../ui/Container";
import ContactGrid from "./ContactGrid";
import ContactForm from "./ContactForm";
import { motion } from "framer-motion";
import { heroStagger } from "../../../../../animations/variants";

const Contact = () => {
  return (
    <section className="py-20 lg:py-28 bg-muted/20">
      <Container>
        <SectionHeading
          badge="Contact Us"
          title="Let's Start Your Next Project"
          description="Have a project in mind? We'd love to hear from you. Fill out the form below or reach out using our contact information."
        />
        <motion.div
          variants={heroStagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-16 flex flex-col lg:flex-row gap-10 items-start"
        >
          <ContactGrid />
          <ContactForm />
        </motion.div>
      </Container>
    </section>
  );
};

export default Contact;
