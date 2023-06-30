import Image from 'next/image';
import H2 from '@/components/typography/H2';
import Text, { Weight } from '@/components/typography/Text';
import Architecture from '../../../public/planner/architecture.png';

export default function Information() {
  return (
    <section className="flex flex-col items-center text-center mt-[44px]">
      <Text weight={Weight.bold} className="mt-[30vh]">
        Informational Architecture
      </Text>
      <H2 className="w-[80%] mb-[100px]">
        I decided to create an informational architecture for this project to
        enhance user experience by organizing and structuring the website
        content more effectively.
      </H2>
      <Image src={Architecture} alt="image" className="w-[80%]" />
    </section>
  );
}
