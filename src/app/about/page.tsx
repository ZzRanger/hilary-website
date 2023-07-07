/* eslint-disable @typescript-eslint/no-unsafe-assignment */

/** Lint ignore above exists bc using svg in Image component causes problems
 * I'm lazy - here's relevant slackoverflow thread
 * https://github.com/vercel/next.js/discussions/30472
 */

import Image from 'next/image';

import ImageSelector from '@/components/about/ImageSelector';

import ArticleBackground from '@/components/about/ArticleBackground';

import SpotifyMusic from '@/components/about/SpotifyMusic';

import Carousel from '@/components/about/Carousel';
import { NavBar } from '../../components/NavBar';

import SilentHearts from '../../../public/silent_hearts.png';

export enum IndicatorType {
  inside = 'inside',
  outside = 'outside',
}

export default function About() {
  return (
    <main className="flex flex-col items-center gap-6 h-fit">
      <NavBar />
      <div className="w-[1214px]">
        <TwoColumnLayoutOne>
          <section className="flex flex-col gap-y-9">
            <AboutMe />
            <ReadingList />
          </section>
          <section className="flex flex-col gap-y-9">
            <ImageSelector />
            <SpotifyMusic />
          </section>
        </TwoColumnLayoutOne>
        <div>
          <Carousel />
        </div>
        <div className="grid gap-9 grid-cols-[1fr_2fr] w-full py-16 border-box ">
          <CountryChecklist />
          <FavoriteQuote />
        </div>
      </div>
    </main>
  );
}

const TwoColumnLayoutOne = ({
  children,
}: {
  children: React.ReactElement | React.ReactElement[];
}) => (
  <div className="grid grid-cols-[6fr_3fr] w-full py-16 gap-9">{children}</div>
);

const AboutMe = () => (
  <ArticleBackground className="flex flex-col py-10 pl-5 pr-[84px] justify-center h-[732px] gap-y-10">
    <div className="text-4xl font-extrabold">A little bit about me</div>
    <div className="">
      <div className="text-xl text-gray-400 leading-10 font-bold">WHO I AM</div>
      <div className="leading-8 ">
        I'm a self-taught designer passionate about improving the lives of
        others through my design work. I seek to learn new things every day,
        whether that's how to format a magazine, bake a mochi cookie, or how to
        make a perfectly fried egg!
      </div>
    </div>

    <div className="">
      <div className="text-xl text-gray-400 leading-10 font-bold">
        MY DESIGN JOURNEY
      </div>
      <div className="leading-8">
        I started my design journey by arming myself with a curious mind, a
        laptop, and Adobe Photoshop. I dedicated myself to learning and growing
        by attending design workshops, watching videos about accessibility in
        design, and applying the concepts I encountered to real-life projects
        such as my Lezhin App Redesign.
      </div>
    </div>

    <div className="">
      <div className="text-xl text-gray-400 leading-10 font-bold">
        MY ASPIRATION
      </div>
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
  <ArticleBackground className="flex justify-center items-center p-12">
    <div className="flex flex-row h-fit box-border items-center gap-x-10">
      <Image
        src={SilentHearts}
        alt=""
        height="305"
        width="220"
        className="left-0 "
      />

      <div className="flex flex-col justify-start items-start">
        <div className="text-xl text-gray-400 pb-8">Reading List</div>
        <div className="text-xl">Silent Hearts</div>
        <div className="text-base text-gray-400 pb-4">Jing Shui Bian</div>
        <div className="text-sm leading-8 w-[400px]">
          Lu Rong said, "I can't afford to want anything, but I still want you.
          So, sometimes, don't be angry with me because of Meimei, and don't
          break up with me." <br /> "Lin Mu, you have to know, I will love you
          with all my heart."
        </div>
      </div>
    </div>
  </ArticleBackground>
);

const CountryChecklist = () => (
  <ArticleBackground className="flex flex-col items-start p-4 gap-6 h-[367px]">
    <div className="self-center text-[#BDBDBD] pb-3 text-xl">
      Country Checklist
    </div>

    <CountryEntry name="🇮🇹  Italy" />
    <CountryEntry name="🇹🇼  Taiwan" />

    <CountryEntry name="🇸🇬  Singapore" />
    <CountryEntry name="🇯🇵  Japan" />
    <CountryEntry name="🇨🇿  Czech Republic" />

    <CountryEntry name=" 🇩🇪  Germany" className="mb-6" />
  </ArticleBackground>
);

const CountryEntry = ({
  name,
  className,
}: {
  name: string;
  className?: string;
}) => (
  <label className={className}>
    <input
      className="border-1 border-[#BDBDBD] rounded-full focus:ring-0 focus:ring-offset-0 text-[#FAD67F] mr-2"
      type="checkbox"
    />
    {name}
  </label>
);

const FavoriteQuote = () => (
  <ArticleBackground className="flex flex-col items-center h-[367px]">
    <div className="self-center text-[#BDBDBD] pb-7 text-xl leading-[46px] pt-1">
      Favorite Quote
    </div>
    <div className="flex flex-col w-[640px]">
      <div className="text-3xl font-semibold leading-[46px] mb-8">
        “You are mine, mine, I go shouting it to the afternoon's wind, and the
        wind hauls on my widowed voice.”
      </div>
      <div className="text-3xl font-semibold leading-[46px]">
        — In My Sky At Twilight, Pablo Neruda
      </div>
    </div>
  </ArticleBackground>
);
