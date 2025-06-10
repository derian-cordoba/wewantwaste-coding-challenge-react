import { useEffect, useState } from "react";
import type { SkipItem } from "@/modules/select-skip/types/SkipItem";
import { PageLayout } from "@/shared/components/Layouts/PageLayout";
import { Loading } from "@/shared/components/Loading";
import { Filter } from "./components/Filter";
import { SelectedItem } from "./components/SelectedItem";
import { CardItemCarousel } from "./components/CardItemCarousel";
import { useSkipItems } from "../hooks/useSkipItems";
import { useFilters } from "../hooks/useFilters";
import { FilterBuilder } from "../utils/FilterBuilder";

export function SelectSkip(): React.ReactElement {
  const [selectedItem, setSelectedItem] = useState<SkipItem | undefined>(
    undefined
  );
  const { items, isLoading } = useSkipItems();
  const {
    price,
    hidePeriod,
    onRoad,
    showFilterMenu,
    toggleFilterMenu,
    handlePriceChange,
    handleHidePeriodChange,
    handleOnRoadChange,
  } = useFilters();

  // Filter the items based on the selected filters
  const filteredItems = new FilterBuilder(items)
    .withHidePeriod(hidePeriod)
    .withPrice(price)
    .withOnRoad(onRoad)
    .build();

  // Update the selected item when an item is clicked
  function handleItemClick(item: SkipItem): void {
    setSelectedItem(item);
  }

  useEffect(() => {
    // Update the selected item using the first item from the list
    const [firstItem] = filteredItems;
    setSelectedItem(firstItem);
  }, [filteredItems]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <PageLayout localizationKey="common:page.title">
      <section className="flex flex-col gap-8">
        <Filter
          showFilterMenu={showFilterMenu}
          onFilterClick={toggleFilterMenu}
          onPriceChange={handlePriceChange}
          onHidePeriodChange={handleHidePeriodChange}
          onRoadChange={handleOnRoadChange}
        />
        <SelectedItem item={selectedItem} />
        <CardItemCarousel
          items={filteredItems}
          selectedItem={selectedItem}
          onItemClick={handleItemClick}
        />
      </section>
    </PageLayout>
  );
}
