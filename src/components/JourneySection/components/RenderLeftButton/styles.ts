import styled, { css } from 'styled-components';

export const LeftMenu = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
    flex: 1;
`;

export const MenuItem = styled.button<{ isActive: boolean }>`
    display: flex;
    gap: 18px;
    padding: 14px;
    transition: background-color 0.3s ease-in-out, transform 0.3s ease-in-out,
        box-shadow 0.3s ease-in-out;

    &:hover {
        background-color: #e7f0f8;
    }

    ${({ isActive }) =>
        isActive &&
        css`
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
`;

export const ItemSubtitle = styled.p`
    color: var(--colors-gray-light-mode-700, #344054);
    font-family: 'Radio Canada';
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
    text-align: left;
`;
