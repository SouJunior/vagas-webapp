import { useCallback, useState } from 'react';

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

  const handleValueChange = useCallback(
    (itemValue: string) => {
      const newValues = selectedValues.includes(itemValue)
        ? selectedValues.filter((v: string) => v !== itemValue)
        : [...selectedValues, itemValue];

      setSelectedValues(newValues);
    },
    [selectedValues, setSelectedValues],
  );

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
