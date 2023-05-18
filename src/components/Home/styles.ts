import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Title = styled.h1`
    font-size: 26px;
    font-weight: 600;
    line-height: 31px;
    text-align: center;
    color: #515050;
    margin-bottom: 16px;
`

export const Img = styled.img`
    width: 318px;
    background: rgba(217, 217, 217, 0.2);
    padding: 6px;
    border-radius: 16px;
`;

export const Description = styled.p`
    font-weight: 400;
    margin-top: 12px;
    font-size: 16px;
    line-height: 19px;
    text-align: center;
    max-width: 268px;
    color: #515050;
`;

export const JourneyWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 32px;
`;

export const JourneyDescription = styled.div`
    color: #515050;
    max-width: 281px;
    font-size: 30px;
    font-weight: 600;
`;
