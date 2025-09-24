import { cva, cx, type VariantProps } from 'class-variance-authority';
import type React from 'react';

const inputVariants = cva(
  'border-gray-background w-full rounded-[4px] border px-4 py-3 font-canada text-base outline-none focus:border-blue-light300 focus:text-blue-800 focus:placeholder:text-blue-800',
  {
    variants: {
      intent: {
        success: 'border-green-600 text-green-800 placeholder:text-green-800',
        error: 'border-red-600 text-red-800 placeholder:text-red-800',
      },
    },
  },
);

export type InputVariantProps = VariantProps<typeof inputVariants>;

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'className'>,
    VariantProps<typeof inputVariants> {
  className?: string;
  error?: string;
  success?: boolean;
}

export const Input: React.FC<InputProps> = ({
  className,
  intent,
  placeholder,
  error,
  success,
  ...props
}) => {
  const computedIntent = error ? 'error' : success ? 'success' : intent;
  return (
    <>
      <input
        className={inputVariants({ intent: computedIntent, className })}
        placeholder={placeholder}
        {...props}
      />
      {error && (
        <p className="mt-1 font-canada text-xs text-red-800">{error}</p>
      )}
    </>
  );
};
