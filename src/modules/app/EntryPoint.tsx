// Call the initialization file
import "@/modules/app/utils/initializator";

import { useTranslation } from "react-i18next";
import { PageLayout } from "@/shared/components/Layouts/PageLayout";

export function EntryPoint() {
  const { t } = useTranslation();

  return (
    <PageLayout localizationKey="common:page.title">
      <p>{t("choose.your.skip.size")}</p>
    </PageLayout>
  );
}
