import RedesignCarousel from "@/components/lezhin/RedesignCarousel";
import H1 from "@/components/typography/H1";
import CommentMockup from "@public/lezhin/redesign/Comment.png";
import Explore from "@public/lezhin/redesign/Explore.png";
import Home from "@public/lezhin/redesign/Home.png";
import Individual from "@public/lezhin/redesign/Individual.png";
import Library from "@public/lezhin/redesign/Library.png";
import MyPage from "@public/lezhin/redesign/MyPage.png";
import Search from "@public/lezhin/redesign/Search.png";
import Trending from "@public/lezhin/redesign/Trending.png";
import Image from "next/image";
import Text, { Weight } from "@/components/typography/Text";
import Link from "next/link";

export default function Redesign() {
  return (
    <div className="flex  w-screen items-center justify-center border-2 border-black bg-hn-lezhin">
      <section className="flex w-[80%] flex-col items-center gap-[70px] py-[60px] text-left  text-white">
        <H1>Redesign Features</H1>
        <RedesignCarousel>
          <Image src={MyPage} alt="MyPage" />
          <Image src={Home} alt="Home" />
          <Image src={Explore} alt="Explore" />
          <Image src={Search} alt="Search" />
          <Image src={Trending} alt="Trending" />
          <Image src={Individual} alt="Individual" />
          <Image src={Library} alt="Library" />
          <Image src={CommentMockup} alt="Comment" />
        </RedesignCarousel>
        <button
          className="h-[90px] w-fit rounded-[50px] border-4 border-white px-[48px] py-[20px]"
          type="button"
        >
          <Link
            href="https://www.figma.com/proto/N11MRidgLccdYcsCl5qKgM/Lezhin-Final?page-id=0%3A1&type=design&node-id=1-178&viewport=257%2C743%2C0.34&t=nQZdEFXGgo7hmDa4-1&scaling=scale-down&starting-point-node-id=1%3A178&show-proto-sidebar=1&mode=design"
            target="_blank"
          >
            <Text weight={Weight.bold}>
              Click Here To View Final Prototype{" "}
            </Text>
          </Link>
        </button>
      </section>
    </div>
  );
}
