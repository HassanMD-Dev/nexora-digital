import React from "react";
import projectCategories from "../../../../../data/projectCategories";
import Button from "../../../../ui/Button";
const FilterButtons = ({ activeCategory, setActiveCategory }) => {
  return (
    <div className="flex gap-4 justify-center flex-wrap items-center">
      {projectCategories.map((category, index) => (
        <Button
          onClick={() => setActiveCategory(category)}
          variant={category === activeCategory ? "primary" : "outline"}
          size="md"
          key={index}
        >
          {category}
        </Button>
      ))}
    </div>
  );
};

export default FilterButtons;
