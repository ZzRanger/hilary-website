import Image from 'next/image';
import Macbook2 from '../../../public/planner/macbook2.png';

export default function Resaerch() {
  return (
    <section className="grid grid-cols-[2fr_3fr] p-16 items-center h-[120vh]">
      <article className="flex flex-col">
        <h1 className="text-[64px] font-extrabold leading-[72px] mb-[50px]">
          📝 Research
        </h1>
        <ol className="text-[30px] font-medium">
          <li>1. Interview</li>
          <li>2. Empathy Map</li>
          <li>3. Research Takeaway</li>
        </ol>
      </article>
      <Image src={Macbook2} alt="Macbook" />
    </section>
  );
}
