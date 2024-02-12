import React, { useContext, useState, useEffect } from 'react';
import LogoName from '../../../assets/imgs/logo-icon-name-h.svg';
import {
    LoginButton,
    NavTitle,
    RegisterButton,
    Header,
    Menu,
    MobileHeader,
    HeaderBtns,
} from './styles';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/Auth/AuthContext';
import { Turn as Hamburger } from 'hamburger-react';
import HomeJobFilter from '../HomeJobFilter/HomeJobFilter';
import loginIcon from '../../../assets/imgs/Candidato-icone.svg'

interface HeaderProps {
    isActive: boolean;
}

const HomeHeader: React.FC<HeaderProps> = ({ isActive }) => {
    const navigate = useNavigate();
    const location = useLocation()
    const { setIsLogin } = useContext(AuthContext);
    const [isMobileOpen, setMobileOpen] = useState(false);
    const [isMobileSize, setIsMobileSize] = useState(false);

    function handleRegisterClick() {
        navigate('/login');
        setIsLogin('register');
    }

    function handleLoginClick() {
        navigate('/login');
        setIsLogin('login');
    }

    useEffect(() => {
        const handleResize = () => {
            setIsMobileSize(window.innerWidth < 1250);
        };

        window.addEventListener('resize', handleResize);

        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handleScrollToTop = () => {
        location.pathname === '/' ? window.scrollTo({ top: 0, behavior: 'smooth' }): navigate('/')
        console.log(location)
        // window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleKeyPress = (event: React.KeyboardEvent) => {
        // Check if the key pressed is 'Enter' or 'Space'
        if (event.key === 'Enter' || event.key === ' ') {
            handleScrollToTop();
        }
        };


    return (
        <>
            {isMobileOpen && (
                <MobileHeader>
                    <div className='wrapper'>
                    <ul>
                        <li>SouJunior</li>
                        <li>Suporte</li>
                        <li>Time</li>
                        <li>Apoio</li>
                        <hr />
                        <RegisterButton
                            onClick={handleRegisterClick}
                            isActive={isActive}
                        >
                            Cadastre-se
                        </RegisterButton>
                        <LoginButton
                            onClick={handleLoginClick}
                            isActive={isActive}
                        >
                            Login
                        </LoginButton>
                    </ul>
                    </div>
                    <div className='background' onClick={() => setMobileOpen(false)}>

</div>
                </MobileHeader>
            )}
            <Header isActive={isActive} isMobileOpen={isMobileOpen}>
                <Menu>
                    <Hamburger toggled={isMobileOpen} toggle={setMobileOpen} />
                </Menu>
                <NavTitle>
                    <button onClick={handleScrollToTop} onKeyDown={handleKeyPress} tabIndex={0} >
                        <img
                            src={LogoName}
                            alt="Logo SouJunior"
                            width={200}
                            height={200}
                        />
                    </button>
                </NavTitle>
                {isActive && !isMobileSize && <HomeJobFilter />}
                <HeaderBtns>
                    <LoginButton onClick={handleLoginClick} isActive={isActive}>
                        <img src={loginIcon} alt="Icone de login" />
                        Login
                    </LoginButton>
                    <RegisterButton
                        onClick={handleRegisterClick}
                        isActive={isActive}
                    >
                        Cadastre-se
                    </RegisterButton>
                </HeaderBtns>
            </Header>
        </>
    );
};

export default HomeHeader;
