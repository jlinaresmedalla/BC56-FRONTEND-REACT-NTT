import { InputHTMLAttributes } from "react";
import "./Input.css";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  variant?: "primary" | "secondary" | "danger";
  dimension?: "medium" | "small";
  containerClassName?: string;
  error?: string;
}

export const Input = ({
  variant = "primary",
  dimension = "medium",
  error = "",
  className = "",
  containerClassName = "",
  ...props
}: InputProps) => {
  const customClassname = `input ${dimension} ${variant} ${props.disabled ? "disabled" : ""} ${error ? "danger" : ""} ${className}`;
  const customContainerClass = `input-container ${containerClassName}`;

  return (
    <div className={customContainerClass}>
      <input className={customClassname} {...props} />
      {error && <p className="input-error">{error}</p>}
    </div>
  );
};
