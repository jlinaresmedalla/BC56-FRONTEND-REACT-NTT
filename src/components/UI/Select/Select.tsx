import { SelectHTMLAttributes } from "react";
import "./Select.css";

interface SelectProps<T> extends SelectHTMLAttributes<HTMLSelectElement> {
  variant?: "primary" | "secondary" | "danger";
  dimension?: "medium" | "small";
  options: T[];
  valueKey: keyof T;
  labelKey: keyof T;
  staticValue?: string | number;
  staticLabel?: string;
  containerClassName?: string;
  error?: string;
}

export const Select = <T,>({
  variant = "primary",
  dimension = "medium",
  options,
  valueKey,
  labelKey,
  staticLabel,
  staticValue = "",
  className = "",
  containerClassName = "",
  error = "",
  ...props
}: SelectProps<T>) => {
  const customClassname = `select ${dimension} ${variant} ${props.disabled ? "disabled" : ""} ${error ? "danger" : ""} ${className}`;
  const customContainerClass = `select-container ${containerClassName}`;

  return (
    <div className={customContainerClass}>
      <select className={customClassname} {...props}>
        {staticLabel && <option value={staticValue}>{staticLabel}</option>}
        {options?.map((option) => (
          <option value={option[valueKey] as string | number} key={option[valueKey] as string | number}>
            {option[labelKey] as string}
          </option>
        ))}
      </select>
      {error && <p className="select-error">{error}</p>}
    </div>
  );
};
