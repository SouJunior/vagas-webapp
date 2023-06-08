import styled from "styled-components"

export const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    gap: 20px;
    background-color: #046AD0
`
export const ProfilePicture = styled.img`
    width: 70px;
    height: 70px;
    border-radius: 50%;
    background-color: #046AD0;
    margin-right: 15px;

    @media (max-width: 540px) {
        width: 40px;
        height: 40px;
        margin-right: 8px;
    }
`
export const UserButton = styled.button`
    display: flex;
    align-items: center;
    padding-right: 20px;
    
    div:first-child {
       flex-direction: column;
       margin-right: 15px;
    }
`
export const Name = styled.div`
    font-size: 16px;
    font-weight: 700;
    line-height: 22px;
    color: #FFFFFF;
    margin-bottom: 5px;

    @media (max-width: 540px) {
       display: none;
    }
`
export const Email = styled.div`
    font-size: 14px;
    font-weight: 400;
    color: #D7D9D7;

    @media (max-width: 540px) {
       display: none;
    }
`
export const UserInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-right: 10px;

    @media (max-width: 540px) {
       margin: 0;
    }
`
export const MenuPicture = styled.img`
    @media (max-width: 540px) {
        width: 15px;
        height: 15px;
    }
`
export const HeaderLogo = styled.img`
    padding-left: 20px;

    @media (max-width: 540px) {
        width: 140px;
        height: 60px;
    }
`