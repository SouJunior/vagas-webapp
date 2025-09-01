import React from 'react';

export function useInView(options?: IntersectionObserverInit) {
    const ref = React.useRef<HTMLElement | null>(null);
    const [isVisible, setIsVisible] = React.useState(false);

    React.useEffect(() => {
        if (!ref.current) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.4, ...options },
        );

        observer.observe(ref.current);

        return () => observer.disconnect();
    }, [options]);

    return { ref, isVisible };
}
