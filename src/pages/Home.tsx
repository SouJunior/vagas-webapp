import { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import { CaretLeft, CaretRight } from '@phosphor-icons/react';

import { AuthContext } from '../contexts/Auth/AuthContext';
import { useApi } from '../hooks/useApi';

import {
    NavBar,
    LoginButton,
    Title,
    NavTitle,
    RegisterButton,
    Main,
    Input,
    SearchButton,
    Form,
    JobsInfo,
    MainSearchFilter,
    Image,
    OurSitesSection,
    CardWrapper,
    FormWrapper,
    JourneySection,
    JourneyTitle,
    JourneyImage,
    JourneyCardWrapper,
    AreasSection,
    AreasCardWrapper,
    CustomNextButton,
    CustomPrevButton,
} from './styles/Home.styles';

import OurSitesCard from '../components/Home/OurSites';
import JourneyCard from '../components/Home/JourneyCard';

import LogoName from '../assets/imgs/logo-icon-name-h.svg';
import ImageHome from '../assets/imgs/home-image.svg';
import PortalMentoria from '../assets/imgs/portalMentoria-img.svg';
import Site from '../assets/imgs/siteSouJunior-img.svg';
import NosAcompanhe from '../assets/imgs/followUs-img.svg';
import TimeColaborativo from '../assets/imgs/colaborativeTeam-img.svg';
import Linkedin from '../assets/imgs/linkedin-rectangle.png';
import Resume from '../assets/imgs/resume-rectangle.png';
import Process from '../assets/imgs/process-rectangle.png';
import KeyWords from '../assets/imgs/keyWords-rectangle.png';
import TechnologyAreaCard from '../components/Home/TechnologyArea/TechnologyAreaCard';
import AreaModal from '../components/Home/TechnologyArea/ModalAreas';
import { Areas } from '../Mocks/MockArea';
import { ModalInfo } from '../Mocks/MockInfoModal';

interface AreaProps {
    id: string;
    name: string;
    icon: React.ReactNode;
}

export const Home: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [active, setActive] = useState(false);
    const [jobsCount, setJobsCount] = useState<number>();
    const [selectedArea, setSelectedArea] = useState<string | null>(null);

    const { setIsLogin } = useContext(AuthContext);

    const api = useApi();
    const navigate = useNavigate();

    useEffect(() => {
        async function getJobs() {
            const jobsData = await api.getJobs();
            if (jobsData.meta) {
                setJobsCount(jobsData.meta.itemCount);
            }
        }
        getJobs();

        const handleScroll = () => {
            const scrollTop = window.pageYOffset;
            scrollTop > 100 ? setActive(true) : setActive(false);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    function handleRegisterClick() {
        navigate('/login');
        setIsLogin(false);
    }

    function handleLoginClick() {
        navigate('/login');
        setIsLogin(true);
    }

    const handleSubmit = (event: any) => {
        event.preventDefault();
        navigate(`/feedvagas?searchTerm=${searchTerm}`);
    };

    const handleCardClick = (id: string) => {
        setSelectedArea(id);
        document.body.style.overflow = 'hidden';
    };

    const handleCloseModal = () => {
        setSelectedArea(null);
        document.body.style.overflow = 'auto';
    };

    const breakpoints = {
        320: {
            slidesPerView: 3,
        },
        480: {
            slidesPerView: 5,
        },
        768: {
            slidesPerView: 7,
        },
        1024: {
            slidesPerView: 7,
        },
        1440: {
            slidesPerView: 9,
        },
    };

    return (
        <>
            <NavBar active={active}>
                <NavTitle>
                    <a href="https://www.soujunior.tech/">
                        <img
                            src={LogoName}
                            alt="Logo SouJunior"
                            width={200}
                            height={200}
                        />
                    </a>
                </NavTitle>
                <NavTitle>
                    <RegisterButton
                        onClick={handleRegisterClick}
                        active={active}
                    >
                        Cadastre-se
                    </RegisterButton>
                    <LoginButton onClick={handleLoginClick} active={active}>
                        Login
                    </LoginButton>
                </NavTitle>
            </NavBar>
            <Main active={active}>
                <MainSearchFilter>
                    <Title>
                        Um portal de vagas exclusivo para o profissional
                        Júnior!!
                    </Title>
                    <FormWrapper active={active}>
                        <Form onSubmit={handleSubmit}>
                            <Input
                                type="text"
                                onChange={(event) =>
                                    setSearchTerm(event.target.value)
                                }
                                active={active}
                                placeholder="Digite o cargo, tipo de contrato ou localidade desejados"
                            />
                            <SearchButton
                                type="submit"
                                onClick={() =>
                                    window.scrollTo({
                                        top: 0,
                                        left: 0,
                                        behavior: 'smooth',
                                    })
                                }
                                active={active}
                            >
                                Buscar Vaga
                            </SearchButton>
                        </Form>
                    </FormWrapper>
                    <JobsInfo>
                        Mais de {jobsCount} vagas disponíveis para Juninhos{' '}
                    </JobsInfo>
                </MainSearchFilter>
                <Image src={ImageHome}></Image>
            </Main>
            <OurSitesSection>
                <Title>Seja o Júnior que as empresas desejam:</Title>
                <CardWrapper>
                    <OurSitesCard
                        Link="http://mentores.soujunior.tech/"
                        Title="Portal de Mentoria"
                        Img={PortalMentoria}
                        Description="Seja mentorado por um profissional experiente."
                    />
                    <OurSitesCard
                        Link="https://www.soujunior.tech/"
                        Title="Site SouJunior"
                        Img={Site}
                        Description="Conheça todas as iniciativas da SouJunior"
                    />
                    <OurSitesCard
                        Link="https://www.youtube.com/@soujuniortech"
                        Title="Nos Acompanhe"
                        Img={NosAcompanhe}
                        Description="Conheça todas as nossas redes e portais de comunicação"
                    />
                </CardWrapper>
            </OurSitesSection>
            <JourneySection>
                <JourneyTitle>Vamos juntos nessa jornada</JourneyTitle>
                <JourneyImage src={TimeColaborativo} />
                <JourneyCardWrapper>
                    <JourneyCard
                        Img={Linkedin}
                        Description={'Se destaque no Linkedin'}
                    />
                    <JourneyCard
                        Img={Resume}
                        Description={'Como construir um currículo Júnior'}
                    />
                    <JourneyCard
                        Img={Process}
                        Description={'Se prepare para o processo seletivo'}
                    />
                    <JourneyCard
                        Img={KeyWords}
                        Description={'Palavras Chave na área tech'}
                    />
                </JourneyCardWrapper>
            </JourneySection>
            <AreasSection>
                <Title>Conheça um pouco mais das áreas de Tecnologia</Title>
                <AreasCardWrapper>
                    <Swiper
                        modules={[Navigation]}
                        breakpoints={breakpoints}
                        navigation={{
                            nextEl: '.swiper-next-button',
                            prevEl: '.swiper-prev-button',
                        }}
                        className="mySwiper"
                        style={{
                            width: '100%',
                            maxWidth: 'screen-width',
                            paddingLeft: '74px',
                            paddingRight: '40px',
                        }}
                    >
                        <CustomPrevButton className="swiper-prev-button">
                            <CaretLeft size={42} />
                        </CustomPrevButton>
                        {Areas.map((area: AreaProps) => (
                            <SwiperSlide key={area.name}>
                                <div>
                                    <TechnologyAreaCard
                                        onClick={() => {
                                            handleCardClick(area.id);
                                        }}
                                        icon={area.icon}
                                        area={area.name}
                                    />
                                </div>
                            </SwiperSlide>
                        ))}
                        <CustomNextButton className="swiper-next-button">
                            <CaretRight size={42} />
                        </CustomNextButton>
                    </Swiper>

                    {selectedArea !== null && (
                        <AreaModal
                            title={ModalInfo[selectedArea].title}
                            description={ModalInfo[selectedArea].description}
                            source={ModalInfo[selectedArea].source}
                            onClose={handleCloseModal}
                        />
                    )}
                </AreasCardWrapper>
            </AreasSection>
        </>
    );
};
