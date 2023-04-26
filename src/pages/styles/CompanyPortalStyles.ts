import styled from "styled-components";
import {TiSocialFacebook} from "react-icons/ti"
import {RiInstagramFill} from "react-icons/ri"
import {BsYoutube, BsDiscord, BsTelegram, BsGithub} from "react-icons/bs"
import {AiOutlineTwitter, AiFillLinkedin} from "react-icons/ai"

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
    padding-top: 40px;
    padding-bottom: 40px;

    h1 {
        font-size: 35px;
        font-weight: 700;
        color: #046AD0;
        padding-bottom: 60px;
    }
`
export const Footer = styled.footer`
    width: 90%;
    display: inline-flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-self: center;
    align-items: flex-start;
    gap: 50px;
    padding: 20px 15px 30px 15px;
    
    div:first-child {
        align-self: center
    }

    @media (max-width: 280px) {
        flex-direction: column;
        text-align: center;
        align-items: center;
    }

    @media (min-width: 281px) and (max-width: 639px) {
        div:first-child  {
            width: 100%;
            text-align: center;
        }

        div {
            width: 40%;
        }

        img {
            display: inline;
        }
    }

    @media (min-width: 640px) and (max-width: 920px) {
        div:first-child  {
            width: 100%;
            text-align: center;
        }
        img {
            display: inline;
        }
    }


    h3 {
        font-size: 18px;
        font-weight: 700;
        padding-bottom: 10px;
        color: #046AD0;
    }
    
    li {
        list-style-type: none;
        font-size: 14px;
        line-height: 30px;
        margin: 0;
        color: #4D4D4D;
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
export const FacebookIcon = styled(TiSocialFacebook)`
    width: 20px;
    height: 20px;
    color: #212121;
`
export const DiscordIcon = styled(BsDiscord)`
    width: 20px;
    height: 20px;
    color: #212121;
`
export const TwitterIcon = styled(AiOutlineTwitter)`
    width: 20px;
    height: 20px;
    color: #212121;
`
export const YouTubeIcon = styled(BsYoutube)`
    width: 20px;
    height: 20px;
    color: #212121;
`
export const GitHubIcon = styled(BsGithub)`
    width: 20px;
    height: 20px;
    color: #212121;
`
export const LinkedInIcon = styled(AiFillLinkedin)`
    width: 20px;
    height: 20px;
    color: #212121;
`
export const InstagramIcon = styled(RiInstagramFill)`
    width: 20px;
    height: 20px;
    color: #212121;
`
export const TelegramIcon = styled(BsTelegram)`
    width: 20px;
    height: 20px;
    color: #212121;
`
export const Grid = styled.ul`
    display: grid;
    grid-template-columns: auto auto auto auto;
    column-width: 10px;
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