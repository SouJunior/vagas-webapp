import React from 'react';
import styled, { css } from 'styled-components';

// TODO: ajustar componente styled para receber attrs próprios de um botão HTML

interface ButtonWrapperProps {
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    background?: 'outline';
    border?: 'white';
    height?: string;
}

export const ButtonWrapper = styled.button<ButtonWrapperProps | any>`
    padding: 8px 48px;
    background-color: ${({ theme }) => theme.colors.primary};
    border: 1px solid #004892;
    border-radius: 4px;
    font-weight: bolder;
    font-size: 1.4em;

    min-width: fit-content;
    height: ${(props) => props.height};

    display: flex;
    align-items: center;
    justify-content: center;

    cursor: pointer;
    outline: none;

    &:active {
        background-color: ${({ theme }) => theme.colors.primaryDark};
    }

    ${({ background }) =>
        background === 'outline' &&
        css`
            background: ${({ theme }) => theme.colors.secondaryLight};
            border-color: ${({ theme }) => theme.colors.primary};
            color: ${({ theme }) => theme.colors.primaryDark};
        `}
    ${({ border }) =>
        border === 'white' &&
        css`
            border-width: 2px;
            border-color: ${({ theme }) => theme.colors.secondaryLight};
            color: ${({ theme }) => theme.colors.primaryDark};
        `}
`;
