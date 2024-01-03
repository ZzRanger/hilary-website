"use client";

import { ReactNode, useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import profilePic from "@public/hn.png";
import useMedia from "@/utils/useMediaQuery";

export const NavBar = () => {
  const links: {
    href: string;
    children: ReactNode;
    title: string;
    icon: ReactNode;
    newTab: boolean;
  }[] = [
    {
      href: "/about",
      children: "About",
      title: "About",
      newTab: false,
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.111 6.11111C13.111 7.82933 11.7181 9.22222 9.99986 9.22222C8.28165 9.22222 6.88875 7.82933 6.88875 6.11111C6.88875 4.39289 8.28165 3 9.99986 3C11.7181 3 13.111 4.39289 13.111 6.11111Z"
            stroke="currentColor"
            strokeWidth="1.336"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9.99986 11.5556C6.99298 11.5556 4.55542 13.9931 4.55542 17H15.4443C15.4443 13.9931 13.0067 11.5556 9.99986 11.5556Z"
            stroke="currentColor"
            strokeWidth="1.336"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      href: "https://fori.io/hilary-nguyen ",
      children: "Play",
      title: "Play",
      newTab: true,
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.7777 8.44444V3L3.77771 11.5556H9.22216L9.22215 17L16.2222 8.44444L10.7777 8.44444Z"
            stroke="currentColor"
            strokeWidth="1.336"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      href: "/resume.pdf",
      children: "Resume",
      title: "Resume",
      newTab: true,
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.66653 10H12.3332M7.66653 13.1111H12.3332M13.8888 17H6.11098C5.25187 17 4.55542 16.3036 4.55542 15.4444V4.55556C4.55542 3.69645 5.25187 3 6.11098 3H10.4555C10.6618 3 10.8596 3.08194 11.0054 3.22781L15.2165 7.43886C15.3624 7.58472 15.4443 7.78255 15.4443 7.98883V15.4444C15.4443 16.3036 14.7479 17 13.8888 17Z"
            stroke="currentColor"
            strokeWidth="1.336"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      href: "https://www.linkedin.com/in/hilary-nguyen/",
      title: "LinkedIn",
      newTab: true,
      children: (
        <svg
          width="24"
          height="24"
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
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.66671 9.16659V13.3333M6.66671 6.66659V6.67492M10 13.3333V9.16659M3.33337 4.99992C3.33337 4.55789 3.50897 4.13397 3.82153 3.82141C4.13409 3.50885 4.55801 3.33325 5.00004 3.33325H15C15.4421 3.33325 15.866 3.50885 16.1786 3.82141C16.4911 4.13397 16.6667 4.55789 16.6667 4.99992V14.9999C16.6667 15.4419 16.4911 15.8659 16.1786 16.1784C15.866 16.491 15.4421 16.6666 15 16.6666H5.00004C4.55801 16.6666 4.13409 16.491 3.82153 16.1784C3.50897 15.8659 3.33337 15.4419 3.33337 14.9999V4.99992Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M13.3333 13.3332V10.8332C13.3333 10.3911 13.1577 9.96722 12.8452 9.65466C12.5326 9.3421 12.1087 9.1665 11.6667 9.1665C11.2246 9.1665 10.8007 9.3421 10.4882 9.65466C10.1756 9.96722 10 10.3911 10 10.8332"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      href: "mailto:nguyenhilary0907@gmail.com",
      title: "Mail",
      newTab: true,
      children: (
        <svg
          width="24"
          height="24"
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
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3 6.88875L9.13713 10.9802C9.65964 11.3285 10.3404 11.3285 10.8629 10.9802L17 6.88875M4.55556 15.4443H15.4444C16.3036 15.4443 17 14.7479 17 13.8888V6.11098C17 5.25187 16.3036 4.55542 15.4444 4.55542H4.55556C3.69645 4.55542 3 5.25187 3 6.11098V13.8888C3 14.7479 3.69645 15.4443 4.55556 15.4443Z"
            stroke="currentColor"
            strokeWidth="1.336"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
  ];

  const ref = useRef<HTMLDivElement>(null);
  const [sticky, setSticky] = useState(true);
  const [open, setOpen] = useState(false);

  const isSmallScreen = useMedia("(max-width: 640px)");
  useEffect(() => {
    if (ref.current) {
      const { height } = ref.current.getBoundingClientRect();
      const isSticky = () => {
        setSticky(!(window.scrollY >= height * 0.5));
      };
      window.addEventListener("scroll", isSticky);
      return () => {
        window.removeEventListener("scroll", isSticky);
      };
    }
  }, [ref]);

  useEffect(() => {
    setOpen(false);
  }, [sticky]);

  // For small screens and when you scroll
  if (!sticky || isSmallScreen) {
    return (
      <>
        <div className="sticky left-8 top-8 z-50 h-0 self-start">
          <div className="flex h-16 w-16 items-center justify-center">
            <Link href="/" className="">
              <Image src={profilePic} alt="" className="z-30 h-16 w-16" />
            </Link>
          </div>
        </div>
        <button
          className="sticky right-8 top-8 z-50 flex h-[116px] cursor-pointer justify-start self-end"
          onClick={() => setOpen((open) => !open)}
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md dark:bg-black">
            <NavigateIcon />
            <div
              className={`absolute right-0 top-12 my-2 flex flex-col overflow-clip rounded-md bg-white shadow-md dark:bg-neutral-800 ${
                open ? "block" : "hidden"
              }`}
            >
              {links.map(({ href, title, icon, newTab }) => (
                <Link
                  target={newTab ? "_blank" : ""}
                  href={href}
                  key={`-nav-hamburger-${href}`}
                >
                  <div className="flex items-center gap-2 px-3 py-2 text-lg font-medium text-neutral-700 hover:bg-neutral-100 hover:text-neutral-700 dark:text-neutral-200 dark:hover:bg-neutral-700 dark:hover:text-neutral-200">
                    <span>{icon}</span>
                    <span>{title}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </button>
      </>
    );
  }

  // For larger screens when you first render a page
  return (
    <div
      ref={ref}
      className={`border-box sticky top-0 flex h-[116px] w-full items-center justify-between px-7 pb-5 pt-8 text-2xl transition-all ${
        !sticky
          ? "bg-transparent dark:bg-transparent "
          : "border-b border-b-[#323943] bg-white dark:border-b-gray-500 dark:bg-neutral-900"
      } z-50`}
    >
      <Link href="/">
        <h1 className="text-3xl font-black tracking-tight">Hilary Nguyen</h1>
      </Link>

      <div className="flex items-center justify-center gap-5 p-0 text-lg">
        {links.map(({ href, children, newTab }) => (
          <Link
            target={newTab ? "_blank" : ""}
            href={href}
            key={`-nav-${href}`}
          >
            {children}
          </Link>
        ))}
      </div>
    </div>
  );
};

const NavigateIcon = () => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 10C6 8.89543 6.89543 8 8 8H32C33.1046 8 34 8.89543 34 10C34 11.1046 33.1046 12 32 12H8C6.89543 12 6 11.1046 6 10Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 20C6 18.8954 6.89543 18 8 18H32C33.1046 18 34 18.8954 34 20C34 21.1046 33.1046 22 32 22H8C6.89543 22 6 21.1046 6 20Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18 30C18 28.8954 18.8954 28 20 28H32C33.1046 28 34 28.8954 34 30C34 31.1046 33.1046 32 32 32H20C18.8954 32 18 31.1046 18 30Z"
        fill="currentColor"
      />
    </svg>
  );
};
