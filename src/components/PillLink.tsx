import type { PropsWithChildren } from 'react';
import Link from 'next/link';
import { PillTagProps } from './PillTag';

type PillLinkProps = PillTagProps & {
  href?: string;
};

export const PillLink = ({
  children,
  className = 'bg-white text-black',
  href = '',
}: PropsWithChildren<PillLinkProps>) => (
  <Link
    href={href}
    className={`w-max transition-all rounded-full px-4 py-2 hover:-translate-y-1 hover:shadow-md dark:hover:shadow-neutral-600 border border-[#E5E7EB] ${className}`}
  >
    {children}
  </Link>
);
