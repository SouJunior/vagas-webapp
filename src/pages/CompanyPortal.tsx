import { 
    Header,
    Main, 
    Container, 
    Footer, 
    Row,
    Grid,
    Copyright,
    ProfilePicture,
    UserButton,
    Company,
    Email,
    ArrowPicture,
    HeaderLogo,
    Position, 
    FacebookIcon, 
    InstagramIcon,
    TwitterIcon,
    YouTubeIcon,
    GitHubIcon,
    LinkedInIcon,
    DiscordIcon,
    TelegramIcon,
    UserInfo,
    JobButton
} from "./styles/CompanyPortalStyles"
import LogoImage from "../assets/imgs/logotipo-icone-extendida.svg"
import LogoImageBlue from "../assets/imgs/logo-icon-name-h.svg"
import GooglePlayImage from "../assets/imgs/googlePlay.svg"
import ArrowImage from "../assets/imgs/arrow.svg"
import PlusSignImage from "../assets/imgs/plus-sign.png"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../contexts/Auth/AuthContext"
import { useContext, useEffect, useState } from "react"
import { useApi } from "../hooks/useApi"

const CompanyPortal = () => {

    const navigate = useNavigate();
    const auth: any = useContext(AuthContext);
    const api = useApi();
    const [jobs,setJobs] = useState<any[]>([])

    useEffect(() => {
        const loadCompanyJobs = async (id: string)=> {
            const getJobsData = await api.getJobsByCompany(id);
            setJobs(getJobsData);
        }
        loadCompanyJobs(auth.user.id)
    }, [])
    
  return (
    <Container>
        <Header>
            <div>
                <HeaderLogo src={LogoImage} width="194px" height="29px" alt="logo" />
            </div>
            <UserButton>
                <a href="alterar-perfil">
                    <ProfilePicture src="https://icones.pro/wp-content/uploads/2021/02/icone-utilisateur-gris.png" 
                    alt="foto de perfil"/>
                </a>
                <UserInfo>
                    <Company>{auth.user.companyName}</Company>    
                    <Email>{auth.user.email}</Email> 
                </UserInfo>
                <ArrowPicture src={ArrowImage} alt="flecha" />
            </UserButton>        
        </Header>
        {(jobs?.length !== 0) ? 
        (<Main>
            <h2>Vagas cadastradas:</h2>
             {jobs.map ((job, index) =>
             <ul key={index}>
                <li>
                    Título da vaga: {job.title}
                </li>
                <li>
                    Pré-requisitos: {job.prerequisites}
                </li>
             </ul>)}
        </Main>):
        (<Main>
            <h1>{auth.user.companyName}, anuncie sua primeira vaga!</h1>
            <JobButton onClick={() => navigate('/insertjob')}>
                <div>
                    <img src={PlusSignImage} alt="mais" />
                </div>
                <div>
                    Anunciar vaga
                </div>
            </JobButton>
        </Main>)}
        <Position>
        <Main>
            <Row/>
        </Main>
        <Footer>
            <div>
                <img src={LogoImageBlue} width="194px" height="29px" alt="logo" />
            </div>
            <div>
                <h3>Institucional</h3>
                <ul>
                    <li>
                        <a href="https://www.soujunior.tech/">Site SouJunior</a>
                    </li>
                    <li>
                        <a href="https://mentores.soujunior.tech">Portal de mentoria</a>
                    </li>
                </ul>
            </div>
            <div>
                <h3>Empresa</h3>
                <ul>
                    <li>
                        <a href="/">Home</a>
                    </li>
                </ul>
            </div>
            <div>
            <h3>Aplicativo</h3>
                <ul>
                    <li>
                        <a href="/">
                            <img src={GooglePlayImage} alt="google play" />
                        </a>
                    </li>
                </ul>
            </div>
            <div>
                <h3>Redes sociais</h3>
                <Grid>
                    <li>
                        <a href="https://www.facebook.com/people/SouJunior/100086671131030/">
                            <FacebookIcon/>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/soujunior.tech/">
                            <InstagramIcon/>
                        </a>
                    </li>
                    <li>
                        <a href="https://twitter.com/SouJunior_Tech">
                            <TwitterIcon/>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.youtube.com/@soujuniortech">
                            <YouTubeIcon/>
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/SouJunior">
                            <GitHubIcon/>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/company/soujunior/">
                            <LinkedInIcon/>
                        </a>
                    </li>
                    <li>
                        <a href="https://discord.com/invite/soujunior-community-759176734460346423">
                            <DiscordIcon/>
                        </a>
                    </li>
                    <li>
                        <a href="https://t.me/soujuniortech">
                            <TelegramIcon/>
                        </a>
                    </li>
                </Grid>
            </div>
        </Footer>
        <Main>
            <Row/>
        </Main>
        </Position>
        <Copyright>&copy; 2023 SouJunior</Copyright>
    </Container>
  )
}

export default CompanyPortal