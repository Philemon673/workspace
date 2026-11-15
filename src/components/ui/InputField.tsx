import type { ChangeEvent, InputHTMLAttributes, ReactNode } from "react";

export interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  name: string;
  label: string;
  boldLabel?: boolean;
  icon?: ReactNode;
  trailing?: ReactNode;
  error?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const InputField = ({
  id,
  name,
  label,
  boldLabel = false,
  icon,
  trailing,
  error,
  type = "text",
  className = "",
  ...rest
}: InputFieldProps) => {
  return (
    <div className="mb-5 flex flex-col gap-2 text-left">
      <label
        htmlFor={id}
        className={`text-base text-navy ${boldLabel ? "font-semibold" : "font-medium"}`}
      >
        {label}
      </label>
      <div className="relative flex items-center">
        {icon && (
          <span className="pointer-events-none absolute left-4 flex items-center text-muted">
            {icon}
          </span>
        )}
        <input
          id={id}
          name={name}
          type={type}
          className={`h-14 w-full rounded-xl border border-line bg-white text-lg text-ink placeholder:text-placeholder transition focus:border-brand focus:outline-none focus:ring-3 focus:ring-brand/15 ${
            icon ? "pl-12" : "pl-4"
          } ${trailing ? "pr-12" : "pr-4"} ${
            error ? "border-danger focus:border-danger focus:ring-danger/15" : ""
          } ${className}`}
          {...rest}
        />
        {trailing && (
          <span className="absolute right-3.5 flex items-center">
            {trailing}
          </span>
        )}
      </div>
      {error && <span className="text-sm text-danger">{error}</span>}
    </div>
  );
};

export default InputField;

