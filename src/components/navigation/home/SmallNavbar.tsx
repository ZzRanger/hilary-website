"use client";
import MenuOverlay from "@/components/home/MobileOverlay";
import ProjectDropdown from "@/components/navigation/home/ProjectDropdown";
import Link from "next/link";
import { useRef, useState } from "react";

export default function SmallNavbarLayout({
  className,
}: {
  className: string;
}) {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <div className={`${className} w-full`}>
      <MenuOverlay navbarOpen={navbarOpen} setNavbarOpen={setNavbarOpen} />
      <SmallNavbar setNavbarOpen={setNavbarOpen} />
    </div>
  );
}

function SmallNavbar({
  setNavbarOpen,
}: {
  setNavbarOpen: (open: boolean) => void;
}) {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={ref}
      className="h-[60px] w-full rounded-[100px] bg-[#101828]/10 lg:hidden"
    >
      <div className="border-box relative z-30 flex h-full w-full items-center justify-between rounded-[100px] bg-white/60 px-6 font-sans shadow-xl backdrop-blur-xl">
        <Link href="/">
          <h1 className="text-3xl font-black tracking-tight">HN.</h1>
        </Link>

        <div className="flex items-center justify-center gap-5 p-0 text-lg">
          <ProjectDropdown />
          <button onClick={() => setNavbarOpen(true)}>
            <HambugerIcon />
          </button>
        </div>
      </div>
    </div>
  );
}

function HambugerIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 5C3 4.44772 3.44772 4 4 4H16C16.5523 4 17 4.44772 17 5C17 5.55228 16.5523 6 16 6H4C3.44772 6 3 5.55228 3 5Z"
        fill="#171717"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 10C3 9.44772 3.44772 9 4 9H16C16.5523 9 17 9.44772 17 10C17 10.5523 16.5523 11 16 11H4C3.44772 11 3 10.5523 3 10Z"
        fill="#171717"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 15C9 14.4477 9.44772 14 10 14H16C16.5523 14 17 14.4477 17 15C17 15.5523 16.5523 16 16 16H10C9.44772 16 9 15.5523 9 15Z"
        fill="#171717"
      />
    </svg>
  );
}
