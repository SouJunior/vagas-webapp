import styled from "styled-components";
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
  background-color: ${({theme}) => theme.colors.primary};
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
    padding-right: 20px;
    padding-left: 20px;
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
  margin-top: 52px;
  display: flex;
  justify-content: center;
`;

export const ShowMore = styled.button `
  font-weight: 600;
  text-align: center;
  color: #515050;
  grid-column-start: 1;
  margin-top: 20px;

  :hover {
    text-decoration: underline;
  }
`;

export const NoResultsMessage = styled.div`
  color: #515050;
  text-align: center;
  width: 100%;
`;
