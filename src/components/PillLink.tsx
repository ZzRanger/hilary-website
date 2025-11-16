import type { PropsWithChildren } from "react";
import Link from "next/link";
import { PillTagProps } from "./PillTag";

type PillLinkProps = PillTagProps & {
  href?: string;
};

export const PillLink = ({
  children,
  className = "bg-white text-black",
  href = "",
}: PropsWithChildren<PillLinkProps>) => (
  <Link
    href={href}
    className={`w-max rounded-full border border-[#E5E7EB] px-4 py-2 transition-all hover:-translate-y-1 hover:shadow-md ${className}`}
  >
    {children}
  </Link>
);
