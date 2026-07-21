import React from "react";
import Button from "../../ui/Button";

const CTAButton = ({ mobile = false }) => {
  const layoutStyling = mobile
    ? "flex flex-col lg:hidden"
    : "flex lg:flex-row hidden lg:flex";
  return (
    <Button
      className={`${layoutStyling} mt-4 lg:mt-0`}
      variant="primary"
      size="md"
    >
      Let's Talk
    </Button>
  );
};

export default CTAButton;
