import { CareerTransitionContent } from './career-transition-content';
import { CareerTransitionImage } from './career-transition-image';

export const CareerTransitionSection: React.FC = () => {
    return (
        <section
            className="flex min-w-[24.375rem] max-w-[90rem] w-full pt-6 px-4 flex-col
                        lg:pt-8 lg:px-8 
                        xl:mx-auto"
            aria-labelledby="career-transition-title"
        >
            <header className="text-start">
                <h2
                    className="justify-center text-blue-900 text-base font-medium font-['Radio_Canada'] leading-tight
                md:text-xl md:leading-normal"
                >
                    Transição de carreira
                </h2>
            </header>
            <div
                className="flex flex-col
                            md:flex-row-reverse md:gap-4
                            lg:items-center"
            >
                <CareerTransitionImage />
                <CareerTransitionContent />
            </div>
        </section>
    );
};
