import Image from 'next/image';
import H1 from '@/components/typography/H1';
import Text, { Weight } from '@/components/typography/Text';
import Macbook4 from '../../../public/planner/macbook4.png';

export default function Design() {
  return (
    <section className="h-screen w-screen my-[20vh] flex flex-row items-center">
      <Image src={Macbook4} alt="Macbook" className="w-[50%]" />
      <article className="flex flex-col w-[50%] pl-[10vw]">
        <H1 className="mb-10">Usability Test</H1>
        <Text weight={Weight.medium}>1. Old Prototype</Text>
        <Text weight={Weight.medium}>2. Testing Key Insight</Text>
        <Text weight={Weight.medium}>3. Pain Point</Text>
      </article>
    </section>
  );
}
