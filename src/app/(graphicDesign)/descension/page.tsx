import Image from "next/image";
import { ReactNode } from "react";

/**
 * Note for myself:
 *
 * Cannot import videos bc of this:
 * https://stackoverflow.com/questions/63649879/nextjs-throws-error-when-i-add-a-background-video
 *
 */

export default function Descension() {
  return (
    <main className="flex flex-col items-center justify-center gap-20 p-12">
      <InfoSection />
      <MagazineImages />
      <ArtboardImages />
      <PromotionalImages />
      <Graphics />
    </main>
  );
}

function InfoSection() {
  return (
    <section className="grid grid-cols-2 gap-8">
      <article className="flex flex-col justify-between">
        <div className="flex flex-col gap-y-4">
          <div className="m-0 p-0 text-[40px] font-bold text-[#C88D3F]">
            Descension: A Genshin Xianxia Zine
          </div>
          <div className="font-medium">Magazine Project</div>
        </div>

        <div className="flex flex-col gap-y-4">
          <div className="font-bold text-[#C88D3F]">Zine PDF</div>
          <a
            className="underline"
            href="https://drive.google.com/file/d/1tlD4tCguXWLdh_2cfBxmYFBcWriX4QjI/view?usp=share_link"
          >
            Download Link
          </a>
          <div className="max-w-sm">
            Please note that the website design is currently underway. This
            website will be the first implementation of the new identity.
          </div>
        </div>
      </article>

      <article className="flex flex-col gap-y-20">
        <div>
          Descension is an independent{" "}
          <b className="underline">for-profit fan zine project</b> inspired by
          the portrayal of characters from the popular game Genshin Impact in a
          xianxia setting. Xianxia is a popular Chinese fantasy media genre that
          is heavily inspired by Daoism, Chinese mythology, and Buddhism.
          <br />
          <br />
          The project consisted of <b className="underline">
            54 contributors
          </b>{" "}
          and <b className="underline">8 moderators</b>. Descension took about a
          year to complete. The project included animation promotion, a book
          that{" "}
          <b className="underline">
            featured illustrations and written pieces, and merchandise
          </b>{" "}
          such as (but not limited to) prints, keychains, enamel pins, and washi
          tape. The project received over $50k in revenue and 600 orders from
          customers around the world.
        </div>
        <div>
          <div className="text-[30px] font-bold text-[#C88D3F]">
            Project Details
          </div>
          <div>
            <b>Timeline:</b> One Year
          </div>
          <div>
            <b>Responsibilities:</b> Branding design, magazine formatting,
            generating marketing content
          </div>
          <div>
            <b>Tools:</b> Adobe Illustrator, Indesign, and Photoshop
          </div>
        </div>
      </article>
    </section>
  );
}

function ImageTitle({ children }: { children: ReactNode }) {
  return (
    <div className="col-span-2 text-[30px] text-[#C88D3F]">{children}</div>
  );
}

import Magazine1 from "@public/graphics/descension/magazine/marketing-01.png";
import Magazine2 from "@public/graphics/descension/magazine/marketing-02.png";
import Magazine3 from "@public/graphics/descension/magazine/marketing-03.png";
import Magazine4 from "@public/graphics/descension/magazine/marketing-04.png";
import Magazine5 from "@public/graphics/descension/magazine/marketing-05.png";

const MagazineVideo1 = "/public/graphics/descension/magazine/marketing-06.mov";

function MagazineImages() {
  return (
    <section className="grid grid-cols-2 gap-8">
      <ImageTitle>Magazine</ImageTitle>
      <article className="flex flex-col gap-8">
        <Image src={Magazine1} alt="Branding 1" />
        <Image src={Magazine2} alt="Magazine 2" />
        <Image src={Magazine3} alt="Magazine 3" />
      </article>
      <article className="flex flex-col gap-8">
        <Image src={Magazine4} alt="Magazine 4" />
        <Image src={Magazine5} alt="Magazine 5" />
        <video controls>
          <source src={MagazineVideo1} type="video/mov" />
          Your browser does not support the video tag.
        </video>
      </article>
    </section>
  );
}

import Artboard1 from "@public/graphics/descension/artboard/artboard-01.png";
import Artboard2 from "@public/graphics/descension/artboard/artboard-02.png";

import Artboard4 from "@public/graphics/descension/artboard/artboard-04.png";
import Artboard5 from "@public/graphics/descension/artboard/artboard-05.png";
import Artboard6 from "@public/graphics/descension/artboard/artboard-06.png";

const ArtboardVideo1 = "/public/graphics/descension/artboard/artboard-03.mov";

function ArtboardImages() {
  return (
    <section className="grid grid-cols-2 gap-8">
      <ImageTitle>Pre-order Video Artboard</ImageTitle>
      <article className="flex flex-col gap-8">
        <Image src={Artboard1} alt="Artboard 1" />
        <Image src={Artboard2} alt="Artboard 2" />
        <video controls>
          <source src={ArtboardVideo1} type="video/mov" />
          Your browser does not support the video tag.
        </video>
      </article>
      <article className="flex flex-col gap-8">
        <Image src={Artboard4} alt="Artboard 4" />
        <Image src={Artboard5} alt="Artboard 5" />
        <Image src={Artboard6} alt="Artboard 6" />
      </article>
    </section>
  );
}

