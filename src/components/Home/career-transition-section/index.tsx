import { CareerTransitionContent } from './career-transition-content';
import { CareerTransitionImage } from './career-transition-image';

export const CareerTransitionSection: React.FC = () => {
  return (
    <section
      className="flex w-full min-w-[24.375rem] max-w-[90rem] flex-col px-4 pt-6 lg:px-8 lg:pt-8 xl:mx-auto"
      aria-labelledby="career-transition-title"
    >
      <header className="text-start">
        <h2
          id="career-transition-title"
          className="font-font-canada justify-center text-base font-medium leading-tight text-blue-900 md:text-xl md:leading-normal"
        >
          Transição de carreira
        </h2>
      </header>
      <div className="flex flex-col md:gap-4 xl:flex-row-reverse xl:items-center">
        <CareerTransitionImage />
        <CareerTransitionContent />
      </div>
    </section>
  );
};
