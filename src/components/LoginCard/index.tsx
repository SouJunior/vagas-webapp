import { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import { CompanyForms } from './CompanyForms';
import { UserForms } from './UserForms';
import { LogoIcon } from '../LogoIcon';
import CandidatoIcon from '../../assets/imgs/Candidato-icone.svg';
import EmpresaIcon from '../../assets/imgs/Buildings-icone.svg';
import 'react-toastify/dist/ReactToastify.css';

import { Container, Card, LoginTypeButton, DivLogo } from './styles';

enum UserType {
    COMPANY = 'COMPANY',
    USER = 'USER',
}

const LoginCard = () => {
    const [loginType, setLoginType] = useState<UserType>(UserType.USER);

    return (
        <Container>
            <Card>
                <LoginTypeButton>
                    <button onClick={() => setLoginType(UserType.USER)}>
                        <img src={CandidatoIcon} alt="Candidato" />
                        Candidato
                    </button>
                    <button onClick={() => setLoginType(UserType.COMPANY)}>
                        <img src={EmpresaIcon} alt="Empresa" />
                        Empresa
                    </button>
                </LoginTypeButton>
                <DivLogo>
                    <LogoIcon />
                </DivLogo>

                {loginType === UserType.COMPANY && (
                    <CompanyForms type={UserType.COMPANY} />
                )}

                {loginType === UserType.USER && (
                    <UserForms type={UserType.USER} />
                )}
            </Card>
            <ToastContainer />
        </Container>
    );
};

export default LoginCard;
