import RemoveIcon from "/images/icon-remove.svg";

type FilterBarProps = {
  activeFilters: Set<string>;
  onFilterRemove: (tag: string) => void;
  onFilterClear: () => void;
};

export default function FilterBar({
  activeFilters,
  onFilterRemove,
  onFilterClear,
}: FilterBarProps) {
  const activeFiltersArray = [...activeFilters];

  return (
    <div className="flex items-center justify-between bg-white px-6 py-5 shadow-[0_4px_4px_hsla(180,29%,50%,0.25)] lg:px-11">
      <div className="flex flex-wrap items-center gap-4 rounded-[5px]">
        {activeFiltersArray.map((filter) => (
          <span
            key={filter}
            className="inline-flex items-stretch overflow-hidden rounded-[5px] bg-green-50"
          >
            <span className="flex items-center pt-2 pr-2 pb-1 pl-3 text-base font-bold text-green-400">
              {filter}
            </span>
            <button
              className="flex items-center bg-green-400 p-2 hover:cursor-pointer hover:bg-green-900"
              type="button"
              aria-label={`Remove ${filter} filter`}
              onClick={() => onFilterRemove(filter)}
            >
              <img src={RemoveIcon} alt="" aria-hidden="true" />
            </button>
          </span>
        ))}
      </div>
      <button
        className="text-base font-bold text-gray-400 hover:cursor-pointer hover:text-green-400"
        type="button"
        onClick={onFilterClear}
      >
        Clear
      </button>
    </div>
  );
}
