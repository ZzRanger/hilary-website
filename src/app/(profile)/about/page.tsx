/* eslint-disable @typescript-eslint/no-unsafe-assignment */

/** Lint ignore above exists bc using svg in Image component causes problems
 * I'm lazy - here's relevant slackoverflow thread
 * https://github.com/vercel/next.js/discussions/30472
 */

import Image from 'next/image';

import ImageSelector from '@/components/about/ImageSelector';

import ArticleBackground from '@/components/about/ArticleBackground';

import SilentHearts from '@public/silent_hearts.png';

import SpotifyMusic from '@/components/about/SpotifyMusic';
import Carousel from '@/components/about/Carousel';

export enum IndicatorType {
  inside = 'inside',
  outside = 'outside',
}

export default function About() {
  return (
    <>
      <main className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-rows-auto gap-10 p-8 lg:max-w-[1300px]">
        <div className="md:row-span-2 lg:row-span-2 lg:col-span-2">
          <AboutMe />
        </div>
        <div className="md:col-start-2 lg:col-start-3">
          <ImageSelector />
        </div>
        <div className="md:row-span-2 md:row-start-3 lg:row-start-3 lg:col-span-2 lg:row-span-1">
          <ReadingList />
        </div>

        <div className="md:row-start-2 md:row-span-2 md:col-start-2 lg:col-start-3 lg:row-span-2">
          <SpotifyMusic />
        </div>
        <div className="h-screen md:h-full md:row-span-2 lg:col-span-3 lg:h-fit">
          <Carousel />
        </div>

        <div className="">
          <CountryChecklist />
        </div>
        <div className="md:col-span-2 md:order-3 lg:oder-1 lg:col-span-2">
          <FavoriteQuote />
        </div>
      </main>
    </>
  );
}

const AboutMe = () => (
  <ArticleBackground className="flex flex-col py-10 px-5 justify-between h-full">
    <div className="text-xl lg:text-4xl font-extrabold">
      A little bit about me
    </div>
    <div className="">
      <div className="text-base lg:text-xl leading-5 lg:leading-10 font-bold">
        WHO I AM
      </div>
      <div className="text-xs leading-6 lg:leading-8 lg:text-base max-w-[700px]">
        I'm a self-taught designer passionate about improving the lives of
        others through my design work. I seek to learn new things every day,
        whether that's how to format a magazine, bake a mochi cookie, or how to
        make a perfectly fried egg!
      </div>
    </div>

    <div className="">
      <div className="text-base lg:text-xl leading-10 font-bold">
        MY DESIGN JOURNEY
      </div>
      <div className="text-xs leading-6 lg:leading-8 lg:text-base max-w-[700px]">
        I started my design journey by arming myself with a curious mind, a
        laptop, and Adobe Photoshop. I dedicated myself to learning and growing
        by attending design workshops, watching videos about accessibility in
        design, and applying the concepts I encountered to real-life projects
        such as my Lezhin App Redesign.
      </div>
    </div>

    <div className="">
      <div className="text-base lg:text-xl leading-10 font-bold">
        MY ASPIRATION
      </div>
      <div className="text-xs leading-6 lg:leading-8 lg:text-base max-w-[700px]">
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
    <div className="flex flex-col lg:flex-row h-fit box-border items-center gap-10">
      <Image
        src={SilentHearts}
        alt=""
        height="305"
        width="220"
        className="left-0 "
      />

      <div className="flex flex-col justify-start items-start lg:w-[400px]">
        <div className="text-xl pb-8">Reading List</div>
        <div className="text-xl font-bold">Silent Hearts</div>
        <div className="text-base text-gray-400 pb-4">Jing Shui Bian</div>
        <div className="text-sm leading-8">
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
  <ArticleBackground className="flex flex-col items-start p-8 gap-6">
    <div className="self-center text-xl">Country Checklist</div>
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
  <label className={`${className} text-xl font-medium`}>
    <input
      className="border-1 border-[#BDBDBD] rounded-full focus:ring-0 focus:ring-offset-0 text-[#FAD67F] mr-2 text-xl font-medium"
      type="checkbox"
    />
    {name}
  </label>
);

const FavoriteQuote = () => (
  <ArticleBackground className="flex flex-col items-center h-full p-8">
    <div className="self-center text-xl leading-[46px] mb-10">
      Favorite Quote
    </div>
    <div className="flex flex-col items-center gap-y-12 lg:h-full max-w-[600px]">
      <div className="text-3xl font-semibold">
        “You are mine, mine, I go shouting it to the afternoon's wind, and the
        wind hauls on my widowed voice.”
      </div>
      <div className="text-3xl font-semibold leading-[46px]">
        — In My Sky At Twilight, Pablo Neruda
      </div>
    </div>
  </ArticleBackground>
);
