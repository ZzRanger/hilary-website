import H2 from '@/components/typography/H2';
import Text, { Weight } from '@/components/typography/Text';
import Link from 'next/link';
import Sketch from '@public/lezhin/sketch.png';
import Image from 'next/image';

export default function LezhinFinal() {
  return (
    <section
      className="rounded-[20px] h-fit w-screen flex flex-col items-center text-center gap-y-[10vh] py-[30vh]"
      id="lezhin-final"
    >
      <Text weight={Weight.bold}>Final Prototype</Text>
      <H2 className="leading-[74px] w-[80vw]">
        After testing with users and getting their feedback, a few details were
        changed on the final prototype
      </H2>

      <article className="h-[130vh] flex flex-row w-screen justify-center items-center gap-x-[60px] mt-[10vh]">
        <iframe
          style={{
            borderRadius: '30px',
            width: '35vw',
            height: '100%',
          }}
          title="lezhin Figma embed"
          src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FN11MRidgLccdYcsCl5qKgM%2FLezhin-Final%3Fembed_host%3Dshare%26kind%3D%26node-id%3D1-178%26page-id%3D0%253A1%26scaling%3Dscale-down%26starting-point-node-id%3D1%253A178%26t%3D88XO4QwErzBdOUk7-1%26type%3Ddesign%26viewport%3D233%252C524%252C0.13%26mode%3Ddesign"
          allowFullScreen
        />
        <div className="text-left flex flex-col gap-y-10 w-[50vw]">
          <Text weight={Weight.bold}>
            Key findings from the usability testing and interviews:
          </Text>

          <Text weight={Weight.medium}>
            <ol className="list-decimal space-y-10 ml-[40px]">
              <li>
                Sections adjusted to{' '}
                <span className="font-bold">accommodate longer titles</span> in
                Last Read.
              </li>
              <li>
                <span className="font-bold">
                  My Page now includes coin balance, bonus coins, and points
                </span>{' '}
                due to Lezhin's top-up system.
              </li>
              <li>
                <span className="font-bold">
                  The community tab is now Free Coins,
                </span>{' '}
                allowing easy access to the section for obtaining more coins
                through comments and metrics on comics.
              </li>
              <li>
                <span className="font-bold">
                  The Daily tab is now called Schedule
                </span>{' '}
                to make its purpose clearer to users.
              </li>
            </ol>
          </Text>
        </div>
      </article>
    </section>
  );
}
