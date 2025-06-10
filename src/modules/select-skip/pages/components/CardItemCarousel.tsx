import type { SkipItem } from "@/modules/select-skip/types/SkipItem";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/shared/components/ui/carousel";
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
    <Carousel
      className="flex flex-col gap-4"
      opts={{
        align: "start",
      }}
    >
      <div className="flex justify-end gap-4">
        <CarouselPrevious className="text-[#B0B0B0] bg-[#262626] cursor-pointer static top-0 right-0 -translate-y-0" />
        <CarouselNext className="text-[#B0B0B0] bg-[#262626] cursor-pointer static top-0 right-0 -translate-y-0" />
      </div>
      <CarouselContent>
        {items?.map((item: SkipItem) => (
          <CarouselItem
            key={item.id}
            className="basis-3/4 select-none md:max-lg:basis-1/3 md:basis-1/4"
            onClick={() => onItemClick(item)}
          >
            <CardItem item={item} isSelected={selectedItem?.id === item.id} />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
