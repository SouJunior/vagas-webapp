import React, { useContext, useState, useEffect } from 'react';
import LogoName from '../../assets/imgs/logo-icon-name-h.svg';
import loginIcon from '../../assets/imgs/Candidato-icone.svg';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/Auth/AuthContext';

import { Turn as Hamburger } from 'hamburger-react';
import JobFilter from './components/JobFilter';

import * as S from './styles';

interface HeaderProps {
    isActive: boolean;
}

const HeaderDefault: React.FC<HeaderProps> = ({ isActive }) => {
    const [isMobileOpen, setMobileOpen] = useState(false);
    const [isMobileSize, setIsMobileSize] = useState(false);
    const [activeSearch, setActiveSearch] = useState(true);

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
        setIsMobileSize(window.innerWidth < 1280);
    };

    const handleScrollToTop = () => {
        location.pathname === '/'
            ? window.scrollTo({ top: 0, behavior: 'smooth' })
            : navigate('/');
    };

    useEffect(() => {
        setActiveSearch(location.pathname !== '/jobs');

        window.addEventListener('resize', handleResize);

        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [location.pathname]);

    return (
        <>
            {isMobileOpen && (
                <S.MobileHeader>
                    <div className="wrapper">
                        <ul>
                            <li>SouJunior</li>
                            <li>Suporte</li>
                            <li>Time</li>
                            <li>Apoio</li>
                            <hr />
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
                        </ul>
                    </div>
                    <div
                        className="background"
                        onClick={() => setMobileOpen(false)}
                    ></div>
                </S.MobileHeader>
            )}

            <S.Header isActive={isActive} isMobileOpen={isMobileOpen}>
                <section>
                    <S.Menu>
                        <Hamburger
                            toggled={isMobileOpen}
                            toggle={setMobileOpen}
                        />
                    </S.Menu>

                    <S.BoxLogo>
                        <img
                            src={LogoName}
                            alt="Logo SouJunior"
                            onClick={handleScrollToTop}
                        />
                    </S.BoxLogo>

                    {activeSearch && isActive && !isMobileSize && <JobFilter />}

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
