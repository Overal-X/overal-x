import { IconProps } from "./interface";

function TeamIcon({ size = 24, color = "#fff" }: IconProps) {
  return (
    <svg
      height={size}
      width={size}
      id="_x32_"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      xmlSpace="preserve"
      fill={color}
    >
      <path
        className="st0"
        d="M435.95 287.525c32.51 0 58.87-26.343 58.87-58.853 0-32.51-26.361-58.871-58.87-58.871-32.502 0-58.863 26.361-58.863 58.871.001 32.51 26.361 58.853 58.863 58.853zM511.327 344.251c-2.623-15.762-15.652-37.822-25.514-47.677-1.299-1.306-7.105-1.608-8.673-.636-11.99 7.374-26.074 11.714-41.19 11.714-15.099 0-29.184-4.34-41.175-11.714-1.575-.972-7.373-.67-8.672.636-2.757 2.757-5.765 6.427-8.698 10.683 7.935 14.94 14.228 30.81 16.499 44.476 2.27 13.7 1.533 26.67-2.138 38.494 13.038 4.717 28.673 6.787 44.183 6.787 40.455 0 81.855-14.027 75.378-52.763zM254.487 262.691c52.687 0 95.403-42.716 95.403-95.402 0-52.67-42.716-95.386-95.403-95.386-52.678 0-95.378 42.716-95.378 95.386 0 52.686 42.699 95.402 95.378 95.402zM335.269 277.303c-2.07-2.061-11.471-2.588-14.027-1.006-19.448 11.966-42.271 18.971-66.755 18.971-24.466 0-47.3-7.005-66.738-18.971-2.555-1.583-11.956-1.055-14.026 1.006-16.021 16.004-37.136 51.782-41.384 77.288-10.474 62.826 56.634 85.508 122.148 85.508 65.532 0 132.639-22.682 122.165-85.508-4.248-25.506-25.363-61.284-41.383-77.288zM76.049 287.525c32.502 0 58.862-26.343 58.862-58.853 0-32.51-26.36-58.871-58.862-58.871-32.511 0-58.871 26.361-58.871 58.871 0 32.51 26.36 58.853 58.871 58.853zM115.094 351.733c2.414-14.353 9.225-31.253 17.764-46.88-2.38-3.251-4.759-6.083-6.955-8.279-1.299-1.306-7.097-1.608-8.672-.636-11.991 7.374-26.076 11.714-41.182 11.714-15.108 0-29.202-4.34-41.183-11.714-1.568-.972-7.382-.67-8.681.636-9.887 9.854-22.882 31.915-25.514 47.677-6.468 38.736 34.924 52.762 75.378 52.762 14.437 0 29.016-1.777 41.459-5.84-3.921-12.065-4.751-25.338-2.414-39.44z"
      />
    </svg>
  );
}

export default TeamIcon;
