import styled from 'styled-components';
import MainContainer from '../pages/CarouselAreas/components/MainContainer';
import ToggleLinkedinCurriculoButton from '../pages/JourneySection/components/ToggleLinkedinCurriculo';
import JourneySection from '../pages/JourneySection/components/JourneySection';

const TitleContainer = styled.div`
    margin-top: 100px;
    justify-content: center;
    display: flex;
    width: 100%;
`;

const Title = styled.div`
    color: #292929;
    font-size: 40px;
    text-align: center;
    font-weight: 600;
    line-height: 120%; /* 48px */
    padding: 0 24px;
    top: -40px;
    left: 50%;

    @media (max-width: 650px) {
        top: -50px;
        font-size: 38px;
    }

    @media (max-width: 568px) {
        position: relative;
        top: -70px;
        width: 500px;
        width: 300px;
        height: 86px;
        border-radius: 16px;
        padding: 4px 8px 4px 8px;
        gap: 10px;
    }

    @media (max-width: 375px) {
        width: 260px;
        font-size: 28px;
    }

    @media (max-width: 415px) {
        font-size: 32px;
        width: 340px;
    }

    @media (max-width: 320px) {
        width: 250px;
        font-size: 32px;
    }
`;

const JourneyLayout = () => {
    return (
        <MainContainer>
            <TitleContainer>
                <Title>Vamos Juntos nessa Jornada</Title>
            </TitleContainer>

            <ToggleLinkedinCurriculoButton />

            <JourneySection/>
        </MainContainer>
    );
};

export default JourneyLayout;
