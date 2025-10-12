import type React from 'react';

import { cx } from 'class-variance-authority';
export interface LabelProps
  extends React.LabelHTMLAttributes<HTMLLabelElement> {
  children: React.ReactNode;
  required?: boolean;
  className?: string;
}

export function Label({ children, required, className, ...props }: LabelProps) {
  return (
    <label
      {...props}
      className={
        (cx('font-canada text-base font-medium capitalize text-[#292929]'),
        className)
      }
    >
      {children}
      {required && (
        <span aria-hidden="true" className="ml-1 text-red-600">
          *
        </span>
      )}
    </label>
  );
}
