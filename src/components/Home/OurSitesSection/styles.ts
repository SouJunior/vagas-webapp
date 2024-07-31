import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
`;

export const Title = styled.h1`
    font-size: 26px;
    font-weight: 600;
    line-height: 31px;
    text-align: center;
    color: #515050;
`;

export const ContainerImg = styled.figure`
    width: 330px;
    height: auto;
    overflow: hidden;
    border-radius: 16px;
`;

export const Img = styled.img`
    width: 100%;
    height: 100%;
    transition: transform 0.3s ease-in-out;

    ${Container}:hover & {
        transform: scale(1.05);
    }
`;

export const Description = styled.p`
    max-width: 268px;
    line-height: 19px;
    text-align: center;
    color: #515050;
`;
