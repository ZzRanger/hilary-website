import Image from 'next/image';
import Text, { Weight } from '@/components/typography/Text';
import H1 from '@/components/typography/H1';
import Macbook3 from '../../../public/planner/macbook3.png';

export default function Usability() {
  return (
    <section className="flex flex-row h-[120vh] w-screen bg-black items-center">
      <Image src={Macbook3} alt="Macbook" className="w-[80%]" />
      <article className="flex flex-col w-[50%] text-white">
        <H1 className="mb-10">Usability Test</H1>
        <Text weight={Weight.medium}>1. Old Prototype</Text>
        <Text weight={Weight.medium}>2. Testing Key Insight</Text>
        <Text weight={Weight.medium}>3. Pain Point</Text>
      </article>
    </section>
  );
}
