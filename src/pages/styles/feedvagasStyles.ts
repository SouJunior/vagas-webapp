import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  gap: 56px;
`;

export const Content = styled.div`
    display: flex;
    margin-top: 18px;
    justify-content: space-around;
`

export const JobContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 1000px;
    margin-bottom: 56px;
`

export const ContentWrapper = styled.div`
    display: grid;
    gap: 28px;
    grid-template-columns: 493px 583px;
    
`;

export const JobsWrapper = styled.div`
  display: flex;
  flex-direction: column;

  gap: 4px;

  margin-right: 40px;
`;

export const JobDetailsWrapper = styled.div`
  width: 40%;
`;
