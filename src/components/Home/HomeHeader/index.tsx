import React, { useContext } from 'react';
import LogoName from '../../../assets/imgs/logo-icon-name-h.svg';
import { LoginButton, NavTitle, RegisterButton, Header } from './styles';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/Auth/AuthContext';

interface HeaderProps {
    isActive: boolean;
}

const HomeHeader: React.FC<HeaderProps> = ({ isActive }) => {
    const navigate = useNavigate();
    const { setIsLogin } = useContext(AuthContext);

    function handleRegisterClick() {
        navigate('/login');
        setIsLogin('register');
    }

    function handleLoginClick() {
        navigate('/login');
        setIsLogin('login');
    }
    return (
        <Header isActive={isActive}>
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
            <NavTitle>
                <RegisterButton
                    onClick={handleRegisterClick}
                    isActive={isActive}
                >
                    Cadastre-se
                </RegisterButton>
                <LoginButton onClick={handleLoginClick} isActive={isActive}>
                    Login
                </LoginButton>
            </NavTitle>
        </Header>
    );
};

export default HomeHeader;
