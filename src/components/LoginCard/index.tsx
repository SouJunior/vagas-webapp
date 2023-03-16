import { useState } from 'react';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import {
    Container,
    Card,
    LoginTypeButton,
    DivLogo,
} from './styles';
import EmpresaIcon from '../../assets/imgs/Buildings-icone.svg';
import CandidatoIcon from '../../assets/imgs/Candidato-icone.svg';
import { CompanyForm } from './CompanyForm';
import { UserForm } from './UserForm';

const LogoIcon = () => {
    return (
        <svg
            width="72"
            height="71"
            viewBox="0 0 72 71"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M17.1292 49.583H5.50242C3.0158 49.583 1 51.5778 1 54.0385V65.5442C1 68.0049 3.0158 69.9997 5.50242 69.9997H17.1292C19.6158 69.9997 21.6316 68.0049 21.6316 65.5442V54.0385C21.6316 51.5778 19.6158 49.583 17.1292 49.583Z"
                fill="#1165BA"
            />
            <path
                d="M40.8695 24.792H29.658C27.2602 24.792 25.3164 26.7868 25.3164 29.2475V40.7532C25.3164 43.2139 27.2602 45.2087 29.658 45.2087H40.8695C43.2673 45.2087 45.2111 43.2139 45.2111 40.7532V29.2475C45.2111 26.7868 43.2673 24.792 40.8695 24.792Z"
                fill="#1165BA"
            />
            <path
                d="M30.5552 0.5H42.1819C44.3973 0.5 46.1843 2.27588 46.1843 4.45554V15.9612C46.1843 18.1409 44.3973 19.9167 42.1819 19.9167H30.5552C28.3397 19.9167 26.5527 18.1409 26.5527 15.9612V4.45554C26.5527 2.27588 28.3397 0.5 30.5552 0.5Z"
                stroke="#1165BA"
            />
            <path
                d="M40.8695 49.583H29.658C27.2602 49.583 25.3164 51.5778 25.3164 54.0385V65.5442C25.3164 68.0049 27.2602 69.9997 29.658 69.9997H40.8695C43.2673 69.9997 45.2111 68.0049 45.2111 65.5442V54.0385C45.2111 51.5778 43.2673 49.583 40.8695 49.583Z"
                stroke="#1165BA"
                strokeMiterlimit="10"
            />
            <path
                d="M66.4973 24.792H54.8706C52.384 24.792 50.3682 26.7868 50.3682 29.2475V40.7532C50.3682 43.2139 52.384 45.2087 54.8706 45.2087H66.4973C68.9839 45.2087 70.9997 43.2139 70.9997 40.7532V29.2475C70.9997 26.7868 68.9839 24.792 66.4973 24.792Z"
                stroke="#1165BA"
                strokeMiterlimit="10"
            />
            <path
                d="M17.1292 24.792H5.50242C3.0158 24.792 1 26.7868 1 29.2475V40.7532C1 43.2139 3.0158 45.2087 5.50242 45.2087H17.1292C19.6158 45.2087 21.6316 43.2139 21.6316 40.7532V29.2475C21.6316 26.7868 19.6158 24.792 17.1292 24.792Z"
                stroke="#1165BA"
                strokeMiterlimit="10"
            />
            <path
                d="M66.6586 0H55.4471C53.0493 0 51.1055 1.99481 51.1055 4.45554V15.9612C51.1055 18.4219 53.0493 20.4167 55.4471 20.4167H66.6586C69.0564 20.4167 71.0002 18.4219 71.0002 15.9612V4.45554C71.0002 1.99481 69.0564 0 66.6586 0Z"
                fill="#1165BA"
            />
        </svg>
    );
};

const LoginCard = () => {
    const [user, setUser] = useState(true);
    const [company, setCompany] = useState(false);

    // renderiza o form de login do usuário
    const userHandler = () => {
        setUser(true);
        setCompany(false);
    };

    // renderiza o form de login do candidato
    const companyHandler = () => {
        setCompany(true);
        setUser(false);
    };

    return (
        <Container>
            <Card>
                <LoginTypeButton>
                    <button onClick={userHandler}>
                        <img src={CandidatoIcon} alt="Candidato" />
                        Candidato
                    </button>
                    <button onClick={companyHandler}>
                        <img src={EmpresaIcon} alt="Empresa" />
                        Empresa
                    </button>
                </LoginTypeButton>
                <DivLogo
                    style={{
                        marginBottom: true ? '42px' : '18px',
                        marginTop: true ? '22px' : '8px',
                    }}
                >
                    <LogoIcon />
                </DivLogo>
                
                {/* Enviar tipo de usuário por parâmetro */}
                {company && <CompanyForm type="COMPANY" />} 

                {user && <UserForm type="USER" />}
            </Card>
            <ToastContainer />
        </Container>
    );
};

export default LoginCard;
