import H2 from "@/components/typography/H2";
import Text, { Weight } from "@/components/typography/Text";

export default function Next() {
  return (
    <section className="my-[20vh] flex flex-col items-center ">
      <Text className="mb-[44px]" weight={Weight.bold}>
        What&apos;s Next
      </Text>
      <H2 className="mb-[100px] w-[70%] text-center">
        Despite a successful launch, our project remains a work in progress. We
        are actively planning and working to implement the following features.
      </H2>
      <article className="flex w-[90vw] flex-col space-y-[30px] rounded-[20px] bg-[#F5F5F5] px-[41px] py-[82px] text-left">
        <Text>
          <div>
            <span className="text-[32px] font-bold">
              1. Improve Visibility of Customization Options for Courses
            </span>
            <br />
            During our testing session, we found that users don&apos;t usually
            right-click for customization options so we want to improve the
            visibility of that.
            <br /> <br />
          </div>
          <div>
            <span className="text-[32px] font-bold">
              2. Improve Course Requirement’s UI
            </span>
            <br />
            Design is an ongoing process of iteration and improvement, I want to
            focus on collecting and listening to user feedback to enhance the
            end-user experience.
            <br /> <br />
          </div>
          <div>
            <span className="text-[32px] font-bold">
              3. Onboarding for Plan Editor
            </span>
            <br />
            Despite technical challenges, we aim to integrate dynamic elements
            into the plan page and create an efficient onboarding tutorial for
            the editor. Our goal is to enhance user navigation and minimize the
            learning curve.
            <br /> <br />
          </div>
        </Text>
      </article>
    </section>
  );
}
