import React, { useId } from 'react';
import { useTestimonials } from '../../../hooks/useTestimonials';
import { useCarousel } from '../../../hooks/useCarousel';
import { ACCESSIBILITY_CLASSES } from '../../../utils/accessibility';
import {
  TestimonialHeaderDefault as TestimonialHeader,
  TestimonialCard,
} from './components';
import type { TestimonialSectionProps } from './types';

const TestimonialSection: React.FC<TestimonialSectionProps> = ({
  testimonials: externalTestimonials,
  className = '',
}) => {
  const sectionId = useId();
  const headerId = `testimonials-title-${sectionId}`;

  const { testimonials: hookTestimonials, announceMessage } = useTestimonials();

  const testimonials = externalTestimonials || hookTestimonials;

  const emblaOptions = React.useMemo(
    () => ({
      align: 'start' as const,
      loop: testimonials.length > 1,
      slidesToScroll: 1,
      containScroll: 'trimSnaps' as const,
      dragFree: false,
    }),
    [testimonials.length],
  );

  const {
    emblaRef,
    emblaApi,
    selectedIndex,
    scrollTo,
    isPlaying,
    handleKeyDown,
  } = useCarousel({
    autoplayDelay: 5000,
    stopOnInteraction: true,
    emblaOptions,
  });

  return (
    <>
      <a
        href={`#${headerId}`}
        className={`${ACCESSIBILITY_CLASSES.srOnly} ${ACCESSIBILITY_CLASSES.focusVisible} ${ACCESSIBILITY_CLASSES.skipLink}`}
        tabIndex={0}
      >
        Pular para depoimentos
      </a>

      <section
        id="testimonials-section"
        className={`flex flex-col items-center justify-start gap-20 bg-blue-500/5 px-4 py-10 ${className}`}
        aria-labelledby={headerId}
        role="region"
      >
        <TestimonialHeader title="O que dizem sobre nós" id={headerId} />

        {announceMessage && (
          <div className="sr-only" aria-live="polite" aria-atomic="true">
            {announceMessage}
          </div>
        )}

        {!testimonials.length ? (
          <div
            className="w-full text-center text-gray-500"
            role="status"
            aria-live="polite"
          >
            Nenhum depoimento disponível no momento.
          </div>
        ) : (
          <div
            className="relative w-full max-w-none"
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
                    className="flex w-full shrink-0 justify-center px-3 md:px-3 lg:px-4"
                    role="group"
                    aria-roledescription="slide"
                    aria-label={`${index + 1} de ${testimonials.length}`}
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

            <div className="mt-8 flex items-center justify-center">
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
                    className={`h-4 w-4 rounded-full transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                      index === selectedIndex
                        ? 'scale-110 bg-blue-600'
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                    {...(index === selectedIndex && {
                      'aria-current': 'true',
                    })}
                    aria-label={`Ir para depoimento ${
                      index + 1
                    } de ${testimonials.length}`}
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
        )}
      </section>
    </>
  );
};

export default TestimonialSection;
