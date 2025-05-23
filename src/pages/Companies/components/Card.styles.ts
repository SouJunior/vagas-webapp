import styled from 'styled-components';

export const Card = styled.div`
    background-color: #f1f8ff4d;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.08);
    border-radius: 48px;
    padding: 24px 16px;
`;

export const CardHeader = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 12px;
`;

export const CardHeading = styled.h3`
    font-size: 1rem;
    font-weight: bold;
    color: #082e54;
`;

export const CardDescription = styled.p`
    color: #082e54;
`;
