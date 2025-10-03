import { PopoverContent } from '@/components/ui/popover';
import type { DropdownListContentProps } from './types';

export function DropdownListContent({
  children,
  className = '',
}: DropdownListContentProps) {
  return (
    <PopoverContent className={`w-[300px] p-4 ${className}`} align="start">
      <div className="flex flex-col gap-2">{children}</div>
    </PopoverContent>
  );
}
