import RedesignCarousel from '@/components/lezhin/RedesignCarousel';
import H1 from '@/components/typography/H1';
import CommentMockup from '@public/lezhin/redesign/Comment.png';
import Explore from '@public/lezhin/redesign/Explore.png';
import Home from '@public/lezhin/redesign/Home.png';
import Individual from '@public/lezhin/redesign/Individual.png';
import Library from '@public/lezhin/redesign/Library.png';
import MyPage from '@public/lezhin/redesign/MyPage.png';
import Search from '@public/lezhin/redesign/Search.png';
import Trending from '@public/lezhin/redesign/Trending.png';
import Image from 'next/image';
import Text, { Weight } from '@/components/typography/Text';
import Link from 'next/link';

export default function Redesign() {
  return (
    <div className="bg-hn-lezhin w-full flex items-center justify-center">
      <section className="flex flex-col text-left items-center gap-[70px] py-[60px] w-[80%]  text-white">
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
          className="w-fit px-[48px] py-[20px] rounded-[50px] border-4 border-white h-[90px]"
          type="button"
        >
          <Link
            href="https://www.figma.com/proto/N11MRidgLccdYcsCl5qKgM/Lezhin-Final?page-id=0%3A1&type=design&node-id=1-178&viewport=257%2C743%2C0.34&t=nQZdEFXGgo7hmDa4-1&scaling=scale-down&starting-point-node-id=1%3A178&show-proto-sidebar=1&mode=design"
            target="_blank"
          >
            <Text weight={Weight.bold}>
              Click Here To View Final Prototype{' '}
            </Text>
          </Link>
        </button>
      </section>
    </div>
  );
}
