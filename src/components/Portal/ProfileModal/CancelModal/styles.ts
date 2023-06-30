import styled from 'styled-components';

export const ModalContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 60px 30px;
    gap: 20px;
    position: fixed;

    background: #FDFFFC;

    border: 2px solid ${({theme}) => theme.colors.primaryDark};
    border-radius: 10px;
`;

export const ModalText = styled.p`
    font-family: 'Radio Canada';
    font-style: normal;
    font-weight: 400;
    font-size: 22px;
    line-height: 26px;

    color: ${({theme}) => theme.colors.mutedDarker};
`;

export const ModalTitle = styled.h1`
    width: 370px;
    height: 48px;
    font-family: 'Radio Canada';
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 48px;
    color: ${({theme}) => theme.colors.primaryDark};
`;

export const ButtonContent = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
    gap: 15px;
`;
