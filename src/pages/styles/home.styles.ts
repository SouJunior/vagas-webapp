import  styled, { css }  from 'styled-components'
import VocationalBanner from '../../assets/imgs/VocationalBanner.svg'


interface Props {
    active: boolean;
}


export const Main = styled.main<Props>`
    color: #fff;
    display: flex;
    padding-top: 120px;
    height: 678px;
    gap: 48px;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.colors.primary};
    text-align: center;

    ${({ active }) => active && css`
    `}
`;

export const MainContent = styled.div`
    width: 100%;
    max-width: 1400px;
    position: relative;
    display: flex;
    align-items: center;
    height: 100%;
`;

export const MainSearchFilter = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin-left: 60px;
`;

export const Title = styled.h2`
    max-width: 920px;
    font-weight: 300;
    font-size: 55px;
    line-height: 66px;
    margin-bottom: 16px;

    span {
        font-weight: 700;
    }
`;

export const JobsInfo = styled.p`
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    max-width: 796px;
`;

export const Image = styled.img`
    width: 403px;
    position: absolute;
    bottom: 0px;
    right: 0px;
`;

export const Circle = styled.img`
    position: absolute;
    top: 0px;
    right: 0px;
`

export const Divider = styled.div`
    width: 100%;
    height: 160px;
    border: 2px solid rgba(0, 0, 0, 0.9);
    opacity: 0.6;
`;

export const OurSitesSection  = styled.section`
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
`;

export const JourneySection = styled.section`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin-bottom: 196px;
    `;
    
export const JourneyContainer = styled.div`
    border: 9px solid ${({ theme }) => theme.colors.primary};
    border-radius: 16px;
    position: relative;
    padding: 0 44px;
`;

export const JourneyTitle = styled(Title)`
     font-size: 42px;
     text-align: center;
     background-color: #fff;
     padding: 0 24px;
     position: absolute;
     top: -24px;
     left: 50%;
     transform: translateX(-50%);
`;


export const JourneyCardWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 38px;
    row-gap: 102px;
    margin-top: 112px;
    margin-bottom: 100px;
`;

export const AreasSection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 196px;
    width: 100%;
`;

export const AreasCardWrapper = styled.div`
    display: flex;
    margin-top: 42px;
    width: 100%;
    position: relative;
    max-width: 1520px;
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
        background-color: #D9D9D9;
        opacity: 0.8;
        border-radius: 50%;
      }
    
      .swiper-pagination-bullet-active {
        background-color: ${({ theme }) => theme.colors.primary};
        opacity: 1;
      }
`

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
`

export const VocationalBannerContainer = styled.div `
    display: flex;
    align-items: center;
    margin-inline: 84px;
    max-width: 100%;
    gap: 100px;
    height: 100%;
`
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
    
`


export const VocationalImage = styled.img`
     position: absolute;
     right: 80px;
     bottom: 0px;
`

export const AppBannerContainer = styled.section`
    max-width: 1640px;
    width: 100%;
    display: grid;
    grid-template-columns: 1600px 1fr;
    height: 550px;
    background-color: ${({ theme }) => theme.colors.primary};
    position: relative; 
`;

export const CircleImage = styled.img`
    position: absolute;
    left: -170px;
    bottom: -200px;
    z-index: 700; 
    width: 600px;
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
`;

export const BannerMobileImage = styled.img`
    position: absolute;
    width: 400px;
    right: 140px;
    bottom: 0;
`;

export const GooglePlayButton = styled.img`
    width: 300px;
`;

