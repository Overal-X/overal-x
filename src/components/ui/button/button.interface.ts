export type Variant = "ghost" | "outline" | "solid" | "link";
export type ColorScheme =
  | "primary"
  | "secondary"
  | "success"
  | "danger"
  | "warning"
  | "info";
export type Size = "sm" | "md" | "lg";

export interface ButtonProps {
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
  icon?: React.ReactNode;
  iconPos?: "left" | "right";
  disabled?: boolean;
  isLoading?: boolean;
  href?: string;
  variant?: Variant;
  colorScheme?: ColorScheme;
  size?: Size;
}
