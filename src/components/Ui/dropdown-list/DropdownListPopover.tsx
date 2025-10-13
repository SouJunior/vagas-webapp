import { Popover } from '@/components/ui/popover';
import React from 'react';
import { useDropdownListContext } from './context';

interface DropdownListPopoverProps {
  children: React.ReactNode;
}

export function DropdownListPopover({ children }: DropdownListPopoverProps) {
  const { isOpen, setIsOpen } = useDropdownListContext();

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      {children}
    </Popover>
  );
}
