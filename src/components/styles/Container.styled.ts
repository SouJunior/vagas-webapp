import styled from 'styled-components';

export const Container = styled.div`
    margin: 0 auto;
    width: 100%;

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
`;
