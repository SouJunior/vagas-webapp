import styled from 'styled-components';
import devices from '../styles/devices';

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

    @media (max-width: 1024px) {
        height: auto;
        padding-top: 80px;
        flex-direction: column;
        gap: 32px;
    }

    @media (max-width: 768px) {
        padding-top: 60px;
    }

    @media (max-width: 568px) {
        padding-top: 40px;
        height: auto;
        width: 100%;
        gap: 24px;
    }

    @media (max-width: 375px) {
        padding-top: 20px;
        width: 100%;
    }
`;

export const MainContent = styled.div`
    width: 100%;
    max-width: 1400px;
    display: flex;
    align-items: center;
    height: 100%;

    @media (max-width: 1024px) {
        height: auto;
        flex-direction: column;
        justify-content: space-between;
        gap: 20px;
    }

    @media (max-width: 568px) {
        padding: 0 16px;
        gap: 16px;
    }
`;

export const MainSearchFilter = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2.5rem;
    width: 60%;

    margin: 1rem; // Margin para não grudar conteúdo nos cantos
    
    @media (max-width: 768px) {
        width: 80%;
        gap: 2rem;

        margin-top: 5rem;
    }

    @media (max-width: 568px) {
        width: 100%;
        gap: 1.5rem;
    }
`;

export const Title = styled.h2`
    max-width: 100%;
    font-weight: 300;
    font-size: 2.9rem;

    span {
        font-weight: 700;
    }

    

    @media (max-width: 568px) {
        font-size: 2rem;
        line-height: 2.5rem;
    }

    @media (max-width: 375px) {
        font-size: 1.6rem;
        line-height: 2rem;
    }
`;

export const SecondaryTitle = styled.h3`
    font-weight: 600;
    font-size: 45px;
    color: #515050;
    text-align: center;

    @media (max-width: 780px) {
        width: 90%;
        font-size: 36px;
    }

    @media (max-width: 568px) {
        width: 80%;
        font-size: 28px;
    }

    @media (max-width: 375px) {
        width: 90%;
        font-size: 24px;
    }
`;

export const JobsInfo = styled.p`
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    max-width: 796px;
    text-align: center;

    @media (max-width: 1024px) {
        font-size: 14px;
    }

    @media (max-width: 568px) {
        width: 90%;
        font-size: 12px;
        line-height: 1.5rem;
    }

    @media (max-width: 375px) {
        font-size: 11px;
        line-height: 1.4rem;
    }
`;

export const Image = styled.img`
    width: 403px;
    position: absolute;
    
    right: 0px;
    margin-bottom: 4rem;

    @media (max-width: 1024px) {
        position: relative;
        width: 40%;
        margin-bottom: 2rem;
    }

    @media (max-width: 750px) {
        width: 35%;
        margin-bottom: 1.5rem;
    }

    @media (max-width: 568px) {
        display: none;
    }

    
`;


export const Circle = styled.img`
    position: absolute;
    top: 0px;
    right: 0px;
    @media (max-width: 568px) {
        top:-32px;
    }
`;

export const CircleImage = styled.img`
    position: absolute;
    left: -13%;
    bottom: -15%;
    z-index: 0;
    width: 80%;
    overflow: hidden;

    @media (max-width: 1280px) {
        bottom: -2%;
        width:60%;
    }
    
    @media(max-width: 1024px) {
        bottom: -2%;
        width: 60%;
    }

    @media (max-width: 750px) {
        bottom: 7%;
    }

    @media (max-width: 568px) {
        bottom: 17%;
        left: 0px;
        width:300px;
    }

    @media (max-width: 375px) {
        width: 320px;
    }

    @media (max-width: 320px) {
        width: 200px;
        height: 200px;
        position: absolute;
        top: 20rem;
        left: -3rem;
        overflow: hidden;
    }
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
    gap:24px;
    margin-bottom: 89px;

    @media (max-width: 1024px) {
        margin: 80px 0 4.5rem;
    }

    @media (max-width: 568px) {
        h3: first-of-type {
            width: 272;
            height: 117;
            position: relative;
            bottom: 40px;
            display: flex;
            flex-direction: column;
            align-items: center;
        }
    }

    @media (max-width: 320px) {
        width: 90vw;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    @media ${devices.mobileS} {
        .SecondaryTitle2 {

            position: relative;
            top: -100px;
            left: 16px;
            line-height: 35px;
        }
    }
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

    @media (max-width: 568px) {
        width: 560px;
        position: relative;
        top: 40px;
        margin-bottom: 50px;
    }

    @media ${devices.mobileS} {
       width: 320px;
       position: relative;
       left: 16px;
       top: -10px;
    }
`;

export const JourneySection = styled.section`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    width: 90%;
    margin: 0 auto 196px auto;
`;

export const JourneyContainer = styled.div`
    border: 9px solid ${({ theme }) => theme.colors.primary};
    border-radius: 16px;
    position: relative;
    padding: 0 0.5rem;

    @media (max-width: 1200px) {
        width: 100%;
    }

    @media (max-width: 568px) {
        width: 550px;
        height: 482px;
        border-radius: 32px;
        position: relative;
        top: 60px;
    }

    @media (max-width: 375px) {
        width: 360px;
    }

    @media (max-width: 320px) {
        width: 290px;
        height: 400px;
        position: relative;
        top: -70px;
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
        top: -50px;
        font-size: 38px;
    }

    @media (max-width: 568px) {
        position: relative;
        top: -70px;
        width: 500px;
        width: 300px;
        height: 86px;
        border-radius: 16px;
        padding: 4px 8px 4px 8px;
        gap: 10px;
    }

    @media (max-width: 375px) {
        width: 260px;
        font-size: 28px;
    }

    @media (max-width: 415px) {
        font-size: 32px;
        width: 340px;
    }

    @media (max-width: 320px) {
        width: 250px;
        font-size: 32px;
    }
`;

