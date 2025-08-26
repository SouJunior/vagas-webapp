import React from 'react';
import { ITestimonial } from '../types';

interface TestimonialCardProps {
    testimonial: ITestimonial;
    index?: number;
    total?: number;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({
    testimonial,
    index,
    total,
}) => {
    const { id, image, author, testimony, position } = testimonial;

    const ordinalLabel =
        index && total && index <= total
            ? `Depoimento ${index} de ${total}`
            : undefined;

    return (
        <figure
            className="w-[23.75rem] h-80 p-4 relative bg-white rounded-[1.25rem] shadow-md flex justify-start items-center
                 md:w-[38.3125rem] md:h-[18.75rem] md:p-6"
        >
            <img
                className="w-24 h-24 rounded-full border-2 border-blue-900/60"
                src={image}
                alt={`Foto de perfil de ${author}`}
                loading="lazy"
                onError={(e) =>
                    (e.currentTarget.src = '/images/placeholder.png')
                }
            />
            <div
                className="flex flex-col pl-2 gap-3
                            md:pl-4"
            >
                <blockquote
                    className=" text-blue-900 text-[0.625rem] leading-3 font-canada
                                    md:text-xs md:leading-none 
                                    lg:text-sm lg:leading-tight"
                >
                    {testimony}
                </blockquote>

                <figcaption className="flex flex-col mt-2 text-blue-900 text-xs font-canada font-semibold">
                    <span>{author}</span>
                    <span>{position}</span>
                    {ordinalLabel && (
                        <span className="sr-only">{ordinalLabel}</span>
                    )}
                </figcaption>
            </div>
            <span
                className="w-8 h-10 left-[5.625rem] top-[2.125rem] absolute text-blue-900 text-6xl font-canada
                            md:top-[4rem] md:left-[6.625rem]
                            lg:top-[2.125rem]"
                aria-hidden="true"
            >
                "
            </span>
        </figure>
    );
};
