import React, { useContext, useState, useEffect } from 'react';
import LogoName from '../../assets/imgs/logo-icon-name-h.svg';
import loginIcon from '../../assets/imgs/Candidato-icone.svg';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/Auth/AuthContext';

import { Turn as Hamburger } from 'hamburger-react';
import JobFilter from './components/JobFilter';

import * as S from './styles';
import { CaretLeft } from 'phosphor-react';

interface HeaderProps {
    isActive: boolean;
}

const HeaderDefault: React.FC<HeaderProps> = ({ isActive }) => {
    const [isMobileOpen, setMobileOpen] = useState(false);
    const [isLaptop, setIsLaptop] = useState(false);
    const [feedJob, setFeedJob] = useState(false);
    const [isSelectedPage, setIsSelectedPage] = useState(false);

    const navigate = useNavigate();
    const location = useLocation();
    const { setIsLogin } = useContext(AuthContext);

    function handleRegisterClick() {
        navigate('/login');
        setIsLogin('register');
    }

    function handleLoginClick() {
        navigate('/login');
        setIsLogin('login');
    }

    const handleResize = () => {
        setIsLaptop(window.innerWidth > 768);
    };

    const handleScrollToTop = () => {
        location.pathname === '/'
            ? window.scrollTo({ top: 0, behavior: 'smooth' })
            : navigate('/');
    };

    useEffect(() => {
        const isJobPage = location.pathname.startsWith('/job');
        const isSelectedJobPage = location.pathname.startsWith('/job/selected');
        setFeedJob(isJobPage);
        setIsSelectedPage(isSelectedJobPage);

        window.addEventListener('resize', handleResize);

        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [location.pathname]);

    const shouldShowJobFilter = (isActive && isLaptop) || feedJob;
    const isFeed = !isLaptop && feedJob;

    return (
        <>
            {isMobileOpen && (
                <S.MobileHeader>
                    <div className="wrapper"> 
                        <div>
                            <S.BoxLogoMobile>
                                <S.BoxLogo>
                                    <img
                                    src={LogoName}
                                    alt="Logo SouJunior"
                                    onClick={handleScrollToTop}
                                    />
                                </S.BoxLogo>
                            </S.BoxLogoMobile>
                            <ul>
                                <li>
                                    <a  href="https://www.soujunior.tech/"
                                        rel="noreferrer"
                                        target="_blank"
                                    >
                                        SouJuniorTech
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
                                <li>
                                    <a  href="https://www.soujunior.tech/?#participation"
                                        rel="noreferrer"
                                        target="_blank"
                                    >
                                        Faça parte
                                        </a>
                                </li>
                                <hr />
                            </ul>   
                        </div>
                        
                        <S.Buttons>
                            <S.RegisterButton
                                    onClick={handleRegisterClick}
                                    isActive={isActive}
                                >
                                    Cadastre-se
                                </S.RegisterButton>
                                <S.LoginButton
                                    onClick={handleLoginClick}
                                    isActive={isActive}
                                >
                                    Login
                                </S.LoginButton>
                        </S.Buttons>
                    </div>
                    <div
                        className="background"
                        onClick={() => setMobileOpen(false)}
                    ></div>
                </S.MobileHeader>
            )}

            <S.Header
                feedJob={feedJob}
                isActive={isActive}
                isMobileOpen={isMobileOpen}
            >
                <section>
                    {!isFeed && (
                        <S.Menu>
                            <Hamburger
                                toggled={isMobileOpen}
                                toggle={setMobileOpen}
                            />
                        </S.Menu>
                    )}

                    {!isLaptop && isSelectedPage && (
                        <S.Return>
                            <Link to="/job">
                                <CaretLeft size={16} color="#666666" />
                            </Link>
                        </S.Return>
                    )}

                    <S.BoxLogo>
                        <img
                            src={LogoName}
                            alt="Logo SouJunior"
                            onClick={handleScrollToTop}
                        />
                    </S.BoxLogo>

                    {shouldShowJobFilter && <JobFilter />}

                    <S.HeaderBtns>
                        <S.LoginButton
                            onClick={handleLoginClick}
                            isActive={isActive}
                        >
                            <img src={loginIcon} alt="Icone de login" />
                            Login
                        </S.LoginButton>
                        <S.RegisterButton
                            onClick={handleRegisterClick}
                            isActive={isActive}
                        >
                            Cadastre-se
                        </S.RegisterButton>
                    </S.HeaderBtns>
                </section>
            </S.Header>
        </>
    );
};

export default HeaderDefault;
