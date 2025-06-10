import { useState } from "react";

export type FilterMenuResponse = {
  showFilterMenu: boolean;
  toggleFilterMenu: () => Promise<void> | void;
};

export function useFilters(): FilterMenuResponse {
  const [showFilterMenu, setShowFilterMenu] = useState<boolean>(false);

  const toggleFilterMenu = (): void => {
    setShowFilterMenu((prev: boolean) => !prev);
  };

  return {
    toggleFilterMenu,
    showFilterMenu,
  };
}
