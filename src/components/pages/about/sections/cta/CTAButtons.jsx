import React from "react";
import Button from "../../../../ui/Button";
const CTAButtons = () => {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mt-10">
      <Button variant="primary" size="md">
        Start Project
      </Button>
      <Button variant="outline" size="md">
        Contact Us
      </Button>
    </div>
  );
};

export default CTAButtons;
