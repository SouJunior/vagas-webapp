import styled from 'styled-components';

export const TitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 74px;
    padding: 48px;
    border-radius: 12px;
    border: 8px solid rgba(0, 0, 0, 0);
    background: #d6e7ff;
    grid-column-start: span 2;
`;

export const Title = styled.img`
    width: 619px;
    height: 115px;
    object-fit: contain;
`;

export const IconContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 12px;
    border: 8px solid rgba(0, 0, 0, 0);
    background: #1165ba;
    font-size: 200px;
    color: #fff;
`;

export const SubtitleDark = styled.h2`
    font-family: 'Radio Canada';
    font-size: 24px;
    font-weight: 500;
    color: #323232;
`;

export const SubtitleLight = styled.h2`
    font-family: 'Radio Canada';
    font-size: 24px;
    font-weight: 500;
    color: #fff;
`;

export const TextDark = styled.p`
    font-family: 'Radio Canada';
    font-size: 16px;
    font-weight: 500;
    line-height: 160%;
    color: #323232;
    opacity: 0.8;
`;

export const TextLight = styled.p`
    font-family: 'Radio Canada';
    font-size: 16px;
    font-weight: 500;
    line-height: 160%;
    color: #fff;
    opacity: 0.8;
`;

export const BoxDark = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 24px;
    width: 100%;
    min-height: 284px;
    padding: 24px;
    border-radius: 12px;
    border: 4px solid rgba(0, 0, 0, 0);
    background: #323232;
`;

export const BoxBlue = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 24px;
    width: 100%;
    min-height: 284px;
    padding: 24px;
    border-radius: 12px;
    border: 4px solid rgba(0, 0, 0, 0);
    background: #046ad0;
`;

export const BoxBlueLight = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 24px;
    width: 100%;
    min-height: 284px;
    padding: 24px;
    border-radius: 12px;
    border: 4px solid rgba(0, 0, 0, 0);
    background: #d6e7ff;
`;

export const ExplanationBox = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
    padding: 24px;
    border-radius: 12px;
    border: 8px solid rgba(0, 0, 0, 0);
    background: #046ad0;
    grid-row: span 3;
`;

export const FigureUiRepresentation = styled.figure`
    display: flex;
    justify-content: center;
    width: 100%;

    img {
        width: 231px;
        height: 138px;
        aspect-ratio: 16 / 9;
        object-fit: cover;
    }
`;

export const VisualElementsBox = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
    width: 100%;
    min-height: 182px;
    padding: 24px;
    border-radius: 12px;
    border: 4px solid rgba(0, 0, 0, 0);
    background: #323232;
    grid-column: span 2;
`;

export const GraphicElementsBox = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
    width: 100%;
    min-height: 182px;
    padding: 24px;
    border-radius: 12px;
    border: 4px solid rgba(0, 0, 0, 0);
    background: #046ad0;
    grid-column: span 2;
`;

export const LayoutsBox = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
    width: 100%;
    min-height: 182px;
    padding: 24px;
    border-radius: 12px;
    border: 4px solid rgba(0, 0, 0, 0);
    background: #d6e7ff;
    grid-column: span 2;
`;

export const BoxBlueLightImage = styled.figure`
    width: 100%;
    height: 182px;
    border-radius: 12px;
    background: #d6e7ff;

    img {
        width: 424px;
        height: 182px;
    }
`;
