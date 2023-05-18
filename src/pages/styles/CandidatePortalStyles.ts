import styled from "styled-components";
import SearchImage from "../../assets/imgs/search.svg"

export const Container = styled.div`
    font-family: Radio Canada;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    text-align: center;
`
export const Main = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 60px;
    padding-bottom: 20px;

    h1 {
        font-size: 35px;
        font-weight: 700;
        color: #046AD0;
        padding-top: 80px;
    }
`
export const Position = styled.div`
    margin-top: auto;
`
export const Row = styled.div`  
    width: 90%;
    border-top: 2px solid #979797;
    opacity: 0.2;
    margin-bottom: auto;
`
export const Copyright = styled.span`
    font-size: 14px;
    opacity: 0.65;
    padding-bottom: 20px;
`
export const ProfileButton = styled.button`
    background-color: #046AD0;
    color: #FDFDFD;
    width: 249px;
    padding-top: 12px;
    padding-bottom: 12px;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    margin-top: 60px;
    margin-bottom: 60px;

    div:first-child  {
        margin-right: 8px;
    }
`
export const SearchButton = styled.button`
    background-color: #046AD0;
    color: #FDFDFD;
    width: 163px;
    height: 48px;
    border-radius: 8px;
`
export const Input = styled.input`
    border: 1px solid #000000;
    border-radius: 8px;
    height: 52px;
    width: 348px;
    padding-left: 40px;
    background-image: url(${SearchImage});
    background-repeat: no-repeat;
    background-position-x: 1rem;
    background-position-y: center;
    
    @media (max-width: 280px) {
        width: 270px;
    }
`
export const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding-bottom: 40px;
`