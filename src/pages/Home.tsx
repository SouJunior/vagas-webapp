import React from 'react';

import { FeatureCards } from '../components/Home/feature-cards';
import { CandidateSection } from '../components/Home/candidate-section/candidate-section';
import { CareerTransitionSection } from '../components/Home/career-transition-section/index';

import TestimonialSection from '../components/Home/testimonial-section/index';
import { EnterprisesSection } from '../components/Home/enterprises-section';
import { AnimationEntry } from '../components/Ui/animation-entry/index';

export interface AreaProps {
    id: string;
    name: string;
    icon: React.ReactNode;
}

export const Home: React.FC = () => {
    return (
        <>
            <main className="bg-blue-lightTransparent p-4 md:py-6 lg:p-8 lg:pb-0 ">
                <AnimationEntry>
                    <EnterprisesSection />
                </AnimationEntry>
            </main>
            <AnimationEntry>
                <FeatureCards />
            </AnimationEntry>

            <AnimationEntry>
                <CandidateSection />
            </AnimationEntry>

            <AnimationEntry>
                <CareerTransitionSection />
            </AnimationEntry>

            <AnimationEntry>
                <TestimonialSection />
            </AnimationEntry>
        </>
    );
};
