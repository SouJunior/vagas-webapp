import React, { useId } from 'react';
import { TestimonialHeaderProps } from '../types';

export const TestimonialHeader: React.FC<TestimonialHeaderProps> = ({
    title,
    className = '',
    id,
}) => {
    const generatedId = useId();
    const headerId = id || `testimonials-title-${generatedId}`;

    return (
        <header className={`text-center ${className}`}>
            <h2
                id={headerId}
                className="text-blue-950 text-center text-xl md:text-4xl lg:leading-[3rem] font-semibold font-canada leading-normal"
            >
                {title}
            </h2>
        </header>
    );
};

export default TestimonialHeader;