const PromotionalVideo1 =
  "/public/graphics/descension/promotional/promotional-01.mov";
const PromotionalVideo3 =
  "/public/graphics/descension/promotional/promotional-03.mov";

import Promotional2 from "@public/graphics/descension/promotional/promotional-02.png";
import Promotional4 from "@public/graphics/descension/promotional/promotional-04.png";
import Promotional6 from "@public/graphics/descension/promotional/promotional-06.png";

function PromotionalImages() {
  return (
    <section className="grid grid-cols-2 gap-8">
      <ImageTitle>Promotion Material</ImageTitle>
      <div className="">
        As a team, we decided to promote the zine concept by reinventing Genshin
        characters&apos; lore and design to something more xianxia related. An
        animation mod was invited to the team to help animated my graphics to
        make them more dynamic and eye-catching during the zine&apos;s interest
        check promotion.{" "}
      </div>
      <article className="flex flex-col gap-8">
        <video controls>
          <source src={PromotionalVideo1} type="video/mov" />
          Your browser does not support the video tag.
        </video>
        <Image src={Promotional2} alt="Promotional 2" />
        <video controls>
          <source src={PromotionalVideo3} type="video/mov" />
          Your browser does not support the video tag.
        </video>
      </article>
      <article className="flex flex-col gap-8">
        <Image src={Promotional4} alt="Promotional 4" />
        <video controls>
          <source src={PromotionalVideo3} type="video/mov" />{" "}
          {/* TODO: Update video later */}
          Your browser does not support the video tag.
        </video>
        <Image src={Promotional6} alt="Promotional 6" />
      </article>
    </section>
  );
}

import Graphics1 from "@public/graphics/descension/graphics/graphics-01.png";
import Graphics2 from "@public/graphics/descension/graphics/graphics-02.png";
import Graphics3 from "@public/graphics/descension/graphics/graphics-03.png";
import Graphics4 from "@public/graphics/descension/graphics/graphics-04.png";
import Graphics5 from "@public/graphics/descension/graphics/graphics-05.png";
import Graphics6 from "@public/graphics/descension/graphics/graphics-06.png";
import Graphics7 from "@public/graphics/descension/graphics/graphics-07.png";
import Graphics8 from "@public/graphics/descension/graphics/graphics-08.png";
import Graphics9 from "@public/graphics/descension/graphics/graphics-09.png";
import Graphics10 from "@public/graphics/descension/graphics/graphics-10.jpg";
import Graphics11 from "@public/graphics/descension/graphics/graphics-11.png";
import Graphics12 from "@public/graphics/descension/graphics/graphics-12.png";
import Graphics13 from "@public/graphics/descension/graphics/graphics-13.png";
import Graphics14 from "@public/graphics/descension/graphics/graphics-14.png";
import Graphics15 from "@public/graphics/descension/graphics/graphics-15.png";
import Graphics16 from "@public/graphics/descension/graphics/graphics-16.png";
import Graphics17 from "@public/graphics/descension/graphics/graphics-17.jpg";
import Graphics18 from "@public/graphics/descension/graphics/graphics-18.png";
import Graphics19 from "@public/graphics/descension/graphics/graphics-19.png";
import Graphics20 from "@public/graphics/descension/graphics/graphics-20.png";
import Graphics21 from "@public/graphics/descension/graphics/graphics-21.png";
import Graphics22 from "@public/graphics/descension/graphics/graphics-22.png";
import Graphics23 from "@public/graphics/descension/graphics/graphics-23.png";

function Graphics() {
  return (
    <section className="grid grid-cols-3 gap-8">
      <div className="col-span-3 flex flex-col gap-4 text-center">
        <div>Samples of promotional graphics for zines</div>
        <ImageTitle>GRAPHICS graphics</ImageTitle>
      </div>
      <article className="flex flex-col gap-8">
        <Image src={Graphics1} alt="Graphics 1" />
        <Image src={Graphics2} alt="Graphics 2" />
        <Image src={Graphics3} alt="Graphics 3" />
        <Image src={Graphics4} alt="Graphics 4" />
        <Image src={Graphics5} alt="Graphics 5" />
        <Image src={Graphics6} alt="Graphics 6" />
        <Image src={Graphics7} alt="Graphics 7" />
      </article>
      <article className="flex flex-col gap-8">
        <Image src={Graphics8} alt="Graphics 8" />
        <Image src={Graphics9} alt="Graphics 9" />
        <Image src={Graphics10} alt="Graphics 10" />
        <Image src={Graphics11} alt="Graphics 11" />
        <Image src={Graphics12} alt="Graphics 12" />
        <Image src={Graphics13} alt="Graphics 13" />
        <Image src={Graphics14} alt="Graphics 14" />
        <Image src={Graphics15} alt="Graphics 15" />
      </article>
      <article className="flex flex-col gap-8">
        <Image src={Graphics16} alt="Graphics 16" />
        <Image src={Graphics17} alt="Graphics 17" />
        <Image src={Graphics18} alt="Graphics 18" />
        <Image src={Graphics19} alt="Graphics 19" />
        <Image src={Graphics20} alt="Graphics 20" />
        <Image src={Graphics21} alt="Graphics 21" />
        <Image src={Graphics22} alt="Graphics 22" />
        <Image src={Graphics23} alt="Graphics 23" />
      </article>
    </section>
  );
}
