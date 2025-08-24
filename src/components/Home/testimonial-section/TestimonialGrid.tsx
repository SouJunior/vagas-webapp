import React from 'react';
import { ITestimonial } from '../../../Mocks/testimonial-data';
import TestimonialCard from './TestimonialCard';

interface TestimonialGridProps {
    testimonials: ITestimonial[];
}

const TestimonialGrid: React.FC<TestimonialGridProps> = ({ testimonials }) => {
    if (!testimonials.length) {
        return (
            <div
                className="w-full text-center text-gray-500"
                role="status"
                aria-live="polite"
            >
                Nenhum depoimento disponível no momento.
            </div>
        );
    }

    return (
        <div
            className="w-full max-w-6xl flex flex-wrap gap-8 justify-center"
            role="list"
            aria-label={`${testimonials.length} depoimentos de usuários`}
        >
            {testimonials.map((testimonial, index) => (
                <div key={testimonial.id} role="listitem">
                    <TestimonialCard
                        testimonial={testimonial}
                        index={index + 1}
                        total={testimonials.length}
                    />
                </div>
            ))}
        </div>
    );
};

export default TestimonialGrid;
