import styled from "styled-components";
import JourneyMainContent from "./components/JourneyMainContent";
import ToggleLinkedinCurriculoButton from "./components/ToggleLinkedinCurriculo"
import JourneyLayout from "../../layout/JourneyLayout";

const TitleContainer = styled.div`
    justify-content: center;
    display: flex;
    width: 100%;
    font-weight: 600;
    font-size: 45px;
    color: #515050;
    text-align: center;
`;

const Title = styled.div`
    text-align: center;
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

const JourneySection = () => {
    return (
        <JourneyLayout>
            <TitleContainer>
                <Title>Vamos Juntos nessa Jornada</Title>
            </TitleContainer>

            <ToggleLinkedinCurriculoButton />

            <JourneyMainContent/>
        </JourneyLayout>
    )
}

export default JourneySection