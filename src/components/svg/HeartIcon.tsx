import { FC, SVGProps } from "react";

const HeartIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    viewBox="0 0 21 20"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M10.5 19.1146L8.98956 17.7396C3.62498 12.875 0.083313 9.65625 0.083313 5.72917C0.083313 2.51042 2.60415 0 5.81248 0C7.62498 0 9.36456 0.84375 10.5 2.16667C11.6354 0.84375 13.375 0 15.1875 0C18.3958 0 20.9166 2.51042 20.9166 5.72917C20.9166 9.65625 17.375 12.875 12.0104 17.7396L10.5 19.1146Z" />
  </svg>
);

export default HeartIcon;
