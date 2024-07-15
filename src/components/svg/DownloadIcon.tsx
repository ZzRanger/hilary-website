import { FC, SVGProps } from "react";

const DownloadIcon: FC<SVGProps<SVGSVGElement> & { fill?: string }> = ({
  fill = "none",
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="21"
    viewBox="0 0 20 21"
    fill={fill}
    {...props}
  >
    <path
      d="M3 14.4231L3 15.2981C3 16.7478 4.17525 17.9231 5.625 17.9231L14.375 17.9231C15.8247 17.9231 17 16.7478 17 15.2981L17 14.4231M13.5 10.9231L10 14.4231M10 14.4231L6.5 10.9231M10 14.4231L10 3.9231"
      stroke="white"
      stroke-width="1.67"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

export default DownloadIcon;
