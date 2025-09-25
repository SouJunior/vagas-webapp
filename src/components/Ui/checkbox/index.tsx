import { useControllableState } from '@radix-ui/react-use-controllable-state';
import Check from '../../../assets/imgs/check.svg';
import { LazyImage } from '../lazy-image';

type Option = {
  label: string;
  value: string;
  disabled?: boolean;
};

type CheckboxGroupProps = {
  name: string;
  options: Option[];
  selectedValues?: string[];
  defaultValues?: string[];
  onChange?: (values: string[]) => void;
};

export function CheckboxGroup({
  name,
  options,
  selectedValues: selectedValuesProp,
  defaultValues = [],
  onChange,
}: CheckboxGroupProps) {
  const [selectedValues, setSelectedValues] = useControllableState<string[]>({
    prop: selectedValuesProp,
    defaultProp: defaultValues,
    onChange,
  });

  const handleChange = (value: string, disabled?: boolean) => {
    if (disabled) return;

    if (selectedValues?.includes(value)) {
      setSelectedValues(selectedValues.filter((v) => v !== value));
    } else {
      setSelectedValues([...(selectedValues ?? []), value]);
    }
  };

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
            type="checkbox"
            name={name}
            value={option.value}
            checked={selectedValues?.includes(option.value) ?? false}
            onChange={() => handleChange(option.value, option.disabled)}
            disabled={option.disabled}
            className="peer sr-only"
          />

          <span
            className={`flex h-[24px] w-[24px] items-center justify-center rounded border-2 border-gray-400 peer-checked:border-[#003986] peer-checked:bg-[#003986] peer-hover:border-[#003986] peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-[#003986] peer-disabled:border-gray-300 peer-disabled:bg-gray-200`}
          >
            <LazyImage
              src={Check}
              alt="Ícone de check"
              className={`h-auto w-[2rem] ${
                selectedValues?.includes(option.value) ? 'block' : 'hidden'
              }`}
              ariaLabel="Ícone de check"
            />
          </span>

          {option.label}
        </label>
      ))}
    </div>
  );
}
