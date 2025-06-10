import { useTranslation } from "react-i18next";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { OnRoadStatus } from "@/modules/select-skip/types/on-road";
import { cn } from "@/shared/utils/tailwind/merge";
import { Namespace } from "@/shared/utils/localization/namespaces";
import { Separator } from "./Separator";
import { RangeSection } from "./RangeSection";

// Constants for price range
// For this coding-challenge, we are using a fixed range
// For a real-world application, you would likely fetch these values from an API or a configuration
const MIN_PRICE_VALUE = 278;
const MAX_PRICE_VALUE = 992;

// Constants for hide period range
// For this coding-challenge, we are using a fixed range
// For a real-world application, you would likely fetch these values from an API or a configuration
const MIN_HIDE_PERIOD_DAYS = 1;
const MAX_HIDE_PERIOD_DAYS = 14;

export type FilterPanelProps = {
  showFilterMenu?: boolean;
  onFilterClick?: () => Promise<void> | void;
  onPriceChange: (value: number) => Promise<void> | void;
  onHidePeriodChange: (value: number) => Promise<void> | void;
  onRoadChange: (value: OnRoadStatus) => Promise<void> | void;
};

export function FilterPanel({
  showFilterMenu,
  onPriceChange,
  onHidePeriodChange,
  onRoadChange,
  onFilterClick,
}: FilterPanelProps): React.ReactElement {
  const { t } = useTranslation(Namespace.FILTER);

  const handleOnRoadChange = (value: OnRoadStatus) => {
    onRoadChange(value);
  };

  return (
    <div
      inert={!showFilterMenu}
      className={cn(
        "flex flex-col opacity-0 transition-opacity duration-200 pointer-events-none gap-y-8 bg-gray-700/20 backdrop-blur-2xl py-12 px-8 border border-[var(--border-medium-gray-color)] z-50 fixed w-full h-full max-md:inset-0 md:h-auto md:w-auto md:absolute md:top-full md:mt-2 md:right-0 md:rounded-xl",
        {
          "opacity-100 pointer-events-auto": showFilterMenu,
        }
      )}
    >
      <button
        onClick={onFilterClick}
        className="md:hidden absolute top-4 right-4 text-white cursor-pointer"
      >
        <XMarkIcon className="w-6 h-6" />
      </button>

      <section className="flex flex-col gap-y-4">
        <p className="text-white text-lg">{t("title")}</p>
        <Separator />
      </section>

      <section className="flex flex-col gap-y-4">
        <RangeSection
          title={t("price")}
          min={MIN_PRICE_VALUE}
          max={MAX_PRICE_VALUE}
          symbol="£"
          currentValue={[1]}
          onChange={onPriceChange}
        />
        <Separator />
      </section>

      <section className="flex flex-col gap-y-4">
        <RangeSection
          title={t("hide.period.days")}
          min={MIN_HIDE_PERIOD_DAYS}
          max={MAX_HIDE_PERIOD_DAYS}
          currentValue={[1]}
          onChange={onHidePeriodChange}
        />
        <Separator />
      </section>

      <section className="flex flex-col gap-y-2">
        <p className="text-white text-lg">{t("on.road")}</p>

        <article className="flex items-center gap-x-2">
          <input
            type="radio"
            name="on-road"
            onChange={() => handleOnRoadChange(OnRoadStatus.NONE)}
          />
          <label htmlFor="on-road" className="text-white">
            {t("radios.none")}
          </label>
        </article>

        <article className="flex items-center gap-x-2">
          <input
            type="radio"
            name="on-road"
            onChange={() => handleOnRoadChange(OnRoadStatus.ALLOWED)}
          />
          <label htmlFor="on-road" className="text-white">
            {t("radios.allowed")}
          </label>
        </article>

        <article className="flex items-center gap-x-2">
          <input
            type="radio"
            name="on-road"
            onChange={() => handleOnRoadChange(OnRoadStatus.NOT_ALLOWED)}
          />
          <label htmlFor="on-road" className="text-white">
            {t("radios.not.allowed")}
          </label>
        </article>
      </section>
    </div>
  );
}
