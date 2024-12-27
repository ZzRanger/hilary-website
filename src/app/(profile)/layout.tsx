import { NavBar } from "@/components/NavBar";

import "@/styles/globals.css";

// eslint-disable-next-line camelcase
import { Plus_Jakarta_Sans } from "next/font/google";

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
    <div className="bg-grid transition">
      <div className="bg-blobs flex flex-col items-center">
        <div className="mt-20"></div>
        <NavBar />
        <div className="mt-20"></div>
        {children}
      </div>
    </div>
  );
}
