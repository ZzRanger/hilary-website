import Link from "next/link";

export const links: {
  href: string;
  title: string;
  newTab?: boolean;
}[] = [
  {
    href: "/about",
    title: "About",
  },
  {
    href: "https://fori.io/hilary-nguyen ",
    title: "Play",
    newTab: true,
  },
  {
    href: "/resume.pdf",
    title: "My Resume",
    newTab: true,
  },
];

// TODO: Line up mobile overlay with navbar
const MenuOverlay = ({
  navbarOpen,
  setNavbarOpen,
}: {
  navbarOpen: boolean;
  setNavbarOpen: (open: boolean) => void;
}) => {
  return (
    <section
      className={`fixed left-0 top-0 z-50 flex h-screen w-full transform bg-white/90 bg-opacity-100 p-10 transition-all delay-100 duration-300 ${
        navbarOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
      }`}
    >
      <section className="flex w-full flex-col items-center px-10  text-black">
        <article className="flex w-full flex-row justify-between ">
          <h1 className="text-3xl font-black tracking-tight">HN.</h1>
          <button onClick={() => setNavbarOpen(false)}>
            <CloseIcon />
          </button>
        </article>
        <article className="mt-10 flex flex-col items-center gap-8">
          {links.map(({ href, title, newTab }, i) => {
            return (
              <Link
                href={href ?? ""}
                key={i}
                className="text-3xl font-black"
                target={newTab ? "_blank" : ""}
              >
                {title}
              </Link>
            );
          })}
          <div className="flex flex-row items-center gap-4">
            <Link
              href="https://www.linkedin.com/in/hilary-nguyen/"
              target="_blank"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.67499 6.25C8.67466 6.91304 8.41095 7.54879 7.94187 8.0174C7.4728 8.48601 6.83678 8.74908 6.17374 8.74875C5.5107 8.74842 4.87494 8.48471 4.40634 8.01563C3.93773 7.54656 3.67466 6.91054 3.67499 6.2475C3.67532 5.58446 3.93903 4.9487 4.4081 4.4801C4.87718 4.01149 5.5132 3.74842 6.17624 3.74875C6.83928 3.74908 7.47503 4.01279 7.94364 4.48187C8.41225 4.95094 8.67532 5.58696 8.67499 6.25ZM8.74999 10.6H3.74999V26.25H8.74999V10.6ZM16.65 10.6H11.675V26.25H16.6V18.0375C16.6 13.4625 22.5625 13.0375 22.5625 18.0375V26.25H27.5V16.3375C27.5 8.625 18.675 8.9125 16.6 12.7L16.65 10.6Z"
                  fill="currentColor"
                />
              </svg>
            </Link>
            <Link href="mailto:nguyenhilary0907@gmail.com" target="_blank">
              <svg
                width="24"
                height="24"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 25C4.3125 25 3.72375 24.755 3.23375 24.265C2.74375 23.775 2.49917 23.1867 2.5 22.5V7.5C2.5 6.8125 2.745 6.22375 3.235 5.73375C3.725 5.24375 4.31334 4.99917 5 5H25C25.6875 5 26.2763 5.245 26.7663 5.735C27.2563 6.225 27.5008 6.81334 27.5 7.5V22.5C27.5 23.1875 27.255 23.7763 26.765 24.2663C26.275 24.7563 25.6867 25.0008 25 25H5ZM15 16.25L5 10V22.5H25V10L15 16.25ZM15 13.75L25 7.5H5L15 13.75ZM5 10V7.5V22.5V10Z"
                  fill="currentColor"
                />
              </svg>
            </Link>
          </div>
        </article>
      </section>
    </section>
  );
};

function CloseIcon() {
  return (
    <svg
      width="20"
      height="21"
      viewBox="0 0 20 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.34171 3.84171C3.79732 3.3861 4.53601 3.3861 4.99162 3.84171L10 8.85008L15.0084 3.84171C15.464 3.3861 16.2027 3.3861 16.6583 3.84171C17.1139 4.29732 17.1139 5.03601 16.6583 5.49162L11.6499 10.5L16.6583 15.5084C17.1139 15.964 17.1139 16.7027 16.6583 17.1583C16.2027 17.6139 15.464 17.6139 15.0084 17.1583L10 12.1499L4.99162 17.1583C4.53601 17.6139 3.79732 17.6139 3.34171 17.1583C2.8861 16.7027 2.8861 15.964 3.34171 15.5084L8.35008 10.5L3.34171 5.49162C2.8861 5.03601 2.8861 4.29732 3.34171 3.84171Z"
        fill="#1F2937"
      />
    </svg>
  );
}
export default MenuOverlay;
