import { useState, useCallback } from 'react';

export function useControllableState<T>(
    controlledValue: T | undefined,
    defaultValue: T,
    onChange?: (value: T) => void,
): [T, (value: T) => void] {
    const isControlled = controlledValue !== undefined;
    const [internalValue, setInternalValue] = useState<T>(defaultValue);
    const value = isControlled ? controlledValue : internalValue;

    const setValue = useCallback(
        (newValue: T) => {
            if (!isControlled) {
                setInternalValue(newValue);
            }
            if (onChange) {
                onChange(newValue);
            }
        },
        [isControlled, onChange],
    );

    return [value, setValue];
}
