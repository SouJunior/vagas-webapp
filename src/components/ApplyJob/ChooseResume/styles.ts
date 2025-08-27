import styled from 'styled-components';

export const ChooseResumeContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid ${(props) => props.theme.colors.primary};
  border-radius: 6px;
  width: 484px;
  max-width: 484px;
  height: auto;
  padding: 18px 40px;
  font-size: 16px;
  font-weight: 500;
  color: #515050;
  gap: 10px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Attach = styled.button`
  display: flex;
  align-items: center;
  gap: 2px;

  p {
    text-decoration: underline;
    font-weight: 400;
    color: ${(props) => props.theme.colors.primary};
  }
`;

export const ResumesContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 4px;

    p {
      color: ${(props) => props.theme.colors.primary};
      font-size: 14px;
      font-weight: 400;
      cursor: pointer;
      max-width: 172px;
      word-break: break-all;

      :hover {
        text-decoration: underline;
      }
    }
  }

  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
`;
