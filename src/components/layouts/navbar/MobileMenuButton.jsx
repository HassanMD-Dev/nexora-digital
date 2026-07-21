import { Menu, X } from "lucide-react";
import React from "react";

const MobileMenuButton = ({ onClickHan, isOpen }) => {
  return (
    <button
      className="lg:hidden p-2 rounded-lg hover:bg-surface transition-all duration-300"
      aria-label="Toggle navigation menu"
      onClick={onClickHan}
    >
      {isOpen ? <X size={24} /> : <Menu size={24} />}
    </button>
  );
};

export default MobileMenuButton;
