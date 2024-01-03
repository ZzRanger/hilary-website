import H2 from "@/components/typography/H2";
import Text, { Weight } from "@/components/typography/Text";
import Link from "next/link";
import Sketch from "@public/lezhin/sketch.png";
import Image from "next/image";

export default function LezhinFinal() {
  return (
    <section
      className="flex h-fit w-screen flex-col items-center gap-y-[10vh] rounded-[20px] py-[30vh] text-center"
      id="lezhin-final"
    >
      <Text weight={Weight.bold}>Final Prototype</Text>
      <H2 className="w-[80vw] leading-[74px]">
        After testing with users and getting their feedback, a few details were
        changed on the final prototype
      </H2>

      <article className="mt-[10vh] flex h-[130vh] w-screen flex-row items-center justify-center gap-x-[60px]">
        <iframe
          style={{
            borderRadius: "30px",
            width: "35vw",
            height: "100%",
          }}
          title="lezhin Figma embed"
          src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FN11MRidgLccdYcsCl5qKgM%2FLezhin-Final%3Fembed_host%3Dshare%26kind%3D%26node-id%3D1-178%26page-id%3D0%253A1%26scaling%3Dscale-down%26starting-point-node-id%3D1%253A178%26t%3D88XO4QwErzBdOUk7-1%26type%3Ddesign%26viewport%3D233%252C524%252C0.13%26mode%3Ddesign"
          allowFullScreen
        />
        <div className="flex w-[50vw] flex-col gap-y-10 text-left">
          <Text weight={Weight.bold}>
            Key findings from the usability testing and interviews:
          </Text>

          <Text weight={Weight.medium}>
            <ol className="ml-[40px] list-decimal space-y-10">
              <li>
                Sections adjusted to{" "}
                <span className="font-bold">accommodate longer titles</span> in
                Last Read.
              </li>
              <li>
                <span className="font-bold">
                  My Page now includes coin balance, bonus coins, and points
                </span>{" "}
                due to Lezhin's top-up system.
              </li>
              <li>
                <span className="font-bold">
                  The community tab is now Free Coins,
                </span>{" "}
                allowing easy access to the section for obtaining more coins
                through comments and metrics on comics.
              </li>
              <li>
                <span className="font-bold">
                  The Daily tab is now called Schedule
                </span>{" "}
                to make its purpose clearer to users.
              </li>
            </ol>
          </Text>
        </div>
      </article>
    </section>
  );
}
