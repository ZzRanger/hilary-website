import ClipboardIcon from '@/components/svg/ClipboardIcon';
import VerticalDotsIcon from '@/components/svg/VerticalDotsIcon';
import ViewGridIcon from '@/components/svg/ViewGridIcon';
import profilePic from '@public/hn.png';
import Image from 'next/image';
import { RefObject } from 'react';

const THEMES = {
  dark: {
    icon: '#A6A6AF',
    iconBg: 'bg-[#1F1F1F]',
    navbarBg: 'bg-[#2D2C2C]/90',
  },
  light: {
    icon: '#A3A3A3',
    iconBg: 'bg-[#FFFFFF]',
    navbarBg: 'bg-[#EEEEEE]/90',
  },
};

const NavbarIconWrapper = ({
  isDark,
  children,
}: {
  isDark: boolean;
  children: React.ReactNode;
}) => {
  return (
    <article
      className={`${
        isDark ? THEMES.dark.iconBg : THEMES.light.iconBg
      } rounded-full justify-center items-center flex h-[40px] w-[40px]`}
    >
      {children}
    </article>
  );
};

export default function ProjectNavBar({ isDark }: { isDark: boolean }) {
  const hoverText = ['Home', 'Project Table of Contents', 'Projects', 'Links'];
  const icons = [
    <Image src={profilePic} alt="" className="h-full w-full" />,
    <ViewGridIcon fill={isDark ? THEMES.dark.icon : THEMES.light.icon} />,
    <ClipboardIcon fill={isDark ? THEMES.dark.icon : THEMES.light.icon} />,
    <VerticalDotsIcon fill={isDark ? THEMES.dark.icon : THEMES.light.icon} />,
  ];
  return (
    <article
      className={`${
        isDark ? THEMES.dark.navbarBg : THEMES.light.navbarBg
      } duration-300 flex flex-row justify-between gap-x-4 items-center shadow-lg backdrop-blur-xl rounded-full p-4`}
    >
      {icons.map((icon, idx) => (
        <NavbarIconWrapper isDark={isDark} key={idx}>
          {icon}
        </NavbarIconWrapper>
      ))}
    </article>
  );
}
