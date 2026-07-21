import React from "react";

const Button = ({
  children,
  variant,
  size,
  className = "",
  type,
  onClick,
  disabled,
}) => {
  const variantStyles =
    variant === "primary"
      ? "bg-blue-600 text-white hover:bg-blue-700 hover:cursor-pointer"
      : "border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white cursor-pointer";
  const sizeStyles =
    size === "lg"
      ? "px-6 py-3 text-lg"
      : size === "md"
        ? "px-5 py-2 text-base"
        : size === "sm"
          ? "px-4 py-2 text-sm"
          : "";
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`rounded-xl font-semibold transition-all duration-300 ${variantStyles} ${sizeStyles} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
