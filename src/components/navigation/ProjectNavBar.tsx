import ClipboardIcon from "@/components/svg/ClipboardIcon";
import VerticalDotsIcon from "@/components/svg/VerticalDotsIcon";
import ViewGridIcon from "@/components/svg/ViewGridIcon";
import profilePic from "@public/hn.png";
import Image from "next/image";
import { useState } from "react";

export type THEME = typeof THEMES;

const THEMES = {
  dark: {
    icon: "#A6A6AF",
    iconBg: "bg-[#1F1F1F]",
    navbarBg: "bg-[#2D2C2C]/90",
  },
  light: {
    icon: "#A3A3A3",
    iconBg: "bg-[#FFFFFF]",
    navbarBg: "bg-[#EEEEEE]/90",
  },
};

const NavbarIconWrapper = ({
  fill,
  hoverText,
  children,
}: {
  fill: string;
  hoverText: string;
  children: React.ReactNode;
}) => {
  const [showHover, setShowHover] = useState(false);
  return (
    <article
      className={`${fill} relative flex h-[40px] w-[40px] cursor-pointer items-center justify-center rounded-full `}
      onMouseEnter={() => setShowHover(true)}
      onMouseLeave={() => setShowHover(false)}
    >
      {showHover && (
        <div className="absolute top-[-50px] whitespace-nowrap rounded-full bg-white px-1 py-2 text-center text-sm">
          {hoverText}
        </div>
      )}
      {children}
    </article>
  );
};

export default function ProjectNavbar({ isDark }: { isDark: boolean }) {
  const theme = (isDark ? "dark" : "light") as keyof THEME;

  const hoverText = ["Home", "Project Table of Contents", "Projects", "Links"];
  const icons = [
    <Image src={profilePic} alt="" className="h-full w-full" />,
    <ViewGridIcon fill={THEMES[theme].icon} />,
    <ClipboardIcon fill={THEMES[theme].icon} />,
    <VerticalDotsIcon fill={THEMES[theme].icon} />,
  ];
  return (
    <article
      className={`${THEMES[theme].navbarBg} flex flex-row items-center justify-between gap-x-4 rounded-full p-4 shadow-lg backdrop-blur-xl duration-300`}
    >
      {icons.map((icon, idx) => (
        <NavbarIconWrapper
          fill={THEMES[theme].iconBg}
          hoverText={hoverText[idx]}
          key={idx}
        >
          {icon}
        </NavbarIconWrapper>
      ))}
    </article>
  );
}
