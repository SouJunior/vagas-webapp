import { useState, useEffect } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { useApi } from '../hooks/useApi';

import {
    Title,
    Main,
    JobsInfo,
    MainSearchFilter,
    Image,
    OurSitesSection,
    CardWrapper,
    VocationalBannerArea,
    VocationalBannerContainer,
    VocationalImage,
    VocationalTextContainer,
    TestimonialSection,
    TestimonialWrapper,
    CircleImage,
    Circle,
    MainContent,
    SecondaryTitle,
    VocationalImageWrapper,
} from './styles/Home.styles';

import OurSitesCard from '../components/Home/OurSitesSection/OurSites';

import ImageHome from '../assets/imgs/home-image.svg';
import PortalMentoria from '../assets/imgs/portalMentoria-img.svg';
import Site from '../assets/imgs/siteSouJunior-img.svg';
import NosAcompanhe from '../assets/imgs/followUs-img.svg';
import VocationalTest from '../assets/imgs/vocational-teste.svg';
import doubleCircles from '../assets/imgs/DoubleCircle.svg';
import circle from '../assets/imgs/circle.svg';

import Testimonials from '../components/Home/Testimonials';
import JobFilter from '../components/Home/HomeJobFilter';
import { Testimonial } from '../Mocks/Testimonial';
import { TestimonialType } from '../@types/testimonial-type';
import JourneySection from '../components/JourneySection/index';
import useJobs from '../hooks/useJobs';
import Loading from '../components/Loading';

export interface AreaProps {
    id: string;
    name: string;
    icon: React.ReactNode;
}

SwiperCore.use([Navigation, Autoplay]);

export const Home: React.FC = () => {
    const { filteredJobsCount } = useJobs();

    return (
        <>
            <Main>
                <MainContent>
                    <MainSearchFilter>
                        <Title>
                            Um portal de vagas <span>exclusivo</span> para
                            profissionais <span>em início de carreira!</span>
                        </Title>

                        <JobFilter />

                        <JobsInfo>
                            Mais de {filteredJobsCount} vagas disponíveis para
                            você!
                        </JobsInfo>
                    </MainSearchFilter>
                    <Image src={ImageHome}></Image>
                </MainContent>
                <Circle src={circle} />
                <CircleImage src={doubleCircles} />
            </Main>



            <OurSitesSection>
                <SecondaryTitle className="SecondaryTitle2">
                    Seja o profissional que as empresas desejam
                </SecondaryTitle>

                <CardWrapper>
                    <OurSitesCard
                        Link="https://mentores.soujunior.tech/"
                        Title="Portal de Mentoria"
                        Img={PortalMentoria}
                        Description="Seja mentorado por um profissional experiente."
                    />
                    <OurSitesCard
                        Link="https://docs.google.com/forms/d/e/1FAIpQLSd1IspO3Hwylce2kHtIsmyBAkH7p3VFmdYUmdL75YXZ-DSNBA/viewform"
                        Title="SouJunior Labs"
                        Img={NosAcompanhe}
                        Description="Aqui você conseguirá por em prática seus conhecimentos, participando de projetos."
                    />
                </CardWrapper>
            </OurSitesSection>

            <JourneySection />

            
            <VocationalBannerArea>
                <VocationalBannerContainer>
                    <VocationalTextContainer>
                        <h1>
                            TESTE <br />
                            <span>VOCACIONAL</span>
                        </h1>
                        <p className='mb-10'>
                            <a
                                href="https://www.thecareertest.org/?gad_source=1&gclid=CjwKCAjwhvi0BhA4EiwAX25uj26Id5ReMCx95jSfAa3hWvO0kNaf1tbYa34D6la9EJNiCF49uKDaXRoCCakQAvD_BwE"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Clique Aqui
                            </a>{' '}
                            e faça o seu teste agora mesmo!
                        </p>
                        <p className="p2">*Seu teste será feito no thecareertest.org</p>
                    </VocationalTextContainer>
                    <VocationalImageWrapper>
                        <VocationalImage src={VocationalTest} alt="" />
                    </VocationalImageWrapper>
                </VocationalBannerContainer>
            </VocationalBannerArea>

            {/* <JourneySection>
                <JourneyContainer>
                    <JourneyTitle>Vamos juntos nessa jornada</JourneyTitle>
                    <JourneyCardWrapper>
                        {Journey.map((journey) => (
                            <div key={journey.Id} tabIndex={0} role="button">
                                <JourneyCard
                                    Img={journey.Img}
                                    Description={journey.Description}
                                />
                            </div>
                        ))}
                    </JourneyCardWrapper>
                </JourneyContainer>
            </JourneySection> */}

            {/* <AppBannerContainer>
                <AppBannerContainerInfo>
                    <h1>
                        Baixe nosso aplicativo
                        <br />
                        no seu dispositivo <span>Android</span>
                        <br />
                        e fique por dentro das <br />
                        novidades!
                    </h1>
                    <a
                        href="https://play.google.com/store/apps?hl=pt_BR&gl=US"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <GooglePlayButton src={googlePlayBadge} />
                    </a>
                </AppBannerContainerInfo>
                <BannerMobileImage src={BannerMobile} />
                <CircleImage src={doubleCircles} />
            </AppBannerContainer> */}

            <TestimonialSection>
                <Swiper
                    modules={[Autoplay, Pagination]}
                    loop
                    centeredSlides={true}
                    spaceBetween={100}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                        bulletClass: 'swiper-pagination-bullet',
                    }}
                    style={{
                        width: '95%',
                        maxWidth: '1080px',
                        height: 'auto',
                        margin: '0 auto',
                        padding: '80px 0',
                    }}
                    className="mySwiper"
                >
                    <TestimonialWrapper>
                        {Testimonial.map((deposition: TestimonialType) => (
                            <SwiperSlide key={deposition.Author}>
                                <Testimonials
                                    Text={deposition.Text}
                                    Author={deposition.Author}
                                    Workplace={deposition.Workplace}
                                    Profile={deposition.Profile}
                                />
                            </SwiperSlide>
                        ))}
                    </TestimonialWrapper>
                </Swiper>
            </TestimonialSection>
        </>
    );
};
