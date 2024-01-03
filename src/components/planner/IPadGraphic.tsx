import Image from "next/image";
import iPad from "../../../public/planner/iPad.png";

export default function IPadGraphic() {
  return (
    <section className=" my-[20vh] flex h-screen w-[90%] flex-col items-center justify-center rounded-[20px] bg-[#F5F5F5] ">
      <Image src={iPad} alt="iPad" className="mt-[-160px] w-[78%]" />
    </section>
  );
}
