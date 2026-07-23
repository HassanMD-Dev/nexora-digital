import React from "react";
import servicesData from "../../../../../data/servicesData";
import ServicesCard from "./ServicesCard";

const ServiceGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {servicesData.map((service) => (
        <ServicesCard key={service.id} service={service} />
      ))}
    </div>
  );
};

export default ServiceGrid;
