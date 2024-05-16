import styled, { css, keyframes } from 'styled-components';

export const LeftMenu = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
    width: 561px;

    @media (max-width: 1440px) {
        width: 450px;
    }

    @media (max-width: 1280px) {
        width: 380px;
        gap: 16px;
    }
`;

export const MenuItem = styled.button<{ isActive: boolean }>`
    display: flex;
    gap: 18px;
    padding: 14px;
    transition: background-color 0.3s ease-in-out, transform 0.3s ease-in-out,
        box-shadow 0.3s ease-in-out;

    &:hover {
        background-color: #ebf3fa;
    }

    ${({ isActive }) =>
        isActive &&
        css`
            animation: ${fadeSlideIn} 0.3s forwards;
            background-color: #e7f0f8;
            box-shadow: inset 3px 0 0 #046ad0;
        `}
`;

export const FigureBox = styled.div`
    display: flex;
    padding: 12px 13px;
    flex-direction: column;
    align-items: center;
    width: 48px;
    height: 48px;
    border-radius: 8px;
    box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.08);

    @media (max-width: 1280px) {
        width: 40px;
        height: 40px;
    }
`;

export const ItemDescription = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 8px;
`;

export const ItemTitle = styled.h2`
    color: var(--colors-gray-light-mode-900, #101828);
    text-align: justify;
    font-family: 'Radio Canada';
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 120%;

    @media (max-width: 1440px) {
        font-size: 18px;
    }

    @media (max-width: 1280px) {
        font-size: 16px;
    }
`;

export const ItemSubtitle = styled.p`
    color: var(--colors-gray-light-mode-700, #344054);
    font-family: 'Radio Canada';
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
    text-align: left;

    @media (max-width: 1440px) {
        font-size: 14px;
    }
`;

const fadeSlideIn = keyframes`
    0% {
        box-shadow: inset 1px 0 0 rgba(4, 106, 208, 0); 
    }
    50% {
        box-shadow: inset 2px 0 0 #046ad0; 
    }
    100% {
        box-shadow: inset 3px 0 0 #046ad0; 
    }
`;
