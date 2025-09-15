import React from 'react';
import { HiCheck } from 'react-icons/hi';
import { useStepper } from '../../../hooks/useStepper';
import { ARIA_ATTRIBUTES } from '../../../utils/accessibility';

export interface Step {
    label: string;
    status?: string;
}

export interface StepperProps {
    steps: Step[];
    initialStep?: number;
    onStepChange?: (step: number) => void;
}

export const Stepper: React.FC<StepperProps> = ({
    steps,
    initialStep = 0,
    onStepChange,
}) => {
    const { currentStep, goToStep } = useStepper({
        initialStep,
        steps: steps.length,
    });

    React.useEffect(() => {
        if (onStepChange) onStepChange(currentStep);
    }, [currentStep, onStepChange]);

    const getCircleClass = (idx: number) => {
        if (idx < currentStep) return 'bg-blue-500 text-white';
        if (idx === currentStep)
            return 'bg-white border-2 border-blue-500 text-blue-500';
        return 'bg-neutral-200 text-blue-900';
    };

    return (
        <nav
            aria-label="Progress"
            className="w-full flex flex-col items-center"
        >
            <ol
                className="flex space-x-8 items-center"
                {...ARIA_ATTRIBUTES.labelledBy('stepper-label')}
            >
                {steps.map((step, idx) => (
                    <li key={step.label} className="list-none">
                        <button
                            type="button"
                            className={`flex items-center justify-center w-8 h-8 p-2 rounded-full transition-colors duration-200  ${getCircleClass(
                                idx,
                            )}`}
                            aria-current={
                                currentStep === idx ? 'step' : undefined
                            }
                            aria-disabled={currentStep === idx}
                            tabIndex={0}
                            onClick={() => goToStep(idx)}
                        >
                            {idx < currentStep ? (
                                <HiCheck
                                    size={24}
                                    className="text-white"
                                    aria-hidden="true"
                                />
                            ) : (
                                <span
                                    id={idx === 0 ? 'stepper-label' : undefined}
                                    className="text-sm font-normal font-canada leading-none"
                                >
                                    {idx + 1}
                                </span>
                            )}
                        </button>
                    </li>
                ))}
            </ol>
        </nav>
    );
};
