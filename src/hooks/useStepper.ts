import { useState } from 'react';

interface UseStepperProps {
    initialStep?: number;
    steps: number;
}

export function useStepper({ initialStep = 0, steps }: UseStepperProps) {
    const maxIndex = Math.max(0, steps - 1);
    const safeInitialStep = Math.min(Math.max(initialStep, 0), maxIndex);
    const [currentStep, setCurrentStep] = useState(safeInitialStep);

    const nextStep = () => {
        if (steps === 0) return;
        setCurrentStep((prev) => Math.min(prev + 1, maxIndex));
    };

    const prevStep = () => {
        if (steps === 0) return;
        setCurrentStep((prev) => Math.max(prev - 1, 0));
    };

    const goToStep = (step: number) => {
        if (steps === 0) return;
        const clampedStep = Math.min(Math.max(step, 0), maxIndex);
        setCurrentStep(clampedStep);
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
