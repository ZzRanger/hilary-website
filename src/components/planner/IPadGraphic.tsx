import Image from 'next/image';
import iPad from '../../../public/planner/iPad.png';

export default function IPadGraphic() {
  return (
    <section className=" bg-[#F5F5F5] h-screen w-[90%] flex flex-col justify-center items-center rounded-[20px] my-[20vh] ">
      <Image src={iPad} alt="iPad" className="mt-[-160px] w-[78%]" />
    </section>
  );
}
