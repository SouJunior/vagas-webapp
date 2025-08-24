import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ITestimonial } from '../../../Mocks/testimonial-data';
import { useCarousel } from '../../../hooks/useCarousel';
import TestimonialCard from './TestimonialCard';

interface TestimonialCarouselProps {
    testimonials: ITestimonial[];
}

const TestimonialCarousel: React.FC<TestimonialCarouselProps> = ({
    testimonials,
}) => {
    const options = React.useMemo(
        () => ({
            align: 'start' as const,
            loop: testimonials.length > 1,
            slidesToScroll: 1,
            containScroll: 'trimSnaps' as const,
            dragFree: false,
        }),
        [testimonials.length],
    );

    const [emblaRef, emblaApi] = useEmblaCarousel(options);

    const { selectedIndex, scrollTo, isPlaying } = useCarousel(emblaApi, {
        autoplayDelay: 5000,
        stopOnInteraction: true,
    });

    const handleKeyDown = React.useCallback(
        (e: React.KeyboardEvent<HTMLDivElement>) => {
            if (!emblaApi) return;
            if (e.key === 'ArrowLeft') {
                e.preventDefault();
                emblaApi.scrollPrev();
            } else if (e.key === 'ArrowRight') {
                e.preventDefault();
                emblaApi.scrollNext();
            }
        },
        [emblaApi],
    );

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
            className="w-full max-w-none relative"
            role="region"
            aria-roledescription="carrossel"
            aria-label="Carrossel de depoimentos"
            tabIndex={0}
            aria-keyshortcuts="ArrowLeft ArrowRight"
            onKeyDown={handleKeyDown}
        >
            <div className="overflow-hidden" ref={emblaRef}>
                <div className="flex">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={testimonial.id}
                            className="flex-shrink-0 flex justify-center px-3 md:px-3 lg:px-4"
                            role="group"
                            aria-roledescription="slide"
                            aria-label={`${index + 1} de ${
                                testimonials.length
                            }`}
                        >
                            <TestimonialCard
                                testimonial={testimonial}
                                index={index + 1}
                                total={testimonials.length}
                            />
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex justify-center items-center mt-8">
                <div
                    className="flex gap-3"
                    role="group"
                    aria-label="Navegação por depoimentos"
                >
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => scrollTo(index)}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter' || e.key === ' ') {
                                    e.preventDefault();
                                    scrollTo(index);
                                }
                            }}
                            className={`w-4 h-4 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 hover:scale-110 ${
                                index === selectedIndex
                                    ? 'bg-blue-600 scale-110'
                                    : 'bg-gray-300 hover:bg-gray-400'
                            }`}
                            {...(index === selectedIndex && {
                                'aria-current': 'true',
                            })}
                            aria-label={`Ir para depoimento ${index + 1} de ${
                                testimonials.length
                            }`}
                            type="button"
                        />
                    ))}
                </div>
            </div>

            <div className="sr-only" aria-live="polite" aria-atomic="true">
                Depoimento {selectedIndex + 1} de {testimonials.length}
                {isPlaying
                    ? ' - Reprodução automática ativada'
                    : ' - Reprodução automática pausada'}
            </div>

            <div className="sr-only">
                Use as bolinhas abaixo ou as teclas de seta do teclado para
                navegar pelos depoimentos. O carrossel avança automaticamente e
                pausa quando você interage com ele.
            </div>
        </div>
    );
};

export default TestimonialCarousel;
