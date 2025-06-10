import { useEffect, useState } from "react";
import type { SkipItem } from "../types/SkipItem";
import { PageLayout } from "@/shared/components/Layouts/PageLayout";
import { Loading } from "@/shared/components/Loading";
import { Filter } from "./components/Filter";
import { SelectedItem } from "./components/SelectedItem";
import { CardItemCarousel } from "./components/CardItemCarousel";
import { useSkipItems } from "../hooks/useSkipItems";
import { useFilters } from "../hooks/useFilters";

export function SelectSkip(): React.ReactElement {
  const [selectedItem, setSelectedItem] = useState<SkipItem | undefined>(
    undefined
  );
  const { items, isLoading } = useSkipItems();
  const { showFilterMenu, toggleFilterMenu } = useFilters();

  // Update the selected item when an item is clicked
  function handleItemClick(item: SkipItem): void {
    setSelectedItem(item);
  }

  useEffect(() => {
    // Update the selected item using the first item from the list
    const [firstItem] = items;
    setSelectedItem(firstItem);
  }, [items]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <PageLayout localizationKey="common:page.title">
      <section className="flex flex-col gap-8">
        <Filter
          showFilterMenu={showFilterMenu}
          onFilterClick={toggleFilterMenu}
        />
        <SelectedItem item={selectedItem} />
        <CardItemCarousel
          items={items}
          selectedItem={selectedItem}
          onItemClick={handleItemClick}
        />
      </section>
    </PageLayout>
  );
}
