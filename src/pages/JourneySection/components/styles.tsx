import styled, { css } from "styled-components";

export const ContentContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    gap: 64px;
    max-width: 1234px;
`;

export const LeftMenu = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
    flex: 1;
`;
export const MenuItem = styled.button<{isActive: boolean}>`
    display: flex;
    gap: 18px;
    padding: 14px;
    align-items: flex-start;
    transition: background-color 0.3s ease-in-out, transform 0.3s ease-in-out;
    transition: border-left 0.5s ease-in-out;

    &:hover {
    background-color: #E7F0F8;
    transform: scale(1.05);
  }

  ${({ isActive }) =>
  isActive &&
  css`
    background-color: #E7F0F8;
    border-left: solid 3px #046AD0;
  `}
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

export const FigureBox = styled.div`
    display: flex;
    padding: 12px 13px;
    flex-direction: column;
    align-items: center;
    width: 48px;
    hight: 48px;
    border-radius: 8px;
    background: var(--Color, #fff);
    box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.08);
`;

export const RightText = styled.div`
    color: var(--colors-gray-light-mode-700, #344054);
    text-align: justify;
    font-family: 'Radio Canada';
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
    flex: 1;
`;

export const AnimatedContent = styled.div`
    animation: slideDown 0.7s ease-in-out;

    @keyframes slideDown {
        from {
            transform: translateY(100%);
            opacity: 0;
        }
        to{
            transform: translateX(0);
            opacity: 1;
        }
    }
`