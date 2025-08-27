import React, { useId } from 'react';
import type { TestimonialHeaderProps } from '../types';

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
        className="text-center font-canada text-xl font-semibold leading-normal text-blue-950 md:text-4xl lg:leading-[3rem]"
      >
        {title}
      </h2>
    </header>
  );
};

export default TestimonialHeader;
