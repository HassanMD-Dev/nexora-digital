import React from "react";
import servicesData from "../../../../../data/servicesData";
import ServicesCard from "./ServicesCard";
import { motion } from "framer-motion";
import { cardStagger, fadeUp } from "../../../../../animations/variants";

const ServiceGrid = () => {
  return (
    <motion.div
      variants={cardStagger}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      {servicesData.map((service) => (
        <motion.div variants={fadeUp} key={service.id}>
          <ServicesCard service={service} />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default ServiceGrid;
