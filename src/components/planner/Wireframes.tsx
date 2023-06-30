import Image from 'next/image';
import Text, { Weight } from '@/components/typography/Text';
import Mockups from '../../../public/planner/mockups.png';

export default function Wireframes() {
  return (
    <section className="h-fit bg-black flex flex-col text-white items-center text-center py-[10vh]">
      <Text weight={Weight.bold} className="mb-[40px]">
        WireFrame Sketches
      </Text>
      <h1 className="text-[50px] font-semibold leading-[72px] w-[1100px] mb-[72px]">
        To address the identified pain points, I proposed several potential
        solutions.
      </h1>
      <Image src={Mockups} alt="image" className="w-[90%]" />
      <ol className="list-disc text-left w-[80%] space-y-10 my-[10vh]">
        <Text>
          <li>
            ✅ Enable users to
            <span className="font-bold">
              color-code individual semesters, plans, and courses
            </span>
            for better customization.
          </li>
          <li>
            ✅ <span className="font-bold">Add course progress</span> when users
            <span className="font-bold">import their school transcript</span> to
            track their progress more efficiently.
          </li>
          <li>
            ✅ Allow users to
            <span className="font-bold">
              rename their plan and change their major plan
            </span>
            for greater flexibility.
          </li>
          <li>
            ✅ <span className="font-bold">Rewrite some UI copywriting</span> to
            make it clearer and more concise.
          </li>
          <li>
            ✅ <span className="font-bold">Develop an onboarding</span> script
            for engineers to give users a quick tutorial on how to use the
            software effectively.
          </li>
          <li>
            ✅ Enable users to
            <span className="font-bold">
              view their transfer credits and lock certain courses/semesters{' '}
            </span>
            for better planning.
          </li>
        </Text>
      </ol>
    </section>
  );
}
