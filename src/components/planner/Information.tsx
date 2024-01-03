import Image from 'next/image';
import H2 from '@/components/typography/H2';
import Text, { Weight } from '@/components/typography/Text';
import Architecture from '../../../public/planner/architecture.png';
import { forwardRef, ForwardedRef } from 'react';

const Information = forwardRef((_, ref: ForwardedRef<HTMLElement>) => {
  return (
    <section
      ref={ref}
      className="flex flex-col items-center text-center my-[178px]"
    >
      <Text weight={Weight.bold} className="mb-[44px]">
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
});

export default Information;
