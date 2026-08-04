import React, { useState } from "react";
import Container from "../../../../ui/Container";
import SectionHeading from "../../../../ui/SectionHeading";
import ContactFormFields from "./ContactFormFields";
import toast from "react-hot-toast";
const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const { firstName, lastName, email, phone, service, message } = formData;

  const handleChange = (e) => {
    const { value, name } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !firstName.trim() ||
      !lastName.trim() ||
      !email.trim() ||
      !service.trim() ||
      !message.trim()
    ) {
      return toast.error("Please fill all fields");
    }
    toast.success("Message Submitted Successfully.");
    console.log(formData);
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    });
  };
  return (
    <section className="py-20 lg:py-28 bg-muted/20">
      <Container>
        <SectionHeading
          badge="Send a Message"
          title="Tell Us About Your Project"
          description="Fill out the form below and we'll get back to you as soon as possible. We'd love to discuss your ideas and help bring them to life."
        />
        <div className="max-w-5xl mx-auto mt-16 rounded-3xl border border-border bg-background shadow-lg p-8 lg:p-12">
          <ContactFormFields
            formData={formData}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
          />
        </div>
      </Container>
    </section>
  );
};

export default ContactForm;
