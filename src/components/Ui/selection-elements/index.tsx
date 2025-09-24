import React from 'react';
import Check from '../../../assets/imgs/check.svg';
import { LazyImage } from '../lazy-image';

type Option = {
  label: string;
  value: string;
  disabled?: boolean;
};

type ElementsGroupProps = {
  name: string;
  type: 'radio' | 'checkbox';
  options: Option[];
  selectedValues: string[];
  onChange: (values: string[]) => void;
};

export function ElementsGroup({
  name,
  options,
  type,
  selectedValues,
  onChange,
}: ElementsGroupProps) {
  const handleChange = (value: string, disabled?: boolean) => {
    if (disabled) return;

    if (type === 'radio') {
      onChange([value]);
    } else {
      if (selectedValues.includes(value)) {
        onChange(selectedValues.filter((v) => v !== value));
      } else {
        onChange([...selectedValues, value]);
      }
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
            type={type}
            name={name}
            value={option.value}
            checked={selectedValues.includes(option.value)}
            onChange={() => handleChange(option.value, option.disabled)}
            disabled={option.disabled}
            className="peer hidden"
          />

          {type === 'radio' && (
            <span
              className={`relative h-[24px] w-[24px] rounded-full border-2 border-[#ACACAC] after:absolute after:inset-[0.1rem] after:rounded-full after:bg-[#003986] after:opacity-0 after:content-[''] peer-checked:border-[#003986] peer-checked:after:opacity-100 peer-hover:border-[#003986] peer-disabled:border-gray-300 peer-disabled:bg-gray-200`}
            />
          )}

          {type === 'checkbox' && (
            <span
              className={`flex h-[24px] w-[24px] items-center justify-center rounded border-2 border-gray-400 peer-checked:border-[#003986] peer-checked:bg-[#003986] peer-hover:border-[#003986] peer-disabled:border-gray-300 peer-disabled:bg-gray-200`}
            >
              <LazyImage
                src={Check}
                alt="Ícone de check"
                className={`h-auto w-[2rem] ${
                  selectedValues.includes(option.value) ? 'block' : 'hidden'
                }`}
                ariaLabel="Ícone de check"
              />
            </span>
          )}

          {option.label}
        </label>
      ))}
    </div>
  );
}
