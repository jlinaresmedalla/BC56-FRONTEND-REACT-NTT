import { FC, InputHTMLAttributes } from "react";
import { HelperText } from "../HelperText/HelperText";
import "./Input.css";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  variant?: "primary" | "secondary" | "danger";
  dimension?: "medium" | "small";
  containerClassName?: string;
  error?: string;
}

export const Input: FC<InputProps> = ({
  variant = "primary",
  dimension = "medium",
  error = "",
  className = "",
  containerClassName = "",
  ...props
}) => {
  const customClassname = `input ${dimension} ${variant} ${props.disabled ? "disabled" : ""} ${error ? "danger" : ""} ${className}`;
  const customContainerClass = `input-container ${containerClassName}`;

  return (
    <div className={customContainerClass}>
      <input className={customClassname} {...props} />
      {error && <HelperText message={error} variant="danger" />}
    </div>
  );
};
