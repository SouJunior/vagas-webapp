import styled from 'styled-components';

export const Img = styled.img`
    width: 318px;
    background: rgba(217, 217, 217, 0.2);
    padding: 6px;
    border-radius: 16px;

    @media (max-width: 650px) {
        width: 55%;
    }
`;

export const JourneyWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;

    // Foi retirado devido a fidelidade do prototipo
    /* @media (max-width: 1200px) {
        flex-direction: column;
    } */
`;

export const JourneyDescription = styled.div`
    color: #515050;
    max-width: 281px;
    font-size: 30px;
    font-weight: 600;

    @media (max-width: 650px) {
        font-size: 20px;
        width: 100%;
        /* text-align: le; */
    }
`;
