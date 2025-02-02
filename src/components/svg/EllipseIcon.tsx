import { FC, SVGProps } from "react";

const EllipseIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    width="10"
    height="10"
    viewBox="0 0 10 10"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx="5" cy="5" r="5" fill="currentColor" />
  </svg>
);

export default EllipseIcon;
