import '@/styles/globals.css';

// eslint-disable-next-line camelcase
import { Plus_Jakarta_Sans } from 'next/font/google';
import localFont from 'next/font/local';
import { Providers } from '@/app/providers';

// TODO: Get correct font weight for ethereal
const ethereal = localFont({
  variable: '--font-ethereal',
  src: '../../public/ethereal.otf',
});

// TODO: Add metadata
export const metadata = {
  title: 'Hilary Nguyen',
  description: 'Hilary Nguyen',
};

const sans = Plus_Jakarta_Sans({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-sans',
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
      className={`${sans.variable} ${ethereal.variable}`}
    >
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
