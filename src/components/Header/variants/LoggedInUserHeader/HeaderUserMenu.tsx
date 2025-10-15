import { DotsThreeVertical, SignOut } from '@phosphor-icons/react';
import { LazyImage } from '../../../Ui/lazy-image';
import { Popover, PopoverContent, PopoverTrigger } from '../../../ui/popover';
import type { HeaderUserMenuProps } from '../../types';

export const HeaderUserMenu = ({
  userName,
  email,
  profileImage,
  onLogout,
}: HeaderUserMenuProps) => {
  return (
    <div className="flex h-16 w-full min-w-96 items-center justify-end gap-4 py-6 pr-8">
      <div className="relative h-10 w-10 overflow-hidden rounded-full">
        <LazyImage
          src={profileImage || '/assets/profile-image.svg'}
          alt="Avatar do usuário"
          className="h-full w-full object-cover"
          placeholderSrc="/assets/profile-image.svg"
        />
      </div>
      <div className="flex flex-col items-start">
        <div className="font-canada text-xl font-medium leading-normal text-blue-950">
          {userName}
        </div>
        <div className="font-canada text-sm font-normal leading-none text-blue-950">
          {email}
        </div>
      </div>
      <Popover>
        <PopoverTrigger asChild>
          <button
            aria-label="Opções do usuário"
            className="h-8 w-8 cursor-pointer rounded-md border-none bg-transparent p-0 text-blue-950 transition-colors hover:bg-gray-100"
          >
            <DotsThreeVertical size={32} weight="bold" />
          </button>
        </PopoverTrigger>
        <PopoverContent
          align="end"
          className="z-[999] w-48 rounded-md border border-gray-300 bg-white p-2 shadow-lg"
          sideOffset={5}
        >
          <button
            onClick={onLogout}
            className="flex w-full items-center gap-3 rounded-md px-3 py-2 text-left text-sm text-gray-900 transition-colors hover:bg-gray-100"
          >
            <SignOut size={16} />
            Logout
          </button>
        </PopoverContent>
      </Popover>
    </div>
  );
};
