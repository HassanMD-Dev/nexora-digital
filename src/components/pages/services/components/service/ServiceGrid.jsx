import React from 'react'
import servicePSData from "../../../../../data/servicesPSData";
import ServiceCard from './ServiceCard';

const ServiceGrid = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16'>
      {servicePSData.map((service) => (
        <ServiceCard key={service.id} service={service} />
      ))}
    </div>
  )
}

export default ServiceGrid
