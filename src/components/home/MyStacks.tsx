import Image, { StaticImageData } from "next/image";

import FigmaIcon from "@public/home/FigmaIcon.png";
import AtlassianIcon from "@public/home/AtlassianIcon.png";
import AdobeIcon from "@public/home/AdobeIcon.png";
import NotionIcon from "@public/home/NotionIcon.png";
import MiroIcon from "@public/home/MiroIcon.png";
import FramerIcon from "@public/home/FramerIcon.png";

const MyStacks = () => {
  const toolInfo = [
    { icon: FigmaIcon, textTitle: "Figma", textDescription: "UI/UX tool" },
    {
      icon: AtlassianIcon,
      textTitle: "Atlassian",
      textDescription: "Project management",
    },
    {
      icon: AdobeIcon,
      textTitle: "Adobe Creative Suite",
      textDescription: "Graphic and branding tool",
    },
    {
      icon: NotionIcon,
      textTitle: "Notion",
      textDescription: "Project management",
    },
    {
      icon: MiroIcon,
      textTitle: "Miro",
      textDescription: "Design brainstorm/research",
    },
    {
      icon: FramerIcon,
      textTitle: "Framer",
      textDescription: "Website design",
    },
  ];
  return (
    <section className="flex flex-col">
      <article className="flex h-8 flex-row items-center justify-between">
        <div className="flex flex-row items-center gap-1">
          <svg
            width="10"
            height="14"
            viewBox="0 0 10 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.625 1.75C0.625 0.783502 1.4085 0 2.375 0H7.625C8.5915 0 9.375 0.783502 9.375 1.75V14L5 11.8125L0.625 14V1.75Z"
              fill="#A3A3A3"
            />
          </svg>
          My Stacks
        </div>
      </article>
      <div className="grid grid-cols-2 rounded-2xl bg-[#F5F5F5] p-4">
        {toolInfo.map((tool) => (
          <ToolArticle key={tool.textTitle} {...tool} />
        ))}
      </div>
    </section>
  );
};

const ToolArticle = ({
  icon,
  textTitle,
  textDescription,
}: {
  icon: StaticImageData;
  textTitle: string;
  textDescription: string;
}) => {
  return (
    <article className="flex w-[400px] flex-row items-center gap-4 border-b-2 border-[#D4D4D4] p-4">
      <Image src={icon} width={80} alt="Figma Icon" />
      <div>
        <div className="font-[500]">{textTitle}</div>
        <div className="text-sm text-gray-500">{textDescription}</div>
      </div>
    </article>
  );
};

export default MyStacks;
