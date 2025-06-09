// import { useTranslation } from "react-i18next";
import { PageLayout } from "@/shared/components/Layouts/PageLayout";
// import { Namespace } from "@/shared/utils/localization/namespaces";
import { SearchBar } from "./components/SearchBar";

export function SelectSkip(): React.ReactElement {
  // const { t } = useTranslation(Namespace.SELECT_SKIP);

  function handleSearch(searchTerm?: string): void {
    // Implement search logic here
    console.log("Search term:", searchTerm);
  }

  return (
    <PageLayout localizationKey="common:page.title">
      <SearchBar onSearch={handleSearch} />
    </PageLayout>
  );
}
