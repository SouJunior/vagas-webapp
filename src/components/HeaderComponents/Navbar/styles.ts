import styled from "styled-components";

export const Nav = styled.nav`
    display: flex;
    align-items: center;
    column-gap: 2rem;
`;

export const List = styled.ul`
    display: flex;
    align-items: center;
    column-gap: 2rem;
`;

export const itelList = styled.li`
    list-style: none;
    font-size: 1rem;
    font-weight: 500;

    a {
        text-decoration: none;
        color: #f2f2f2;
    }
`;

export const ButtonLogin = styled.button`
    background-color: green;
    color: #f2f2f2;
    padding: 5px 20px;
    border-radius: 5px;
`;