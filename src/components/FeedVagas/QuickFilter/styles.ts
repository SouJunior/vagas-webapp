import styled from "styled-components";
import Teste from "../../../assets/imgs/arrowDown.svg";

export const Select = styled.select`
    width: 100%;
    padding: 2px 18px;
    border: 1px solid #C1DFFF;
    border-radius: 100px;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background-image: url(${Teste}); 
    background-position: calc(100% - 16px) center; 
    background-repeat: no-repeat; 
    background-size: 8px; 
    cursor: pointer;
    font-weight: 400;
    font-size: 14px;
    color: #515050;

    &:focus {
        outline-color: ${props => props.theme.colors.primary};
    }

    &:hover {
        border-color: ${props => props.theme.colors.primary};
    }

    @media (max-width: 768px) {
        padding: 8px 20px;
    }
`;


