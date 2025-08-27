import { FeatureCards } from '../components/Home/feature-cards';
import { CandidateSection } from '../components/Home/candidate-section/candidate-section';
import { CareerTransitionSection } from '../components/Home/career-transition-section/index';
import TestimonialSection from '../components/Home/testimonial-section/index';

export const Home: React.FC = () => {
  return (
    <>
      <FeatureCards />
      <CandidateSection />
      <CareerTransitionSection />
      <TestimonialSection />
    </>
  );
};
