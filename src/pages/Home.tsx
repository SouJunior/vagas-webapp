import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import {
    Container,
    NavBar,
    LoginButton,
    Title,
    LinkContainer,
    LinkTag,
    Bar,
    List,
    InputWrapper,
    RegisterButton,
} from './styles/home.styles';
import LogoName from '../assets/imgs/logo-icon-name-h.svg';

export const Home: React.FC = () => {
    const navigate = useNavigate();

    function handleLoginClick() {
        navigate('/login');
    }

    return (
        <Container>
            <NavBar>
                <Title>
                    <img
                        src={LogoName}
                        alt="Logo SouJunior"
                        width={200}
                        height={200}
                    />
                </Title>
                <Title>
                    <RegisterButton onClick={handleLoginClick}>
                        Cadastre-se
                    </RegisterButton>
                    <LoginButton onClick={handleLoginClick}>Login</LoginButton>
                </Title>
            </NavBar>
            <Bar></Bar>
        </Container>
    );
};
