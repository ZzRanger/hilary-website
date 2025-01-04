import { FC, SVGProps } from "react";

const ClipboardIcon: FC<SVGProps<SVGSVGElement> & { fill: string }> = ({
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
      d="M12.8187 4.55C12.1664 4.55 11.6375 5.07887 11.6375 5.73125C11.6375 6.38364 12.1664 6.9125 12.8187 6.9125H15.1812C15.8336 6.9125 16.3625 6.38364 16.3625 5.73125C16.3625 5.07887 15.8336 4.55 15.1812 4.55H12.8187Z"
      fill={fill}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.9125 8.09375C6.9125 6.78898 7.97023 5.73125 9.275 5.73125C9.275 7.68841 10.8616 9.275 12.8187 9.275H15.1812C17.1384 9.275 18.725 7.68841 18.725 5.73125C20.0298 5.73125 21.0875 6.78898 21.0875 8.09375V21.0875C21.0875 22.3923 20.0298 23.45 18.725 23.45H9.275C7.97023 23.45 6.9125 22.3923 6.9125 21.0875V8.09375ZM10.4562 12.8188C9.80386 12.8188 9.275 13.3476 9.275 14C9.275 14.6524 9.80386 15.1813 10.4562 15.1813H10.4681C11.1204 15.1813 11.6493 14.6524 11.6493 14C11.6493 13.3476 11.1204 12.8188 10.4681 12.8188H10.4562ZM14 12.8188C13.3476 12.8188 12.8187 13.3476 12.8187 14C12.8187 14.6524 13.3476 15.1813 14 15.1813H17.5438C18.1961 15.1813 18.725 14.6524 18.725 14C18.725 13.3476 18.1961 12.8188 17.5438 12.8188H14ZM10.4562 17.5438C9.80386 17.5438 9.275 18.0726 9.275 18.725C9.275 19.3774 9.80386 19.9063 10.4562 19.9063H10.4681C11.1204 19.9063 11.6493 19.3774 11.6493 18.725C11.6493 18.0726 11.1204 17.5438 10.4681 17.5438H10.4562ZM14 17.5438C13.3476 17.5438 12.8187 18.0726 12.8187 18.725C12.8187 19.3774 13.3476 19.9063 14 19.9063H17.5438C18.1961 19.9063 18.725 19.3774 18.725 18.725C18.725 18.0726 18.1961 17.5438 17.5438 17.5438H14Z"
      fill={fill}
    />
  </svg>
);

export default ClipboardIcon;
