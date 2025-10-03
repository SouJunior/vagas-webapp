import { PopoverTrigger } from '@/components/ui/popover';
import { useDropdownListContext } from './context';
import type { DropdownListTriggerProps } from './types';

export function DropdownListTrigger({
  children,
  label,
  placeholder = 'Selecione opções',
  className = '',
}: DropdownListTriggerProps) {
  const { selectedValues, setIsOpen } = useDropdownListContext();

  const displayText =
    selectedValues.length > 0
      ? `${selectedValues.length} selecionado${selectedValues.length > 1 ? 's' : ''}`
      : placeholder;

  return (
    <PopoverTrigger asChild>
      <button
        type="button"
        aria-expanded={false} // Update to use isOpen from context if available
        onClick={() => setIsOpen(true)}
        className={`flex w-full items-center justify-between rounded-md border border-gray-300 bg-white px-4 py-2 text-left text-sm hover:border-[#003986] focus:outline-none focus:ring-2 focus:ring-[#003986] focus:ring-offset-2 ${className}`}
      >
        {children || (
          <div className="flex flex-col gap-1">
            {label && (
              <span className="text-xs font-medium text-gray-600">{label}</span>
            )}
            <span className="text-sm font-normal text-gray-900">
              {displayText}
            </span>
          </div>
        )}
        <svg
          className="ml-2 h-4 w-4 text-gray-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
    </PopoverTrigger>
  );
}
