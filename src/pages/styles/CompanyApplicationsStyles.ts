import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
`;

export const ApplicantsContainer = styled.div`
    display: flex;
    align-items: center;
    width: 545px;
    flex-direction: column;
    border: 1px solid ${props => props.theme.colors.primary};
    padding: 24px 16px;
    border-radius: 6px;
`;

export const ApplicantsList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 100%;
`;

export const PageTitle = styled.h1`
font-size: 40px;
font-weight: 700;
`;