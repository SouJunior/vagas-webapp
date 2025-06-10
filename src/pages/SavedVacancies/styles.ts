import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100%;
`

export const ContainerTitle = styled.div`
    width: 100%;
    height: 180px;
    display: flex;
    flex-direction: column;
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
    align-items: center;
    box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.08);
`

export const Title = styled.h1`
    font-size: 40px;
    color: #101828;
    font-family: 'Radio Canada';
    font-size: 40px;
    font-weight: 600;
    padding-top: 33px;

`

export const SubTitle = styled.h3`
    color: #475467;
    font-family: 'Radio Canada';
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%; /* 28px */
`

export const CardContainer = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center; 
    align-items: flex-start; 
    margin-top: 50px;
`

export const CardContent = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
`

export const Message = styled.p`
    grid-column: 1 / -1; 
    font-size: 20px;
    color: #101828;
    font-family: "Radio Canada";
    margin-top: 40px;
`