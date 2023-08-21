import ArticleBackground from '@/components/about/ArticleBackground';

export default function Asdf() {
  return <AboutMe />;
}

const AboutMe = () => (
  <ArticleBackground className="flex flex-col py-10 pl-5 pr-[84px] justify-center  gap-y-10">
    <div className="text-4xl font-extrabold">A little bit about me</div>
    <div className="">
      <div className="text-xl leading-10 font-bold">WHO I AM</div>
      <div className="leading-8 text-base">
        I'm a self-taught designer passionate about improving the lives of
        others through my design work. I seek to learn new things every day,
        whether that's how to format a magazine, bake a mochi cookie, or how to
        make a perfectly fried egg!
      </div>
    </div>

    <div className="">
      <div className="text-xl leading-10 font-bold">MY DESIGN JOURNEY</div>
      <div className="leading-8 text-base">
        I started my design journey by arming myself with a curious mind, a
        laptop, and Adobe Photoshop. I dedicated myself to learning and growing
        by attending design workshops, watching videos about accessibility in
        design, and applying the concepts I encountered to real-life projects
        such as my Lezhin App Redesign.
      </div>
    </div>

    <div className="">
      <div className="text-xl leading-10 font-bold">MY ASPIRATION</div>
      <div className="leading-8 text-base">
        The design world is always evolving, adapting to the world's needs, and
        so is a designer's job. I hope to grow into a creative professional by
        challenging myself even more with future creative projects and to be
        able to design extraordinary things that can help people.
      </div>
    </div>
  </ArticleBackground>
);
