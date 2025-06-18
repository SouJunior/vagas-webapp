import styled from 'styled-components';
import { TiSocialFacebook } from 'react-icons/ti';
import { RiInstagramFill } from 'react-icons/ri';
import { BsYoutube, BsTelegram, BsGithub } from 'react-icons/bs';
import { AiFillLinkedin } from 'react-icons/ai';
import { FaCodeFork } from 'react-icons/fa6';
import { SiTiktok } from 'react-icons/si';

export const Footer = styled.footer`
    width: 100vw;
    background-color: white;
    
    .desktop-wrapper {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        justify-content: space-between;
        margin: 24px 16px;
    }

    @media (min-width: 1024px) {
    .desktop-wrapper {
        flex-direction: row;
        justify-content: space-between;
        margin: 24px 32px;    
        }
    }

    .footer-links-container {
        display: flex;
        flex-direction: column;
        gap: 32px;
        margin: 24px 0px;
    }

    @media (min-width: 768px) {
    .footer-links-container {
        justify-content: flex-end;
        flex-direction: row;
        gap: 32px;
        margin: 24px 16px 32px 16px;
    }
    }

    @media (min-width: 1024px) {
    .footer-links-container {
        gap: 80px;
        justify-content: flex-end;
    }
    }

    .footer-section {
        display: flex;
        flex-direction: column;
        gap: 12px;
    }
    
    .ul-footer-section {
        display: flex;
        flex-direction: column;
        gap: 12px;
        }

    h3 {
        font-size: 18px;
        font-weight: 500;
        color: #338AFF;
    }


    li {
        list-style-type: none;
        font-size: 14px;
        line-height: 30px;
        margin: 0;
        color: #002C66;
        &:hover {
            color: #046ad0;
        }
        max-width: 300px;
    }

    
`;

export const Grid = styled.ul`
    display: grid;
    width: 140px;
    grid-template-columns: repeat(4, auto);
    column-width: 10px;
    gap: 12px;
`;

export const FacebookIcon = styled(TiSocialFacebook)`
    width: 20px;
    height: 20px;
`;

export const YouTubeIcon = styled(BsYoutube)`
    width: 20px;
    height: 20px;
`;

export const GitHubIcon = styled(BsGithub)`
    width: 20px;
    height: 20px;
`;

export const TikTokIcon = styled(SiTiktok)`
    width: 18px;
    height: 18px;
`;

export const LinkedInIcon = styled(AiFillLinkedin)`
    width: 20px;
    height: 20px;
`;

export const InstagramIcon = styled(RiInstagramFill)`
    width: 20px;
    height: 20px;
`;

export const TelegramIcon = styled(BsTelegram)`
    width: 20px;
    height: 20px;
`;

export const ForkmeIcon = styled(FaCodeFork)`
    width: 20px;
    height: 20px;
`;
