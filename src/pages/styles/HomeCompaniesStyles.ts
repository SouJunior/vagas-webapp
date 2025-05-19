import styled from 'styled-components';
import { Button } from '../../components/HeaderDefault/components/JobFilter/styles';
import devices from '../styles/devices';

import imageBackground from '../../assets/imgs/background-companies.png';

export const Container = styled.div`
    max-width: 1400px;
    margin: 0 auto;
`;

export const Header = styled.header``;

export const HeaderWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 25px 70px;

    img {
        max-width: 204px;
        max-height: 76px;
    }

    @media ${devices.mobileL} {
        img {
            max-width: 150px;
        }

        padding: 25px 16px;
    }
`;

export const HeaderNavigation = styled.ul`
    display: flex;
    align-items: center;
    gap: 24px;
`;

export const ListItem = styled.li`
    list-style: none;
    color: #082e54;
    font-family: 'Radio Canada';

    a {
        font-weight: bold;
        letter-spacing: 1px;
    }

    a:hover {
        text-decoration: underline;
    }

    @media ${devices.mobileL} {
        font-size: 0.8rem;
    }
`;

export const HireJuniorsSection = styled.section`
    background-image: url(${imageBackground});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`;

export const HireSectionWrapper = styled.section`
    display: flex;
    align-items: center;
    justify-content: space-between;

    height: 623px;

    padding-inline: 70px;

    @media ${devices.mobileL} {
        flex-direction: column-reverse;
        justify-content: flex-end;
        padding-top: 32px;

        div {
            display: flex;
            flex-direction: column;
            align-items: center;
        }
    }
`;

export const HireTitle = styled.h1`
    font-weight: 700;
    font-size: 2.25rem;
    color: #082e54;
    font-family: 'Radio Canada';

    @media ${devices.mobileL} {
        font-size: 1.5rem;
        text-align: center;
    }
`;

export const HireDescription = styled.p`
    font-weight: 400;
    color: #082e54;
    max-width: 520px;
    font-size: 2rem;
    font-family: 'Radio Canada';

    margin-top: 11px;

    @media ${devices.mobileL} {
        font-size: 1.2rem;
        text-align: center;
    }
`;

export const ButtonRegister = styled(Button)`
    background-color: #046ad0;

    width: auto;
    max-width: 322px;

    height: auto;
    max-height: 80px;

    padding: 24px 24px;
    border-radius: 10px;

    margin-top: 58px;
    font-family: 'Radio Canada';
    font-weight: 700;
    font-size: 1.5rem;
    letter-spacing: 1px;

    @media ${devices.mobileL} {
        display: block;
        max-width: 233px;
        max-height: 67px;
        font-size: 0.8rem;
        margin-top: 30px;
    }
`;

export const Image = styled.img`
    @media ${devices.mobileL} {
        max-width: 358px;
        max-height: 257px;
        margin-bottom: 10px;
    }
`;
