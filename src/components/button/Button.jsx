import React from "react";
import "./Button.css";

export default function Button({ children, variant, onClick, ...props }) {
  return (
    <button onClick={onClick} className={`mainButton ${variant}`} {...props}>
      {children}
    </button>
  );
}
