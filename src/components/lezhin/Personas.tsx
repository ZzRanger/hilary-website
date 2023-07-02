import H2 from '@/components/typography/H2';
import Text, { Weight } from '@/components/typography/Text';
import Link from 'next/link';

export default function Personas() {
  return (
    <section className="flex flex-col text-left items-center gap-[70px] py-[60px] w-[80%]">
      <Text weight={Weight.bold}>Users Persona & Flows</Text>
      <H2 className="text-center">
        I decided to organize all of my user’s data and pain points into user
        personas to better defined the problems I'm trying to solve.
      </H2>
      <article className="h-[130vh] w-screen bg-blue-500">
        Add carousel here
      </article>
    </section>
  );
}
