import styled from "styled-components";
import FeedJobsBackground from "../../assets/imgs/feedjobs-bg.svg"


export const JobApplyContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    justify-content: center;
    margin-top: 101px;
    height: 100%;
    width: 100%;
    min-height: 100vh;
`;

export const FilterContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: center;
  height: 200px;
  background-image: url(${FeedJobsBackground});
  max-width: 100vw;

  div {
    width: 100%;
    overflow: hidden;
  }
`;

export const PageTitle = styled.h1`
    font-size: 36px;
    font-weight: 700;
    margin-top: 40px;
    margin-bottom: 26px;
`;

export const UserArea = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    margin: 0 auto;
    gap: 86px;

    @media (max-width: 1200px) {
        flex-wrap: wrap;
      }
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`;


export const Content = styled.div`
    grid-column: 1 / -1;
`;

export const ButtonContainer = styled.div`
    display: flex;
    place-content: end;
    margin-top: 16px;
    gap: 16px;
`;

export const ApplyButton = styled.button`
    display: flex;
    place-content: end;
    justify-content: center;
    align-items: center;
    width: 100%;
    border-radius: 6px;
    max-width: 182px;
    background-color: ${props => props.theme.colors.primary};
    color: #FFFFFF;
    height: 40px;
    font-size: 18px;
    max-height: 40px;

    &:hover {
        background-color: ${props => props.theme.colors.primaryDark};
    }
`;

export const CancelApplyButton = styled(ApplyButton)`
    background-color: ${props => props.theme.colors.danger};

    &:hover {
        background-color: #822025;
    }
`;

export const JobDetailsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 546px;
`

