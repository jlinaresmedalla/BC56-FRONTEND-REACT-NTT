import { ButtonHTMLAttributes } from "react";
import "./Button.css";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "danger";
  dimension?: "medium" | "small" | "icon" | "chip";
}

export const Button = ({ variant = "primary", dimension = "medium", className = "", ...props }: ButtonProps) => {
  const customClassname = `button ${dimension} ${variant} ${props.disabled ? "disabled" : ""} ${className}`;
  return <button className={customClassname} {...props} />;
};
