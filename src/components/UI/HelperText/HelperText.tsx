import { HTMLProps } from "react";
import "./HelperText.css";

interface HelperTextProps extends HTMLProps<HTMLParagraphElement> {
  variant?: "default" | "danger";
  dimension?: "medium" | "small";
  message: string;
}

export const HelperText = ({ message, variant = "default", className, dimension = "small" }: HelperTextProps) => {
  const customClassName = `helper-text ${variant} ${dimension} ${className}`;

  return <p className={customClassName}>{message}</p>;
};
