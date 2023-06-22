import styled from 'styled-components';

export const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    gap: 20px;
    background: rgb(67, 122, 255);
    background: linear-gradient(
        60deg,
        rgba(67, 122, 255, 1) 0%,
        rgba(4, 106, 208, 1) 100%
    );
`;
export const ProfilePicture = styled.img`
    margin: 0 15px;
    width: ${props => props.width};

    @media (max-width: 540px) {
        width: ${props => props.width};
        margin-right: 8px;
    }
`;

export const UserButton = styled.button`
    display: flex;
    align-items: center;
    padding-right: 20px;

    div:first-child {
        flex-direction: column;
        margin-right: 15px;
    }
`;
export const Name = styled.div`
    font-size: 16px;
    font-weight: 700;
    line-height: 22px;
    color: #ffffff;
    margin-bottom: 5px;

    @media (max-width: 540px) {
        display: none;
    }
`;
export const Email = styled.div`
    font-size: 14px;
    font-weight: 400;
    color: #d7d9d7;

    @media (max-width: 540px) {
        display: none;
    }
`;
export const UserInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-right: 10px;

    @media (max-width: 540px) {
        margin: 0;
    }
`;
export const MenuPicture = styled.img`
    @media (max-width: 540px) {
        width: 15px;
        height: 15px;
    }
`;
export const HeaderLogo = styled.img`
    padding-left: 20px;

    @media (max-width: 540px) {
        width: 140px;
        height: 60px;
    }
`;
;
