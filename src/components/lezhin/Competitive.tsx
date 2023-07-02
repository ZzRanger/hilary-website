import H2 from '@/components/typography/H2';
import Text, { Weight } from '@/components/typography/Text';
import Link from 'next/link';
import CompetitiveAnalysis from '@public/lezhin/competitive.png';
import Image from 'next/image';

export default function Competitive() {
  return (
    <section className="rounded-[20px] h-fit w-screen flex flex-col items-center text-center bg-black text-white py-[30vh]">
      <div className="flex flex-col items-center gap-y-[100px]">
        <Text weight={Weight.bold} className="]">
          Competitor Analysis
        </Text>
        {/* Change to inter */}
        <h2 className="font-bold text-[45px] leading-[74px] w-[88vw]">
          A Competitive Analysis was performed to examine Lezhin's competitors
          to understand why Lezhin's app is performing poorly in the market.
        </h2>

        <Image src={CompetitiveAnalysis} alt="analysis" className="w-[90%]" />

        <button
          className="w-[420px] rounded-[50px] border-4 border-white h-[90px]"
          type="button"
        >
          <Link
            href="https://docs.google.com/document/d/1bjMusoKa8bbX2PaH81dSBQn4X0nfozgehsEzNn90Pds/edit"
            target="_blank"
          >
            <Text weight={Weight.bold}>View Interview Notes</Text>
          </Link>
        </button>
      </div>
      <article className="text-left flex flex-col gap-y-10 w-[72vw]">
        <ol className="list-decimal gap-y-10 space-y-10 my-[20vh]">
          <H2 className="ml-[-40px]">💡Analysis Insight</H2>

          <Text weight={Weight.medium}>
            <li>
              The competing apps stood out with their rich interactive features,
              such as
              <span className="font-bold">
                comment sections and a wide selection of both free and paid
                content, setting them apart from Lezhin
              </span>
              and its offerings.
            </li>
          </Text>
          <Text weight={Weight.medium}>
            <li>
              Furthermore, these companies place{' '}
              <span className="font-bold">
                {' '}
                great emphasis on enhancing the user experience
              </span>
              , as reflected in their consistently high ratings
            </li>
          </Text>
        </ol>
      </article>
    </section>
  );
}
