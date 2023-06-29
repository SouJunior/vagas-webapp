import { FunctionComponent } from 'react';
import styled from 'styled-components';

interface SelectProps {
    children: React.ReactNode;
}

export const SelectWrapper = styled.div`
    label {
        color: ${({ theme }) => theme.colors.black};
        font-size: 90%;
        font-weight: 500;
    }
    select {
        border: 1px solid ${({ theme }) => theme.colors.mutedDark};
        color: ${({ theme }) => theme.colors.primaryDark};
        height: 55px;
        width: 100%;
        border-radius: 6px;
        background-color: #fff;
        padding: 0.7rem 1rem;
        margin: 4px 0 12px 0;

        :hover {
            border-color: ${({ theme }) => theme.colors.mutedDarker};
        }

        :focus {
            border-color: ${({ theme }) => theme.colors.primary};
        }

    }

    .error {
        outline: none;
        border-color: ${({ theme }) => theme.colors.danger};

        :focus {
            border-color: ${({ theme }) => theme.colors.danger};
        }
        
    }
`;

export const Select: FunctionComponent<SelectProps> = ({ children }) => {
    return <SelectWrapper>{children}</SelectWrapper>;
};
