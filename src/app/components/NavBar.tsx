import { ReactNode } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import profilePic from '../../../public/hn.png';

// TODO: fix flash

export const NavBar = () => {
  const links: { href: string; children: ReactNode }[] = [
    {
      href: '/about',
      children: 'About',
    },
    {
      href: '/play',
      children: 'Play',
    },
    {
      href: '/resume',
      children: 'Resume',
    },
    {
      href: '/linkedin',
      children: (
        <svg
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.67499 6.25C8.67466 6.91304 8.41095 7.54879 7.94187 8.0174C7.4728 8.48601 6.83678 8.74908 6.17374 8.74875C5.5107 8.74842 4.87494 8.48471 4.40634 8.01563C3.93773 7.54656 3.67466 6.91054 3.67499 6.2475C3.67532 5.58446 3.93903 4.9487 4.4081 4.4801C4.87718 4.01149 5.5132 3.74842 6.17624 3.74875C6.83928 3.74908 7.47503 4.01279 7.94364 4.48187C8.41225 4.95094 8.67532 5.58696 8.67499 6.25ZM8.74999 10.6H3.74999V26.25H8.74999V10.6ZM16.65 10.6H11.675V26.25H16.6V18.0375C16.6 13.4625 22.5625 13.0375 22.5625 18.0375V26.25H27.5V16.3375C27.5 8.625 18.675 8.9125 16.6 12.7L16.65 10.6Z"
            fill="currentColor"
          />
        </svg>
      ),
    },
    {
      href: '/mail',
      children: (
        <svg
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5 25C4.3125 25 3.72375 24.755 3.23375 24.265C2.74375 23.775 2.49917 23.1867 2.5 22.5V7.5C2.5 6.8125 2.745 6.22375 3.235 5.73375C3.725 5.24375 4.31334 4.99917 5 5H25C25.6875 5 26.2763 5.245 26.7663 5.735C27.2563 6.225 27.5008 6.81334 27.5 7.5V22.5C27.5 23.1875 27.255 23.7763 26.765 24.2663C26.275 24.7563 25.6867 25.0008 25 25H5ZM15 16.25L5 10V22.5H25V10L15 16.25ZM15 13.75L25 7.5H5L15 13.75ZM5 10V7.5V22.5V10Z"
            fill="currentColor"
          />
        </svg>
      ),
    },
  ];
  return (
    <div className="flex items-center justify-between px-7 w-full pt-8 pb-5 text-2xl dark:bg-neutral-900 bg-white">
      <h1 className="tracking-tight font-black">Hilary Nguyen</h1>
      <div className="rounded-full p-3 bg-hn-yellow">
        <Image src={profilePic} alt="" className="w-12 h-12" />
      </div>
      <div className="flex justify-center items-center p-0 gap-5 text-lg">
        {links.map(({ href, children }) => (
          <Link target="_blank" href={href} key={href}>
            {children}
          </Link>
        ))}
      </div>
    </div>
  );
};
