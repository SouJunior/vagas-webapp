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
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/Auth/AuthContext';
import { Turn as Hamburger } from 'hamburger-react';
import HomeJobFilter from '../HomeJobFilter/HomeJobFilter';

interface HeaderProps {
    isActive: boolean;
}

const HomeHeader: React.FC<HeaderProps> = ({ isActive }) => {
    const navigate = useNavigate();
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
                    <a onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
                        <img
                            src={LogoName}
                            alt="Logo SouJunior"
                            width={200}
                            height={200}
                        />
                    </a>
                </NavTitle>
                {isActive && !isMobileSize && <HomeJobFilter />}
                <HeaderBtns>
                    <RegisterButton
                        onClick={handleRegisterClick}
                        isActive={isActive}
                    >
                        Cadastre-se
                    </RegisterButton>
                    <LoginButton onClick={handleLoginClick} isActive={isActive}>
                        Login
                    </LoginButton>
                </HeaderBtns>
            </Header>
        </>
    );
};

export default HomeHeader;
