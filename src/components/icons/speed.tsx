import { IconProps } from "./interface";

function SpeedIcon({ size = 24, color = "#000" }: IconProps) {
  return (
    <svg
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 20 20"
      xmlSpace="preserve"
    >
      <path d="M10 20C4.5 20 0 15.5 0 10S4.5 0 10 0s10 4.5 10 10-4.5 10-10 10zm0-18c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8z" />
      <path d="M8.6 11.4c-.8-.8-2.8-5.7-2.8-5.7s4.9 2 5.7 2.8c.8.8.8 2 0 2.8-.9.9-2.1.9-2.9.1z" />
    </svg>
  );
}

export default SpeedIcon;
