"use client";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center">
      <section className="flex flex-col bg-white/60">
        <article className="flex flex-row">
          <div className="flex flex-col">
            <div>Hey! I&quote;m Hilary 👋</div>
            <div>Product Designer</div>
          </div>
        </article>
        <article>
          I&quote;m a full-stacked designer that loves cross-functional work,
          data-backed design, and user research. I like to craft cool products
          that can make a difference in someone&quote;s life.
        </article>
        <article className="flex flex-row">
          <button>Connect with me</button>
          <button>My resume</button>
        </article>
      </section>
    </main>
  );
}
