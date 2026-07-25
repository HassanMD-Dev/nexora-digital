import React from "react";
import contactData from "../../../../../data/contactData";
import ContactCard from "./ContactCard";

const ContactGrid = () => {
  return (
    <div className="flex flex-col gap-6">
      {contactData.map((contact) => (
        <ContactCard key={contact.id} contact={contact} />
      ))}
    </div>
  );
};

export default ContactGrid;
