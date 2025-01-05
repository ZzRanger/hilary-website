import AboutMe from "@/components/home/AboutMe";
import HomeCarousel from "@/components/home/HomeCarousel";
import BentoBoxView from "@/components/home/BentoBoxView";
import MyStacks from "@/components/home/MyStacks";

export default function Home() {
  return (
    <main className="flex flex-col items-center gap-8">
      <AboutMe />
      <HomeCarousel />
      <BentoBoxView />
      <MyStacks />
    </main>
  );
}
