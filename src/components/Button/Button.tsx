import React from "react";

export interface ButtonProps {
  label: string;
}

const Button = ({label}: ButtonProps) => (
  <button>{label}</button>
);

export default Button;
