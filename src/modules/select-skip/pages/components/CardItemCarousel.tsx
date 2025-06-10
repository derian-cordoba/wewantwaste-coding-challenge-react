import type { SkipItem } from "@/modules/select-skip/types/SkipItem";
import { CardItem } from "./CardItem";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/shared/components/ui/carousel";
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
      opts={{
        align: "start",
      }}
    >
      <CarouselContent>
        {items?.map((item: SkipItem) => (
          <CarouselItem
            className="basis-1/4 select-none"
            onClick={() => onItemClick(item)}
          >
            <CardItem item={item} isSelected={selectedItem?.id === item.id} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="text-[#B0B0B0] bg-[#262626] cursor-pointer" />
      <CarouselNext className="text-[#B0B0B0] bg-[#262626] cursor-pointer" />
    </Carousel>
  );
}
