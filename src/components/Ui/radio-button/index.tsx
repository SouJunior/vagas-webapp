import { useControllableState } from '@radix-ui/react-use-controllable-state';

type Option = {
  label: string;
  value: string;
  disabled?: boolean;
};

type RadioGroupProps = {
  name: string;
  options: Option[];
  selectedValue?: string;
  defaultValue?: string;
  onChange?: (value: string | undefined) => void;
};

export function RadioGroup({
  name,
  options,
  selectedValue: controlledValue,
  defaultValue,
  onChange,
}: RadioGroupProps) {
  const [value, setValue] = useControllableState<string | undefined>({
    prop: controlledValue,
    defaultProp: defaultValue,
    onChange,
  });

  return (
    <div className="flex flex-col gap-2 font-canada text-[16px] font-normal">
      {options.map((option) => (
        <label
          key={option.value}
          className={`flex items-center gap-2 ${
            option.disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'
          }`}
        >
          <input
            type="radio"
            name={name}
            value={option.value}
            checked={value === option.value}
            onChange={() => !option.disabled && setValue(option.value)}
            disabled={option.disabled}
            className="peer hidden"
          />

          <span
            className={`relative h-[24px] w-[24px] rounded-full border-2 border-[#ACACAC] after:absolute after:inset-[0.1rem] after:rounded-full after:bg-[#003986] after:opacity-0 after:content-[''] peer-checked:border-[#003986] peer-checked:after:opacity-100 peer-hover:border-[#003986] peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-[#003986] peer-disabled:border-gray-300 peer-disabled:bg-gray-200`}
          />

          {option.label}
        </label>
      ))}
    </div>
  );
}
