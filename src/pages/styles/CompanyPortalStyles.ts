import styled from "styled-components";

export const Container = styled.div`
    font-family: Radio Canada;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    text-align: center;
`
export const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    gap: 20px;
    background-color: #046AD0
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
export const Main = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 60px;
    padding-bottom: 40px;

    h1 {
        font-size: 35px;
        font-weight: 700;
        color: #046AD0;
        padding-bottom: 60px;
    }
`

export const Position = styled.div`
    margin-top: auto;
`
export const ProfilePicture = styled.img`
    width: 70px;
    height: 70px;
    border-radius: 50%;
    background-color: #FFFFFF;
    border: 1px solid #FFFFFF;
    margin-right: 15px;

    @media (max-width: 540px) {
        width: 40px;
        height: 40px;
        margin-right: 8px;
    }
`
export const ArrowPicture = styled.img`

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
export const Row = styled.div`  
    width: 90%;
    border-top: 2px solid #979797;
    opacity: 0.2;
    margin-bottom: auto;
`
export const Copyright = styled.span`
    font-size: 14px;
    opacity: 0.65;
    padding-bottom: 20px;
`
export const Company = styled.div`
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
export const JobButton = styled.div`
    background-color: #046AD0;
    color: #FDFDFD;
    width: 180px;
    padding-top: 12px;
    padding-bottom: 12px;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    margin-top: 60px;
    margin-bottom: 60px;

    div:first-child  {
        margin-right: 8px;
    }
`