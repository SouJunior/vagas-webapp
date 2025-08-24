import React from 'react';

interface TestimonialHeaderProps {
    title: string;
}

const TestimonialHeader: React.FC<TestimonialHeaderProps> = ({ title }) => (
    <header className="text-center">
        <h2
            id="testimonials-title"
            className="text-blue-950 text-center text-xl md:text-4xl lg:leading-[3rem] font-semibold font-canada leading-normal"
        >
            {title}
        </h2>
    </header>
);

export default TestimonialHeader;
