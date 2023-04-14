import Image from 'next/image';
import { PropsWithChildren } from 'react';
import { NavBar } from './components/NavBar';

export default function Home() {
  return (
    <div>
      <NavBar />
      <div className="flex flex-col items-center text-6xl leading-">
        <h2>
          Hello, my name is{' '}
          <SpecialText className="text-8xl">Hilary</SpecialText>!
        </h2>
        <h2>
          I like to design <SpecialText>cool stuff</SpecialText>
        </h2>
      </div>
    </div>
  );
}

const SpecialText = ({
  children,
  className = '',
}: PropsWithChildren<{ className?: string }>) => (
  <span className={`font-ethereal underline ${className}`}>{children}</span>
);
