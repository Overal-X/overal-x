import { IconProps } from "./interface";

function BusinessIcon({ size = 24, color = "#fff" }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.33 34.669A21.51 21.51 0 018.796 8.797L24 24 8.797 39.203A21.497 21.497 0 1013.33 5.33"
        fill="none"
        stroke={color}
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default BusinessIcon;
