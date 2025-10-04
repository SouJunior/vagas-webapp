import { DropdownListContent } from './DropdownListContent';
import { DropdownListItem } from './DropdownListItem';
import { DropdownListPopover } from './DropdownListPopover';
import { DropdownListRoot } from './DropdownListRoot';
import { DropdownListTrigger } from './DropdownListTrigger';

export const DropdownList = Object.assign(DropdownListRoot, {
  Popover: DropdownListPopover,
  Trigger: DropdownListTrigger,
  Content: DropdownListContent,
  Item: DropdownListItem,
});

export type {
  DropdownListContentProps,
  DropdownListItemProps,
  DropdownListOption,
  DropdownListRootProps,
  DropdownListTriggerProps,
} from './types';
