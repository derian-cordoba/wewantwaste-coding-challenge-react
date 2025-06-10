import { useTranslation } from "react-i18next";
import {
  ArrowRightIcon,
  ExclamationTriangleIcon,
} from "@heroicons/react/24/outline";
import type { SkipItem } from "@/modules/select-skip/types/SkipItem";
import { defaultSkipItem } from "@/modules/select-skip/config/defaults/skip-item";
import { itemImageURL } from "@/modules/select-skip/utils/item-image-url";
import { Namespace } from "@/shared/utils/localization/namespaces";

export type SelectedItemProps = {
  item?: SkipItem;
};

export function SelectedItem({
  item = defaultSkipItem,
}: SelectedItemProps): React.ReactElement {
  const { t } = useTranslation(Namespace.SELECT_SKIP);

  return (
    <div className="flex relative flex-col border border-[var(--border-medium-gray-color)] overflow-hidden rounded-xl md:flex-row">
      {/* Not allowd warning section */}
      {!item.allowed_on_road && (
        <article className="flex gap-x-4 h-fit w-fit py-2 px-6 absolute top-0 right-0 bg-red-600 text-white rounded-bl-xl">
          <ExclamationTriangleIcon className="w-6 h-6" />
          {t("item.not_allowed_on_road")}
        </article>
      )}
      <section className="md:w-1/3">
        <img
          className="w-full h-full object-cover max-h-[400px]"
          src={itemImageURL(item.size)}
          alt={`${item.size} Yard Skip`}
        />
      </section>

      <section className="flex flex-col justify-between gap-y-6 py-6 px-8 md:px-16 md:w-4/6 md:relative">
        {/* Item title section */}
        <article className="flex flex-col gap-y-1">
          <h2 className="text-white text-2xl md:text-3xl font-semibold">
            {t("item.title", { size: item.size })}
          </h2>

          <p className="text-[var(--text-light-gray-color)]">
            {t("item.period", {
              count: item.hire_period_days,
            })}
          </p>
        </article>

        {/* Warning message section */}
        <article className="py-3 px-6 bg-[var(--yellow-opacity-color)] text-[var(--yellow-color)] rounded-xl">
          {t("item.description")}
        </article>

        {/* Item price + continue button section */}
        <article className="flex justify-between items-center">
          {/* For this coding-challenge, I will skip the internationalization, so, for all items, will use the "£" symbol */}
          <p className="text-3xl text-[var(--primary-color)]">
            £{item.price_before_vat}
          </p>

          <button className="flex justify-center items-center gap-x-2 px-8 py-2 bg-[var(--primary-color)] rounded-full text-white cursor-pointer hover:bg-blue-600 active:bg-blue-500 transition-colors duration-300 md:px-15 md:py-4">
            {t("item.button")}
            <ArrowRightIcon className="w-6 h-6" />
          </button>
        </article>
      </section>
    </div>
  );
}
