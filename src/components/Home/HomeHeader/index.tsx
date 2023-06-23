import React, { useContext, useState } from 'react';
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
import JobFilter from '../HomeJobFilter/JobFilter';

interface HeaderProps {
    isActive: boolean;
}

const HomeHeader: React.FC<HeaderProps> = ({ isActive }) => {
    const navigate = useNavigate();
    const { setIsLogin } = useContext(AuthContext);
    const [isMobileOpen, setMobileOpen] = useState(false);

    function handleRegisterClick() {
        navigate('/login');
        setIsLogin('register');
    }

    function handleLoginClick() {
        navigate('/login');
        setIsLogin('login');
    }
    return (
        <>
            {isMobileOpen && (
                <MobileHeader>
                    <ul>
                        <li onClick={() => (window.location.href = '/login')}>
                            Login
                        </li>
                        <li onClick={() => (window.location.href = '/login')}>
                            Cadastre-se
                        </li>
                        <JobFilter isActive={isActive} />
                    </ul>
                </MobileHeader>
            )}
            <Header isActive={isActive} isMobileOpen={isMobileOpen}>
                <Menu>
                    <Hamburger toggled={isMobileOpen} toggle={setMobileOpen} />
                </Menu>
                <NavTitle>
                    <a href="https://www.soujunior.tech/">
                        <img
                            src={LogoName}
                            alt="Logo SouJunior"
                            width={200}
                            height={200}
                        />
                    </a>
                </NavTitle>
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
