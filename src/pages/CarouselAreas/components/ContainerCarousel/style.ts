import styled from 'styled-components';

export const SectionCarousel = styled.section`
    margin-top: 100px;
    max-width: 1520px;

    @media (max-width: 1560px) {
        max-width: 1320px;
    }

    @media (max-width: 1366px) {
        max-width: 1200px;
    }

    @media (max-width: 1280px) {
        max-width: 1000px;
    }

    @media (max-width: 1024px) {
        width: 100%;
        padding: 0 5vw;
    }
`;
