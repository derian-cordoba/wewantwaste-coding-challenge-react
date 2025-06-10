import { useState } from "react";
import { OnRoadStatus } from "@/modules/select-skip/types/on-road";

export type FilterMenuResponse = {
  showFilterMenu: boolean;
  price: number;
  hidePeriod: number;
  onRoad: OnRoadStatus;
  toggleFilterMenu: () => Promise<void> | void;
  handlePriceChange: (value: number) => Promise<void> | void;
  handleHidePeriodChange: (value: number) => Promise<void> | void;
  handleOnRoadChange: (value: OnRoadStatus) => Promise<void> | void;
};

export function useFilters(): FilterMenuResponse {
  const [showFilterMenu, setShowFilterMenu] = useState<boolean>(false);
  const [price, setPrice] = useState<number>(0);
  const [hidePeriod, setHidePeriod] = useState<number>(0);
  const [onRoad, setOnRoad] = useState<OnRoadStatus>(OnRoadStatus.NONE);

  const toggleFilterMenu = (): void => {
    setShowFilterMenu((prev: boolean) => !prev);
  };

  const handlePriceChange = (value: number): Promise<void> | void => {
    setPrice(value);
  };

  const handleHidePeriodChange = (value: number): Promise<void> | void => {
    setHidePeriod(value);
  };

  const handleOnRoadChange = (value: OnRoadStatus): Promise<void> | void => {
    setOnRoad(value);
  };

  return {
    showFilterMenu,
    price,
    hidePeriod,
    onRoad,
    toggleFilterMenu,
    handlePriceChange,
    handleHidePeriodChange,
    handleOnRoadChange,
  };
}
