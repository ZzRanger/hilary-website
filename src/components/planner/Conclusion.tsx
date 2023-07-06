import H2 from '@/components/typography/H2';
import Text from '@/components/typography/Text';

export default function Conclusion() {
  return (
    <section
      id="planner-conclusion"
      className="flex flex-col items-center space-y-[100px]"
    >
      <H2>Conclusion</H2>
      <Text>
        <article className="flex flex-col text-left space-y-[30px] w-[90vw]">
          <div>Some of my key takeaways from this project are:</div>
          <div>
            <span className="font-bold text-[32px]">
              1. Improved Communication
            </span>
            <br />
            Utilizing project management tools like Jira and Notion helped
            bridge the gap between the engineers and the design team, leading to
            better coordination and informed decision-making.
          </div>
          <div>
            <span className="font-bold text-[32px]">
              2. Ongoing User Testing:
            </span>
            <br />
            Even after finalizing the prototype, we identified areas that needed
            further refinement and improvement. Continuous iteration and user
            feedback are vital for enhancing the user experience.
          </div>
          <div>
            <span className="font-bold text-[32px]">
              3. Design Feasibility:
            </span>
            <br />
            Collaboration with engineers helped assess the feasibility of design
            ideas, ensuring timely implementation and avoiding potential
            implementation challenges.
          </div>
        </article>
      </Text>
    </section>
  );
}
