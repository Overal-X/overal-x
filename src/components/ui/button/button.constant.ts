import { ColorScheme } from "./button.interface";

export const colorSchemeSolidClasses: Record<ColorScheme, string> = {
  primary: "bg-[#ccc]",
  secondary: "bg-secondary",
  success: "bg-success",
  danger: "bg-danger",
  warning: "bg-warning",
  info: "bg-info",
};

export const colorSchemeOutlineClasses: Record<ColorScheme, string> = {
  primary: "text-[#ccc] border-[#ccc]",
  secondary: "text-secondary border-secondary",
  success: "text-success border-success",
  danger: "text-danger border-danger",
  warning: "text-warning border-warning",
  info: "text-info border-info",
};

export const sizeClasses: Record<string, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};
