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
    gap: 30px;
    grid-template-columns: 493px 583px;
    
`;

export const JobsWrapper = styled.div`
  display: flex;
  flex-direction: column;

  gap: 4px;
  max-height: 570px;
  width: 518px;
  overflow-y: scroll;
  overflow-x: hidden;
  ::-webkit-scrollbar {
  width: 9px;
}


::-webkit-scrollbar-thumb {
  background-color: #1165BA;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background-color: #1195BA;
}

`;

export const JobDetailsWrapper = styled.div`
  width: 40%;
`;


export const ShowMore = styled.button `
  font-weight: 600;
  text-align: center;
  color: #515050;
  grid-column-start: 1;
`;