import React from 'react';

import { CandidateSection } from '../components/Home/candidate-section/candidate-section';
import { CareerTransitionSection } from '../components/Home/career-transition-section/index';
import { FeatureCards } from '../components/Home/feature-cards';

import { EnterprisesSection } from '../components/Home/enterprises-section';
import TestimonialSection from '../components/Home/testimonial-section/index';
import { AnimationEntry } from '../components/Ui/animation-entry';

export interface AreaProps {
  id: string;
  name: string;
  icon: React.ReactNode;
}

export const Home: React.FC = () => {
  return (
    <>
      <main className="bg-blue-lightTransparent p-4 md:py-6 lg:p-8 lg:pb-0">
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
