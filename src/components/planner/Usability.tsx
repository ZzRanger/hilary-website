import Image from 'next/image';
import Macbook3 from '../../../public/planner/macbook3.png';

export default function Usability() {
  return (
    <section className="flex flex-row h-[120vh] w-screen bg-black items-center">
      <Image src={Macbook3} alt="Macbook" className="w-[80%]" />
      <article className="flex flex-col w-[50%] text-white">
        <div className="text-[64px] font-extrabold mb-10">Usability Test</div>
        <div className="text-[30px] font-medium">1. Old Prototype</div>
        <div className="text-[30px] font-medium">2. Testing Key Insight</div>
        <div className="text-[30px] font-medium">3. Pain Point</div>
      </article>
    </section>
  );
}
