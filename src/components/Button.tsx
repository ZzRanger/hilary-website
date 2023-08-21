export default function Button({
  children,
  className,
}: {
  children: React.ReactElement | React.ReactElement[];
  className?: string;
}) {
  return (
    <button
      className={`w-[420px] rounded-[50px] border-4 border-black h-[90px] ${
        className ?? ''
      }`}
      type="button"
    >
      {children}
    </button>
  );
}
