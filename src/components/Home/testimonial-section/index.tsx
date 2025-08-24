import React from 'react';
import { useTestimonials } from '../../../hooks/useTestimonials';
import TestimonialHeader from './TestimonialHeader';
import TestimonialCarousel from './TestimonialCarousel';
import TestimonialGrid from './TestimonialGrid';
import SkipToTestimonials from './SkipToTestimonials';
import { TestimonialIDs } from './testimonial-ids';

const TestimonialSection: React.FC = () => {
    const { testimonials, isLoading, error, announceMessage } =
        useTestimonials();

    if (error) {
        if (process.env.NODE_ENV === 'development') {
            console.error('Error loading testimonials:', error);
        }

        return (
            <section
                id={TestimonialIDs.section}
                className="min-h-[37.5rem] px-4 py-10 bg-blue-500/5 flex flex-col justify-center items-center"
                aria-labelledby={TestimonialIDs.title}
                role="region"
            >
                <h2 id={TestimonialIDs.title} className="sr-only">
                    Seção de Depoimentos
                </h2>
                <div className="text-center text-red-500" role="alert">
                    Não foi possível carregar os depoimentos.
                </div>
            </section>
        );
    }

    return (
        <>
            <SkipToTestimonials />
            <section
                id={TestimonialIDs.section}
                className="min-h-[37.5rem] px-4 py-10 bg-blue-500/5 flex flex-col justify-start items-center gap-20"
                aria-labelledby={TestimonialIDs.title}
                role="region"
            >
                <TestimonialHeader title="O que dizem sobre nós" />

                {announceMessage && (
                    <div
                        className="sr-only"
                        aria-live="polite"
                        aria-atomic="true"
                    >
                        {announceMessage}
                    </div>
                )}

                {isLoading ? (
                    <div
                        className="text-center text-gray-500"
                        role="status"
                        aria-live="polite"
                        aria-label="Carregando depoimentos"
                    >
                        <span className="sr-only">Carregando, aguarde...</span>
                        Carregando depoimentos...
                    </div>
                ) : (
                    <TestimonialCarousel testimonials={testimonials} />
                )}
            </section>
        </>
    );
};

export default TestimonialSection;
