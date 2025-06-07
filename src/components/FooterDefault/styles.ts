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
        gap: 24px; /* gap-6 = 24px */
        padding: 24px; /* p-6 = 24px */
    }

    @media (min-width: 768px) {
    .desktop-wrapper {
        flex-direction: row;
    }
    }

    @media (min-width: 1024px) {
    .desktop-wrapper {
        gap: 0px; 
        padding: 32px;
    }
    }

    .footer-links-container {
        display: flex;
        flex-direction: column;
        gap: 24px;
    }

    @media (min-width: 768px) {
    .footer-links-container {
        flex-direction: row;
        gap: 40px;
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
        color: #4d4d4d;
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
    gap: 10px;
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
