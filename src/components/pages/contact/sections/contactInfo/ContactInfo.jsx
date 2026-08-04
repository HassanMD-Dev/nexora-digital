import React from "react";
import Container from "../../../../ui/Container";
import SectionHeading from "../../../../ui/SectionHeading";
import ContactInfoCard from "./ContactInfoCard";
import contactInfoData from "../../../../../data/contactInfoData";
const ContactInfo = () => {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <Container>
        <SectionHeading
          badge="Reach Out"
          title="Multiple Ways to Connect With Us"
          description="Choose the contact method that works best for you. We're always ready to discuss your ideas and answer your questions."
        />
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
          {contactInfoData.map((info) => (
            <ContactInfoCard key={info.id} info={info} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ContactInfo;
