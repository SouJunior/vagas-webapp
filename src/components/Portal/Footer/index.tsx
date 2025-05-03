import {
    Footer,
    Grid,
    FacebookIcon,
    InstagramIcon,
    YouTubeIcon,
    GitHubIcon,
    LinkedInIcon,
    TelegramIcon,
} from './styles';

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
                    <button
                        onClick={handleScrollToTop}
                        onKeyDown={handleKeyPress}
                        tabIndex={0}
                    >
                        <img
                            src="/assets/logo-icon-name-h.svg"
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
                    <a 
                        href="https://github.com/SouJunior/vagas-webapp"
                        rel="noreferrer"
                        target="_blank"
                    >
                        <img src="/assets/fork-me.png" alt='fork me on github logo' width="100px" height="29px"/>
                    </a>
                </div>
                <div>
                    <small>
                        @ 2023 SouJunior Todos os direitos reservados.
                    </small>
                </div>
                <ul className="contacts">
                    <li>
                        <a href="https://www.facebook.com/people/SouJunior/100086671131030/">
                            <FacebookIcon />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/soujunior.tech/">
                            <InstagramIcon />
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://www.youtube.com/@soujuniortech"
                            rel="noreferrer"
                            target="_blank"
                        >
                            <YouTubeIcon />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/company/soujunior/">
                            <LinkedInIcon />
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/SouJunior">
                            <GitHubIcon />
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://t.me/soujuniortech"
                            rel="noreferrer"
                            target="_blank"
                        >
                            <TelegramIcon />
                        </a>
                    </li>
                </ul>
            </div>

            <div className="desktop-wrapper">
                <div style={{ cursor: 'pointer' }}>
                    <button
                        onClick={handleScrollToTop}
                        onKeyDown={handleKeyPress}
                        tabIndex={0}
                    >
                        <img
                            src="/assets/logo-icon-name-h.svg"
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
                            <a
                                href="https://www.soujunior.tech/"
                                rel="noreferrer"
                                target="_blank"
                            >
                                Site Sou Junior
                            </a>
                            <li>
                                <a
                                    href="https://mentoria-online.vercel.app/"
                                    rel="noreferrer"
                                    target="_blank"
                                >
                                    Portal de mentoria
                                </a>
                            </li>
                        </li>
                    </ul>
                </div>
                <div>
                    <h3>Canais SouJunior</h3>
                    <ul>
                        <li>
                            <a
                                href="https://docs.google.com/forms/d/e/1FAIpQLSd1IspO3Hwylce2kHtIsmyBAkH7p3VFmdYUmdL75YXZ-DSNBA/viewform"
                                rel="noreferrer"
                                target="_blank"
                            >
                                SouJunior Labs
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://discord.com/invite/564CDre9F3"
                                rel="noreferrer"
                                target="_blank"
                            >
                                SouJunior Talk
                            </a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h3>Redes sociais</h3>
                    <Grid>
                        <li>
                            <a
                                href="https://www.facebook.com/people/SouJunior/100086671131030/"
                                rel="noreferrer"
                                target="_blank"
                            >
                                <FacebookIcon />
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.instagram.com/soujunior.tech/"
                                rel="noreferrer"
                                target="_blank"
                            >
                                <InstagramIcon />
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.youtube.com/@soujuniortech"
                                rel="noreferrer"
                                target="_blank"
                            >
                                <YouTubeIcon />
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.linkedin.com/company/soujunior/"
                                rel="noreferrer"
                                target="_blank"
                            >
                                <LinkedInIcon />
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://github.com/SouJunior"
                                rel="noreferrer"
                                target="_blank"
                            >
                                <GitHubIcon />
                            </a>
                        </li>

                        <li>
                            <a
                                href="https://t.me/soujuniortech"
                                rel="noreferrer"
                                target="_blank"
                            >
                                <TelegramIcon />
                            </a>
                        </li>
                    </Grid>
                </div>
                <div>
                    <a 
                        href="https://github.com/SouJunior/vagas-webapp"
                        rel="noreferrer"
                        target="_blank"
                    >
                        <img src="/assets/fork-me.png" alt='fork me on github logo' width="100px" height="29px"/>
                    </a>
                </div>
            </div>
        </Footer>
    );
};

export default Index;
