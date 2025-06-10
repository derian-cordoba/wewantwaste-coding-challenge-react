import type { SkipItem } from "@/modules/select-skip/types/SkipItem";
import { CardItem } from "./CardItem";

export type CardItemCarouselProps = {
  items?: SkipItem[];
};

export function CardItemCarousel({
  items,
}: CardItemCarouselProps): React.ReactElement {
  return (
    <div className="w-full overflow-x-auto">
      <section className="flex gap-x-5 px-4 py-2 min-w-max">
        {items?.map((item: SkipItem) => (
          <article key={item.id} className="w-[400px] shrink-0">
            <CardItem item={item} />
          </article>
        ))}
      </section>
    </div>
  );
}
