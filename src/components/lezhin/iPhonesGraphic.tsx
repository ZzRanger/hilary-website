import Image from 'next/image';
import GraphicPhone1 from '@public/lezhin/graphicPhone1.png';
import GraphicPhone2 from '@public/lezhin/graphicPhone2.png';
import GraphicPhone3 from '@public/lezhin/graphicPhone3.png';

export default function iPhonesGraphic() {
  return (
    <section className=" bg-hn-lezhin h-[85vh] w-[90%] flex flex-row  items-center justify-evenly rounded-[20px] my-[20vh] ">
      <Image src={GraphicPhone1} alt="iPad" className="mt-[-120px] w-[340px]" />
      <Image src={GraphicPhone2} alt="iPad" className="mt-[220px] w-[340px]" />
      <Image src={GraphicPhone3} alt="iPad" className="mt-[-70px] w-[340px]" />
    </section>
  );
}
