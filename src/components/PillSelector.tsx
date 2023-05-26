export type PillSelectorProps = {
  options: string[];
  selected: number;
  setSelected: (selected: PillSelectorProps['selected']) => void;
};

export const PillSelector = ({
  options,
  selected,
  setSelected,
}: PillSelectorProps) => (
  <div className="transition-all flex flex-row items-center justify-center rounded-full dark:bg-[#6b7280] bg-[#F6F6F6] dark:text-white text-[#5F5F64] w-max overflow-clip px-1 font-semibold shadow-md">
    {options.map((option, index) => (
      <button
        type="button"
        key={`pill-option-${index}`}
        onClick={() => setSelected(index)}
        className={`my-1 rounded-full px-4 py-2 ${
          selected === index
            ? 'shadow-lg dark:bg-[#323943] bg-white dark:text-white text-black'
            : 'bg-inherit'
        }`}
      >
        {option}
      </button>
    ))}
  </div>
);
