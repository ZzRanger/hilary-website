import { FC, SVGProps } from 'react';

const PhotoIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    width="19"
    height="21"
    viewBox="0 0 19 21"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fill="currentColor"
      d="M15.3333 20.7083C14.5313 20.7083 13.8444 20.4225 13.2727 19.8508C12.701 19.2791 12.4157 18.5927 12.4167 17.7916V3.20829C12.4167 2.40621 12.7025 1.71934 13.2742 1.14767C13.8458 0.576003 14.5322 0.290656 15.3333 0.291628C16.1354 0.291628 16.8223 0.577461 17.394 1.14913C17.9656 1.72079 18.251 2.40718 18.25 3.20829V17.7916C18.25 18.5937 17.9642 19.2806 17.3925 19.8523C16.8208 20.4239 16.1344 20.7093 15.3333 20.7083ZM3.66667 20.7083C2.86459 20.7083 2.17771 20.4225 1.60604 19.8508C1.03438 19.2791 0.74903 18.5927 0.750002 17.7916V3.20829C0.750002 2.40621 1.03584 1.71934 1.6075 1.14767C2.17917 0.576003 2.86556 0.290656 3.66667 0.291628C4.46875 0.291628 5.15563 0.577461 5.72729 1.14913C6.29896 1.72079 6.58431 2.40718 6.58334 3.20829V17.7916C6.58334 18.5937 6.2975 19.2806 5.72584 19.8523C5.15417 20.4239 4.46778 20.7093 3.66667 20.7083Z"
    />
  </svg>
);

export default PhotoIcon;
