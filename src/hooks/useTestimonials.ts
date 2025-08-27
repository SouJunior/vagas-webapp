import { useMemo } from 'react';
import type { ITestimonial } from '../Mocks/testimonial-data';
import { testimonials } from '../Mocks/testimonial-data';

export interface UseTestimonialsReturn {
  testimonials: ITestimonial[];
  totalCount: number;
  announceMessage: string;
}

export const useTestimonials = (): UseTestimonialsReturn => {
  const filteredTestimonials = useMemo(() => {
    return testimonials.filter(
      (testimonial) => testimonial.id && testimonial.testimony,
    );
  }, []);

  const announceMessage = useMemo(() => {
    const count = filteredTestimonials.length;

    if (count === 0) {
      return 'Nenhum depoimento disponível no momento.';
    } else if (count === 1) {
      return '1 depoimento disponível.';
    } else {
      return `${count} depoimentos disponíveis.`;
    }
  }, [filteredTestimonials.length]);

  return {
    testimonials: filteredTestimonials,
    totalCount: filteredTestimonials.length,
    announceMessage,
  };
};
