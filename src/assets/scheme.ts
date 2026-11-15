/**
 * Single source of truth for the WorkTrack colour scheme.
 *
 * - `colors` is fed into tailwind.config.ts, so every key becomes a utility
 *   (e.g. `bg-brand`, `text-navy`, `border-line`, `hover:bg-brand-dark`).
 * - `logoColors` and `illustrationColors` are consumed by the SVG components,
 *   where Tailwind classes can't be used for gradient stops / fills.
 */

export const colors = {
  brand: {
    DEFAULT: "#1160e8",
    dark: "#0d52c9",
    soft: "#e4edff",
    accent: "#2d58c8",
  },
  navy: "#0c1233",
  ink: "#1a2142",
  muted: "#5c6685",
  line: "#d5dcec",
  placeholder: "#7d869f",
  checkbox: "#9db4ee",
  danger: "#c62828",
  page: {
    from: "#f8faff",
    to: "#eef3ff",
  },
  blob: {
    DEFAULT: "#dfe9ff",
    strong: "#c9dbff",
  },
};

export const logoColors = {
  leftFrom: "#1e6bff",
  leftTo: "#0a3fb8",
  rightFrom: "#5fa0ff",
  rightTo: "#2f6bf0",
};

export const illustrationColors = {
  floorShadow: "#bcd2fb",
  leafFrom: "#4a8cff",
  leafTo: "#1f58d6",
  leafMid: "#3b78f0",
  leafLight: "#7aa9ff",
  leafDark: "#2f66e0",
  pot: "#a9c4fa",
  calendarBody: "#ffffff",
  calendarBorder: "#d4e1fb",
  calendarHeader: "#b5ccf8",
  calendarRing: "#3b78f0",
  calendarCell: "#dbe6fc",
  calendarCellActive: "#3b78f0",
  checkMark: "#ffffff",
  clockRim: "#1f58d6",
  clockFace: "#f4f8ff",
  clockTick: "#2f66e0",
  clockHand: "#1a3fa0",
};