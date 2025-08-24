import React from 'react';
import { ITestimonial } from '../../../Mocks/testimonial-data';

interface TestimonialCardProps {
    testimonial: ITestimonial;
    index?: number;
    total?: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
    testimonial,
    index,
    total,
}) => {
    const { image, author, testimony, position } = testimonial;

    const ordinalLabel =
        index !== undefined &&
        total !== undefined &&
        Number.isInteger(index) &&
        Number.isInteger(total) &&
        total > 0 &&
        index >= 0 &&
        index < total
            ? `Depoimento ${index + 1} de ${total}`
            : undefined;

    return (
        <article
            className="w-[23.75rem] h-80 p-4 relative bg-white rounded-[1.25rem] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.10)] flex justify-start items-center
                        md:w-[38.3125rem] md:gap-6 md:h-[18.75rem] md:p-6
                        lg:gap-8"
            aria-labelledby={`testimonial-author-${testimonial.id}`}
            aria-describedby={`testimonial-content-${testimonial.id}${
                ordinalLabel ? ` testimonial-ordinal-${testimonial.id}` : ''
            }`}
            role="article"
        >
            <TestimonialAvatar
                image={image}
                author={author}
                testimonialId={testimonial.id}
            />
            <TestimonialContent
                testimony={testimony}
                author={author}
                position={position}
                testimonialId={testimonial.id}
            />
            <TestimonialQuote />
            {ordinalLabel && (
                <span
                    id={`testimonial-ordinal-${testimonial.id}`}
                    className="sr-only"
                >
                    {ordinalLabel}
                </span>
            )}
        </article>
    );
};

const TestimonialAvatar: React.FC<{
    image: string;
    author: string;
    testimonialId: number;
}> = ({ image, author, testimonialId }) => (
    <img
        className="w-24 h-24 rounded-full border-2 border-blue-900/60"
        src={image}
        alt={`Foto de perfil de ${author}`}
        loading="lazy"
        aria-describedby={`testimonial-author-${testimonialId}`}
    />
);

const TestimonialContent: React.FC<{
    testimony: string;
    author: string;
    position: string;
    testimonialId: number;
}> = ({ testimony, author, position, testimonialId }) => (
    <div className=" w-full pl-2 inline-flex flex-col justify-start items-start gap-3">
        <blockquote
            id={`testimonial-content-${testimonialId}`}
            className="justify-start text-blue-900 text-[0.625rem] font-normal font-canada leading-3 
                       md:leading-tight"
        >
            {testimony}
        </blockquote>
        <TestimonialAuthorInfo
            author={author}
            position={position}
            testimonialId={testimonialId}
        />
    </div>
);
const TestimonialAuthorInfo: React.FC<{
    author: string;
    position: string;
    testimonialId: number;
}> = ({ author, position, testimonialId }) => (
    <footer className="flex flex-col justify-start items-start">
        <cite
            id={`testimonial-author-${testimonialId}`}
            className="h-4 justify-center text-blue-900 text-[0.625rem] font-semibold font-canada leading-3"
        >
            {author}
        </cite>
        <div className="h-4 justify-center text-blue-900 text-[0.625rem] font-semibold font-canada leading-3">
            {position}
        </div>
    </footer>
);

const TestimonialQuote: React.FC = () => (
    <div
        className="w-8 h-10 left-[5.625rem] top-[2.125rem] absolute justify-start text-blue-900 text-6xl font-semibold font-canada"
        aria-hidden="true"
        role="presentation"
    >
        "
    </div>
);

export default TestimonialCard;
