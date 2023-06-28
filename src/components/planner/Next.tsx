export default function Next() {
  return (
    <section className="flex flex-col items-center">
      <div className="text-[30px] font-bold">What’s Next</div>
      <div className="text-[50px] font-bold w-[70%] text-center mb-[100px]">
        Despite a successful launch, our project remains a work in progress. We
        are actively planning and working to implement the following features.
      </div>
      <article className="text-[30px] flex flex-col text-left space-y-[30px] w-[90vw] bg-[#F5F5F5] py-[82px] px-[41px]">
        <div>
          <span className="font-bold text-[32px]">
            1. Improve Visibility of Customization Options for Courses
          </span>
          <br />
          During our testing session, we found that users don’t usually
          right-click for customization options so we want to improve the
          visibility of that.
        </div>
        <div>
          <span className="font-bold text-[32px]">
            2. Improve Course Requirement’s UI
          </span>
          <br />
          Design is an ongoing process of iteration and improvement, I want to
          focus on collecting and listening to user feedback to enhance the
          end-user experience.
        </div>
        <div>
          <span className="font-bold text-[32px]">
            3. Onboarding for Plan Editor
          </span>
          <br />
          Despite technical challenges, we aim to integrate dynamic elements
          into the plan page and create an efficient onboarding tutorial for the
          editor. Our goal is to enhance user navigation and minimize the
          learning curve.
        </div>
      </article>
    </section>
  );
}
