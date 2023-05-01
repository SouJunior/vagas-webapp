import styled from "styled-components";
import {TiSocialFacebook} from "react-icons/ti"
import {RiInstagramFill} from "react-icons/ri"
import {BsYoutube, BsDiscord, BsTelegram, BsGithub} from "react-icons/bs"
import {AiOutlineTwitter, AiFillLinkedin} from "react-icons/ai"

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
export const Grid = styled.ul`
    display: grid;
    grid-template-columns: auto auto auto auto;
    column-width: 10px;
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