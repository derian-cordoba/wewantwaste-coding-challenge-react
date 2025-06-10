import { useEffect, useState } from "react";
import type { SkipItem } from "@/modules/select-skip/types/SkipItem";
import { fetchSkipByLocation } from "@/modules/select-skip/services/skip";

export type UseSkipItemsResponse = {
  items: SkipItem[];
  isLoading: boolean;
  error: Error | null;
};

export type UseSkipItemsProps = {
  postCode?: string;
  area?: string;
};

export function useSkipItems(props?: UseSkipItemsProps): UseSkipItemsResponse {
  const { postCode, area } = props || {};

  // Using SWR, I can avoid managing loading and error states manually,
  // but for this coding-challenge, I will manage them manually to keep it simple.
  // SWR reference: https://swr.vercel.app/
  const [items, setItems] = useState<SkipItem[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  // I assume that fetchSkipByLocation is a function that fetches skip items based on the provided postCode and area.
  // Also, to fetch items, we can use SWR or the new "use" hook, but for simplicity, I will use useEffect here.
  useEffect(() => {
    const fetchItems = async () => {
      try {
        setIsLoading(true);
        const fetchedItems = await fetchSkipByLocation({ postCode, area });
        setItems(fetchedItems);
        console.log("Fetched items:", fetchedItems);
      } catch (error) {
        setError(error as Error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchItems();
  }, [postCode, area]);

  return { items, isLoading, error };
}
