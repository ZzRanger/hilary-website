import Image from 'next/image';
import H1 from '@/components/typography/H1';
import Text, { Weight } from '@/components/typography/Text';
import Macbook2 from '../../../public/planner/macbook2.png';

export default function Resaerch() {
  return (
    <section className="grid grid-cols-[2fr_3fr] p-16 items-center h-[120vh]">
      <article className="flex flex-col">
        <H1 className=" mb-[50px]">📝 Research</H1>
        <ol>
          <Text weight={Weight.medium}>
            <li>1. Interview</li>
            <li>2. Empathy Map</li>
            <li>3. Research Takeaway</li>
          </Text>
        </ol>
      </article>
      <Image src={Macbook2} alt="Macbook" />
    </section>
  );
}
