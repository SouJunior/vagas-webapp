import styled from 'styled-components';
import VocationalBanner from '../../assets/imgs/VocationalBanner.svg';

export const Main = styled.main`
    color: #fff;
    display: flex;
    padding-top: 120px;
    height: 678px;
    gap: 48px;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.colors.primary};
    text-align: center;

    @media (max-width: 1000px) {
        height: auto;
    }
`;

export const MainContent = styled.div`
    width: 100%;
    max-width: 1400px;
    position: relative;
    display: flex;
    align-items: center;
    height: 100%;

    @media (max-width: 1000px) {
        height: auto;
        flex-wrap: wrap;
        flex-direction: column;
        padding-top: 90px;
        justify-content: space-between;
    }
`;

export const MainSearchFilter = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin-left: 60px;
    width: 60%;

    @media (max-width: 1000px) {
        margin-left: 0px;
        align-items: center;
        width: 100%;
    }
`;

export const Title = styled.h2`
    max-width: 920px;
    font-weight: 300;
    font-size: 2.9rem;
    line-height: 66px;
    margin-bottom: 16px;

    span {
        font-weight: 700;
    }

    @media (max-width: 1000px) {
        width: 95%;
    }
`;

export const SecondaryTitle = styled.h3`
    font-weight: 600;
    font-size: 45px;
    color: #515050;
    text-align: center;

    @media (max-width: 780px) {
        width: 90%;
    }
`;

export const Subtitle = styled.p`
    font-weight: 400;
    font-size: 30px;
    color: #515050;

    @media (max-width: 1000px) {
        font-size: 25px;
    }
`;

export const JobsInfo = styled.p`
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    max-width: 796px;

    @media (max-width: 1000px) {
        margin-bottom: 80px;
    }
`;

export const Image = styled.img`
    width: 403px;
    position: absolute;
    bottom: 0px;
    right: 0px;

    @media (max-width: 1000px) {
        position: relative;
        width: 40%;
    }

    @media (max-width: 750px) {
        width: 60%;
    }
`;

export const Circle = styled.img`
    position: absolute;
    top: 0px;
    right: 0px;
`;

export const Divider = styled.div`
    width: 100%;
    height: 160px;
    border: 2px solid rgba(0, 0, 0, 0.9);
    opacity: 0.6;
`;

export const OurSitesSection = styled.section`
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-top: 180px;
    margin-bottom: 196px;
`;

export const CardWrapper = styled.div`
    display: flex;
    margin-top: 52px;
    gap: 156px;
    flex-wrap: wrap;
    justify-content: center;

    @media (max-width: 1300px) {
        gap: 90px;
    }
`;

export const JourneySection = styled.section`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin-bottom: 196px;
    width: 90%;
    margin: 0 auto 196px auto;
`;

export const JourneyContainer = styled.div`
    border: 9px solid ${({ theme }) => theme.colors.primary};
    border-radius: 16px;
    position: relative;
    padding: 0 44px;

    @media (max-width: 1200px) {
        width: 100%;
    }
`;

export const JourneyTitle = styled(SecondaryTitle)`
    font-size: 42px;
    text-align: center;
    background-color: #fff;
    padding: 0 24px;
    position: absolute;
    top: -40px;
    left: 50%;
    transform: translateX(-50%);

    @media (max-width: 650px) {
        font-size: 28px;
    }
`;

export const JourneyCardWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 38px;
    row-gap: 102px;
    margin-top: 112px;
    margin-bottom: 100px;

    @media (max-width: 650px) {
        grid-template-columns: repeat(1, minmax(0, 1fr));
        row-gap: 30px;
        gap: 30px;
    }
`;

export const AreasSection = styled.section`
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    margin-top: 120px;
    margin-bottom: 196px;
    width: 100%;

    @media (max-width: 1000px) {
        margin-top: 80px;
    }
`;

export const AreasCardWrapper = styled.div`
    display: flex;
    margin-top: 42px;
    width: 100%;
    position: relative;
    max-width: 1520px;

    .swiper-slide {
        margin-right: 15px;
        flex-shrink: unset;
    }
`;

export const CustomNextButton = styled.div`
    position: absolute;
    right: 0px;
    top: 50%;
    color: #fff;
    transform: translateY(-50%);
    width: 40px;
    height: 40px;
    background-color: rgba(0, 0, 0, 0.5);
    height: 100%;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    z-index: 998;
`;

export const CustomPrevButton = styled.div`
    position: absolute;
    left: 0px;
    top: 50%;
    color: #fff;
    transform: translateY(-50%);
    width: 40px;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    z-index: 1001;
`;

