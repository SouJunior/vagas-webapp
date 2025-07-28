import styled from 'styled-components';
import { Button } from '../../components/HeaderDefault/components/JobFilter/styles';
import devices from '../styles/devices';

import imageBackground from '../../assets/imgs/background-companies.png';

const font = 'Radio Canada';

export const Container = styled.div`
    max-width: 1400px;
    margin: 0 auto;

    padding-inline: 70px;

    @media ${devices.mobileL} {
        padding-inline: 16px;
    }
`;

export const Header = styled.header``;

export const HeaderWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 25px 0px;

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
    font-family: ${font};

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
    font-family: ${font};

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
    font-family: ${font};

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
    font-family: ${font};
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

export const Subtitle = styled(HireTitle)`
    margin-top: 92px;
    text-align: center;
    color: #082e54;
`;

export const Explanation = styled.p`
    font-family: ${font};
    margin-top: 24px;
    color: #082e54;
    margin-bottom: 59px;

    @media ${devices.mobileL} {
        text-align: center;
    }
`;

export const CardsWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 32px;
    margin-bottom: 79px;

    @media ${devices.mobileL} {
        grid-template-columns: 1fr;
        margin-bottom: 32px;
        gap: 25px;
    }
`;

export const Call = styled.p`
    color: #082e54;
    font-family: ${font};

    margin-bottom: 78px;

    @media ${devices.mobileL} {
        padding-inline: 16px;
        font-size: 0.9rem;
    }
`;

export const ContentWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 32px 0px 53px 0px;

    @media ${devices.mobileL} {
        flex-direction: column;
    }
`;

export const LinksWrapper = styled.div`
    display: flex;
    gap: 102px;

    @media ${devices.mobileL} {
        flex-direction: column;
        gap: 25px;
    }
`;

export const LinkHeading = styled.h4`
    color: #046ad0;
    font-family: ${font};
    font-weight: bold;
    font-size: 0.9rem;
    margin-bottom: 12px;
`;

export const Links = styled.ul`
    display: flex;
    flex-wrap: wrap;
    max-width: 158px;
    gap: 16px;
    a:hover {
        text-decoration: underline;
    }
`;

//seção carrossel

export const title = styled.h3`
    font-weight: 700;
    font-family: ${font};
    font-size: 2rem;
    color: #082e54;
    text-align: center;
    margin-bottom: 86px;
    margin-top: 32px;

    @media ${devices.mobileL} {
        font-size: 1.5rem;
    }
`;

export const SecaoCarrossel = styled.section`
    background-color: #f1f8ff;
    width: 100%;

    height: 490px;
    max-height: 490px;

    display: flex;

    position: relative;

    @media ${devices.mobileL} {
        overflow: hidden;
    }
`;

export const CarrosselWrapper = styled.div`
    overflow: hidden;
`;

export const CarrosselContainer = styled.div`
    display: flex;
    width: max-content;

    @media ${devices.mobileL} {
        width: 400px;
    }
`;

export const CarrosselViewPort = styled.div`
    overflow: hidden;
`;

export const ButtonNext = styled.button`
    background-color: #046ad0;
    width: 42px;
    height: 42px;
    border-radius: 50%;
    color: #fff;
    font-weight: bold;
    position: absolute;
    right: 10px;
    top: 40%;
    z-index: 999;

    &:disabled {
        color: gray;
        pointer-events: none;
    }
`;

export const CarrosselSlide = styled.div`
    flex: 0 0 100%;
    min-width: 0;
`;
export const slideGroup = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 1rem;

    img {
        width: 90px;
        height: auto;
        object-fit: contain;
    }

    @media ${devices.mobileL} {
        gap: 45px;
        justify-content: space-evenly;

        img {
            max-width: 80px;
            max-height: 80px;
        }
    }
`;

export const WrapperCTA = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 37px;
`;

export const ButtonCTA = styled(ButtonRegister)``;
