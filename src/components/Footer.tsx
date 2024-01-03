import Link from "next/link";
import type { ReactNode } from "react";

export const Footer = () => {
  const links: { href: string; children: ReactNode }[] = [
    {
      href: "/about",
      children: "About",
    },
    {
      href: "/resume.pdf",
      children: "Resume",
    },
    {
      href: "https://www.linkedin.com/in/hilary-nguyen/",
      children: "LinkedIn",
    },
    {
      href: "mailto:nguyenhilary0907@gmail.com",
      children: "Email",
    },
  ];
  return (
    <footer className="mb-16 flex w-full flex-col items-center justify-center gap-8 border border-transparent border-t-white py-10">
      <div className="flex items-center justify-center gap-8 p-0 text-xl font-bold">
        {links.map(({ href, children }) => (
          <Link target="_blank" href={href} key={`footer-${href}`}>
            {children}
          </Link>
        ))}
      </div>
      <p>
        Copyright &copy; {new Date().getFullYear()} Hilary Nguyen. All rights
        reserved.
      </p>
    </footer>
  );
};
