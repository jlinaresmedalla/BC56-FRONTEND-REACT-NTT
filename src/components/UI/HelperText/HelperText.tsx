import { FC, HTMLProps } from "react";
import "./HelperText.css";

interface HelperTextProps extends HTMLProps<HTMLParagraphElement> {
  variant?: "default" | "danger";
  dimension?: "medium" | "small";
  message: string;
}

export const HelperText: FC<HelperTextProps> = ({ message, variant = "default", className, dimension = "small" }) => {
  const customClassName = `helper-text ${variant} ${dimension} ${className}`;

  return <p className={customClassName}>{message}</p>;
};
