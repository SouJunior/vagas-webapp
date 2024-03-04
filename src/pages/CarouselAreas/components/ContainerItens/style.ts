import styled from 'styled-components';

export const SectionContainerItens = styled.section`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
    max-width: 1440px;
    margin: 74px 0;

    @media (max-width: 1520px) {
        max-width: 1280px;
    }

    @media (max-width: 1366px) {
        max-width: 1200px;
    }

    @media (max-width: 1280px) {
        max-width: 1000px;
    }

    @media (max-width: 1024px) {
        max-width: 900px;
    }
`;
