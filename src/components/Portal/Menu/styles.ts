import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
`;
export const Border = styled.span`
    border: 1px solid #c5c7c5;
    width: 100%;
`;

export const PopUp = styled.div`
    background: ${({ theme }) => theme.colors.primaryLight};
    box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.25);
    border-bottom-right-radius: 5px;
    border-bottom-left-radius: 5px;
    position: absolute;
    padding: 16px 24px;
    z-index: 1;
    border-top: 1px solid #e8e4d6;

    @media (max-width: 480px) {
        width: 100%;
        right: 0;
    }
`;

export const MenuItems = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #ffffff;
    font-size: 18px;

    li {
        display: flex;
        align-items: center;
        width: 100%;
        padding: 18px 0;
        cursor: pointer;
        &:hover {
            color: #c6c6c6;
        }
    }

    img {
        margin-right: 10px;
        max-width: 8%;
    }
    img[alt='alterar senha'] {
        max-width: 10%;
    }

    img[alt='seta'] {
        max-width: 5%;
        margin-left: 10px;
    }
    img[alt='sair'] {
        max-width: 6.6%;
    }

    img[alt='termos'] {
        max-width: 6.6%;
    }
`;
