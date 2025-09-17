import styled from 'styled-components';

interface CardProps {
  active: boolean;
  opacity: number;
}

export const Card = styled.div<CardProps>`
  border: 1px solid #a3ccfa;
  border-radius: 6px;
  display: flex;
  color: ${(props) => (props.active ? '#fff' : '#515050')};
  background-color: ${(props) => (props.active ? '#1165BA' : '#fff')};
  width: 493px;
  max-width: 473px;
  padding: 16px;
  max-height: 140px;

  @media (max-width: 950px) {
    max-height: none;
  }

  margin-bottom: 16px;
  box-shadow: 0px 2px 5px rgba(27, 30, 33, 0.08);
  border: 1px solid #e8e8e8;
  opacity: ${(props) => (props.active || props.opacity === 1 ? '1' : '0.7')};
  border-radius: 6px;
  cursor: pointer;

  :focus {
    outline: none;
  }

  :hover {
    border: 1px solid #1165ba;
  }

  @media (max-width: 576px) {
    width: 100%;
  }
`;

export const Logo = styled.img`
  width: 56px;
  height: 56px;
  margin-right: 12px;
`;

export const Content = styled.div`
  flex-grow: 1;
`;

export const Title = styled.h2`
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  margin-bottom: 8px;
`;

export const Company = styled.p`
  font-size: 14px;
  line-height: 17px;
  margin-bottom: 8px;
  font-weight: 500 !important;
`;

export const Location = styled.p`
  font-size: 14px;
  line-height: 17px;
  margin-bottom: 8px;
`;

export const Type = styled.p`
  font-size: 14px;
  line-height: 17px;
`;

export const PublishedAt = styled.p`
  font-size: 14px;
  line-height: 17px;
  font-weight: 500;
  align-self: flex-end;
`;
