import Link from 'next/link';
import type { ReactNode } from 'react';

export const Footer = () => {
  const links: { href: string; children: ReactNode }[] = [
    {
      href: '/about',
      children: 'About',
    },
    {
      href: '/resume',
      children: 'Resume',
    },
    {
      href: 'https://www.linkedin.com/in/hilary-nguyen/',
      children: 'LinkedIn',
    },
    {
      href: 'mailto:nguyenhilary0907@gmail.com',
      children: 'Email',
    },
  ];
  return (
    <footer className="flex flex-col items-center justify-center w-full gap-8 py-10 mb-16 border border-transparent border-t-white">
      <div className="flex justify-center items-center p-0 gap-8 font-bold text-xl">
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
