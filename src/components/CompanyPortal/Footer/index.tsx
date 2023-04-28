import {
    Footer,
    Grid,
    FacebookIcon,
    InstagramIcon,
    TwitterIcon,
    YouTubeIcon,
    GitHubIcon,
    LinkedInIcon,
    DiscordIcon,
    TelegramIcon, 
} from "./styles"
import LogoImageBlue from "../../../assets/imgs/logo-icon-name-h.svg"
import GooglePlayImage from "../../../assets/imgs/googlePlay.svg"

const index = () => {
  return (
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
  )
}

export default index