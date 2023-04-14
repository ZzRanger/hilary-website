'use client';

// TODO: refactor into separate components so we can use server components where possible
import Image from 'next/image';
import { PropsWithChildren, useState } from 'react';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import { NavBar } from './components/NavBar';

type ProjectOverviewProps = {
  client: string;
  title: string;
  period: string;
  ctaLink: string;
  subtitle: string;
  tags: string[];
};

export default function Home() {
  const { theme, setTheme } = useTheme();
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
      <button
        type="button"
        className="dark:bg-[#374151] dark:text-white bg-[#f5f5f5] text-black rounded-full aspect-square p-3"
        onClick={
          theme === 'light' ? () => setTheme('dark') : () => setTheme('light')
        }
      >
        {theme === 'light' ? (
          <svg
            width="50"
            height="50"
            viewBox="0 0 50 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M42.4998 31.728C40.2015 32.7674 37.6501 33.3459 34.9637 33.3459C24.8519 33.3459 16.6547 25.1487 16.6547 15.037C16.6547 12.3502 17.2334 9.79858 18.273 7.5C11.9204 10.3728 7.50018 16.7657 7.50018 24.191C7.50018 34.3028 15.6974 42.5 25.8092 42.5C33.2342 42.5 39.6269 38.0802 42.4998 31.728Z"
              fill="currentColor"
            />
          </svg>
        ) : (
          <svg
            width="50"
            height="50"
            viewBox="0 0 50 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M25 7.5C26.2081 7.5 27.1875 8.47938 27.1875 9.6875V11.875C27.1875 13.0831 26.2081 14.0625 25 14.0625C23.7919 14.0625 22.8125 13.0831 22.8125 11.875V9.6875C22.8125 8.47938 23.7919 7.5 25 7.5Z"
              fill="currentColor"
            />
            <path
              d="M33.75 25C33.75 29.8325 29.8325 33.75 25 33.75C20.1675 33.75 16.25 29.8325 16.25 25C16.25 20.1675 20.1675 16.25 25 16.25C29.8325 16.25 33.75 20.1675 33.75 25Z"
              fill="currentColor"
            />
            <path
              d="M32.7341 35.8275L34.2809 37.3743C35.1352 38.2286 36.5202 38.2286 37.3745 37.3743C38.2288 36.52 38.2288 35.135 37.3745 34.2807L35.8277 32.7339C34.9734 31.8796 33.5884 31.8796 32.7341 32.7339C31.8798 33.5882 31.8798 34.9732 32.7341 35.8275Z"
              fill="currentColor"
            />
            <path
              d="M37.3743 12.6255C38.2286 13.4798 38.2286 14.8648 37.3743 15.7191L35.8275 17.2659C34.9732 18.1202 33.5882 18.1202 32.7339 17.2659C31.8796 16.4116 31.8796 15.0266 32.7339 14.1723L34.2807 12.6255C35.135 11.7712 36.52 11.7712 37.3743 12.6255Z"
              fill="currentColor"
            />
            <path
              d="M40.3125 27.1875C41.5206 27.1875 42.5 26.2081 42.5 25C42.5 23.7919 41.5206 22.8125 40.3125 22.8125H38.125C36.9169 22.8125 35.9375 23.7919 35.9375 25C35.9375 26.2081 36.9169 27.1875 38.125 27.1875H40.3125Z"
              fill="currentColor"
            />
            <path
              d="M25 35.9375C26.2081 35.9375 27.1875 36.9169 27.1875 38.125V40.3125C27.1875 41.5206 26.2081 42.5 25 42.5C23.7919 42.5 22.8125 41.5206 22.8125 40.3125V38.125C22.8125 36.9169 23.7919 35.9375 25 35.9375Z"
              fill="currentColor"
            />
            <path
              d="M14.1726 17.2659C15.0268 18.1202 16.4119 18.1202 17.2661 17.2659C18.1204 16.4117 18.1204 15.0266 17.2661 14.1724L15.7193 12.6256C14.8651 11.7713 13.48 11.7713 12.6258 12.6256C11.7715 13.4798 11.7715 14.8649 12.6258 15.7191L14.1726 17.2659Z"
              fill="currentColor"
            />
            <path
              d="M17.2659 35.8274L15.7191 37.3742C14.8649 38.2285 13.4798 38.2285 12.6256 37.3742C11.7713 36.52 11.7713 35.1349 12.6256 34.2806L14.1724 32.7339C15.0266 31.8796 16.4117 31.8796 17.2659 32.7339C18.1202 33.5881 18.1202 34.9732 17.2659 35.8274Z"
              fill="currentColor"
            />
            <path
              d="M11.875 27.1875C13.0831 27.1875 14.0625 26.2081 14.0625 25C14.0625 23.7919 13.0831 22.8125 11.875 22.8125H9.6875C8.47938 22.8125 7.5 23.7919 7.5 25C7.5 26.2081 8.47938 27.1875 9.6875 27.1875H11.875Z"
              fill="currentColor"
            />
          </svg>
        )}
      </button>
      <ProjectOverview
        client="@nebula-labs"
        title="Nebula Planner"
        tags={['Case Study', 'UX Research', 'UI Design', 'Website']}
        subtitle="Designing a website tool to aid UT Dallas students in planning their four-year degree."
        period="Jan 2023 - March 2023"
        ctaLink="https://planner.utdnebula.com"
      />
    </div>
  );
}

