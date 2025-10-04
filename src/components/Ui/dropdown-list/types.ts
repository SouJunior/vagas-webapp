import type { ReactNode } from 'react';
export interface DropdownListOption {
  value: string;
  label: string;
}

export interface DropdownListContextValue {
  selectedValues: string[];
  onValueChange: (value: string) => void;
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

export interface DropdownListRootProps {
  children: ReactNode;
  value?: string[];
  defaultValue?: string[];
  onValueChange?: (value: string[]) => void;
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
}

export interface DropdownListTriggerProps {
  children?: ReactNode;
  label?: string;
  placeholder?: string;
  className?: string;
}

export interface DropdownListContentProps {
  children: ReactNode;
  className?: string;
}

export interface DropdownListItemProps {
  value: string;
  label: string;
  disabled?: boolean;
}
