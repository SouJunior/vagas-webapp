import styled from 'styled-components';

export const ContainerJourney = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
`;

export const TitleContainer = styled.div`
    justify-content: center;
    display: flex;
    width: 100%;
    font-weight: 600;
    font-size: 45px;
    color: #515050;
    text-align: center;
`;

export const SecondaryTitle = styled.h3`
    font-weight: 600;
    font-size: 45px;
    color: #515050;
    text-align: center;

    @media (max-width: 780px) {
        width: 90%;
    }

    @media (max-width: 568px) {
        width: 272px;
        height: 62px;
        position: relative;
        top: -40px;
        font-size: 32px;
    }

    @media (max-width: 375px) {
        position: relative;
        top: -50px;
    }
`;

export const ToggleButtonSection = styled.div`
    display: flex;
    justify-content: center;
    margin: 32px 0;
`;

interface ToggleButtonProps {
    isActive: boolean;
}

export const ToggleButton = styled.button<ToggleButtonProps>`
    width: 108px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 0px 100px 100px 0px;
    background-color: ${(props) => (props.isActive ? '#046AD0' : '#FFF')};
    border: 1px solid var(--Neutral-neutral-30, #c2c7d0);
    padding: 10px 12px;
    font-family: Roboto, sans-serif;
    font-size: 14px;
    font-style: normal;
    color: ${(props) => (props.isActive ? '#FFF' : '#046AD0')};
    font-weight: 500;
    line-height: 20px;
    letter-spacing: 0.1px;
`;

export const LinkedinButton = styled(ToggleButton)`
    justify-content: center;
    border-radius: 100px 0px 0px 100px;
`;

export const CurriculoButton = styled(ToggleButton)`
    justify-content: center;
    border-radius: 0px 100px 100px 0px;
    border-left: 0;
`;
export const ContentContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    gap: 64px;
    max-width: 1234px;
`;
