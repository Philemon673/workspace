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

// Wave illustration – corrected to return JSX and use proper React attribute names
export const Wave = ({ className = "h-8 w-8", ...rest }: LogoProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      fill="none"
      className={className}
      aria-hidden="true"
      {...rest}
    >
      {/* motion arcs */}
      <path d="M10 14c3-5 8-8 14-8" stroke="#F59E0B" strokeWidth={3} strokeLinecap="round" />
      <path d="M4 22c1-4 3-7 6-9" stroke="#F59E0B" strokeWidth={3} strokeLinecap="round" />
      <path d="M54 8c4 2 7 6 8 11" stroke="#F59E0B" strokeWidth={3} strokeLinecap="round" />

      {/* hand */}
      <g transform="rotate(-12 34 38)">
        <rect x="42" y="14" width="7" height="22" rx="3.5" fill="#FBBF24" />
        <rect x="34" y="8" width="7.5" height="27" rx="3.75" fill="#FBBF24" />
        <rect x="26" y="6" width="7.5" height="29" rx="3.75" fill="#FBBF24" />
        <rect x="18" y="10" width="7.5" height="26" rx="3.75" fill="#FBBF24" />
        <path d="M18 38c-5-5-9-6-11-4s0 5 4 9l8 8z" fill="#F59E0B" />
        <path d="M18 30h31v11c0 9-7 16-16 16h-1c-8 0-14-6-14-14z" fill="#FBBF24" />
      </g>
    </svg>
  );
};

export default Logo;
