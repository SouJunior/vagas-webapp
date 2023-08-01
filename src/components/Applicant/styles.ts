import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    background-color: #EFEFEF;
    border: 1px solid #E8E8E8;
    justify-content: space-between;
    padding: 10px 16px;
    border-radius: 6px;

    div {
        display: flex;
        align-items: center;
        gap: 16px;
    }
`;

export const ApplicantName = styled.p`
    font-size: 16px;
    font-weight: 500;
    color: #515050;
`;