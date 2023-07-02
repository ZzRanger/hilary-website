import H2 from '@/components/typography/H2';
import Text, { Weight } from '@/components/typography/Text';
import Link from 'next/link';
import Sketch from '@public/lezhin/sketch.png';
import Image from 'next/image';

export default function MidFi() {
  return (
    <section className="rounded-[20px] h-fit w-screen flex flex-col items-center text-center bg-black text-white py-[30vh]">
      <div className="flex flex-col items-center gap-y-[100px]">
        <Text weight={Weight.bold} className="]">
          WireFrame Sketches & Mid Fidelity Prototype
        </Text>
        <h2 className="font-bold text-[45px] leading-[74px] w-[88vw]">
          Based on the above problems identified, I worked towards addressing
          these pains by coming up with potential solutions:
        </h2>

        <article className="h-[130vh] flex flex-row w-screen justify-center gap-x-[60px]">
          <iframe
            style={{
              borderRadius: '30px',
              width: '35vw',
              height: '100%',
            }}
            title="lezhin Figma embed"
            src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FDxtU7q9aINP8fCPSqB78wB%2FLezhin-Redesign%3Fpage-id%3D343%253A1363%26type%3Ddesign%26node-id%3D348-1566%26viewport%3D409%252C511%252C0.3%26scaling%3Dscale-down%26starting-point-node-id%3D348%253A1566%26show-proto-sidebar%3D1%26mode%3Ddesign%26t%3Dh4gBaTToZ9j9TJh5-1"
            allowFullScreen
          />
          <div className="h-full">
            <Image src={Sketch} alt="analysis" className="h-full w-full" />
          </div>
        </article>
        <article className="text-left flex flex-col gap-y-10 w-[90vw]">
          <Text>
            <ol className="list-decimal space-y-10 ml-[40px]">
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
          className="w-fit px-[48px] py-[20px] rounded-[50px] border-4 border-white h-[90px]"
          type="button"
        >
          <Link
            href="https://www.notion.so/xodaydream/a243681ff68b4dd9a8c52be8342417e5?v=65aa8257649c47af8d442743b2dbc8cf"
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
}
