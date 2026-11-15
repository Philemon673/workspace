import type { ChangeEvent, InputHTMLAttributes } from "react";
import { CheckIcon } from "../../assets/icons";

export interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  label?: string;
  checked?: boolean;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const Checkbox = ({
  label,
  name,
  checked = false,
  onChange,
  className = "",
  id,
  ...rest
}: CheckboxProps) => {
  const inputId = id || name;

  return (
    <label
      htmlFor={inputId}
      className={`inline-flex cursor-pointer items-center gap-2.5 text-base select-none ${className}`}
    >
      <span className="relative flex h-5 w-5 items-center justify-center">
        <input
          id={inputId}
          name={name}
          type="checkbox"
          checked={checked}
          onChange={onChange}
          className="peer sr-only"
          {...rest}
        />
        <span className="h-5 w-5 rounded-[5px] border-2 border-line bg-white transition peer-checked:border-brand peer-checked:bg-brand peer-focus-visible:ring-2 peer-focus-visible:ring-brand/40" />
        <CheckIcon className="pointer-events-none absolute h-3.5 w-3.5 text-white opacity-0 transition peer-checked:opacity-100" />
      </span>
      {label && <span className="text-ink">{label}</span>}
    </label>
  );
};

export default Checkbox;

