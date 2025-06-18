import ScrollToTopButton from '../ScrollToTopButton';
import SocialLinks from '../SocialLinks';
import * as S from './styles';

const FooterDefault = () => {
    return (
        <S.Footer>        
            <div className="desktop-wrapper">
                <div style={{ cursor: 'pointer' }}>
                    <ScrollToTopButton />
                </div>
                <div className="footer-links-container">
                    <div className='footer-section'>
                        <ul className='ul-footer-section'>
                            <h3>Institucional</h3>
                                <li>
                                    <a
                                        href="https://www.soujunior.tech/"
                                        rel="noreferrer"
                                        target="_blank"
                                    >
                                        Site SouJunior
                                    </a>
                                </li>
                                <li className='pointer-events-none opacity-50'>
                                    <a
                                        href=""
                                        rel="noreferrer"
                                        target="_blank"
                                    >
                                        Indique uma vaga
                                    </a>
                                </li>
                                <li>
                                    <a  href="https://www.soujunior.tech/?#participation"
                                        rel="noreferrer"
                                        target="_blank"
                                    >
                                        Faça parte
                                        </a>
                                </li>
                                <li>
                                    <a  href=" https://www.soujunior.tech/ouvidoria"
                                        rel="noreferrer"
                                        target="_blank"
                                    >
                                        Ouvidoria
                                    </a>
                                </li>                                
                        </ul>
                    </div>
                    <div className='footer-section'>
                        <ul className='ul-footer-section'>
                            <h3>Canais SouJunior</h3>
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
                                        href="https://discord.gg/64sXAewKEC"
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
                            
                        </ul>
                    </div>
                    <div className='footer-section'>
                        <h3>Redes sociais</h3>
                        <S.Grid>
                            <SocialLinks color="#666"/>
                        </S.Grid>
                    </div>
                </div>
            </div>
        </S.Footer>
    );
};

export default FooterDefault;
