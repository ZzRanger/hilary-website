import Image from 'next/image';
import Macbook4 from '../../../public/planner/macbook4.png';

export default function Design() {
  return (
    <section className="h-screen w-screen my-[20vh] flex flex-row items-center">
      <Image src={Macbook4} alt="Macbook" className="w-[50%]" />
      <article className="flex flex-col w-[50%] pl-[10vw]">
        <div className="text-[64px] font-extrabold mb-10">Usability Test</div>
        <div className="text-[30px] font-medium">1. Old Prototype</div>
        <div className="text-[30px] font-medium">2. Testing Key Insight</div>
        <div className="text-[30px] font-medium">3. Pain Point</div>
      </article>
    </section>
  );
}
