import { FC, SVGProps } from "react";

const PhotoIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    width="30"
    height="30"
    viewBox="0 0 30 30"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.31509 24.8849C8.49499 24.0648 8.49499 22.7352 9.31509 21.9151L16.2302 15L9.31509 8.08492C8.49499 7.26482 8.49499 5.93518 9.31509 5.11508C10.1352 4.29497 11.4648 4.29497 12.2849 5.11508L20.6849 13.5151C21.505 14.3352 21.505 15.6648 20.6849 16.4849L12.2849 24.8849C11.4648 25.705 10.1352 25.705 9.31509 24.8849Z"
      fill="currentColor"
    />
  </svg>
);

export default PhotoIcon;
