import React from 'react';
import type { TestimonialCardProps } from '../types';

export const TestimonialCard: React.FC<TestimonialCardProps> = ({
  testimonial,
  index,
  total,
  className,
}) => {
  const { image, author, testimony, position } = testimonial;

  const ordinalLabel =
    index && total && index <= total
      ? `Depoimento ${index} de ${total}`
      : undefined;

  return (
    <figure
      className={`relative flex h-80 w-[23.75rem] items-center justify-start rounded-[1.25rem] bg-white p-4 shadow-md md:h-[18.75rem] md:w-[38.3125rem] md:p-6 ${className || ''}`}
    >
      <img
        className="h-24 w-24 rounded-full border-2 border-blue-900/60"
        src={image}
        alt={`Foto de perfil de ${author}`}
        loading="lazy"
        onError={(e) => {
          if (e.currentTarget.src !== '/images/placeholder.png') {
            e.currentTarget.onerror = null;
            e.currentTarget.src = '/images/placeholder.png';
          }
        }}
      />
      <div className="flex flex-col gap-3 pl-2 md:pl-4">
        <blockquote className="font-canada text-[0.625rem] leading-3 text-blue-900 md:text-xs md:leading-none lg:text-sm lg:leading-tight">
          {testimony}
        </blockquote>

        <figcaption className="mt-2 flex flex-col font-canada text-xs font-semibold text-blue-900">
          <span>{author}</span>
          <span>{position}</span>
          {ordinalLabel && <span className="sr-only">{ordinalLabel}</span>}
        </figcaption>
      </div>
      <span
        className="absolute left-[5.625rem] top-[2.125rem] h-10 w-8 font-canada text-6xl text-blue-900 md:left-[6.625rem] md:top-[4rem] lg:top-[2.125rem]"
        aria-hidden="true"
      >
        "
      </span>
    </figure>
  );
};
