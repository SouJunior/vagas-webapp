import { chunkArray } from '@utils/chunkArray';

import type { ListOfPartnersProps } from './types';

export const ListOfPartners: React.FC<ListOfPartnersProps> = ({ logos }) => {
  const group = chunkArray(logos, 5);
  return (
    <div className="flex overflow-hidden">
      {group.map((group, idx) => (
        <div
          key={idx}
          className="w-full flex-shrink-0 transition-opacity duration-500"
        >
          <div className="flex h-full w-full items-center justify-between md:justify-evenly">
            {group.map((logo) => (
              <div key={logo.id}>
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="mx-auto h-24 w-24 object-contain md:h-24 md:w-24"
                />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
