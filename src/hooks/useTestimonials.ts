import { useMemo, useEffect, useState } from 'react';
import { ITestimonial, testimonials } from '../Mocks/testimonial-data';

export interface UseTestimonialsReturn {
    testimonials: ITestimonial[];
    isLoading: boolean;
    error: string | null;
    totalCount: number;
    announceMessage: string;
}

export const useTestimonials = (): UseTestimonialsReturn => {
    const [isLoading, setIsLoading] = useState(true);
    const [announceMessage, setAnnounceMessage] = useState('');

    const filteredTestimonials = useMemo(() => {
        return testimonials.filter(
            (testimonial) => testimonial.id && testimonial.testimony,
        );
    }, []);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
            const count = filteredTestimonials.length;
            setAnnounceMessage(
                count > 0
                    ? `${count} depoimento${count > 1 ? 's' : ''} carregado${
                          count > 1 ? 's' : ''
                      } com sucesso.`
                    : 'Nenhum depoimento disponível no momento.',
            );
        }, 500);

        return () => clearTimeout(timer);
    }, [filteredTestimonials.length]);

    return {
        testimonials: filteredTestimonials,
        isLoading,
        error: null,
        totalCount: filteredTestimonials.length,
        announceMessage,
    };
};
