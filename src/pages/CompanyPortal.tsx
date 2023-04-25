import { 
    Header,
    Main, 
    Container, 
    Footer, 
    Row,
    Grid, 
    FacebookIcon, 
    InstagramIcon,
    TwitterIcon,
    YouTubeIcon,
    GitHubIcon,
    LinkedInIcon,
    DiscordIcon,
    TelegramIcon
} from "./styles/CompanyPortalStyles"
import LogoImage from "../assets/imgs/logotipo-icone-extendida.svg"
import LogoImageBlue from "../assets/imgs/logo-icon-name-h.svg"

const CompanyPortal = () => {
  return (
    <Container>
        <Header>
            <div>
                <img src={LogoImage} width="194px" height="29px" alt="logo" />
            </div>
            <div>
                <img src="" alt="usuário" />
                <button>
                    empresa
                </button>
            </div>        
        </Header>
        <Main>
            <h1>Nome da empresa, anuncie sua primeira vaga!</h1>
            <button>
                Cadastrar vagas
            </button>
        </Main>
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
                        <a href="">Site SouJunior</a>
                    </li>
                    <li>
                        <a href="pendente">Portal de mentoria</a>
                    </li>
                </ul>
            </div>
            <div>
                <h3>Empresa</h3>
                <ul>
                    <li>
                        <a href="">Home</a>
                    </li>
                </ul>
            </div>
            <div>
            <h3>Aplicativo</h3>
                <ul>
                    <li>
                        <a href="pendente">Imagem</a>
                    </li>
                </ul>
            </div>
            <div>
                <h3>Redes sociais</h3>
                <Grid>
                    <li>
                        <a href="">
                            <FacebookIcon/>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <InstagramIcon/>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <TwitterIcon/>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <YouTubeIcon/>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <GitHubIcon/>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <LinkedInIcon/>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <DiscordIcon/>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <TelegramIcon/>
                        </a>
                    </li>
                </Grid>
            </div>
        </Footer>
        <Main>
            <Row/>
        </Main>
    </Container>
  )
}

export default CompanyPortal