export const TestimonialSection = styled.section`
    display: flex;
    position: relative;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 100px;
    z-index: 995;
    margin-top: 180px;

    .swiper-pagination-bullet {
        width: 24px;
        height: 24px;
        background-color: #d9d9d9;
        opacity: 0.8;
        border-radius: 50%;
    }

    .swiper-pagination-bullet-active {
        background-color: ${({ theme }) => theme.colors.primary};
        opacity: 1;
    }
`;

export const TestimonialWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 997;
`;

export const VocationalBannerArea = styled.div`
    max-width: 1200px;
    height: 412px;
    margin: 100px auto;
    background-color: ${({ theme }) => theme.colors.primary};
    background-image: url(${VocationalBanner});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    border-radius: 25px;
    position: relative;

    @media (max-width: 1200px) {
        width: 95%;
        height: auto;
        padding: 50px 0;
    }
`;

export const VocationalBannerContainer = styled.div`
    display: flex;
    align-items: center;
    margin-inline: 84px;
    max-width: 100%;
    gap: 100px;
    height: 100%;

    @media (max-width: 1200px) {
        flex-direction: column;
        width: 95%;
        margin: 0;
        padding-left: 50px;
    }

    @media (max-width: 780px) {
        gap: 50px;
        padding-left: 15px;
    }
`;
export const VocationalTextContainer = styled.div`
    color: white;

    h1 {
        font-size: 90px;
        font-weight: 400;
        line-height: 90px;
        text-transform: uppercase;
    }

    span {
        font-size: 80px;
        font-weight: 700;
    }

    p {
        font-size: 20px;
    }

    p.p2 {
        font-weight: 100;
        font-size: 13px;
        line-height: 15.3px;
        position: absolute;
        bottom: 23px;
    }

    a {
        text-decoration: underline;
        font-weight: 500;
    }

    @media (max-width: 1200px) {
        align-self: flex-start;
    }

    @media (max-width: 780px) {
        h1 {
            font-size: 70px;
            line-height: 70px;
        }

        span {
            font-size: 60px;
        }
    }

    @media (max-width: 500px) {
        h1 {
            font-size: 50px;
            line-height: 50px;
        }

        span {
            font-size: 40px;
        }

        p {
            font-size: 15px;
        }
    }
`;

export const VocationalImage = styled.img`
    position: absolute;
    right: 80px;
    bottom: 0px;

    @media (max-width: 1200px) {
        position: relative;
        align-self: flex-end;
    }

    @media (max-width: 780px) {
        width: 70%;
        right: 0px;
    }
`;

export const AppBannerContainer = styled.section`
    width: 100%;
    display: flex;
    height: 550px;
    background-color: ${({ theme }) => theme.colors.primary};
    position: relative;
    margin: 0 auto;
    justify-content: center;

    @media (max-width: 1200px) {
        height: auto;
        flex-direction: column;
        padding: 50px 0 0 0;
    }
`;

export const CircleImage = styled.img`
    position: absolute;
    left: -170px;
    bottom: 40px;
    z-index: 0;
    width: 600px;
    overflow: hidden;

    @media (max-width: 1280px) {
        bottom: -200px;
    }
`;

export const AppBannerContainerInfo = styled.div`
    color: white;
    width: 100%;
    max-width: 1100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100%;
    z-index: 800;

    h1 {
        font-size: 42px;
        font-weight: 400;
        line-height: 60.51px;
    }

    span {
        font-weight: 600;
    }

    @media (max-width: 500px) {
        h1 {
            font-size: 35px;
            width: 90%;
            line-height: 50px;
        }
    }
`;

export const BannerMobileImage = styled.img`
    position: relative;
    width: 400px;
    right: 140px;
    bottom: 0;

    @media (max-width: 1200px) {
        align-self: flex-end;
        right: 0;
    }

    @media (max-width: 780px) {
        width: 50%;
        margin-top: 20px;
    }
`;

export const GooglePlayButton = styled.img`
    width: 300px;

    @media (max-width: 780px) {
        width: 200px;
    }
`;

export const Position = styled.div`
    margin-top: auto;
`
export const Row = styled.div`  
    width: 90%;
    border-top: 2px solid #979797;
    opacity: 0.2;
    margin-bottom: auto;
`
export const Copyright = styled.span`
    display: flex;
    justify-content: center;
    font-size: 14px;
    opacity: 0.65;
    padding-bottom: 20px;
`

export const MainFooter = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 60px;
    padding-bottom: 20px;

    h1 {
        font-size: 35px;
        font-weight: 700;
        color: #046AD0;
        padding-top: 80px;
    }
`