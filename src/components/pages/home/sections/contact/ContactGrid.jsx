import React from "react";
import contactData from "../../../../../data/contactData";
import ContactCard from "./ContactCard";
import { motion } from "framer-motion";
import { fadeLeft } from "../../../../../animations/variants";

const ContactGrid = () => {
  return (
    <motion.div variants={fadeLeft} className="flex flex-col gap-6">
      {contactData.map((contact) => (
        <ContactCard key={contact.id} contact={contact} />
      ))}
    </motion.div>
  );
};

export default ContactGrid;
