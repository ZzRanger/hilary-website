export type PillSelectorProps = {
  options: string[];
  selected: number;
  setSelected: (selected: PillSelectorProps["selected"]) => void;
};

export const PillSelector = ({
  options,
  selected,
  setSelected,
}: PillSelectorProps) => (
  <div className="flex w-max flex-row items-center justify-center overflow-clip rounded-full bg-[#F6F6F6] px-1 font-semibold text-[#5F5F64] shadow-md transition-all dark:bg-[#6b7280] dark:text-white">
    {options.map((option, index) => (
      <button
        type="button"
        key={`pill-option-${index}`}
        onClick={() => setSelected(index)}
        className={`my-1 rounded-full px-4 py-2 ${
          selected === index
            ? "bg-white text-black shadow-lg dark:bg-[#323943] dark:text-white"
            : "bg-inherit"
        }`}
      >
        {option}
      </button>
    ))}
  </div>
);
