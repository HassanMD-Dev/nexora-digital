import { ChevronDown } from "lucide-react";
import React, { useState } from "react";

const FAQAccordion = ({ faq, activeId, setActiveId }) => {
  const { id, question, answer } = faq;
  const Icon = ChevronDown;
  id === activeId;

  return (
    <div
      className={`rounded-2xl border overflow-hidden transition-all duration-500 hover:shadow-lg ${id === activeId ? "border-primary bg-primary/5 shadow-lg" : "border-border bg-background"}`}
    >
      <div
        onClick={() => (id === activeId ? setActiveId(null) : setActiveId(id))}
        className="flex items-center justify-between cursor-pointer p-6"
      >
        <h2 className="text-lg font-semibold text-foreground">{question}</h2>
        <Icon
          className={`${id === activeId ? "rotate-180" : "rotate-0"} h-6 w-6 text-primary transition-transform duration-300`}
        />
      </div>
      {id === activeId && (
        <div
          className={`
            overflow-hidden
            transition-all
            duration-300
            ease-in-out
             ${id === activeId ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}
  `}
        >
          <p className="px-6 pb-6 pt-0 leading-6 text-muted text-base">
            {answer}
          </p>
        </div>
      )}
    </div>
  );
};

export default FAQAccordion;
