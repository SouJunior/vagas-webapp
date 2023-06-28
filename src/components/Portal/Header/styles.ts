import styled from 'styled-components';

export const HeaderWrapper = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    gap: 20px;
    background: ${({ theme }) => theme.colors.primaryLight};
`;

export const ProfileImgWrapper = styled.div`
    width: 60px;
    height: 60px;
    border-radius: 50%;
    overflow: hidden;
    margin: 0 15px;
    background-color: #999;

    @media (max-width: 540px) {
        max-width: 75%;
        max-height: 75%;
    }
`

export const ProfileImg = styled.img`
    cursor: ${(props) => props.width === '10%' ? 'default' : 'pointer' };
    width: 100%;
    height: 100%;
    max-width: ${(props) => props.width};  
    object-fit: contain;
`;

export const UserArea = styled.div`
    display: flex;
    align-items: self-end;
    cursor: default;

    div:first-child {
        flex-direction: column;
        /* margin-right: 15px; */
    }

    span {
        display: flex;
    }
`;

export const UserInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    /* margin-right: 10px; */

    @media (max-width: 540px) {
        margin: 0;
    }
`;

export const Name = styled.div`
    font-size: 16px;
    font-weight: 700;
    line-height: 22px;
    color: #ffffff;
    margin-bottom: 2px;
    /* margin-bottom: 5px; */

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

export const OpenMenuBtn = styled.img`
    cursor: pointer;
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
