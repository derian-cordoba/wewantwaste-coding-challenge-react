import { AdjustmentsHorizontalIcon } from "@heroicons/react/24/outline";
import { useTranslation } from "react-i18next";
import { Namespace } from "@/shared/utils/localization/namespaces";

export type SearchBarProps = {
  // Search handler function
  onSearch?: (searchTerm?: string) => Promise<void> | void;

  // Filter button click handler
  onFilterClick?: () => Promise<void> | void;
};

export function SearchBar({
  onSearch,
  onFilterClick,
}: SearchBarProps): React.ReactElement {
  const { t } = useTranslation(Namespace.SELECT_SKIP);

  // Wrapper function to handle search input changes`
  const handleSearchChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ): Promise<void> => {
    await onSearch?.(event.target.value);
  };

  return (
    <div className="flex justify-between h-20 border border-[var(--border-medium-gray-color)] rounded-xl">
      <section className="w-full px-12 py-4">
        <input
          type="text"
          name="search"
          onChange={handleSearchChange}
          placeholder={t("search.placeholder")}
          className="w-full py-2 px-4 text-white border border-[var(--border-light-gray-color)] rounded-[10px]"
        />
      </section>

      <button
        onClick={onFilterClick}
        className="flex justify-center items-center bg-[var(--medium-gray-color)] py-6 px-10 rounded-r-xl cursor-pointer"
      >
        <AdjustmentsHorizontalIcon className="w-8 h-8 text-white" />
      </button>
    </div>
  );
}
