import { FC, SVGProps } from "react";

const ClipboardIcon: FC<SVGProps<SVGSVGElement> & { fill?: string }> = ({
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
      d="M10 5.9231V15.9231M15 10.9231L5 10.9231"
      stroke="white"
      stroke-width="1.67"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

export default ClipboardIcon;
