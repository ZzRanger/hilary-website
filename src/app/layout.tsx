import "@/styles/globals.css";

// eslint-disable-next-line camelcase
import { Plus_Jakarta_Sans } from "next/font/google";
import localFont from "next/font/local";
import { Providers } from "@/app/providers";
import { CSPostHogProvider } from "@/providers/app";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

// TODO: Get correct font weight for ethereal
const ethereal = localFont({
  variable: "--font-ethereal",
  src: "../../public/ethereal.otf",
});

// TODO: Add metadata
export const metadata = {
  title: "Hilary Nguyen",
  description: "Hilary Nguyen",
};

const sans = Plus_Jakarta_Sans({
  subsets: ["latin", "latin-ext"],
  variable: "--font-sans",
});

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${sans.variable} ${ethereal.variable} ${inter.className} text-black`}
    >
      <body>
        <CSPostHogProvider>
          <Providers>{children}</Providers>
          <Analytics />
        </CSPostHogProvider>
      </body>
    </html>
  );
}
