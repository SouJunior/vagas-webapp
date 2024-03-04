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
} from './styles';
import LogoImageBlue from '../../../assets/imgs/logo-icon-name-h.svg';

const Index = () => {

    const handleScrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleKeyPress = (event: React.KeyboardEvent) => {
        // Check if the key pressed is 'Enter' or 'Space'
        if (event.key === 'Enter' || event.key === ' ') {
            handleScrollToTop();
        }
    };

    return (
        <Footer>
            <div className="mobile-wrapper">
                <div>
                    <button onClick={handleScrollToTop} onKeyDown={handleKeyPress} tabIndex={0}>
                        <img
                            src={LogoImageBlue}
                            width="194px"
                            height="29px"
                            alt="logo"
                        />
                    </button>
                </div>
                <div>
                    <h2>#MovimentoSouJunior</h2>
                </div>
                <div>
                    <p>
                        A SouJunior ajuda você a encontrar um lugar de destaque
                        para sua primeira experiência profissional!
                    </p>
                </div>
                <div>
                    <small>
                        @ 2023 SouJunior Todos os direitos reservados.
                    </small>
                </div>
                    <ul className='contacts'>
                        <li>
                            <a href="https://www.instagram.com/soujunior.tech/">
                                <InstagramIcon />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.facebook.com/people/SouJunior/100086671131030/">
                                <FacebookIcon />
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/SouJunior">
                                <GitHubIcon />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/company/soujunior/">
                                <LinkedInIcon />
                            </a>
                        </li>
                        <li>
                            <a href="https://discord.com/invite/soujunior-community-759176734460346423">
                                <DiscordIcon />
                            </a>
                        </li>
                    </ul>
            </div>

            <div className="desktop-wrapper">
                <div style={{cursor: 'pointer'}}>
                    <button onClick={handleScrollToTop} onKeyDown={handleKeyPress} tabIndex={0}>
                        <img
                            src={LogoImageBlue}
                            width="194px"
                            height="29px"
                            alt="logo"
                        />
                    </button>
                </div>
                <div>
                    <h3>Institucional</h3>
                    <ul>
                        <li>
                            <a href="https://www.soujunior.tech/">
                                SouJunior Tech
                            </a>
                        </li>
                        {/* <li>
                            <a href="https://mentores.soujunior.tech">
                                Portal de mentoria
                            </a>
                        </li> */}
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
                            <p>Logo mais, acesse também por qualquer dispositivo e fique por dentro das novidades</p>
                        </li>
                    </ul>
                </div>
                <div>
                    <h3>Redes sociais</h3>
                    <Grid>
                        <li>
                            <a href="https://www.instagram.com/soujunior.tech/">
                                <InstagramIcon />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.facebook.com/people/SouJunior/100086671131030/">
                                <FacebookIcon />
                            </a>
                        </li>
                        <li>
                            <a href="https://twitter.com/SouJunior_Tech">
                                <TwitterIcon />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.youtube.com/@soujuniortech">
                                <YouTubeIcon />
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/SouJunior">
                                <GitHubIcon />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/company/soujunior/">
                                <LinkedInIcon />
                            </a>
                        </li>
                        <li>
                            <a href="https://discord.com/invite/soujunior-community-759176734460346423">
                                <DiscordIcon />
                            </a>
                        </li>
                        <li>
                            <a href="https://t.me/soujuniortech">
                                <TelegramIcon />
                            </a>
                        </li>
                    </Grid>
                </div>
            </div>
        </Footer>
    );
};

export default Index;
