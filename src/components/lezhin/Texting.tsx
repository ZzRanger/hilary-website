import H2 from "@/components/typography/H2";
import Text, { Weight } from "@/components/typography/Text";

export default function Texting() {
  return (
    <>
      <section className="flex flex-col items-center gap-y-[70px]">
        <Text weight={Weight.bold}>Introduction</Text>
        <H2 className="w-[60%] text-center">
          This project began with a text from my friend
        </H2>
        <article className="flex w-[90vw] flex-col gap-y-[90px]">
          <TextBubble
            message="Hilary, XXX webtoon has been released, have you read it yet? 👀"
            color={TextColor.gray}
          />
          <TextBubble
            message="Not yettt, what platform is it on?"
            color={TextColor.blue}
          />
          <TextBubble
            message="It was released on Lezhin!"
            color={TextColor.gray}
          />
          <TextBubble
            message="I'll just wait for it to release on Webtoon to read it 😔"
            color={TextColor.blue}
          />
          <TextBubble
            message="Eh? I think this webtoon is too good to not read it ah. Is your hate for Lezhin that great?"
            color={TextColor.gray}
          />
        </article>
        <div className="text-[35px] font-medium">
          This moment made me began to think on what makes began to think
        </div>
      </section>
      <H2 className="mt-[220px] w-[60vw] text-center">
        What makes Lezhin webtoon app so hard to use?
      </H2>
    </>
  );
}

const TextBubble = ({
  message,
  color,
  className,
}: {
  message: string;
  color: TextColor;
  className?: string;
}) => (
  <article
    className={`${color} ${
      color === TextColor.blue ? "self-end text-white" : "self-start text-black"
    } max-w-[800px] rounded-[220px] px-[32px] py-[10px] ${className || ""}`}
  >
    <Text>{message}</Text>
  </article>
);

enum TextColor {
  blue = "bg-[#519AF5]",
  gray = "bg-[#E9E9EB]",
}
