import type { ReactNode, SVGProps } from "react";

export interface IconProps extends SVGProps<SVGSVGElement> {
  className?: string;
}

interface BaseIconProps extends IconProps {
  children: ReactNode;
}

/** Shared 24x24 stroke-icon wrapper. Colour follows `currentColor`. */
export const BaseIcon = ({
  className = "h-7 w-7",
  strokeWidth = 1.8,
  children,
  ...rest
}: BaseIconProps) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    {...rest}
  >
    {children}
  </svg>
);