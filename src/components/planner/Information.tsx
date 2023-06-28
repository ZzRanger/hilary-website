import Image from 'next/image';
import Architecture from '../../../public/planner/architecture.png';

export default function Information() {
  return (
    <section className="flex flex-col items-center text-center mt-[44px]">
      <div className="text-[30px] font-bold mt-[30vh]">
        Informational Architecture
      </div>
      <div className="w-[80%] text-[50px] font-bold mb-[100px]">
        I decided to create an informational architecture for this project to
        enhance user experience by organizing and structuring the website
        content more effectively.
      </div>
      <Image src={Architecture} alt="image" className="w-[80%]" />
    </section>
  );
}
