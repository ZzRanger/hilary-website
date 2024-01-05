import Image from "next/image";
import Branding1 from "@public/graphics/nebula-labs/branding-01.png";
import Branding2 from "@public/graphics/nebula-labs/branding-02.png";
import Branding3 from "@public/graphics/nebula-labs/branding-03.png";
import Branding4 from "@public/graphics/nebula-labs/branding-04.png";
import Branding5 from "@public/graphics/nebula-labs/branding-05.png";
import Branding6 from "@public/graphics/nebula-labs/branding-06.png";
import Branding7 from "@public/graphics/nebula-labs/branding-07.png";
import Branding8 from "@public/graphics/nebula-labs/branding-08.png";
import Branding9 from "@public/graphics/nebula-labs/branding-09.png";
import Branding10 from "@public/graphics/nebula-labs/branding-10.png";
import Branding11 from "@public/graphics/nebula-labs/branding-11.png";
import Branding12 from "@public/graphics/nebula-labs/branding-12.png";
import Branding13 from "@public/graphics/nebula-labs/branding-13.png";
import Branding14 from "@public/graphics/nebula-labs/branding-14.png";

export default function Page() {
  return (
    <main className="flex flex-col items-center justify-center gap-20 p-12">
      <BrandingInfoSection />
      <BrandingImages />
    </main>
  );
}

function BrandingInfoSection() {
  return (
    <section className="grid grid-cols-2 gap-8">
      <article className="flex flex-col justify-between">
        <div className="flex flex-col gap-y-4">
          <div className="m-0 p-0 text-[40px] font-bold text-[#4F46E5]">
            Nebula Labs: Brand Identity
          </div>
          <div className="font-medium">Branding Project</div>
        </div>

        <div className="flex flex-col gap-y-4">
          <div className="font-bold text-[#4F46E5]">Website</div>
          <a className="underline" href="https://www.utdnebula.com/">
            https://www.utdnebula.com/
          </a>
          <div className="max-w-sm">
            Please note that the website design is currently underway. This
            website will be the first implementation of the new identity.
          </div>
        </div>
      </article>

      <article className="flex flex-col gap-y-20">
        <div>
          The Nebula Labs Brand Identity project is an exciting initiative that
          aims to establish a <b>unique and memorable visual identity</b> for
          the Nebula Labs student organization. By carefully considering the
          organization&apos;s core values, target audience, and brand
          personality, the project seeks to{" "}
          <b>
            develop a comprehensive set of brand assets, including a logo, color
            palette, typography, and brand guidelines.
          </b>{" "}
          <br />
          <br />
          The primary goal of this project is{" "}
          <b>
            to effectively communicate the essence of the brand to faculty and
            students and to establish Nebula Labs as a trusted and recognizable
            presence on campus.
          </b>{" "}
          The resulting brand identity will{" "}
          <b>
            serve as a key asset not only for the project Nebula Planner UI
            design but also for the organization&apos;s future projects and
            initiatives.
          </b>{" "}
          <br />
          <br />
          Additionally, the branding developed through this project will heavily
          influence the creation of Nebula Labs&apos; home website, providing a
          consistent and cohesive visual identity across all of the
          organization&apos;s online and offline channels.
        </div>
        <div className="flex flex-col gap-4">
          <div className="text-[30px] font-bold text-[#4F46E5]">
            Project Details
          </div>
          <div>
            <b>Timeline:</b> A week
          </div>
          <div>
            <b>Responsibilities:</b> Branding design
          </div>
          <div>
            <b>Tools:</b> Adobe Illustrator, Indesign, and Photoshop
          </div>
        </div>
      </article>
    </section>
  );
}

function BrandingImages() {
  return (
    <section className="grid grid-cols-2 gap-8">
      <article className="flex flex-col gap-8">
        <Image src={Branding1} alt="Branding 1" />
        <Image src={Branding2} alt="Branding 2" />
        <Image src={Branding3} alt="Branding 3" />
        <Image src={Branding4} alt="Branding 4" />
        <Image src={Branding5} alt="Branding 5" />
        <Image src={Branding6} alt="Branding 6" />
        <Image src={Branding7} alt="Branding 7" />
      </article>
      <article className="flex flex-col gap-8">
        <Image src={Branding8} alt="Branding 8" />
        <Image src={Branding9} alt="Branding 9" />
        <Image src={Branding10} alt="Branding 10" />
        <Image src={Branding11} alt="Branding 11" />
        <Image src={Branding12} alt="Branding 12" />
        <Image src={Branding13} alt="Branding 13" />
        <Image src={Branding14} alt="Branding 14" />
      </article>
    </section>
  );
}
