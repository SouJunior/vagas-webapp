import React from 'react';
import { useInView } from '../../../hooks/useView';

export function AnimationEntry({ children }: { children: React.ReactNode }) {
    const { isVisible, ref } = useInView();

    return (
        <section
            ref={ref}
            className={`opacity-0 transition-all duration-700 ease-out ${
                isVisible ? 'animate-fade-in-up' : ''
            }`}
        >
            {children}
        </section>
    );
}
