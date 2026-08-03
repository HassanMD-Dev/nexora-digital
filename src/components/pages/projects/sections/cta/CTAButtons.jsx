import React from "react";
import Button from "../../../../ui/Button";
const CTAButtons = () => {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
      <Button
        className="bg-white text-primary hover:bg-slate-100 hover:text-blue-700"
        size="md"
      >
        Start Your Project
      </Button>
      <Button
        className="border border-white/30 text-white hover:bg-white/10 bg-transparent hover:border-white"
        variant="outline"
        size="md"
      >
        Schedule a Call
      </Button>
    </div>
  );
};

export default CTAButtons;
