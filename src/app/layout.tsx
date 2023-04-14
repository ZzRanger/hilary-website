import '@/styles/globals.css';

// eslint-disable-next-line camelcase
import { Plus_Jakarta_Sans } from 'next/font/google';
import { Providers } from './providers';

// TODO: Add metadata
export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

const sans = Plus_Jakarta_Sans({ subsets: ['latin'], variable: '--font-sans' });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${sans.className}`}>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
