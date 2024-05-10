import styled from 'styled-components';

interface ToggleButtonInterface {
    isActive: boolean;
}

export const ContentContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    gap: 64px;
    max-width: 1234px;
`;

export const RightText = styled.div`
    text-align: justify;
    font-family: 'Radio Canada';
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
    color: var(--colors-gray-light-mode-700, #344054);
    flex: 1;
`;

export const AnimatedContent = styled.div`
    animation: slideDown 0.7s ease-in-out;

    @keyframes slideDown {
        from {
            transform: translateY(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
`;

export const ToggleButtonSection = styled.div`
    display: flex;
    margin: 32px 0 32px;
    justify-content: center;
    align-items: flex-start;
    gap: -1px;
`;

export const ToggleButton = styled.button<ToggleButtonInterface>`
    width: 108px;
    height: 40px;
    display: flex;
    align-items: center;
    border-radius: 0px 100px 100px 0px;
    background-color: ${(props) => (props.isActive ? '#046AD0' : '#FFF')};
    border: 1px solid var(--Neutral-neutral-30, #c2c7d0);
    padding: 10px 12px;
    font-family: Roboto, sans-serif;
    font-size: 14px;
    font-style: normal;
    color: ${(props) => (props.isActive ? '#FFF' : '#046AD')};
    font-weight: 500;
    line-height: 20px;
    letter-spacing: 0.1px;
`;

export const LinkedinButton = styled(ToggleButton)`
    justify-content: flex-end;
    border-radius: 100px 0px 0px 100px;
`;

export const CurriculoButton = styled(ToggleButton)`
    justify-content: flex-start;
    border-radius: 0px 100px 100px 0px;
    border-left: 0;
`;
