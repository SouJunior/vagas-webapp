import React, { useContext } from 'react';
import LogoName from '../../../assets/imgs/logo-icon-name-h.svg';
import { LoginButton, NavBar, NavTitle, RegisterButton } from './styles';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/Auth/AuthContext';

const HomeHeader: React.FC<any> = ({ active }) => {
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
        <NavBar active={active}>
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
                <RegisterButton onClick={handleRegisterClick} active={active}>
                    Cadastre-se
                </RegisterButton>
                <LoginButton onClick={handleLoginClick} active={active}>
                    Login
                </LoginButton>
            </NavTitle>
        </NavBar>
    );
};

export default HomeHeader;
