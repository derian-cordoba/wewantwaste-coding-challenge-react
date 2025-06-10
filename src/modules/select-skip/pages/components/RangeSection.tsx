import { Slider } from "@/shared/components/ui/slider";

export type RangeSectionProps = {
  title: string;
  min: number;
  max: number;
  symbol?: string;
  currentValue: number[];
  onChange: (value: number) => Promise<void> | void;
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
  const handleChange = (currentValue: number[]) => {
    // We need to ensure that the onChange function receives a single value
    const [value] = currentValue;
    onChange(value);
  };

  return (
    <article className="flex flex-col gap-y-3">
      <p className="text-white text-lg">{title}</p>
      <Slider
        defaultValue={currentValue}
        onValueChange={handleChange}
        min={min}
        max={max}
        step={step}
        className="w-full bg-[var(--primary-color)] min-w-[250px] rounded-full"
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
