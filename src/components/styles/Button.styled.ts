import styled, { css } from 'styled-components';

// TODO: ajustar componente styled para receber attrs próprios de um botão HTML

interface ButtonWrapperProps {
    background?: 'outline';
    border?: 'white';
}

export const ButtonWrapper = styled.button<ButtonWrapperProps | any>`
    padding: 8px 12px;
    background-color: ${({ theme }) => theme.colors.primary};
    border: 1px solid #004892;
    border-radius: 4px;
    color: #fff;

    min-width: fit-content;

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
            background: transparent;
            border-color: ${({ theme }) => theme.colors.primary};
            color: ${({ theme }) => theme.colors.primary};
        `}
    ${({ border }) =>
        border === 'white' &&
        css`
            border-width: 2px;
            border-color: ${({ theme }) => theme.colors.muted};
            color: ${({ theme }) => theme.colors.muted};
        `}
`;
