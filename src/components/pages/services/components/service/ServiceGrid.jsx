import React from "react";
import servicePSData from "../../../../../data/servicesPSData";
import ServiceCard from "./ServiceCard";
import { motion } from "framer-motion";
import { cardStagger, fadeUp } from "../../../../../animations/variants";

const ServiceGrid = () => {
  return (
    <motion.div
      variants={cardStagger}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16"
    >
      {servicePSData.map((service) => (
        <motion.div key={service.id} variants={fadeUp}>
          <ServiceCard service={service} />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default ServiceGrid;
