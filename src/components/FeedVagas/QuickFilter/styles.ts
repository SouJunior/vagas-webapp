import styled from "styled-components";

export const Select = styled.select`
    width: 100%;
    padding: 2px 18px;
    border: 1px solid #C1DFFF;
    border-radius: 100px;
    -webkit-appearance: none; /* Remove a aparência padrão da seta */
    -moz-appearance: none;
    appearance: none;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='4' viewBox='0 0 8 4' fill='%23515050'%3E%3Cpath d='M0.666504 0L3.99984 3.33333L7.33317 0H0.666504Z'/%3E%3C/svg%3E"); /* Define o código SVG para a seta */
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
`;


