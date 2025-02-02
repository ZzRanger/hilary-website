import { FC, SVGProps } from "react";

const ViewGridIcon: FC<SVGProps<SVGSVGElement> & { fill: string }> = ({
  fill,
  ...props
}) => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M7.25 4.55C5.75883 4.55 4.55 5.75883 4.55 7.25V9.95C4.55 11.4412 5.75883 12.65 7.25 12.65H9.95C11.4412 12.65 12.65 11.4412 12.65 9.95V7.25C12.65 5.75883 11.4412 4.55 9.95 4.55H7.25Z"
      fill={fill}
    />
    <path
      d="M7.25 15.35C5.75883 15.35 4.55 16.5588 4.55 18.05V20.75C4.55 22.2412 5.75883 23.45 7.25 23.45H9.95C11.4412 23.45 12.65 22.2412 12.65 20.75V18.05C12.65 16.5588 11.4412 15.35 9.95 15.35H7.25Z"
      fill={fill}
    />
    <path
      d="M15.35 7.25C15.35 5.75883 16.5588 4.55 18.05 4.55H20.75C22.2412 4.55 23.45 5.75883 23.45 7.25V9.95C23.45 11.4412 22.2412 12.65 20.75 12.65H18.05C16.5588 12.65 15.35 11.4412 15.35 9.95V7.25Z"
      fill={fill}
    />
    <path
      d="M15.35 18.05C15.35 16.5588 16.5588 15.35 18.05 15.35H20.75C22.2412 15.35 23.45 16.5588 23.45 18.05V20.75C23.45 22.2412 22.2412 23.45 20.75 23.45H18.05C16.5588 23.45 15.35 22.2412 15.35 20.75V18.05Z"
      fill={fill}
    />
  </svg>
);

export default ViewGridIcon;
