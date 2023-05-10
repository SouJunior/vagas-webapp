import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 5%;
`;

export const leftContainer = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    h1 {
        font-size: 2.5rem;
        font-weight: 600;
        line-height: 50px;
        color: #f2f2f2;
        width: 90%;
    }

    button {
        background-color: green;
        color: #f2f2f2;
        padding: 8px 20px;
        border-radius: 5px;
        width: 180px;
        margin-top: 3%;
    }
`;

export const rightContainer = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
`;