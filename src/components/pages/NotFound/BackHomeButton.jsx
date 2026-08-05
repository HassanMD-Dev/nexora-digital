import React from "react";
import Button from "../../ui/Button";
import { Link } from "react-router-dom";

const BackHomeButton = () => {
  return (
    <Link to={"/"}>
      <Button variant="primary" size="md">
        Back To Home
      </Button>
    </Link>
  );
};

export default BackHomeButton;
