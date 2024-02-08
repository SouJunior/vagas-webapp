import styled from "styled-components";

export const MainContainer = styled.div`
    padding: 48px 96px 96px 72px;
    display: flex;
    flex-direction: column;
    margin-top: -150px;
    gap: 48px;
`

export const MainSection =  styled.section`
    display: grid;
    grid-template-columns: 70% 30%;
    column-gap: 24px;
`
export const BoxTitle =  styled.div`
    height: 400px;
    background-color: #D6E7FF;
    padding: 48px 48px 70px 48px;
    border-radius: 12px;
`

export const Title = styled.h1`
    font-family: Radio Canada, sans-serif;
    font-size: 96px;
    font-weight: 600;
    line-height: 115px;
    letter-spacing: 0em;
    text-align: start;
    color: transparent;
    -webkit-text-stroke: 3px #1165BA;

`

export const MainText =  styled.p`
    font-family: Radio Canada, sans-serif;
    font-size: 16px;
    font-weight: 500;
    line-height: 25.6px;
    letter-spacing: 0em;
    text-align: left;
    color: #323232;
    margin-top: 72px;
    opacity: 80%
`
export const FigureBox = styled.div`
    background-color: #1165BA;
    border-radius: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    
    img{
        width: 200px;
        height: 200px;
    }

`

export const Subsection = styled.div`
    display: grid;
    grid-template-columns: 30% 70%;
    column-gap: 24px;
`

export const TextBox = styled.div`
    background-color: #1165BA;
    padding: 24px 24px 66px 24px;
    border-radius: 12px;
`

export const BoxSubitle = styled.h2`
    font-family: Radio Canada;
    font-size: 24px;
    font-weight: 500;
    line-height: 29px;
    letter-spacing: 0em;
    text-align: left;
    color: #FFF;
    margin-bottom: 24px;
`
export const BoxContext = styled.p`
    font-family: Radio Canada;
    font-size: 16px;
    font-weight: 500;
    line-height: 26px;
    letter-spacing: 0em;
    text-align: left;
    opacity: 80%;
    color: #FFF;
`
export const LateralGrid = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
`

export const LargeBox = styled.div`
    background-color: #323232;
    border-radius: 12px;
    padding: 48px 98px 79px 24px;
`

export const ListItem =  styled.li`
    margin-left: 50px;
    font-family: Radio Canada;
    font-size: 24px;
    font-weight: 500;
    line-height: 29px;
    color: #FFF;
    margin-bottom: 24px;

    ::marker {
        color: #1165BA;
    }


`

export const StyledUl = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
`

export const ItemText = styled.div`
    font-family: Radio Canada, sans-serif;
    font-size: 16px;
    font-weight: 500;
    line-height: 26px;
    max-width: 583px;
    color: #FFF;
    opacity: 80%;
    margin-left: 72px;

`

export {}