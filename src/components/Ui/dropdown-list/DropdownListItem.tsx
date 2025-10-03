import { Checkbox } from '@/components/Ui/checkbox';
import { useDropdownListContext } from './context';
import type { DropdownListItemProps } from './types';

export function DropdownListItem({
  value,
  label,
  disabled = false,
}: DropdownListItemProps) {
  const { selectedValues, onValueChange } = useDropdownListContext();

  const isChecked = selectedValues.includes(value);

  const handleChange = () => {
    if (!disabled) {
      onValueChange(value);
    }
  };

  return (
    <div className="flex items-center">
      <Checkbox
        label={label}
        checked={isChecked}
        onChange={handleChange}
        disabled={disabled}
        value={value}
      />
    </div>
  );
}
