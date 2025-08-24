import { useCallback, useEffect, useState, useRef } from 'react';
import { UseEmblaCarouselType } from 'embla-carousel-react';

interface UseCarouselOptions {
    autoplayDelay?: number;
    stopOnInteraction?: boolean;
}

export const useCarousel = (
    emblaApi: UseEmblaCarouselType[1] | undefined,
    options: UseCarouselOptions = {},
) => {
    const { autoplayDelay = 5000, stopOnInteraction = true } = options;

    const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
    const [nextBtnDisabled, setNextBtnDisabled] = useState(true);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(() => {
        if (typeof window !== 'undefined') {
            return !window.matchMedia('(prefers-reduced-motion: reduce)')
                .matches;
        }
        return true;
    });
    const autoplayTimerRef = useRef<ReturnType<typeof setInterval> | null>(
        null,
    );
    const wasPlayingBeforeHideRef = useRef<boolean>(false);

    const startAutoplay = useCallback(() => {
        setIsPlaying(true);
    }, []);

    const stopAutoplay = useCallback(() => {
        setIsPlaying(false);
        if (autoplayTimerRef.current) {
            clearInterval(autoplayTimerRef.current);
            autoplayTimerRef.current = null;
        }
    }, []);

    const scrollPrev = useCallback(() => {
        if (emblaApi) {
            emblaApi.scrollPrev();
            if (stopOnInteraction) {
                stopAutoplay();
            }
        }
    }, [emblaApi, stopOnInteraction, stopAutoplay]);

    const scrollNext = useCallback(() => {
        if (emblaApi) {
            emblaApi.scrollNext();
            if (stopOnInteraction) {
                stopAutoplay();
            }
        }
    }, [emblaApi, stopOnInteraction, stopAutoplay]);

    const scrollTo = useCallback(
        (index: number) => {
            if (emblaApi) {
                emblaApi.scrollTo(index);
                if (stopOnInteraction) {
                    stopAutoplay();
                }
            }
        },
        [emblaApi, stopOnInteraction, stopAutoplay],
    );

    const pauseTimer = useCallback(() => {
        if (autoplayTimerRef.current) {
            clearInterval(autoplayTimerRef.current);
            autoplayTimerRef.current = null;
        }
    }, []);

    const toggleAutoplay = useCallback(() => {
        if (isPlaying) {
            stopAutoplay();
        } else {
            startAutoplay();
        }
    }, [isPlaying, startAutoplay, stopAutoplay]);

    const onSelect = useCallback(() => {
        if (!emblaApi) return;

        setSelectedIndex(emblaApi.selectedScrollSnap());
        setPrevBtnDisabled(!emblaApi.canScrollPrev());
        setNextBtnDisabled(!emblaApi.canScrollNext());
    }, [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;

        onSelect();
        emblaApi.on('select', onSelect);
        emblaApi.on('reInit', onSelect);

        return () => {
            emblaApi.off('select', onSelect);
            emblaApi.off('reInit', onSelect);
        };
    }, [emblaApi, onSelect]);

    useEffect(() => {
        if (typeof window === 'undefined') return;

        const mediaQuery = window.matchMedia(
            '(prefers-reduced-motion: reduce)',
        );

        const handleMediaQueryChange = (event: MediaQueryListEvent) => {
            setIsPlaying(!event.matches);
        };

        mediaQuery.addEventListener('change', handleMediaQueryChange);

        return () => {
            mediaQuery.removeEventListener('change', handleMediaQueryChange);
        };
    }, []);

    useEffect(() => {
        if (!emblaApi || !isPlaying) return;

        if (autoplayTimerRef.current) {
            clearInterval(autoplayTimerRef.current);
        }

        autoplayTimerRef.current = setInterval(() => {
            emblaApi.scrollNext();
        }, autoplayDelay);

        return () => {
            if (autoplayTimerRef.current) {
                clearInterval(autoplayTimerRef.current);
                autoplayTimerRef.current = null;
            }
        };
    }, [emblaApi, isPlaying, autoplayDelay]);

    useEffect(() => {
        const handleVisibilityChange = () => {
            if (document.hidden) {
                // Salva o estado atual antes de pausar
                wasPlayingBeforeHideRef.current = isPlaying;
                // Apenas pausa o timer, sem alterar isPlaying
                pauseTimer();
            } else if (document.visibilityState === 'visible') {
                // Restaura autoplay apenas se estava tocando antes de esconder
                if (wasPlayingBeforeHideRef.current) {
                    setIsPlaying(true);
                }
                // Limpa a flag transitória
                wasPlayingBeforeHideRef.current = false;
            }
        };

        document.addEventListener('visibilitychange', handleVisibilityChange);

        return () => {
            document.removeEventListener(
                'visibilitychange',
                handleVisibilityChange,
            );
        };
    }, [isPlaying, pauseTimer]);

    return {
        selectedIndex,
        prevBtnDisabled,
        nextBtnDisabled,
        isPlaying,
        scrollPrev,
        scrollNext,
        scrollTo,
        startAutoplay,
        stopAutoplay,
        toggleAutoplay,
    };
};
