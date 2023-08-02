import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 0 20px;
`;

export const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    padding: 30px;
    gap: 70px;
    justify-content: center;
    align-items: flex-start;

    @media (max-width: 1250px) {
        flex-direction: column;
        align-items: center;
    }

    @media (max-width: 650px) {
        padding:  0px;
    }
`;

export const LeftContainer = styled.div`
    width: 585px;
    border-radius: 6px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;

    @media (max-width: 650px) {
        width: 98%;
    }
`;

export const PageTitle = styled.h1`
    font-size: 36px;  
    font-weight: 700;
    margin-top: 40px;
    margin-bottom: 10px;

    @media (max-width: 650px) {
        margin-bottom: 25px;
    }
`;

export const DownloadBtn = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
    cursor: pointer;
    transition: all .2s;

    :hover {
        color: ${props => props.theme.colors.primary};
    }

    p {
        font-weight: 700;
        text-decoration: underline;

    }
`

export const RightContainer = styled.div`
    width: 585px;
    border: 2px solid ${(props) => props.theme.colors.primary};
    height: 100%;
    border-radius: 6px;
    min-height: 730px;
    max-height: 730px;
    display: flex;
    flex-direction: column;

    @media (max-width: 650px) {
        width: 98%;
    }
`;

export const ResumePreview = styled.div`
    display: flex;
    width: 585px;
    height: 700px;
    border-radius: 6px;
    border: 2px solid ${(props) => props.theme.colors.primary};

    iframe {
        border-radius: 6px;
    }

    @media (max-width: 650px) {
        width: 100%;
    }
`;

export const PaymentInfo = styled.div`
    height: 10%;
    width: 100%;
    padding: 8px 20px;
    justify-self: flex-end;
    border-top: 2px solid ${props => props.theme.colors.primary};
    margin-bottom: 0;
    margin-top: auto;
    font-weight: 700;
`

export const Cards = styled.div`
    width: 100%;
    height: 90%;
    max-height: 90%;
    overflow: scroll;
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 10px 20px;
`