type PillTagProps = {
  className?: string;
};
type PillLinkProps = PillTagProps & {
  href?: string;
};

const PillTag = ({
  children,
  className = 'bg-hn-pink text-black',
}: PropsWithChildren<PillTagProps>) => (
  <p className={`rounded-full px-4 py-2 ${className}`}>{children}</p>
);
const PillLink = ({
  children,
  className = 'bg-white text-black',
  href = '',
}: PropsWithChildren<PillLinkProps>) => (
  <Link href={href} className={`rounded-full px-4 py-2 ${className}`}>
    {children}
  </Link>
);

const ProjectOverview = ({
  client,
  period,
  title,
  subtitle,
  tags,
  ctaLink,
  children,
}: PropsWithChildren<ProjectOverviewProps>) => {
  const tagColors = ['bg-hn-pink', 'bg-hn-blue', 'bg-hn-green', 'bg-hn-yellow'];
  return (
    <div className="flex flex-col gap-9 w-full px-10">
      <div className="flex justify-between">
        <p>{client}</p>
        <p>{period}</p>
      </div>
      <div className="backdrop-blur-xl flex flex-col rounded-lg bg-gradient-to-r from-black/[15] to-black/[0.0375] border">
        <div className="flex justify-between items-center p-4">
          <div className="flex gap-4">
            {tags.map((tag, index) => (
              <PillTag
                key={`pill-tag-${index}`}
                className={`${tagColors[index % tagColors.length]} text-black`}
              >
                {tag}
              </PillTag>
            ))}
          </div>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="2" />
          </svg>
        </div>
        <div className="flex justify-between items-center p-4">
          <div className="flex flex-col gap-2 p-4">
            <h3 className="font-bold text-4xl">{title}</h3>
            <p>{subtitle}</p>
            <PillLink
              href={ctaLink}
              className="bg-white text-black flex items-center gap-1"
            >
              Read More{' '}
              <svg
                width="11"
                height="10"
                viewBox="0 0 11 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4.09638 8.29497C3.82302 8.02161 3.82302 7.57839 4.09638 7.30503L6.40141 5L4.09638 2.69497C3.82302 2.42161 3.82302 1.97839 4.09638 1.70503C4.36975 1.43166 4.81297 1.43166 5.08633 1.70503L7.88633 4.50502C8.1597 4.77839 8.1597 5.22161 7.88633 5.49497L5.08633 8.29497C4.81297 8.56834 4.36975 8.56834 4.09638 8.29497Z"
                  fill="currentColor"
                />
              </svg>
            </PillLink>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};

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
