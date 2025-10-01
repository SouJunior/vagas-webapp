import React from 'react';
import Check from '../../../assets/imgs/check.svg';
import { LazyImage } from '../lazy-image';

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export const Checkbox: React.FC<CheckboxProps> = ({
  label,
  disabled,
  ...props
}) => {
  return (
    <label
      className={`group flex items-center gap-2 font-canada text-[16px] font-normal ${
        disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'
      }`}
    >
      <input
        type="checkbox"
        disabled={disabled}
        className="peer sr-only"
        {...props}
      />

      <span
        aria-hidden="true"
        className={`flex h-[24px] w-[24px] items-center justify-center rounded border-2 border-gray-400 group-hover:border-[#003986] peer-checked:border-[#003986] peer-checked:bg-[#003986] peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-[#003986] peer-disabled:border-gray-300 peer-disabled:bg-gray-200`}
      >
        <LazyImage
          src={Check}
          alt="Ícone de check"
          className={`h-auto w-[2rem] ${props.checked ? 'block' : 'hidden'}`}
          ariaLabel="Ícone de check"
        />
      </span>

      {label}
    </label>
  );
};
