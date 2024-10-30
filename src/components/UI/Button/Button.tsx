import { ButtonHTMLAttributes, FC } from "react";
import "./Button.css";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "danger";
  dimension?: "medium" | "small" | "icon" | "chip";
}

export const Button: FC<ButtonProps> = ({ variant = "primary", dimension = "medium", className = "", ...props }) => {
  const customClassname = `button ${dimension} ${variant} ${props.disabled ? "disabled" : ""} ${className}`;
  return <button className={customClassname} {...props} />;
};
