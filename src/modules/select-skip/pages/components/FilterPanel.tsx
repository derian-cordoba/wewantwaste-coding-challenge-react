import { useTranslation } from "react-i18next";
import { Namespace } from "@/shared/utils/localization/namespaces";
import { Separator } from "./Separator";
import { RangeSection } from "./RangeSection";

// Constants for price range
// For this coding-challenge, we are using a fixed range
// For a real-world application, you would likely fetch these values from an API or a configuration
const MIN_PRICE_VALUE = 240;
const MAX_PRICE_VALUE = 992;

// Constants for hide period range
// For this coding-challenge, we are using a fixed range
// For a real-world application, you would likely fetch these values from an API or a configuration
const MIN_HIDE_PERIOD_DAYS = 1;
const MAX_HIDE_PERIOD_DAYS = 20;

export function FilterPanel(): React.ReactElement {
  const { t } = useTranslation(Namespace.FILTER);

  return (
    <div className="flex flex-col gap-y-8 bg-gray-700/20 backdrop-blur-2xl py-12 px-8 rounded-xl border border-[var(--border-medium-gray-color)] z-50 absolute top-full mt-2 right-0">
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
          onChange={(value) => console.log(value)}
        />
        <Separator />
      </section>

      <section className="flex flex-col gap-y-4">
        <RangeSection
          title={t("hide.period.days")}
          min={MIN_HIDE_PERIOD_DAYS}
          max={MAX_HIDE_PERIOD_DAYS}
          currentValue={[1]}
          onChange={(value) => console.log(value)}
        />
        <Separator />
      </section>

      <section className="flex flex-col gap-y-2">
        <p className="text-white text-lg">{t("on.road")}</p>

        <article className="flex items-center gap-x-2">
          <input type="radio" name="on-road" />
          <label htmlFor="on-road" className="text-white">
            {t("radios.none")}
          </label>
        </article>

        <article className="flex items-center gap-x-2">
          <input type="radio" name="on-road" />
          <label htmlFor="on-road" className="text-white">
            {t("radios.allowed")}
          </label>
        </article>

        <article className="flex items-center gap-x-2">
          <input type="radio" name="on-road" />
          <label htmlFor="on-road" className="text-white">
            {t("radios.not.allowed")}
          </label>
        </article>
      </section>
    </div>
  );
}
