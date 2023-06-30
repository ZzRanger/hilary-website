import Link from 'next/link';
import Image from 'next/image';
import H2 from '@/components/typography/H2';
import Text, { Weight } from '@/components/typography/Text';
import One from '../../../public/planner/final/one.png';
import Three from '../../../public/planner/final/three.png';
import Five from '../../../public/planner/final/five.png';
import Seven from '../../../public/planner/final/seven.png';
import Two from '../../../public/planner/final/two.png';
import Four from '../../../public/planner/final/four.png';
import Six from '../../../public/planner/final/six.png';
import Eight from '../../../public/planner/final/eight.png';

export default function Final() {
  return (
    <section className="my-[20vh] flex flex-col items-center space-y-[100px]">
      <H2>Final Prototype </H2>
      <Text className="w-[90%]">
        The launch of Planner was highly successful, attracting over 100 student
        users to our software and generating significant interest from other
        students who wish to participate in our club. <br /> <br /> Our
        usability test after the revamped design shows that the majority of
        users were able to perform the tasks more effectively, up to 90%.
      </Text>
      <button
        className="w-fit px-[50px] py-[20px] rounded-[50px] border-4 border-black h-[90px]"
        type="button"
      >
        <Link
          href="https://docs.google.com/document/d/1bjMusoKa8bbX2PaH81dSBQn4X0nfozgehsEzNn90Pds/edit"
          target="_blank"
        >
          <Text weight={Weight.bold}>Click Here To View Final Product</Text>
        </Link>
      </button>
      <article className="w-[90vw] grid grid-cols-2">
        <div className=" flex flex-col space-y-[4vh]">
          <Image src={One} alt="image" style={{ width: '43vw' }} />
          <Image src={Three} alt="image" style={{ width: '43vw' }} />
          <Image src={Five} alt="image" style={{ width: '43vw' }} />
          <Image src={Seven} alt="image" style={{ width: '43vw' }} />
        </div>
        <div className="flex flex-col space-y-[4vh]">
          <Image src={Two} alt="image" style={{ width: '43vw' }} />
          <Image src={Four} alt="image" style={{ width: '43vw' }} />
          <Image src={Six} alt="image" style={{ width: '43vw' }} />
          <Image src={Eight} alt="image" style={{ width: '43vw' }} />
        </div>
      </article>
    </section>
  );
}
