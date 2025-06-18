import { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import { CompanyForms } from './CompanyForms';
import { UserForms } from './UserForms';
import { LogoIcon } from '../LogoIcon';
import CandidatoIcon from '../../assets/imgs/Candidato-icone.svg';
import EmpresaIcon from '../../assets/imgs/Buildings-icone.svg';
import 'react-toastify/dist/ReactToastify.css';

import { Container, Card, LoginTypeButton, DivLogo } from './styles';

const LoginCard = () => {
    const [user, setUser] = useState(true);
    const [company, setCompany] = useState(false);

    const userHandler = () => {
        setUser(true);
        setCompany(false);
    };

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
                <DivLogo>
                    <LogoIcon />
                </DivLogo>

                {company && <CompanyForms type="COMPANY" />}

                {user && <UserForms type="USER" />}
            </Card>
            <ToastContainer />
        </Container>
    );
};

export default LoginCard;
