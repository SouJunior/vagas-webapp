import React from 'react';
import { HiCheck } from 'react-icons/hi';
import { useControllableState } from '../../../hooks/useControllableState';

export interface Step {
    label: string;
}

export interface StepperProps {
    steps: Step[];
    initialStep?: number;
    step?: number;
    onStepChange?: (step: number) => void;
}

export const Stepper: React.FC<StepperProps> = ({
    steps,
    initialStep = 0,
    step: controlledStep,
    onStepChange,
}) => {
    const [currentStep, setCurrentStep] = useControllableState(
        controlledStep,
        initialStep,
        onStepChange,
    );

    const getCircleClass = (idx: number) => {
        if (idx < currentStep) return 'bg-blue-500 text-white';
        if (idx === currentStep)
            return 'bg-white border-2 border-blue-500 text-blue-500';
        return 'bg-neutral-200 text-blue-900';
    };
    const handleStepClick = (stepIndex: number) => {
        const maxIndex = Math.max(0, steps.length - 1);
        const newStep = Math.min(Math.max(stepIndex, 0), maxIndex);
        setCurrentStep(newStep);
    };

    return (
        <nav
            aria-label="Progress"
            className="w-full flex flex-col items-center"
        >
            <ol
                className="flex space-x-8 items-center"
                aria-label="Lista de etapas"
            >
                {steps.map((step, idx) => (
                    <li key={step.label} className="list-none">
                        <button
                            type="button"
                            className={`flex items-center justify-center w-8 h-8 p-2 rounded-full transition-colors duration-200  ${getCircleClass(
                                idx,
                            )}`}
                            aria-label={step.label}
                            aria-current={
                                currentStep === idx ? 'step' : undefined
                            }
                            disabled={currentStep === idx}
                            onClick={() => handleStepClick(idx)}
                        >
                            {idx < currentStep ? (
                                <HiCheck
                                    size={24}
                                    className="text-white"
                                    aria-hidden="true"
                                />
                            ) : (
                                <span className="text-sm font-normal font-canada leading-none">
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
