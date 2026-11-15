import type { SVGProps } from "react";
import { logoColors } from "../scheme";

export interface LogoProps extends SVGProps<SVGSVGElement> {
  className?: string;
}

export const Logo = ({ className = "h-12 w-12", ...rest }: LogoProps) => (
  <svg
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
    {...rest}
  >
    <defs>
      <linearGradient id="logo-left-grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor={logoColors.leftFrom} />
        <stop offset="100%" stopColor={logoColors.leftTo} />
      </linearGradient>
      <linearGradient id="logo-right-grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor={logoColors.rightFrom} />
        <stop offset="100%" stopColor={logoColors.rightTo} />
      </linearGradient>
    </defs>
    <rect x="8" y="12" width="22" height="40" rx="8" fill="url(#logo-left-grad)" />
    <rect x="34" y="20" width="22" height="32" rx="8" fill="url(#logo-right-grad)" />
    <circle cx="45" cy="14" r="6" fill={logoColors.leftFrom} />
  </svg>
);

export default Logo;

