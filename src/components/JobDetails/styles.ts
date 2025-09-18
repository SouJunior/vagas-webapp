import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  background-color: #fff;
  border-radius: 6px;
  box-shadow: 0px 2px 5px rgba(27, 30, 33, 0.1);
  border: 1px solid #1165ba;
  width: 100%;
  max-width: 546px;
  height: 569px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  overflow-y: auto;
  padding: 28px;

  @media (min-width: 1440px) {
    width: 546px;
  }
`;

export const Title = styled.h2`
  font-size: 24px;
  font-weight: 700;
  color: #515050;

  width: 100%;
`;

export const JobHeadText = styled.div`
  display: flex;
  flex-direction: column;
`;

export const JobHead = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 16px;
  width: 100%;
`;

export const Company = styled.p`
  margin: 6px 0;
  font-size: 16px;
  font-weight: 600;
  color: #515050;
  line-height: 19px;
`;

export const Location = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: #515050;
  margin-bottom: 20px;
`;

export const Type = styled.p`
  font-size: 14px;
  font-weight: 500;
  color: #515050;
`;

export const CompanyInfo = styled.div`
  max-width: 100%;
  display: flex;
  margin-top: 20px;
  margin-bottom: 40px;
  padding: 8px;
  border: 1px solid #e8e8e8;
  border-radius: 6px;
  background-color: rgba(217, 217, 217, 0.24);
`;

export const DescriptionInfo = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: #515050;
`;

export const Description = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: #515050;
`;

export const Prerequisites = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: #515050;
`;

export const Benefits = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: #515050;
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

export const CompanyName = styled(Subtitle)`
  font-size: 16px;
`;

export const CompanyLogoImg = styled.div`
  width: 80px;
  margin-right: 23px;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const ApplyButtonLink = styled(Link)`
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const ApplyButton = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 6px;
  width: 100%;
  padding: 0 12px;
  max-width: 182px;
  height: 40px;
  color: #fff;
  font-size: 18px;
  font-weight: 500;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryDark};
  }

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;
