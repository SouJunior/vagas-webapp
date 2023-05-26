import styled from "styled-components";
import SearchImage from "../../../assets/imgs/search.svg"

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

export const Container = styled.div`
    display:flex;
    flex-direction:column;
   
`
export const Border = styled.li`
    border-top: 1px solid #C5C7C5;
    width: 90%;
`

export const Box = styled.div`
    background: #FDFDFD;
    box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.25);
    border-bottom-right-radius: 5px;
    border-bottom-left-radius: 5px;
    width: 348px;
    padding-top: 15px;
    padding-bottom: 5px;
    position: absolute;
    top: 202px;
    z-index: 1;

    @media (max-width: 280px) {
        width: 270px;
    }
`

export const Options = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: left;
    color: #212121;
    font-size: 18px;

    li::first-letter {
        font-weight:bold;
    }
    

    li {
        margin-right: auto;
        display: flex;
        padding: 5px;
        cursor: pointer;
    }

    a {
        display: flex;
    }

`