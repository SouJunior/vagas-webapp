import styled from 'styled-components';
import devices from '../../../../pages/styles/devices';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: 609px;

    p {
        color: #344054;
        text-align: justify;
        font-family: 'Radio Canada';
        font-size: 15px;
        font-weight: 400;
        line-height: 140%;
    }

    @media (max-width: 1440px) {
        width: 550px;
    }

    @media (max-width: 1280px) {
        width: 500px;
        font-size: 14px;
    }

    @media ${devices.mobileS} {
        max-width: 288px;
    }
`;

export const ImgWrap = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 16px;
`;
