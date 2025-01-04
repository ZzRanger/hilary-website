import { useState } from "react";

export default function ProjectDropdown() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="px:4 relative flex h-[75px] items-center justify-center sm:px-10">
      <button
        className="flex items-center justify-center gap-1"
        onClick={toggleDropdown}
      >
        <span>Projects</span>
        <svg
          className={`h-4 w-4 transition-transform ${
            isOpen ? "-rotate-180 transform" : ""
          }`}
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 12.586L4.707 7.293a1 1 0 011.414-1.414L10 10.172l3.879-3.879a1 1 0 111.414 1.414L10 12.586z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-0 top-[74px] z-[-10] w-40 border-gray-300 bg-white shadow-md">
          <ul className="py-2">
            <li key={0} className="cursor-pointer px-4 py-2 hover:bg-gray-100">
              <a href="/planner">Nebula Planner</a>
            </li>
            <li key={1} className="cursor-pointer px-4 py-2 hover:bg-gray-100">
              <a
                target="_blank"
                href="https://developforgood.notion.site/Case-Study-Rafiki-Africa-666b829b2a724943903d0269dca36fcc"
              >
                Somasawa
              </a>
            </li>
            <li key={2} className="cursor-pointer px-4 py-2 hover:bg-gray-100">
              <a
                target="_blank"
                href="https://www.figma.com/proto/MhKKJjTLqhMDuRgVScK6KL/Presentation-Slides?node-id=303-170&starting-point-node-id=303%3A170&t=CQbf6jGxESYLbwrj-1"
              >
                KnowVerse
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
