/* eslint-disable @typescript-eslint/no-unsafe-assignment */

/** Lint ignore above exists bc using svg in Image component causes problems
 * I'm lazy - here's relevant slackoverflow thread
 * https://github.com/vercel/next.js/discussions/30472
 */

'use client';

import Image from 'next/image';

import ImageSelector from '@/components/ImageSelector';
import PlayIcon from '@/components/svg/PlayIcon';
import SkipIcon from '@/components/svg/SkipIcon';
import { NavBar } from '../../components/NavBar';

import SilentHearts from '../../../public/silent_hearts.png';

import Music from '../../../public/music.png';
import Tokoyo from '../../../public/tokoyo.png';

export default function Home() {
  return (
    <main className="flex flex-col items-center gap-6 w-screen">
      <NavBar />
      <TwoColumnLayoutOne>
        <section className="flex flex-col gap-y-9">
          <AboutMe />
          <ReadingList />
        </section>
        <section className="flex flex-col gap-y-9">
          <ImageSelector />
          <AppleMusic />
        </section>
      </TwoColumnLayoutOne>
      <div>
        <Image src={Tokoyo} alt="" />
      </div>
      <div className="grid gap-4 grid-cols-[1fr_2fr] w-full border-black border-2 p-16">
        <CountryChecklist />
        <FavoriteQuote />
      </div>
    </main>
  );
}

const TwoColumnLayoutOne = ({
  children,
}: {
  children: React.ReactElement | React.ReactElement[];
}) => (
  <div className="grid grid-cols-[6fr_3fr] w-full p-16 gap-9">{children}</div>
);

const ArticleBackground = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactElement | React.ReactElement[];
}) => (
  <article className={`bg-gray-100 rounded-3xl ${className || ''}`}>
    {children}
  </article>
);

const AboutMe = () => (
  <ArticleBackground className="flex flex-col py-10 pl-5 pr-[84px] justify-start">
    <div className="text-4xl font-extrabold pb-5">A little bit about me</div>
    <div className="mb-5">
      <div className="text-xl text-gray-400 ">WHO I AM</div>
      <div className="leading-8 ">
        I'm a self-taught designer passionate about improving the lives of
        others through my design work. I seek to learn new things every day,
        whether that's how to format a magazine, bake a mochi cookie, or how to
        make a perfectly fried egg!
      </div>
    </div>

    <div className="mb-5">
      <div className="text-xl text-gray-400">MY DESIGN JOURNEY</div>
      <div className="leading-8">
        I started my design journey by arming myself with a curious mind, a
        laptop, and Adobe Photoshop. I dedicated myself to learning and growing
        by attending design workshops, watching videos about accessibility in
        design, and applying the concepts I encountered to real-life projects
        such as my Lezhin App Redesign.
      </div>
    </div>

    <div className="mb-5">
      <div className="text-xl text-gray-400">MY ASPIRATION</div>
      <div className="leading-8">
        The design world is always evolving, adapting to the world's needs, and
        so is a designer's job. I hope to grow into a creative professional by
        challenging myself even more with future creative projects and to be
        able to design extraordinary things that can help people.
      </div>
    </div>
  </ArticleBackground>
);

const ReadingList = () => (
  <ArticleBackground className="flex flex-row px-10 py-6 gap-11">
    <div className="h-full w-fit">
      <Image
        src={SilentHearts}
        alt=""
        height="220"
        width="305"
        className="left right-0"
      />
    </div>
    <div className="flex flex-col justify-start items-start">
      <div className="text-xl text-gray-400 pb-16">Reading List</div>
      <div className="text-xl">Silent Hearts</div>
      <div className="text-base text-gray-400 pb-16">Jing Shui Bian</div>
      <div className="text-sm leading-8 w-[400px]">
        Lu Rong said, "I can't afford to want anything, but I still want you.
        So, sometimes, don't be angry with me because of Meimei, and don't break
        up with me." <br /> "Lin Mu, you have to know, I will love you with all
        my heart."
      </div>
    </div>
  </ArticleBackground>
);

const AppleMusic = () => (
  <ArticleBackground className="h-[728px] flex flex-col items-center">
    <Image src={Music} alt="" height="280" width="280" className="mt-40" />
    <div>UN Village</div>
    <div>Baekhyun — City Lights</div>
    <div className="flex flex-row justify-around items-center w-40 border-2 border-[#BDBDBD] rounded-[200px]">
      <SkipIcon />
      <PlayIcon />
      <SkipIcon className="rotate-180" />
    </div>
  </ArticleBackground>
);

const CountryChecklist = () => (
  <ArticleBackground className="flex flex-col items-start p-4 gap-6">
    <div className="self-center text-[#BDBDBD] pb-4 text-xl">
      Country Checklist
    </div>

    <label>
      <input
        className="border-1 border-[#BDBDBD] rounded-full focus:ring-0 focus:ring-offset-0 text-[#FAD67F]"
        type="checkbox"
      />
      🇮🇹 Italy
    </label>

    <label>
      <input
        className="border-1 border-[#BDBDBD] rounded-full focus:ring-0 focus:ring-offset-0 text-[#FAD67F]"
        type="checkbox"
      />
      🇹🇼 Taiwan
    </label>
    <label>
      <input
        className="border-1 border-[#BDBDBD] rounded-full focus:ring-0 focus:ring-offset-0 text-[#FAD67F]"
        type="checkbox"
      />
      🇸🇬 Singapore
    </label>

    <label>
      <input
        className="border-1 border-[#BDBDBD] rounded-full focus:ring-0 focus:ring-offset-0 text-[#FAD67F]"
        type="checkbox"
      />
      🇯🇵 Japan
    </label>

    <label>
      <input
        className="border-1 border-[#BDBDBD] rounded-full focus:ring-0 focus:ring-offset-0 text-[#FAD67F]"
        type="checkbox"
      />
      🇨🇿 Czech Republic
    </label>

    <label>
      <input
        className="border-1 border-[#BDBDBD] rounded-full focus:ring-0 focus:ring-offset-0 text-[#FAD67F]"
        type="checkbox"
      />
      🇩🇪 Germany
    </label>
  </ArticleBackground>
);

const FavoriteQuote = () => (
  <ArticleBackground className="flex flex-col items-center gap-12 p-4">
    <div className="self-center text-[#BDBDBD] pb-4 text-xl">
      Favorite Quote
    </div>
    <div className="text-3xl font-semibold pb-10 self-start px-6">
      “You are mine, mine, I go shouting it to the afternoon's wind, and the
      wind hauls on my widowed voice.”
    </div>
    <div className="text-3xl font-semibold self-start px-6">
      — In My Sky At Twilight, Pablo Neruda
    </div>
  </ArticleBackground>
);
