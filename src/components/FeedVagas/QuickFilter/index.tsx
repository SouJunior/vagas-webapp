import { Select } from './styles';

const QuickFilter = ({
    options,
    selectedValue,
    onChange,
    placeholder,
}: any) => {
    return (
        <Select value={selectedValue} onChange={onChange}>
            <option disabled selected value="">
                {placeholder}
            </option>
            {options.map((option: any) => (
                <option key={option.value} value={option.value}>
                    {option.label}
                </option>
            ))}
        </Select>
    );
};

export default QuickFilter;
