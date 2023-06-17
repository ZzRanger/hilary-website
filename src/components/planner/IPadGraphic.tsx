import Image from 'next/image';
import iPad from '../../../public/planner/iPad.png';

export default function IPadGraphic() {
  return (
    <section className="h-[120vh] px-10 my-32">
      <article className=" bg-[#F5F5F5] h-screen flex flex-col justify-center items-center ">
        <Image src={iPad} alt="iPad" className="mt-[-160px] w-[80%]" />
      </article>
    </section>
  );
}
