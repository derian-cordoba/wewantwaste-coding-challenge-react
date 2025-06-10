import type { SkipItem } from "../types/SkipItem";
import { OnRoadStatus } from "../types/on-road";

export type SkipItemFilter = {
  price: number;
  hidePeriod: number;
  onRoad: OnRoadStatus;
};

export class FilterBuilder {
  private items: SkipItem[] = [];
  private filter: SkipItemFilter = {
    price: 0,
    hidePeriod: 0,
    onRoad: OnRoadStatus.NONE,
  };

  constructor(items: SkipItem[]) {
    this.items = items;
  }

  /**
   * Add price filter to the builder.
   *
   * @param price - The maximum price to filter items by.
   * @return FilterBuilder - Returns the current instance for method chaining.
   *
   */
  public withPrice(price: number): FilterBuilder {
    this.filter.price = price;
    return this;
  }

  /**
   * Add hide period filter to the builder.
   *
   * @param hidePeriod - The minimum hire period in days to filter items by.
   * @return FilterBuilder - Returns the current instance for method chaining.
   */
  public withHidePeriod(hidePeriod: number): FilterBuilder {
    this.filter.hidePeriod = hidePeriod;
    return this;
  }

  /**
   * Add on-road status filter to the builder.
   *
   * @param onRoad - The on-road status to filter items by.
   * @return FilterBuilder - Returns the current instance for method chaining.
   */
  public withOnRoad(onRoad: OnRoadStatus): FilterBuilder {
    this.filter.onRoad = onRoad;
    return this;
  }

  /**
   * Build the filtered list of items based on the applied filters.
   *
   * @return SkipItem[] - The filtered list of items.
   */
  public build(): SkipItem[] {
    // Early return if filter has the default values
    if (
      this.filter.price === 0 &&
      this.filter.hidePeriod === 0 &&
      this.filter.onRoad === OnRoadStatus.NONE
    ) {
      return this.items;
    }

    return this.items.filter((item: SkipItem) => {
      const matchesPrice = item.price_before_vat <= this.filter.price;
      const matchesHidePeriod = item.hire_period_days >= this.filter.hidePeriod;
      const matchesOnRoad =
        this.filter.onRoad === OnRoadStatus.NONE ||
        item.allowed_on_road === (this.filter.onRoad === OnRoadStatus.ALLOWED);

      return matchesPrice && matchesHidePeriod && matchesOnRoad;
    });
  }
}
