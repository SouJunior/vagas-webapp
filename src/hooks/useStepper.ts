import { useState } from 'react';

interface UseStepperProps {
    initialStep?: number;
    steps: number;
}

export function useStepper({ initialStep = 0, steps }: UseStepperProps) {
    const [currentStep, setCurrentStep] = useState(initialStep);

    const nextStep = () =>
        setCurrentStep((prev) => Math.min(prev + 1, steps - 1));
    const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 0));
    const goToStep = (step: number) => {
        if (step >= 0 && step < steps) setCurrentStep(step);
    };

    return {
        currentStep,
        isFirstStep: currentStep === 0,
        isLastStep: currentStep === steps - 1,
        nextStep,
        prevStep,
        goToStep,
        steps,
    };
}
