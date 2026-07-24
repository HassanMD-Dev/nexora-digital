import React from "react";
import testimonialData from "../../../../../data/testimonialData";
import TestimonialCard from "./TestimonialCard";

const TestimonialGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
      {testimonialData.map((testimonial) => (
        <TestimonialCard key={testimonial.id} testimoinal={testimonial} />
      ))}
    </div>
  );
};

export default TestimonialGrid;
