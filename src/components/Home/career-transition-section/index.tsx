import { CareerTransitionContent } from './career-transition-content';
import { CareerTransitionImage } from './career-transition-image';

export const CareerTransitionSection: React.FC = () => {
    return (
        <section
            className="flex min-w-[390px] max-w-[1440px] w-full pt-6 px-4 flex-col"
            aria-labelledby="career-transition-title"
        >
            <header className="text-center">
                <h2
                    id="career-transition-title"
                    className="text-blue-900 text-2xl font-semibold font-['Radio_Canada'] leading-tight"
                >
                    Career Transition
                </h2>
            </header>
            <div className="flex flex-col">
                <CareerTransitionImage />
                <CareerTransitionContent />
            </div>
        </section>
    );
};
