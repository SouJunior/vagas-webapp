import styled from "styled-components";
import { RiInformationLine } from 'react-icons/ri';
import FeedJobsBackground from "../../assets/imgs/feedjobs-bg.svg"

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  justify-content: center;
  margin-top: 101px;
  height: 100%;
  width: 100%;
  min-height: 100vh;
`;

export const Content = styled.div`
    grid-column: 1 / -1;
`;

export const FilterContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  height: 200px;
  background-color: ${({theme}) => theme.colors.primary}};
  background-image: url(${FeedJobsBackground});

  div {
    width: 100%;
  }
`;

export const JobContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 56px;
    width: 100%;
`

export const PageTitle = styled.h1`
    font-size: 36px;  
    font-weight: 700;
    margin-top: 40px;
    margin-bottom: 24px;
`;

export const ContentWrapper = styled.div`
    display: flex;
    justify-content: center;
    gap: 30px;
    width: 100%;
    
    @media (max-width: 1200px) {
      flex-wrap: wrap;
    }
`;

export const JobsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  max-height: 614px;
`;

export const QuickFilterContainer = styled.div`
  display: flex;
  gap: 26px;
  width: 100%;
  max-width: 493px;
  margin-bottom: 26px;

  @media (max-width: 768px) {
    flex-wrap: wrap;
    gap: 4px;
  }
`;

export const JobList = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  gap: 4px;
  max-height: 557px;
  max-width: 518px;
  width: 100%;
  overflow-y: scroll;
  overflow-x: hidden;
  
  ::-webkit-scrollbar {
  width: 15px;
}
`;

export const JobDetailsWrapper = styled.div`
  width: 40%;
  margin-top: 52px;
  display: flex;
  justify-content: center;

  @media (max-width: 1200px) {
    width: 100%;
  }
`;

export const NoJobsContainer = styled.div`
  height: 569px;
  max-width: 546px;
  width: 100%;
  border: 2px dashed #1165BA;
  border-radius: 0.375rem;
  text-align: center;
  padding: 6rem;
`;

export const InnerContainer = styled.div`
  margin-bottom: 45px;
  margin: 0 auto;
  border: 1px solid #1165BA;
  border-radius: 50%;
  width: 10.625rem;
  padding: 36px;
`;

export const Icon = styled(RiInformationLine)`
  font-size: 6rem;
  color: #1165BA;
`;

export const Title = styled.p`
  margin-top: 45px;
  font-size: 25px;
  line-height: 30px;
  font-weight: 400;
  margin-bottom: 0.4375rem;
  font-family: Radio Canada;
  color: #515050;
  margin-bottom: 7px;
`;

export const Message = styled.p`
  font-family: Radio Canada;
  font-size: 23px;
  line-height: 28px;
  font-weight: normal;
  color: #1165BA;
`;

export const ShowMore = styled.button `
  font-weight: 600;
  text-align: center;
  color: #515050;
  grid-column-start: 1;
  margin-top: 20px;
`;

export const NoResultsMessage = styled.div`
  color: #515050;
  text-align: center;
  width: 100%;
`;
