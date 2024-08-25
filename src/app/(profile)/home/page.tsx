import AboutMe from "@/components/home/AboutMe";
import HomeCarousel from "@/components/home/HomeCarousel";
import BentoBoxView from "@/components/home/BentoBoxView";
import MyStacks from "@/components/home/MyStacks";

export default function Home() {
  const HomeComponents = [AboutMe, HomeCarousel, BentoBoxView, MyStacks];
  return (
    <main className="">
      <div className="mx-12 flex max-w-[1156px] flex-col items-center">
        {HomeComponents.map((Component, index) => (
          <LayoutWrapper key={index}>
            <Component />
          </LayoutWrapper>
        ))}
      </div>
    </main>
  );
}

const LayoutWrapper = ({ children }: { children: JSX.Element }) => {
  return (
    <div className="box-border w-full rounded-2xl border border-[#D9D9D9] bg-white/70 p-6">
      {children}
    </div>
  );
};
