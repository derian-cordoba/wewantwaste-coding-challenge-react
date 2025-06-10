import { useTranslation } from "react-i18next";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import type { SkipItem } from "@/modules/select-skip/types/SkipItem";
import { defaultSkipItem } from "@/modules/select-skip/config/defaults/skip-item";
import { itemImageURL } from "@/modules/select-skip/utils/item-image-url";
import { Namespace } from "@/shared/utils/localization/namespaces";
import { cn } from "@/shared/utils/tailwind/merge";

export type CardItemProps = {
  item?: SkipItem;
  isSelected: boolean;
};

export function CardItem({
  item = defaultSkipItem,
  isSelected,
}: CardItemProps): React.ReactElement {
  const { t } = useTranslation(Namespace.SELECT_SKIP);

  return (
    <div
      className={cn(
        "flex flex-col gap-4 py-4 px-3 bg-white rounded-lg cursor-pointer relative overflow-hidden",
        isSelected
          ? "border-3 border-[var(--primary-color)]"
          : "border-transparent"
      )}
    >
      {/* Not allowd warning section */}
      {!item.allowed_on_road && (
        <article className="flex items-center gap-x-2 h-fit w-fit py-2 px-4 absolute top-0 right-0 rounded-bl-xl bg-red-600 text-white text-sm">
          <ExclamationTriangleIcon className="w-4 h-4 lg:w-5 lg:h-5" />
          {t("item.not_allowed_on_road")}
        </article>
      )}

      <section>
        <img
          className="w-full h-auto aspect-video object-cover rounded-xl"
          src={itemImageURL(item.size)}
          alt={`${item.size} Yard Skip`}
        />
      </section>

      <section className="flex justify-between">
        <article className="flex flex-col gap-y-1">
          <h2 className="text-[var(--primary-color)] text-base font-semibold">
            {t("item.title", { size: item.size })}
          </h2>

          <p className="text-[var(--text-light-gray-color)] text-xs">
            {t("item.period", {
              count: item.hire_period_days,
            })}
          </p>
        </article>

        <article className="flex justify-center items-center px-6 py-1 bg-[var(--primary-color)] rounded-full cursor-pointer">
          <p className="text-base text-white">£{item.price_before_vat}</p>
        </article>
      </section>
    </div>
  );
}
