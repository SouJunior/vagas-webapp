import { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

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
    Divider,
    OurSitesSection,
    CardWrapper,
    FormWrapper,
} from './styles/home.styles';

import LogoName from '../assets/imgs/logo-icon-name-h.svg';
import ImageHome from '../assets/imgs/home-image.svg';
import OurSitesCard from '../components/Home/OurSites';
import PortalMentoria from '../assets/imgs/portalMentoria-img.svg';
import Site from '../assets/imgs/siteSouJunior-img.svg';
import NosAcompanhe from '../assets/imgs/followUs-img.svg';

export const Home: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [active, setActive] = useState(false);
    const [jobsCount, setJobsCount] = useState<number>();
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
            <Main>
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
            <Divider />
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
            <Divider />
        </>
    );
};
