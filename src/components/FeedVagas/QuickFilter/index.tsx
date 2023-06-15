import React from 'react';
import { Select } from './styles';

const QuickFilter = ({ options, selectedOptions, onChange }: any) => {
    return (
        <Select>
            {options.map((option: any) => (
                <option key={option.value} value={option.value}>
                    {option.label}
                </option>
            ))}
        </Select>
    );
};

export default QuickFilter;
