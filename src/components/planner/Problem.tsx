import Image, { StaticImageData } from 'next/image';
import Person1 from '../../../public/planner/person1.png';
import Person2 from '../../../public/planner/person2.png';
import Person3 from '../../../public/planner/person3.png';

export default function Problem() {
  return (
    <section className="h-[210vh] bg-black flex flex-col text-white items-center text-center pt-[120px]">
      <h3 className="text-[30px] font-bold leading-[72px] mb-[40px]">
        The Problem
      </h3>
      <h1 className="text-[50px] font-semibold leading-[72px] w-[1100px] mb-[72px]">
        UT Dallas enrollment surge creates demand for degree planning resources
      </h1>
      <p className="w-[1100px] mb-[40px] font-medium text-[30px] leading-[44px]">
        The University of Texas at Dallas (UTD) 's enrollment has grown rapidly
        with over 29,000 students, including 4,560 new freshmen in Fall 2021.
      </p>
      <p className="w-[1100px] font-bold text-[30px] leading-[44px] mb-40">
        This growth leads to increasing demand for resources to help students
        unfamiliar with the degree planning process.
      </p>
      <div className="flex flex-row w-[90vw] justify-around">
        <ProblemTile
          image={Person1}
          title="Complex Degree Planning"
          body="New UTD students struggle with degree planning, resulting in longer college stays and higher student debt."
        />
        <ProblemTile
          image={Person2}
          title="Overcrowded Advising Office"
          body="UTD's advising office is overcrowded and has limited availability, causing long wait times and backlogs."
        />
        <ProblemTile
          image={Person3}
          title="Inefficient Degree Planning Tools"
          body="There are not specialized planning tool for degree planning. Many students use Excel but it has a long learning curve. "
        />
      </div>
    </section>
  );
}

const ProblemTile = ({
  image,
  title,
  body,
}: {
  image: StaticImageData;
  title: string;
  body: string;
}) => (
  <article className="relative h-[70vh] w-80 rounded-3xl border-white border-2 flex flex-col justify-evenly items-center">
    <Image
      src={image}
      alt="image"
      className=" h-32 w-32 top-[-64px] absolute"
    />
    <h3 className="text-[30px] font-bold leading-[44px]">{title}</h3>
    <p className="text-xl">{body}</p>
  </article>
);
