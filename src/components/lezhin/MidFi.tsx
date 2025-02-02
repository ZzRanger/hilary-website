import H2 from "@/components/typography/H2";
import Text, { Weight } from "@/components/typography/Text";
import Link from "next/link";
import Sketch from "@public/lezhin/sketch.png";
import Image from "next/image";
import { ForwardedRef, forwardRef } from "react";

const MidFi = forwardRef((_, ref: ForwardedRef<HTMLElement>) => {
  MidFi.displayName = "MidFi";

  return (
    <section
      ref={ref}
      className="flex h-fit w-screen flex-col items-center rounded-[20px] bg-black py-[30vh] text-center text-white"
    >
      <div className="flex flex-col items-center gap-y-[100px]">
        <Text weight={Weight.bold} className="]">
          WireFrame Sketches & Mid Fidelity Prototype
        </Text>
        <h2 className="w-[88vw] text-[45px] font-bold leading-[74px]">
          Based on the above problems identified, I worked towards addressing
          these pains by coming up with potential solutions:
        </h2>

        <article className="flex h-[130vh] w-screen flex-row justify-center gap-x-[60px]">
          <iframe
            title="midfi embd"
            style={{
              borderRadius: "30px",
              width: "35vw",
              height: "100%",
            }}
            src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FDxtU7q9aINP8fCPSqB78wB%2FLezhin-Redesign%3Fpage-id%3D343%253A1363%26type%3Ddesign%26node-id%3D348-1566%26viewport%3D409%252C511%252C0.3%26scaling%3Dscale-down%26starting-point-node-id%3D348%253A1566%26t%3DsnnsVAyky4MYOkGx-1%26mode%3Ddesign"
            allowFullScreen
          />

          <div className="h-full">
            <Image src={Sketch} alt="analysis" className="h-full w-full" />
          </div>
        </article>
        <article className="flex w-[90vw] flex-col gap-y-10 text-left">
          <Text>
            <ol className="ml-[40px] list-decimal space-y-10">
              <li>
                Revamping the navigation section where genres are separated for
                ease of navigation
              </li>
              <li>
                Adding a comment section feature + revamping the webtoon toolbar
              </li>
              <li>Adding summary and genre tagging section for each webtoon</li>
              <li>
                Adding a feature webtoon section and personalized
                recommendations for readers’ interaction
              </li>
              <li>
                Redesigning My Library section so readers can be organized and
                save their webtoon
              </li>
              <li>
                Adding “Read on Web” button to allow users easy access to mature
                content on the webpage
              </li>
            </ol>
          </Text>
        </article>
        <button
          className="h-[90px] w-fit rounded-[50px] border-4 border-white px-[48px] py-[20px]"
          type="button"
        >
          <Link
            href="https://www.figma.com/file/N11MRidgLccdYcsCl5qKgM/Lezhin-Final?type=design&node-id=64-2980&mode=design"
            target="_blank"
          >
            <Text weight={Weight.bold}>
              Click here to view old vs revamped design
            </Text>
          </Link>
        </button>
      </div>
    </section>
  );
});

export default MidFi;
