import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { useApi } from '../hooks/useApi';

import {
    OurSitesSection,
    CardWrapper,
    VocationalBannerArea,
    VocationalBannerContainer,
    VocationalImage,
    VocationalTextContainer,
    TestimonialSection,
    TestimonialWrapper,
    SecondaryTitle,
    VocationalImageWrapper,
} from './styles/Home.styles';

import OurSitesCard from '../components/Home/OurSitesSection/OurSites';

import Blog from '../assets/imgs/blogSouJunior-img.svg';
import NosAcompanhe from '../assets/imgs/followUs-img.svg';
import VocationalTest from '../assets/imgs/vocational-teste.svg';

import Testimonials from '../components/Home/Testimonials';

import { Testimonial } from '../Mocks/Testimonial';
import { TestimonialType } from '../@types/testimonial-type';
import JourneySection from '../components/JourneySection/index';
import useJobs from '../hooks/useJobs';

import heroHome from '../assets/imgs/hero-home.svg';
import decorateHome from '../assets/imgs/decorate-home.svg';
import { Button } from '../components/Ui/ButtonUi/Button';

export interface AreaProps {
    id: string;
    name: string;
    icon: React.ReactNode;
}

SwiperCore.use([Navigation, Autoplay]);

export const Home: React.FC = () => {
    const [isVisible, setIsVisible] = React.useState<boolean>(false);
    const { filteredJobsCount } = useJobs();

    React.useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <>
            <main className="bg-blue-lightTransparent p-4 md:py-6 lg:p-8 lg:pb-0 ">
                <div
                    className={`max-w-[1440px] m-[0_auto] relative transition-all duration-700 ease-out
                                ${
                                    isVisible
                                        ? 'opacity-100 translate-y-0'
                                        : 'opacity-0 translate-y-4'
                                }`}
                >
                    <p className="text-blue-dark200 font-canada text-base md:text-xl font-medium">
                        Para empresas
                    </p>
                    <div className="flex flex-col items-center lg:flex-row-reverse lg:justify-between lg:pl-[117px] ">
                        <div className="flex justify-center  items-end p-0 mb-4 md:mb-0 mt-5 md:mt-4  lg:items-end  lg:h-[416px] ">
                            <img
                                className="ml-10 lg:w-[450px]  object-cover"
                                src={heroHome}
                                alt="Mulher branca em pé, sorrindo e olhando para a direita, segurando um notebook nas mãos"
                            />
                        </div>

                        <div className="flex flex-col justify-center items-center lg:items-start pt-4 md:pt-9 lg:pt-0 max-w-[500px]">
                            <h1 className="font-canada text-xl md:text-4xl lg:text-[40px] text-center lg:text-left font-semibold text-blue-dark300">
                                Sua empresa com os maiores talentos da área!
                            </h1>

                            <p className="mt-2 md:mt-4 lg:mt-[18px]  text-center lg:text-left font-canada font-normal text-sm md:text-base text-blue-dark200">
                                Um portal de juniores para seu banco de
                                talentos.
                                <br />
                                <span className="font-semibold">
                                    Cadastre-se agora mesmo!
                                </span>
                            </p>

                            <div className="flex justify-center lg:justify-start">
                                <Button
                                    intent="primary"
                                    className="mt-4  lg:mt-8"
                                >
                                    quero contratar
                                </Button>
                            </div>
                        </div>
                    </div>
                    <img
                        src={decorateHome}
                        alt=""
                        className="absolute top-0 left-[45%] hidden lg:block "
                    />
                </div>
            </main>

            <VocationalBannerArea>
                <VocationalBannerContainer>
                    <VocationalTextContainer>
                        <h1>
                            TESTE <br />
                            <span>VOCACIONAL</span>
                        </h1>
                        <p className="mb-10">
                            <a
                                href="https://especiais.g1.globo.com/educacao/guia-de-carreiras/teste-vocacional/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Clique Aqui
                            </a>{' '}
                            e faça o seu teste agora mesmo!
                        </p>
                        <p className="p2">*Seu teste será feito no g1.com</p>
                    </VocationalTextContainer>
                    <VocationalImageWrapper>
                        <VocationalImage src={VocationalTest} alt="" />
                    </VocationalImageWrapper>
                </VocationalBannerContainer>
            </VocationalBannerArea>

            <OurSitesSection>
                <SecondaryTitle className="SecondaryTitle2">
                    Seja o profissional que as empresas desejam
                </SecondaryTitle>

                <CardWrapper>
                    <OurSitesCard
                        Link="https://blog.soujunior.tech/"
                        Title="Blog da SouJunior"
                        Img={Blog}
                        Description="Conheça nossos artigos."
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
