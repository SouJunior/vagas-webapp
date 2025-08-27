import styled from 'styled-components';
import { RiInformationLine } from 'react-icons/ri';

export const JobDetailsWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 546px;
`;

export const NoJobsContainer = styled.div`
  height: 569px;
  max-width: 546px;
  width: 100%;
  border: 2px dashed #1165ba;
  border-radius: 0.375rem;
  text-align: center;
  padding: 6rem;
`;

export const InnerContainer = styled.div`
  margin-bottom: 45px;
  margin: 0 auto;
  border: 1px solid #1165ba;
  border-radius: 50%;
  width: 10.625rem;
  padding: 36px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Icon = styled(RiInformationLine)`
  font-size: 6rem;
  color: #1165ba;

  @media (max-width: 768px) {
    font-size: 4rem;
  }
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

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

export const Message = styled.p`
  font-family: Radio Canada;
  font-size: 23px;
  line-height: 28px;
  font-weight: normal;
  color: #1165ba;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;
