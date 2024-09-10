import React from "react";

const CustomArrow = ({ className, onClick, direction }) => {
  return (
    <button
      className={`custom-arrow ${className} ${direction}`}
      onClick={onClick}
    >
      {direction === "next" ? "→" : "←"}
    </button>
  );
};

export default CustomArrow;
