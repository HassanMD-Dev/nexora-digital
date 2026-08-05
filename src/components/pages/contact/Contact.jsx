import React from "react";
import Hero from "./sections/Hero/Hero";
import ContactInfo from "./sections/contactInfo/ContactInfo";
import ContactForm from "./sections/ContactForm/ContactForm";
import MapSection from "./sections/MapSection/MapSection";

const Contact = () => {
  return (
    <div>
      <Hero />
      <ContactInfo />
      <ContactForm />
      <MapSection />
    </div>
  );
};

export default Contact;
