import styled from 'styled-components';

export const Accordion = styled.div`
    display: none;
`;

export const dropdown = styled.div`
    color: red;
`;

export const Layout = styled.div`
    padding: 0 32px;
`;
export const AccordationHeaderWrapper = styled.div`
    display: inline-block;
    align-items: center;
    gap: 8px;
    width: 100%;
`;
export const AccordationHeader = styled.div`
    display: flex;
    align-items: center;
`
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