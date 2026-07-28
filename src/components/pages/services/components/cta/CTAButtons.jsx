import React from "react";
import Button from "../../../../ui/Button";
const CTAButtons = () => {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mt-10">
      <Button variant="primary" size="md">
        Start Your Project
      </Button>
      <Button variant="outline" size="md">
        Book a Free Call
      </Button>
    </div>
  );
};

export default CTAButtons;
