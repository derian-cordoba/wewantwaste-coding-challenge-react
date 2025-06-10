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
    <div className="flex border border-[var(--border-medium-gray-color)] rounded-xl">
      <section className="w-1/3">
        <img
          className="w-full h-full object-cover rounded-l-xl max-h-[400px]"
          src={itemImageURL(item.size)}
          alt={`${item.size} Yard Skip`}
        />
      </section>

      <section className="flex flex-col justify-between gap-y-4 w-4/6 relative py-6 px-[64px]">
        {/* Not allowd warning section */}
        {!item.allowed_on_road && (
          <article className="flex gap-x-4 h-fit w-fit py-2 px-6 absolute right-0 bg-red-600 text-white">
            <ExclamationTriangleIcon className="w-6 h-6" />
            {t("item.not_allowed_on_road")}
          </article>
        )}

        {/* Item title section */}
        <article className="flex flex-col gap-y-1">
          <h2 className="text-white text-3xl font-semibold">
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
          {/* For this coding-challenge, I will skip the internalization, so, for all items, will use the "£" symbol */}
          <p className="text-3xl text-[var(--primary-color)]">
            £{item.price_before_vat}
          </p>

          <button className="flex justify-center items-center gap-x-2 px-20 py-4 bg-[var(--primary-color)] rounded-full text-white cursor-pointer">
            {t("item.button")}
            <ArrowRightIcon className="w-6 h-6" />
          </button>
        </article>
      </section>
    </div>
  );
}
