import React from "react";
import './Button.css'

export interface ButtonProps {
  label: string;
}

const Button = ({label}: ButtonProps) => (
  <button>{label}</button>
);

export default Button;
