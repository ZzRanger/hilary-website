import ScrollLink from "@/components/ScrollLink";
import ClipboardIcon from "@/components/svg/ClipboardIcon";
import VerticalDotsIcon from "@/components/svg/VerticalDotsIcon";
import ViewGridIcon from "@/components/svg/ViewGridIcon";
import profilePic from "@public/hn.png";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Text, { Weight } from "@/components/typography/Text";
import Link from "next/link";

export type THEME = typeof THEMES;

const THEMES = {
  dark: {
    textColor: "text-white",
    icon: "#A6A6AF",
    iconBg: "bg-[#1F1F1F]",
    navbarBg: "bg-[#2D2C2C]/90",
  },
  light: {
    textColor: "text-black",
    icon: "#A3A3A3",
    iconBg: "bg-[#FFFFFF]",
    navbarBg: "bg-[#EEEEEE]/90",
  },
};

const NavbarIconWrapper = ({
  theme,
  hoverText,
  clickedText,
  children,
  isHovered,
  isClicked,
  onMouseEnter,
  onMouseLeave,
  onClick,
}: {
  theme: keyof THEME;
  hoverText: string;
  clickedText: React.ReactNode[];
  children: React.ReactNode;
  isHovered: boolean;
  isClicked: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  onClick: () => void;
}) => {
  const { textColor, iconBg, navbarBg } = THEMES[theme];

  return (
    <article
      className={`${iconBg} relative flex h-[40px] w-[40px] cursor-pointer items-center justify-center rounded-full`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
    >
      {isClicked && (
        <div
          className={`${navbarBg} absolute top-[-80px] flex flex-row gap-x-4 whitespace-nowrap rounded-full p-2`}
        >
          {clickedText.map((text, idx) => (
            <div
              className={`${iconBg} ${textColor} rounded-full p-2`}
              key={idx}
            >
              {text}
            </div>
          ))}
        </div>
      )}
      {isHovered && (
        <div
          className={`${iconBg} ${textColor} absolute top-[-60px] whitespace-nowrap rounded-full px-1 py-2 text-center text-sm`}
        >
          {hoverText}
        </div>
      )}
      {children}
    </article>
  );
};

const HOVER_TEXT = ["Home", "Project Table of Contents", "Projects", "Links"];

const CLICKED_TEXT = [
  [],
  [
    <ScrollLink
      key={0}
      href="#overview"
      className="flex  shrink-0 items-center justify-center"
    >
      <div className="whitespace-nowrap text-sm">📓 Overview</div>
    </ScrollLink>,
    <ScrollLink
      key={1}
      href="#problem"
      className="flex items-center justify-center"
    >
      <div className="whitespace-nowrap text-sm">‼️ Problem</div>
    </ScrollLink>,
    <ScrollLink
      key={2}
      href="#research"
      className="flex items-center justify-center"
    >
      <div className="whitespace-nowrap text-sm">📝 Research</div>
    </ScrollLink>,
    <ScrollLink
      key={3}
      href="#usability"
      className="flex  items-center justify-center"
    >
      <div className="whitespace-nowrap text-sm">💻 Usability</div>
    </ScrollLink>,
    <ScrollLink
      key={4}
      href="#design"
      className="flex  items-center justify-center"
    >
      <div className="whitespace-nowrap text-sm">🎨 Design</div>
    </ScrollLink>,
    <ScrollLink
      key={5}
      href="#conclusion"
      className="flex items-center justify-center"
    >
      <div className="whitespace-nowrap text-sm">🌟 Final</div>
    </ScrollLink>,
  ],
  [
    <Link
      key="rafiki-africa"
      href="https://www.notion.so/developforgood/Case-Study-Rafiki-Africa-666b829b2a724943903d0269dca36fcc"
    >
      📘 Rafiki Africa
    </Link>,
    <Link key="lezhin" href="/lezhin">
      📱 Lezhin
    </Link>,
    <Link key="nebula-labs" href="/nebula-labs">
      🪐 Nebula Labs
    </Link>,
    <Link
      key="descension"
      href="/descension" // Replace with the actual URL for Descension
    >
      🗡️ Descension
    </Link>,
  ],
  [
    <Link key="about" href="/about">
      About
    </Link>,
    <Link key="play" href="https://www.hilary-nguyen.com/playground">
      Play
    </Link>,
    <Link key="resume" href="/resume.pdf">
      Resume
    </Link>,
    <Link key="linkedin" href="https://www.linkedin.com/in/hilary-nguyen/">
      Linkedin
    </Link>,
    <Link key="mail" href="mailto:nguyenhilary0907@gmail.com">
      Mail
    </Link>,
  ], // TODO: Add icons
];

export default function ProjectNavbar({ isDark }: { isDark: boolean }) {
  const router = useRouter();
  const theme: keyof THEME = isDark ? "dark" : "light";

  const [hoveredIcon, setHoveredIcon] = useState<number | null>(null);
  const [clickedIcon, setClickedIcon] = useState<number | null>(null);

  const icons = [
    <Image
      onClick={() => {
        router.push("/");
      }}
      src={profilePic}
      alt=""
      className="h-full w-full"
      key={0}
    />,
    <ViewGridIcon fill={THEMES[theme].icon} key={1} />,
    <ClipboardIcon fill={THEMES[theme].icon} key={2} />,
    <VerticalDotsIcon fill={THEMES[theme].icon} key={3} />,
  ];

  const handleMouseEnter = (idx: number) => {
    if (clickedIcon !== idx) {
      setHoveredIcon(idx);
    }
  };

  const handleMouseLeave = () => {
    setHoveredIcon(null);
  };

  const handleClick = (idx: number) => {
    if (idx === 0) return;
    setClickedIcon(clickedIcon === idx ? null : idx);
    setHoveredIcon(null);
  };

  const { navbarBg } = THEMES[theme];

  return (
    <article
      className={`${navbarBg} flex flex-row items-center justify-between gap-x-4 rounded-full p-4 shadow-lg backdrop-blur-xl duration-200`}
    >
      {icons.map((icon, idx) => (
        <NavbarIconWrapper
          theme={theme}
          hoverText={HOVER_TEXT[idx]}
          clickedText={CLICKED_TEXT[idx]}
          isHovered={hoveredIcon === idx}
          isClicked={clickedIcon === idx}
          onMouseEnter={() => handleMouseEnter(idx)}
          onMouseLeave={handleMouseLeave}
          onClick={() => handleClick(idx)}
          key={idx}
        >
          {icon}
        </NavbarIconWrapper>
      ))}
    </article>
  );
}
