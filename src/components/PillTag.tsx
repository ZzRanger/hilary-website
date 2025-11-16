import type { PropsWithChildren } from "react";

export type PillTagProps = {
  className?: string;
};

export const PillTag = ({
  children,
  className = "bg-hn-pink text-black",
}: PropsWithChildren<PillTagProps>) => (
  <p
    className={`flex items-center justify-center rounded-full px-3  py-2 text-[10px] font-bold md:px-4 md:text-sm ${className}`}
  >
    {children}
  </p>
);
