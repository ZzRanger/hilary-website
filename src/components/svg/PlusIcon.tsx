import { FC, SVGProps } from "react";

const ClipboardIcon: FC<
  SVGProps<SVGSVGElement> & { className?: string; fill?: string }
> = ({ className = "w-[20px] h-[21px]", fill = "none", ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 21"
    fill={fill}
    {...props}
    className={className}
  >
    <path
      d="M10 5.9231V15.9231M15 10.9231L5 10.9231"
      stroke="white"
      strokeWidth="1.67"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default ClipboardIcon;
