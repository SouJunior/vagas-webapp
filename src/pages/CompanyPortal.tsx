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
    UserInfo
} from "./styles/CompanyPortalStyles"
import LogoImage from "../assets/imgs/logotipo-icone-extendida.svg"
import LogoImageBlue from "../assets/imgs/logo-icon-name-h.svg"
import GooglePlayImage from "../assets/imgs/googlePlay.svg"
import ArrowImage from "../assets/imgs/arrow.svg"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../contexts/Auth/AuthContext"
import { useContext } from "react"

const CompanyPortal = () => {

    const navigate = useNavigate();
    const auth: any = useContext(AuthContext);

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
        <Main>
            <h1>{auth.user.companyName}, anuncie sua primeira vaga!</h1>
            <button onClick={() => navigate('/insertjob')}>
                Cadastrar vagas
            </button>
        </Main>
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
                        <a href="mentores.soujunior.tech">Portal de mentoria</a>
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
                        <a href="appmobile">
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