import Carousel from '@/components/Carousel';
import H2 from '@/components/typography/H2';
import Text, { Weight } from '@/components/typography/Text';
import Image from 'next/image';
import Flow1 from '@public/lezhin/flow1.png';
import Flow2 from '@public/lezhin/flow2.png';
import Flow3 from '@public/lezhin/flow3.png';
import Flow4 from '@public/lezhin/flow4.png';

export default function InitialFlows() {
  return (
    <section className="flex flex-col text-left items-center gap-[70px] py-[60px] w-[80%]">
      <Text weight={Weight.bold}>Initial User Flows</Text>
      <H2 className="text-center">
        I decided to map out Lezhin's current user journey to better map out
        specific problems within the app
      </H2>
      <Carousel className="w-[60vw]">
        <Image src={Flow1} priority alt="" />
        <Image src={Flow2} priority alt="" />
        <Image src={Flow3} priority alt="" />
        <Image src={Flow4} priority alt="" />
      </Carousel>

      <Text className="tabular-nums">
        <article className="text-left flex flex-col gap-y-10  leading-[50px] bg-[#F5F5F5] rounded-[20px] p-10">
          <Text weight={Weight.bold}>
            Specific areas for improvement in specific areas:
          </Text>

          <div>
            <span className="font-bold ">1. Unintuitive search feature:</span>
            <br />
            Participants struggled to find specific genres or misspelled titles,
            leading to difficulty in locating desired content.
          </div>
          <div>
            <span className="font-bold ">2. Poor Filter Features: </span>
            <br />
            Users expressed dissatisfaction with the absence of genre sorting,
            personalized recommendations, and easy search options for their
            subscribed webtoons.
          </div>
          <div>
            <span className="font-bold ">
              3. Poor Categorization & Recommendation Features:{' '}
            </span>
            <br />
            Vague categorization and time-consuming search for similar webtoons
            made it challenging for users to discover new content.
          </div>
          <div>
            <span className="font-bold ">4. Censorship:</span>
            <br />
            Apple's restrictions prevented users from accessing mature content
            within the app, forcing them to use Safari to access such content on
            Lezhin's site.
          </div>
          <div>
            <span className="font-bold ">5. Lack of Community: </span>
            <br />
            Users felt disconnected from the app due to the absence of
            community-oriented features like comment sections or the ability to
            gauge popularity.
          </div>
          <div>
            <span className="font-bold ">6. Coins Costs: </span>
            <br />
            Users found Lezhin to be expensive compared to other similar apps,
            causing financial strain and dissatisfaction
          </div>
        </article>
      </Text>
    </section>
  );
}
