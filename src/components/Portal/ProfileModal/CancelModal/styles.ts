import styled from 'styled-components';

export const ModalContainer = styled.div`
    position: fixed;
    width: 1366px;
    height: 1402px;
    background-color: rgba(0, 0, 0, 0.7);
    mix-blend-mode: normal;
    z-index: 1000;
`;

export const ModalContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 54px 152px;
    gap: 20px;
    position: absolute;
    width: 809px;
    height: 405.78px;
    left: calc(50% - 809px / 2 + 0.5px);
    top: 364px;
    background: #ffffff;
`;

export const ModalText = styled.p`
    font-family: 'Radio Canada';
    font-style: normal;
    font-weight: 400;
    font-size: 22px;
    line-height: 26px;

    color: #777777;
`;

export const ModalTitle = styled.h1`
    width: 370px;
    height: 48px;
    font-family: 'Radio Canada';
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 48px;
    color: #1165ba;
`;

export const ButtonContent = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-top: 30px;
`;

export const ConfirmButton = styled.button`
    width: 252px;
    height: 58px;
    border-radius: 4px;
    background-color: rgba(17, 101, 186, 1);
    color: #fff;
    line-height: 55px;
    margin: 15px;
`;
export const CancelButton = styled.button`
    width: 252px;
    height: 58px;
    border-radius: 4px;
    border: 1px solid;
    line-height: 55px;
    color: rgba(17, 101, 186, 1);
    margin: 15px;
`;
