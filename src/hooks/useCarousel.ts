import React, { useCallback, useEffect, useState, useRef } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { EmblaOptionsType } from 'embla-carousel';

interface UseCarouselOptions {
    autoplayDelay?: number;
    stopOnInteraction?: boolean;
    emblaOptions?: EmblaOptionsType;
}

export const useCarousel = (options: UseCarouselOptions = {}) => {
    const {
        autoplayDelay = 5000,
        stopOnInteraction = true,
        emblaOptions = {},
    } = options;

    const [emblaRef, emblaApi] = useEmblaCarousel(emblaOptions);

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

    const handleKeyDown = useCallback(
        (e: React.KeyboardEvent<HTMLDivElement>) => {
            if (!emblaApi) return;
            if (e.key === 'ArrowLeft') {
                e.preventDefault();
                emblaApi.scrollPrev();
                if (stopOnInteraction) {
                    stopAutoplay();
                }
            } else if (e.key === 'ArrowRight') {
                e.preventDefault();
                emblaApi.scrollNext();
                if (stopOnInteraction) {
                    stopAutoplay();
                }
            }
        },
        [emblaApi, stopOnInteraction, stopAutoplay],
    );

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
                wasPlayingBeforeHideRef.current = isPlaying;
                pauseTimer();
            } else if (document.visibilityState === 'visible') {
                if (wasPlayingBeforeHideRef.current) {
                    setIsPlaying(true);
                }
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
        emblaRef,
        emblaApi,
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
        handleKeyDown,
    };
};
