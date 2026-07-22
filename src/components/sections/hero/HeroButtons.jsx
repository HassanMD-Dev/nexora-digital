import React from "react";
import Button from "../../ui/Button";

const HeroButtons = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-4">
      <Button className="w-full sm:w-auto" variant="primary" size="md">
        Get Free Consultation
      </Button>
      <Button className="w-full sm:w-auto" variant="outline" size="md">
        Our Services
      </Button>
    </div>
  );
};

export default HeroButtons;
