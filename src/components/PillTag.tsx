import type { PropsWithChildren } from "react";

export type PillTagProps = {
  className?: string;
};

export const PillTag = ({
  children,
  className = "bg-hn-pink text-black",
}: PropsWithChildren<PillTagProps>) => (
  <p
    className={`flex items-center justify-center rounded-full px-4 py-2 text-xs font-bold md:text-sm ${className}`}
  >
    {children}
  </p>
);
