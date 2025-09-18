import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;

  @media (min-width: ${({ theme }) => theme.breakpoints.mobile.md}) {
    max-width: ${({ theme }) => theme.breakpoints.mobile.md};
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    max-width: ${({ theme }) => theme.breakpoints.tablet};
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.laptop.md}) {
    max-width: ${({ theme }) => theme.breakpoints.laptop.md};
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.laptop.lg}) {
    max-width: ${({ theme }) => theme.breakpoints.laptop.lg};
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.laptop.xl}) {
    max-width: none;
  }
`;
