import styled from 'styled-components';

interface ExtraInfoItemProps {
  colorActive: boolean;
}

export const Container = styled.div`
  background-color: #fff;
  border-radius: 6px;
  box-shadow: 0px 2px 5px rgba(27, 30, 33, 0.10);
  border: 1px solid #1165BA;
  width: 583px;
  height: 557px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  overflow-y: scroll;
`;

export const PaddingContainer = styled.div`
  padding: 32px 10px 11px 32px;
`

export const Title = styled.h2`
  font-size: 24px;
  font-weight: 700;
  color: #515050;
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

export const ExtraInfoContainer = styled.div`
  max-width: 100%;
  padding: 12px 0px 12px 5px;
  margin: 0 21px 0 12px;
  border: 1px solid #E8E8E8;
  border-radius: 6px;
`
export const ExtraInfoItem = styled.p<ExtraInfoItemProps>`
  padding: 3px 0 0 12px;
  font-size: 14px;
  color: #515050;
  color: ${({colorActive}) => colorActive ? '#1165BA;' : '#515050;'};
`
export const  DescriptionInfo = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: #515050;
`

export const Description = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: #515050
`;

export const Prerequisites = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: #515050
`;

export const Benefits = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: #515050
`;
