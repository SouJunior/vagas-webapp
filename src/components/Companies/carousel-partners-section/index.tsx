import { useCarousel } from '@hooks/useCarousel';
import { ACCESSIBILITY_CLASSES } from '@utils/accessibility';

import { useBreakpoint } from '@hooks/useBreakpoint';
import { chunkArray } from '@utils/chunkArray';
import React, { useMemo } from 'react';
import { ListOfPartners } from './list-of-partners';
import { DEFAULT_PARTNERS } from './logos';
import type { CarouselPartnerCompaniesProps } from './types';

export const CarouselPartnerCompaniesSection: React.FC<
  CarouselPartnerCompaniesProps
> = ({ logos = DEFAULT_PARTNERS, autoplayDelay = 5000 }) => {
  const device = useBreakpoint();
  const chunkSize = device === 'desktop' ? 5 : 3;
  const getGroupedLogos = useMemo(() => {
    return chunkArray(logos, chunkSize);
  }, [logos, chunkSize]);

  const emblaOptions = useMemo(
    () => ({
      loop: true,
      slidesToScroll: 1,
      dragFree: false,
    }),
    [],
  );

  const { emblaRef, selectedIndex, scrollPrev, scrollNext, scrollTo } =
    useCarousel({
      emblaOptions,
      autoplayDelay,
      stopOnInteraction: true,
    });

  return (
    <section className="bg-gray-50 py-10">
      <div className="container mx-auto md:px-4">
        <h2 className="mb-14 text-center text-2xl font-bold">
          Empresas parceiras
        </h2>

        {/* Carrossel */}
        <div className="relative mb-14 flex flex-col items-center">
          <button
            type="button"
            onClick={scrollPrev}
            onFocus={scrollPrev}
            aria-label="Slide anterior"
            aria-hidden="false"
            className={`absolute left-5 top-1/2 z-50 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg md:left-0 ${ACCESSIBILITY_CLASSES.focusRing}`}
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'ArrowLeft') {
                e.preventDefault();
                scrollPrev();
              }
              if (e.key === 'ArrowRight') {
                e.preventDefault();
                document.getElementById('carousel-next-btn')?.focus();
              }
            }}
            id="carousel-prev-btn"
          >
            {'<'}
          </button>

          <div
            ref={emblaRef}
            className="w-full overflow-hidden"
            aria-label="Carrossel de empresas parceiras"
            role="region"
            aria-roledescription="carrossel"
            aria-keyshortcuts="ArrowLeft ArrowRight"
          >
            <div className="flex">
              {getGroupedLogos.map((group, index) => (
                <div
                  key={index}
                  className="min-w-full transition-opacity duration-300 md:flex-shrink-0 md:px-12 lg:px-28"
                  style={{
                    opacity: selectedIndex === index ? 1 : 0.5,
                  }}
                >
                  <div className="w-full lg:px-4">
                    <ListOfPartners logos={group} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            type="button"
            onClick={scrollNext}
            onFocus={scrollNext}
            aria-label="Próximo slide"
            aria-hidden="false"
            className={`absolute right-5 top-1/2 z-50 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg md:right-0 ${ACCESSIBILITY_CLASSES.focusRing}`}
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'ArrowRight') {
                e.preventDefault();
                scrollNext();
              }
              if (e.key === 'ArrowLeft') {
                e.preventDefault();
                document.getElementById('carousel-prev-btn')?.focus();
              }
            }}
            id="carousel-next-btn"
          >
            {'>'}
          </button>
        </div>

        {/* Botão de Cadastro */}
        <div className="mt-8 flex justify-center">
          <button
            type="button"
            className="mb-10 rounded bg-blue-600 px-6 py-2 text-white shadow hover:bg-blue-700"
            tabIndex={0}
          >
            Cadastre sua empresa
          </button>
        </div>

        {/* Navegação por Pontos */}
        <div className="mt-6 flex items-center justify-center">
          <div
            role="group"
            aria-label="Navegação por slides de empresas"
            className="flex gap-3"
          >
            {getGroupedLogos.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollTo(index)}
                onFocus={() => scrollTo(index)}
                tabIndex={0}
                className={`h-4 w-4 rounded-full transition-all duration-300 hover:scale-110 focus:outline-none focus:ring ${ACCESSIBILITY_CLASSES.focusRing} ${
                  index === selectedIndex
                    ? 'scale-110 bg-blue-600'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                {...(index === selectedIndex && { 'aria-current': 'true' })}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    scrollTo(index);
                  }
                }}
                aria-label={`Ir para slide ${index + 1} de ${getGroupedLogos.length}`}
                type="button"
              />
            ))}
          </div>
        </div>

        {/* Mensagens para Leitores de Tela */}
        <div className="sr-only" aria-live="polite" aria-atomic="true">
          Slide {selectedIndex + 1} de {getGroupedLogos.length}
        </div>
        <div className="sr-only">
          Use os botões laterais ou as teclas de seta do teclado para navegar
          pelas empresas parceiras.
        </div>
      </div>
    </section>
  );
};
