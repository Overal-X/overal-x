import { IconProps } from "./interface";

function UpdateIcon({ size = 24, color = "#fff" }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      id="b"
      xmlns="http://www.w3.org/2000/svg"
      strokeWidth={4}
    >
      <path
        id="c"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M24 31.186V16.814l5.456 5.884"
      />
      <path
        id="d"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M24 16.814l-5.456 5.884"
      />
      <path
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M39.245 26.002c.087-.664.134-1.332.14-2.002a16.527 16.527 0 00-.14-2.002l4.334-3.393c.405-.31.513-.874.25-1.311l-4.104-7.117a1.001 1.001 0 00-1.251-.44l-5.115 2.061a15.69 15.69 0 00-3.463-2.002l-.771-5.435a1 1 0 00-1.001-.86h-8.228a1.001 1.001 0 00-1.001.86l-.771 5.435a15.379 15.379 0 00-3.463 2.002L9.526 9.736a1.001 1.001 0 00-1.252.44L4.17 17.294a1.001 1.001 0 00.25 1.312l4.325 3.393A16.65 16.65 0 008.605 24c.006.67.053 1.338.14 2.002L4.42 29.395c-.406.31-.513.874-.25 1.311l4.103 7.117c.246.442.783.631 1.252.44l5.115-2.061a15.693 15.693 0 003.463 2.002l.77 5.435a1 1 0 001.002.86h8.208c.502.006.93-.363 1-.86l.772-5.435a15.379 15.379 0 003.463-2.002l5.115 2.062c.468.19 1.005.001 1.251-.44l4.104-7.118a1.001 1.001 0 00-.25-1.31l-4.294-3.394z"
      />
    </svg>
  );
}

export default UpdateIcon;
