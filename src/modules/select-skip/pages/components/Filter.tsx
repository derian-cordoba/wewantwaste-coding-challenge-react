import { AdjustmentsHorizontalIcon } from "@heroicons/react/24/outline";
import { useTranslation } from "react-i18next";
import { Namespace } from "@/shared/utils/localization/namespaces";
import { FilterPanel } from "./FilterPanel";

export type FilterProps = {
  // Optional prop to control visibility of the filter panel
  showFilterMenu?: boolean;

  // Filter button click handler
  onFilterClick?: () => Promise<void> | void;
};

export function Filter({
  showFilterMenu,
  onFilterClick,
}: FilterProps): React.ReactElement {
  const { t } = useTranslation(Namespace.SELECT_SKIP);

  return (
    <div className="relative self-end">
      <button
        onClick={onFilterClick}
        className="flex items-center justify-center bg-gray-600/10 border border-[var(--medium-gray-color)] py-2 px-3 rounded-lg cursor-pointer"
      >
        <AdjustmentsHorizontalIcon className="w-6 h-6 stroke-white" />
        <span className="text-white ml-2">{t("title")}</span>
      </button>

      {showFilterMenu && <FilterPanel />}
    </div>
  );
}
