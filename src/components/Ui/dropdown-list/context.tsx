import { createContext, useContext } from 'react';
import type { DropdownListContextValue } from './types';

export const DropdownListContext = createContext<
  DropdownListContextValue | undefined
>(undefined);

export const useDropdownListContext = () => {
  const context = useContext(DropdownListContext);

  if (!context) {
    throw new Error(
      'DropdownList components must be used within a DropdownList.Root',
    );
  }

  return context;
};
