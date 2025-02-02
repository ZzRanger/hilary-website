import { NavBar } from "@/components/NavBar";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import "@/styles/globals.css";

// eslint-disable-next-line camelcase
import { Plus_Jakarta_Sans } from "next/font/google";
import localFont from "next/font/local";

// TODO: Get correct font weight for ethereal
// const ethereal = localFont({
//   variable: '--font-ethereal',
//   src: '@public/ethereal.otf',
// });

// TODO: Add metadata
export const metadata = {
  title: "Hilary Nguyen",
  description: "Hilary Nguyen",
};

const sans = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-sans" });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-grid transition dark:bg-[#171717]">
      <div className="bg-blobs flex flex-col items-center">
        <NavBar />
        {children}
        <ThemeSwitcher />
      </div>
    </div>
  );
}
