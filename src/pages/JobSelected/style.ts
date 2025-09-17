import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 130px 64px 64px 64px;
  min-height: calc(100vh - 147px);
  max-width: 1440px;
  margin: 0 auto;

  @media (max-width: 1024px) {
    padding: 130px 32px 32px 32px;
  }

  @media (max-width: 767px) {
    padding: 96px 32px 32px 32px;
  }
`;