export const JourneyCardWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 38px;
    row-gap: 102px;
    margin-top: 112px;
    margin-bottom: 2rem;

    @media (max-width: 650px) {
        grid-template-columns: repeat(1, minmax(0, 1fr));
        row-gap: 30px;
        gap: 30px;
    }

    @media (max-width: 568px) {
        width: 380px;
        height: 364px;
        position: relative;
        bottom: 100px;
    }

    @media (max-width: 375px) {
        width: 300px;
    }

    @media (max-width: 320px) {
        position: relative;
        width: 240px;
        bottom: 140px;
        font-size: 4px;
    }

    @media (max-width: 415px) {
        width: 340px;
    }
`;

export const AreasCardWrapper = styled.div`
    display: flex;
    margin-top: 42px;
    width: 100%;
    position: relative;
    max-width: 1520px;
    cursor: pointer;

    .swiper-slide {
        margin-right: 15px;
        flex-shrink: unset;
    }

    @media (max-width: 568px) {
        width: 568px;
        height: 100px;
        margin-top: 220px;
        gap: 8px;
    }

    @media (max-width: 375px) {
        position: relative;
        top: 40px;
    }

    @media (max-width: 320px) {
        width: 300px;
        height: 100px;
        position: relative;
        top: -80px;
    }

    @media (max-width: 320px) {
        .wiperSlide {
            width: 70px;
            height: 60px;
        }
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
    
    @media ${devices.mobileS && devices.mobileM && devices.mobileL && devices.tablet} {
        margin-top: 80px;
    
    }

    .swiper-pagination-bullet {
        //Bolinhas de rolamento da sessão de depoimentos
        width: 24px;
        height: 24px;
        background-color: #d9d9d9;
        opacity: 0.8;
        border-radius: 50%;

        @media ${devices.mobileS} {
            width: 16px;
            height: 16px;
            position: relative;
            bottom: 34rem;
        }
    }

    .swiper-pagination-bullet-active {
        background-color: ${({ theme }) => theme.colors.primary};
        opacity: 1;
    }

    @media ${devices.mobileS} {
        max-width: 320px;
        position: relative;
        bottom: 5rem;
    }
`;

export const TestimonialWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 997;

    @media ${devices.mobileS} {
        max-width: 320px;
    }
`;

export const VocationalBannerArea = styled.div`
    max-width: 1200px;
    width: 95%;
    height: 412px;
    margin: 80px auto 0 auto;
    background-color: ${({ theme }) => theme.colors.primary};
    background-image: url('/assets/VocationalBanner.svg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    border-radius: 25px;
    position: relative;

    @media (max-width: 1200px) {
        height: auto;
        padding: 1.1rem 0;
    }

    @media ${devices.mobileS} {
        position: relative;
        top: -70px;
    }
`;

export const VocationalBannerContainer = styled.div`
    display: flex;
    align-items: center;
    max-width: 100%;
    gap: 100px;
    height: 100%;
    padding: 15px;

    @media ${devices.laptop} {
        margin: 0;
        flex-direction: column;
        gap: 0px;
    }

    @media ${devices.tablet} {
        gap: 50px;
        padding-left: 15px;
    }

    @media (max-width: 568px) {
        display: flex;
        align-items: center;
        width: 1500px;
    }
    
    @media  ${devices.mobileS} {
        display: flex;
        align-items: center;
        width: 310px;
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
        font-size: 70px;
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

        @media (max-width: 320px) {
            font-size: 10px;
        }
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

    @media (max-width: 540px) {
        h1 {
            font-size: 50px;
            line-height: 50px;
        }

        span {
            font-size: 40px;
        }

        p {
            font-size: 1.5rem;
        }

        .mb-24 {
            position: relative;
            bottom: 130px;
        }

        .p2 {
            position: relative;
        }

        @media (max-width: 320px) {
            .p2 {
                min-width: 180px;
                font-size: 10px;
            }
        }

        @media (max-width: 320px) {
            .p2 {
                min-width: 180px;
                font-size: 1px;
                position: relative;
            }
        }
    }
`;
export const VocationalImageWrapper = styled.div`
    align-self: flex-end;
    @media ${devices.laptop} {
        display:flex;
        align-items: center;
        justify-content: flex-end;
        min-width: 100%;
    }
`
export const VocationalImage = styled.img`
    
    @media (max-width: 780px) {
        width: 45%;
    }

    @media (max-width: 568px) {
        height: 130px;
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

    @media (max-width: 320px) {
        width: 320px;
        height: 650px;
        position: relative;
        bottom: 30px;
    }

    .CircleImage {
        @media (max-width: 320px) {
            width: 130px;
            height: 134px;
            position: relative;
        }
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

        @media (max-width: 320px) {
            width: 320px;
            height: 150px;
            position: relative;

            bottom: 110px;
            font-size: 10px;
        }
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

    @media (max-width: 320px) {
        h1 {
            font-size: 30px;
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

    @media (max-width: 320px) {
        width: 160px;
        height: 270px;
        position: relative;
        top: 30px;
    }
`;

export const GooglePlayButton = styled.img`
    width: 300px;

    @media (max-width: 780px) {
        width: 200px;
    }

    @media (max-width: 320px) {
        width: 124px;
        height: 38px;
        display: flex;
        justify-content: column;
        align-items: center;
        position: relative;
        top: 105px;
    }
`;
