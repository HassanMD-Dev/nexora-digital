import React from "react";
import BackHomeButton from "./BackHomeButton";

const NotFoundContent = () => {
  return (
    <div className="max-w-xl">
      <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
        404 Error
      </span>
      <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground">
        Oops! Page Not Found
      </h1>
      <p className="mt-6 text-lg leading-8 text-muted">
        The page you are trying to access may have been moved, deleted, or the
        URL might be incorrect. Let's get you back on track.
      </p>
      <div className="mt-10">
        <BackHomeButton />
      </div>
    </div>
  );
};

export default NotFoundContent;
