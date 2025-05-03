import styled from 'styled-components';

export const MaskBackground = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(93, 95, 93, 0.3);
    backdrop-filter: blur(7px);
    top: 0;
    left: 0;
`;

export const ModalContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    position: fixed;
    border-radius: 8px;
    border: 1px solid #046AD0;
    background: #FFF;
    width: 639px;
    height: 171px;

    img {
        width: 30%;
    }

    .modal--texts {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 0 24px 24px 24px;
    }

    @media (max-width: 540px) {
        width: 80%;
    }
`;

export const ModalText = styled.p`
    font-family: 'Radio Canada';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 26px;
    color: #3E3E3E;

    @media (max-width: 480px) {
        width: 80%;
    }
`;

export const ModalTitle = styled.h2`
    font-family: 'Radio Canada';
    font-style: normal;
    font-weight: 600;
    font-size: 30px;
    padding: 50px 0 5px 0;
    color: var(--Logo-Cor, #046AD0);
    line-height: 120%; /* 38.4px */
    text-align: center;

    @media (max-width: 280px) {
        width: 80%;
        font-size: 28px;
        margin-right: 20px;
    }

    @media (max-width: 480px) {
        width: 80%;
        display: flex;
        margin-right: 20px;
    }
`;

export const CloseModal = styled.div`
    justify-content: flex-end;
    align-self: flex-end;
    padding-left: 150px;
    position: absolute;
    top: 0; 
    right: 0; 
`;

export const ModalCloseButton = styled.button`
    width: 45px;
    height: 45px;
    font-weight: bold;
    border-radius: 8px;
    &:hover {
        background-color: red;
        border: 1px solid;
        color: #fff;
        border-radius: 10px;
    }
`;