import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import type { SkipItem } from "@/modules/select-skip/types/SkipItem";
import { CardItem } from "./CardItem";

export type CardItemCarouselProps = {
  items?: SkipItem[];
};

export function CardItemCarousel({
  items,
}: CardItemCarouselProps): React.ReactElement {
  return (
    <div className="flex items-center justify-center gap-x-6">
      <button className="rounded-full p-4 bg-[var(--border-medium-gray-color)] text-[var(--border-dark-gray-color)] cursor-pointer">
        <ArrowLeftIcon className="w-6 h-6" />
      </button>

      <section className="flex gap-x-5 overflow-x-auto">
        {items?.map((item: SkipItem) => (
          <CardItem key={item.id} item={item} />
        ))}
      </section>

      <button className="rounded-full p-4 bg-[var(--border-medium-gray-color)] text-[var(--border-dark-gray-color)] cursor-pointer">
        <ArrowRightIcon className="w-6 h-6" />
      </button>
    </div>
  );
}
