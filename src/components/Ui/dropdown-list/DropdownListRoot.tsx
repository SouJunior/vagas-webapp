import { useState } from 'react';

import { useControllableState } from '@/hooks/useControllableState';

import { DropdownListContext } from './context';
import type { DropdownListRootProps } from './types';

export function DropdownListRoot({
  children,
  value,
  defaultValue = [],
  onValueChange,
}: DropdownListRootProps) {
  const [selectedValues, setSelectedValues] = useControllableState(
    value,
    defaultValue,
    onValueChange,
  );

  const [isOpen, setIsOpen] = useState(false);

  const handleValueChange = (itemValue: string) => {
    const newValues = selectedValues.includes(itemValue)
      ? selectedValues.filter((v) => v !== itemValue)
      : [...selectedValues, itemValue];

    setSelectedValues(newValues);
  };

  return (
    <DropdownListContext.Provider
      value={{
        selectedValues,
        onValueChange: handleValueChange,
        isOpen,
        setIsOpen,
      }}
    >
      <div>{children}</div>
    </DropdownListContext.Provider>
  );
}
