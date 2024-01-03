import { NavBar } from '@/components/NavBar';
import '@/styles/globals.css';

// eslint-disable-next-line camelcase
import { Plus_Jakarta_Sans } from 'next/font/google';

// TODO: Add metadata
export const metadata = {
  title: 'Hilary Nguyen',
  description: 'Hilary Nguyen',
};

const sans = Plus_Jakarta_Sans({ subsets: ['latin'], variable: '--font-sans' });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="transition dark:bg-[#171717]">
      <div className="flex flex-col items-center">
        <NavBar />
        {children}
      </div>
    </div>
  );
}
