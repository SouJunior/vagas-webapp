import ScrollToTopButton from '../ScrollToTopButton';
import SocialLinks from '../SocialLinks';
import * as S from './styles';
import forkme from '../../assets/imgs/fork-me.png';

const FooterDefault = () => {
    return (
        <S.Footer>
            <div className="mobile-wrapper">
                <div>
                    <ScrollToTopButton />
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
                        <img src={forkme} alt='fork me on github logo' width="100px" height="29px"/>
                    </a>
                </div>
                <div>
                    <small>
                        @ 2023 SouJunior Todos os direitos reservados.
                    </small>
                </div>
                <ul className='contacts'>
                    <SocialLinks />
                </ul>
            </div>

            <div className="desktop-wrapper">
                <div style={{ cursor: 'pointer' }}>
                    <ScrollToTopButton />
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
                                Site SouJunior
                            </a>
                            <li>
                                <a 
                                href='/'
                                rel='noreferrer'
                                target='_blank'
                                >
                                    Indique uma vaga
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://blog.soujunior.tech/"
                                    rel="noreferrer"
                                    target="_blank"
                                >
                                    Blog da SouJunior
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
                    </ul>
                </div>
                <div>
                    <h3>Redes sociais</h3>
                    <S.Grid>
                        <SocialLinks/>
                    </S.Grid>
                </div>
                <div>
                    <a 
                        href="https://github.com/SouJunior/vagas-webapp"
                        rel="noreferrer"
                        target="_blank"
                    >
                        <img src={forkme} alt='fork me on github logo' width="100px" height="29px"/>
                    </a>
                </div>
            </div>
        </S.Footer>
    );
};

export default FooterDefault;
