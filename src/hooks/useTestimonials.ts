import { useMemo } from 'react';
import { ITestimonial, testimonials } from '../Mocks/testimonial-data';

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
        return count > 0
            ? `${count} depoimento${count > 1 ? 's' : ''} disponível${
                  count > 1 ? 'eis' : ''
              }.`
            : 'Nenhum depoimento disponível no momento.';
    }, [filteredTestimonials.length]);

    return {
        testimonials: filteredTestimonials,
        totalCount: filteredTestimonials.length,
        announceMessage,
    };
};
