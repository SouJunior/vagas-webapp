import styled from "styled-components";
// import JourneyMainContent from "./components/JourneyMainContent";
import ToggleLinkedinCurriculoButton from "./components/ToggleLinkedinCurriculo"
import JourneyLayout from "../../layout/JourneyLayout";
import { SecondaryTitle } from "../styles/Home.styles";

const TitleContainer = styled.div`
    justify-content: center;
    display: flex;
    width: 100%;
    font-weight: 600;
    font-size: 45px;
    color: #515050;
    text-align: center;
`;

const JourneySection = () => {

    return (
        <JourneyLayout>
            <TitleContainer>
                <SecondaryTitle>Vamos juntos nessa jornada</SecondaryTitle>
            </TitleContainer>

            <ToggleLinkedinCurriculoButton />

            {/* <JourneyMainContent/> */}
        </JourneyLayout>
    )
}

export default JourneySection