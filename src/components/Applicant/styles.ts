import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  max-height: 45px;
  background-color: #efefef;
  border: 1px solid #e8e8e8;
  justify-content: space-between;
  padding: 10px 16px;
  border-radius: 6px;
  cursor: pointer;

  div {
    display: flex;
    align-items: center;
    gap: 16px;
  }
`;

export const ApplicantName = styled.p`
  font-size: 16px;
  font-weight: 500;
  color: #515050;
`;
