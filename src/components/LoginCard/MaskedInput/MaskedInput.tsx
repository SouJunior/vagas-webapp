import React, { ChangeEvent } from 'react';
import InputMask from 'react-input-mask';

interface MaskedInputProps {
    value: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    name: string;
    mask: string;
}

const MaskedInput: React.FC<MaskedInputProps> = ({
    value,
    onChange,
    name,
    mask,
}) => {
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        onChange({
            ...event,
            target: {
                ...event.target,
                name,
            },
        });
    };

    return (
        <InputMask
            name={name}
            mask={mask}
            value={value}
            onChange={handleChange}
        />
    );
};

export default MaskedInput;
