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
    <BackgroundGrid>
      <div className="flex flex-col items-center gap-10 px-4 py-10 text-black">
        <NavBar />
        {children}
      </div>
    </BackgroundGrid>
  );
}

function BackgroundGrid({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-grid">
      <div className="bg-blobs">{children}</div>
    </div>
  );
}
