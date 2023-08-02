import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding-right: 20px;
    padding-left: 20px;
    gap: 50px;
`;

export const ApplicantsContainer = styled.div`
    display: flex;
    width: 545px;
    flex-direction: column;
    align-items: center;
    border: 1px solid ${props => props.theme.colors.primary};
    padding: 24px 16px;
    border-radius: 6px;
    gap: 40px;
`;

export const ApplicantsList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 100%;
    overflow-y: auto;
    height: 100%;
    max-height: 349px;
`;

export const PageTitle = styled.h1`
    font-size: 36px;  
    font-weight: 700;
    margin-top: 40px;
    margin-bottom: 24px;
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

export const ContentWrapper = styled.div`
    display: flex;
    justify-content: center;
    gap: 30px;
    width: 100%;
    padding-right: 20px;
    padding-left: 20px;
    
    @media (max-width: 1200px) {
      flex-wrap: wrap;
    }
`;

export const JobHeadText = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DetailsJobTitle = styled.h2`
  font-size: 24px;
  font-weight: 700;
  color: #515050;
  
  width: 100%;
`;

export const Subtitle = styled.h3`
  font-size: 14px;
  font-weight: 500;
  color: #515050;
`;

export const Text = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: #515050;
`;

export const QuickFilterContainer = styled.div`
  display: flex;
  gap: 26px;
  width: 100%;
  max-width: 493px;
  margin-bottom: 16px;

  @media (max-width: 768px) {
    flex-wrap: wrap;
    gap: 4px;
  }
`;