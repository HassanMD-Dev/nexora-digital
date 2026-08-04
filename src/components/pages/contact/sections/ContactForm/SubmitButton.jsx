import React from "react";
import Button from "../../../../ui/Button";

const SubmitButton = ({ handleSubmit }) => {
  return (
    <Button variant="primary" size="lg" className="w-full sm:w-fit">
      Send Message
    </Button>
  );
};

export default SubmitButton;
