export default function Button({
  children,
  className,
}: {
  children: React.ReactElement | React.ReactElement[];
  className?: string;
}) {
  return (
    <button
      className={`h-[90px] w-[420px] rounded-[50px] border-4 border-black ${
        className ?? ""
      }`}
      type="button"
    >
      {children}
    </button>
  );
}
