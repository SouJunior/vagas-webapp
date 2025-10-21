import React, { useEffect, useId, useRef } from 'react';
import { useCarousel } from '../../../hooks/useCarousel';
import { useTestimonials } from '../../../hooks/useTestimonials';
import { ACCESSIBILITY_CLASSES } from '../../../utils/accessibility';
import {
  TestimonialCard,
  TestimonialHeaderDefault as TestimonialHeader,
} from './components';
import type { TestimonialSectionProps } from './types';

const TestimonialSection: React.FC<TestimonialSectionProps> = ({
  testimonials: externalTestimonials,
  className = '',
}) => {
  const sectionId = useId();
  const headerId = `testimonials-title-${sectionId}`;
  const dotButtonsRefs = useRef<(HTMLButtonElement | null)[]>([]);

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

  const { emblaRef, selectedIndex, scrollTo, isPlaying } = useCarousel({
    autoplayDelay: 5000,
    stopOnInteraction: true,
    emblaOptions,
  });

  const handleCarouselKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Home') {
      e.preventDefault();
      scrollToWithFocus(0);
    } else if (e.key === 'End') {
      e.preventDefault();
      scrollToWithFocus(testimonials.length - 1);
    } else if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
      // Prevent default behavior for up/down arrows to avoid unwanted navigation
      e.preventDefault();
    }
  };

  const scrollToWithFocus = (index: number) => {
    scrollTo(index);
    setTimeout(() => {
      dotButtonsRefs.current[index]?.focus();
    }, 50);
  };

  useEffect(() => {
    dotButtonsRefs.current = dotButtonsRefs.current.slice(
      0,
      testimonials.length,
    );
  }, [testimonials.length]);

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
            aria-keyshortcuts="Home End"
            onKeyDown={handleCarouselKeyDown}
          >
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex">
                {testimonials.map((testimonial, index) => (
                  <div
                    key={testimonial.id}
                    className="flex w-full justify-center px-3 md:px-3 lg:px-4"
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
                    ref={(el) => {
                      dotButtonsRefs.current[index] = el;
                    }}
                    onClick={() => scrollToWithFocus(index)}
                    onFocus={() => {
                      if (index !== selectedIndex) {
                        scrollTo(index);
                      }
                    }}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        scrollToWithFocus(index);
                      } else if (e.key === 'ArrowLeft') {
                        e.preventDefault();
                        const prevIndex =
                          index > 0 ? index - 1 : testimonials.length - 1;
                        scrollToWithFocus(prevIndex);
                      } else if (e.key === 'ArrowRight') {
                        e.preventDefault();
                        const nextIndex =
                          index < testimonials.length - 1 ? index + 1 : 0;
                        scrollToWithFocus(nextIndex);
                      } else if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
                        // Prevent default behavior for up/down arrows to avoid unwanted navigation
                        e.preventDefault();
                      }
                    }}
                    className={`h-4 w-4 cursor-pointer rounded-full transition-all duration-300 hover:scale-110 ${ACCESSIBILITY_CLASSES.focusRing} ${
                      index === selectedIndex
                        ? 'scale-110 bg-blue-600 shadow-lg'
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
              Use as bolinhas abaixo para navegar pelos depoimentos. Você pode
              usar Tab para navegar entre as bolinhas e as teclas de seta (← →)
              para navegar quando uma bolinha estiver focada. Use Home/End para
              ir ao primeiro/último depoimento. O carrossel avança
              automaticamente e pausa quando você interage com ele.
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default TestimonialSection;
