
import styled from 'styled-components';


export const Container = styled.div`
    display: flex;
    flex-direction: column;

    text-align: left;
`;

export const Paragrafo = styled.p`
    color: #344054;
    text-align: justify;
    font-family: 'Radio Canada';
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;

    ul {
        margin-left: 20px;
    }
`;
export const Img = styled.img`
    opacity: 0.6;
    width: 25%;
    height: 25%;
`;
export const ImgWrap = styled.div`
   display: flex;
    justify-content: center;
    margin-bottom: 16px;
`;
