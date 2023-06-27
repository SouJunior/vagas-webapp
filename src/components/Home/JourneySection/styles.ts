import styled from "styled-components";

export const Img = styled.img`
    width: 318px;
    background: rgba(217, 217, 217, 0.2);
    padding: 6px;
    border-radius: 16px;
    cursor: pointer;

    @media (max-width: 650px) {
        width: 80%;
    }
`;

export const JourneyWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 32px;

    @media (max-width: 1200px) {
        flex-direction: column;
    }
`;

export const JourneyDescription = styled.div`
    color: #515050;
    max-width: 281px;
    font-size: 30px;
    font-weight: 600;

    @media (max-width: 650px) {
        font-size: 20px;
        width: 100%;
        text-align: center;
    }
`;

export const JourneyModalWrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9998;
`;

export const JourneyModalTitle = styled.h1`
    font-size: 28px;
    font-weight: 600;
    color: #515050;
`;

export const JourneyModalContent = styled.div`
    position: relative;
    background-color: white;
    padding: 36px;
    border-radius: 6px;
    width: 90%;
    height: 90%;
    word-wrap: break-all;
    overflow-y: auto;
`;

export const JourneyModalDescription = styled.p`
    margin-top: 28px;
    word-wrap: break-all;
    text-align: justify;
`;

export const CloseButton = styled.button`
    position: sticky;
    top: 0;
    right: 0;
    border: none;
    font-size: 20px;
    cursor: pointer;
    display: flex;
    justify-content: flex-end;
    width: 100%;
`;