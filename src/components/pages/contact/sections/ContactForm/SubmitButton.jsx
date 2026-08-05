import React from "react";
import Button from "../../../../ui/Button";

const SubmitButton = ({ isSubmitting }) => {
  return (
    <Button
      type="submit"
      variant="primary"
      size="lg"
      className="w-full sm:w-fit"
    >
      {isSubmitting ? "Sending..." : "Send Message"}
    </Button>
  );
};

export default SubmitButton;
