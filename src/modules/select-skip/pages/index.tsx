import { PageLayout } from "@/shared/components/Layouts/PageLayout";
import { Loading } from "@/shared/components/Loading";
import { SearchBar } from "./components/SearchBar";
import { SelectedItem } from "./components/SelectedItem";
import { CardItemCarousel } from "./components/CardItemCarousel";
import { useSkipItems } from "../hooks/useSkipItems";

export function SelectSkip(): React.ReactElement {
  const { items, isLoading } = useSkipItems();

  // By default we will select the first item in the list
  const [firstItem] = items;

  function handleSearch(searchTerm?: string): void {
    // Implement search logic here
    console.log("Search term:", searchTerm);
  }

  if (isLoading) {
    return <Loading />;
  }

  return (
    <PageLayout localizationKey="common:page.title">
      <section className="flex flex-col gap-8">
        <SearchBar onSearch={handleSearch} />
        <SelectedItem item={firstItem} />
        <CardItemCarousel items={items} />
      </section>
    </PageLayout>
  );
}
