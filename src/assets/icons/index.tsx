import { BaseIcon, type IconProps } from "../baseIcon";

export type { IconProps };
export { BaseIcon };

export const MailIcon = (p: IconProps) => (
  <BaseIcon {...p}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3.5 6.5 8.5 6.5 8.5-6.5" />
  </BaseIcon>
);
export const UserIcon = (p: IconProps) => (
  <BaseIcon {...p}>
    <circle cx="12" cy="8" r="4" />
    <path d="M4 20c0-4 3.6-6 8-6s8 2 8 6" />
  </BaseIcon>
);
export const LockIcon = (p: IconProps) => (
  <BaseIcon {...p}>
    <rect x="5" y="10.5" width="14" height="10" rx="2" />
    <path d="M8 10.5V8a4 4 0 0 1 8 0v2.5" />
    <circle cx="12" cy="15.5" r="1" />
  </BaseIcon>
);

export const EyeIcon = (p: IconProps) => (
  <BaseIcon {...p}>
    <path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12Z" />
    <circle cx="12" cy="12" r="3" />
  </BaseIcon>
);

export const EyeOffIcon = (p: IconProps) => (
  <BaseIcon {...p}>
    <path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12Z" />
    <circle cx="12" cy="12" r="3" />
    <path d="M4 4l16 16" />
  </BaseIcon>
);

export const ArrowRightIcon = (p: IconProps) => (
  <BaseIcon className="h-6 w-6" strokeWidth={2} {...p}>
    <path d="M4 12h16M14 6l6 6-6 6" />
  </BaseIcon>
);

export const InfoIcon = (p: IconProps) => (
  <BaseIcon className="h-6 w-6" {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 11v6M12 7.5v.5" />
  </BaseIcon>
);

export const ClockIcon = (p: IconProps) => (
  <BaseIcon className="h-8 w-8" {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </BaseIcon>
);

export const ChartIcon = (p: IconProps) => (
  <BaseIcon className="h-8 w-8" {...p}>
    <path d="M4 20h16M7 20v-7M12 20V6M17 20v-10" />
  </BaseIcon>
);

export const ShieldCheckIcon = (p: IconProps) => (
  <BaseIcon className="h-8 w-8" {...p}>
    <path d="M12 3 5 6v5c0 4.5 3 8 7 10 4-2 7-5.5 7-10V6l-7-3Z" />
    <path d="m9 12 2.2 2.2L15.5 10" />
  </BaseIcon>
);

export const CheckIcon = (p: IconProps) => (
  <BaseIcon className="h-4 w-4" strokeWidth={3.5} {...p}>
    <path d="m5 12.5 4.5 4.5L19 7" />
  </BaseIcon>
);