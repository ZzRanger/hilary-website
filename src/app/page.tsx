'use client';

// TODO: refactor into separate components so we can use server components where possible
import Image from 'next/image';
import { PropsWithChildren, useState } from 'react';
import { NavBar } from './components/NavBar';

export default function Home() {
  const options = ['UX/UI', 'Graphics'];
  const [option, setOption] = useState(0);
  return (
    <div className="flex flex-col items-center gap-6">
      <NavBar />
      <div className="flex flex-col items-center text-6xl">
        <h2>
          Hello, my name is{' '}
          <SpecialText className="text-8xl">Hilary</SpecialText>!
        </h2>
        <h2>
          I like to design <SpecialText>cool stuff</SpecialText>
        </h2>
      </div>
      <PillSelector
        options={options}
        selected={option}
        setSelected={setOption}
      />
    </div>
  );
}
type PillSelectorProps = {
  options: string[];
  selected: number;
  setSelected: (selected: PillSelectorProps['selected']) => void;
};

const PillSelector = ({
  options,
  selected,
  setSelected,
}: PillSelectorProps) => (
  <div className="flex flex-row items-center justify-center rounded-full dark:bg-[#6b7280] w-max overflow-clip px-1">
    {options.map((option, index) => (
      <button
        type="button"
        key={`pill-option-${index}`}
        onClick={() => setSelected(index)}
        className={`my-1 rounded-full px-4 py-1 ${
          selected === index ? 'dark:bg-[#323943]' : 'bg-inherit'
        }`}
      >
        {option}
      </button>
    ))}
  </div>
);

const SpecialText = ({
  children,
  className = '',
}: PropsWithChildren<{ className?: string }>) => (
  <span className={`font-ethereal underline ${className}`}>{children}</span>
);
