import { Slider } from "@/shared/components/ui/slider";

export type RangeSectionProps = {
  title: string;
  min: number;
  max: number;
  symbol?: string;
  currentValue: number[];
  onChange: (value: number | number[]) => Promise<void> | void;
  step?: number;
};

export function RangeSection({
  title,
  min,
  max,
  symbol,
  currentValue,
  onChange,
  step = 1,
}: RangeSectionProps): React.ReactElement {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(event.target.value);
    onChange(value);
  };

  return (
    <article className="flex flex-col gap-y-3">
      <p className="text-white text-lg">{title}</p>
      <Slider
        value={currentValue}
        min={min}
        max={max}
        step={step}
        className="w-full bg-[var(--primary-color)] min-w-[250px] rounded-full"
        onChange={handleChange}
      />
      <div className="flex justify-between w-full text-white">
        <p>
          {symbol}
          {min}
        </p>
        <p>
          {symbol}
          {max}
        </p>
      </div>
    </article>
  );
}
