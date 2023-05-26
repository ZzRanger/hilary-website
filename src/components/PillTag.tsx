import type { PropsWithChildren } from 'react';

export type PillTagProps = {
  className?: string;
};

export const PillTag = ({
  children,
  className = 'bg-hn-pink text-black',
}: PropsWithChildren<PillTagProps>) => (
  <p className={`rounded-full px-4 py-2 text-sm font-bold ${className}`}>
    {children}
  </p>
);
