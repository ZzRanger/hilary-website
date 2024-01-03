import { FC, ReactNode } from "react";

interface MainProps extends React.ComponentPropsWithoutRef<"main"> {
  children: ReactNode;
}

export default function MainLayout({
  children,
  className,
  ...props
}: MainProps) {
  return (
    <main {...props} className={`w-screen  ${className}`}>
      {children}
    </main>
  );
}
