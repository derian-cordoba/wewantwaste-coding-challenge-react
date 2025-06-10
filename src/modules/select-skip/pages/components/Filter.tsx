import { AdjustmentsHorizontalIcon } from "@heroicons/react/24/outline";
import { useTranslation } from "react-i18next";
import { Namespace } from "@/shared/utils/localization/namespaces";
import { OnRoadStatus } from "@/modules/select-skip/types/on-road";
import { FilterPanel } from "./FilterPanel";

export type FilterProps = {
  // Optional prop to control visibility of the filter panel
  showFilterMenu?: boolean;

  // Optional prop to control the price filter
  price?: number;

  // Optional prop to control the hide period filter
  hidePeriod?: number;

  // Filter button click handler
  onFilterClick?: () => Promise<void> | void;

  // Pop to handle price change
  onPriceChange: (value: number) => Promise<void> | void;

  // Prop to handle hide period change
  onHidePeriodChange: (value: number) => Promise<void> | void;

  // Prop to handle on-road change
  onRoadChange: (value: OnRoadStatus) => Promise<void> | void;
};

export function Filter({
  price,
  hidePeriod,
  showFilterMenu,
  onFilterClick,
  onPriceChange,
  onHidePeriodChange,
  onRoadChange,
}: FilterProps): React.ReactElement {
  const { t } = useTranslation(Namespace.FILTER);

  return (
    <div className="relative self-end">
      <button
        onClick={onFilterClick}
        className="flex items-center justify-center bg-gray-600/10 border border-[var(--medium-gray-color)] py-2 px-3 rounded-lg cursor-pointer"
      >
        <AdjustmentsHorizontalIcon className="w-6 h-6 stroke-white" />
        <span className="text-white ml-2">{t("title")}</span>
      </button>

      <FilterPanel
        price={price}
        hidePeriod={hidePeriod}
        showFilterMenu={showFilterMenu}
        onFilterClick={onFilterClick}
        onPriceChange={onPriceChange}
        onHidePeriodChange={onHidePeriodChange}
        onRoadChange={onRoadChange}
      />
    </div>
  );
}
