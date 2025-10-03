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
  children: React.ReactNode;
  value?: string[];
  defaultValue?: string[];
  onValueChange?: (value: string[]) => void;
}

export interface DropdownListTriggerProps {
  children?: React.ReactNode;
  label?: string;
  placeholder?: string;
  className?: string;
}

export interface DropdownListContentProps {
  children: React.ReactNode;
  className?: string;
}

export interface DropdownListItemProps {
  value: string;
  label: string;
  disabled?: boolean;
}
