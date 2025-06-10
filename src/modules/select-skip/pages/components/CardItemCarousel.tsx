import type { SkipItem } from "@/modules/select-skip/types/SkipItem";
import { CardItem } from "./CardItem";

export type CardItemCarouselProps = {
  items: SkipItem[];
  selectedItem?: SkipItem;
  onItemClick: (item: SkipItem) => Promise<void> | void;
};

export function CardItemCarousel({
  items,
  selectedItem,
  onItemClick,
}: CardItemCarouselProps): React.ReactElement {
  return (
    <div className="w-full overflow-x-auto">
      <section className="flex gap-x-5 min-w-max">
        {items?.map((item: SkipItem) => (
          <article
            key={item.id}
            onClick={() => onItemClick(item)}
            className={`w-[400px] shrink-0 border-4 rounded-xl ${
              selectedItem?.id === item.id
                ? "border-[var(--primary-color)]"
                : "border-transparent"
            }`}
          >
            <CardItem item={item} />
          </article>
        ))}
      </section>
    </div>
  );
}
