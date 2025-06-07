import ScrollToTopButton from '../ScrollToTopButton';
import SocialLinks from '../SocialLinks';
import * as S from './styles';
import { Autoplay } from 'swiper';

const FooterDefault = () => {
    return (
        <S.Footer>        
            <div className="desktop-wrapper">
                <div style={{ cursor: 'pointer' }}>
                    <ScrollToTopButton />
                </div>
                <div className="footer-links-container">
                    <div className='footer-section'>
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
                                        href=""
                                        rel="noreferrer"
                                        target="_blank"
                                    >
                                        Indique uma vaga
                                    </a>
                                </li>
                            </li>
                        </ul>
                    </div>
                    <div className='footer-section'>
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
                                <li>
                                    <a
                                        href=""
                                        rel="noreferrer"
                                        target="_blank"
                                    >
                                        SouJunior Talks
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
                    <div className='footer-section'>
                        <h3>Redes sociais</h3>
                        <S.Grid>
                            <SocialLinks/>
                        </S.Grid>
                    </div>
                </div>
            </div>
        </S.Footer>
    );
};

export default FooterDefault;
