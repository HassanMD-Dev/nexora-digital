import { Quote, Star } from "lucide-react";
import React from "react";

const TestimonialCard = ({ testimoinal }) => {
  const { review, image, rating, role, name } = testimoinal;

  return (
    <div className="group flex flex-col h-full rounded-3xl border border-border bg-background p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-primary hover:shadow-2xl">
      <Quote className="h-8 w-8 shrink-0 mt-1 mb-4 text-primary" />
      <div className="flex items-center gap-1 mb-6">
        {Array.from({ length: rating }, (_, index) => {
          return (
            <Star
              className="h-5 w-5 fill-yellow-400 text-yellow-400"
              key={index}
            />
          );
        })}
      </div>
      <div className="flex-1">
        <p className="flex items-start leading-relaxed text-muted gap-2 italic mb-8">
          {review}
        </p>
      </div>
      <div className="flex items-center gap-4">
        <img
          className="h-16 w-16 rounded-full object-cover border-2 border-primary transition-all duration-300 group-hover:scale-105"
          src={image}
          alt={name}
        />
        <div>
          <p className="font-bold text-lg text-foreground">{name}</p>
          <span className="text-sm text-muted">{role}</span>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
