import { useNavigate } from 'react-router-dom';
import { Button } from '../components/Button';
import extendedLogoImg from '../assets/imgs/logotipo-icone-extendida.svg';
import loginPeople from '../assets/imgs/login-people.svg';
import verticalLine from '../assets/imgs/verticalLine.svg';
import LoginCard from '../components/LoginCard';
import { AchorLink } from './styles/Main.styled';
import * as styles from './styles/LoginStyles'

import '../App.css';

const Login = () => {
    const navigate = useNavigate();

    return (
        <styles.MainLogin>
            <main className="bg-hero-pattern bg-cover bg-no-repeat w-full h-screen md:w-full overflow-y-auto">
            <div className="container max-w-screen-xl m-auto h-screen">
                <styles.SectionCard>
                    <div>
                        <img
                            className="max-w-md flex-grow mb-5"
                            src={extendedLogoImg}
                            alt="Logo-sou-junior-square"
                            width={250}
                            height={250}
                        />
                        <div className="max-w-xl flex-grow text-center lg:text-center mb-5">
                            <img src={loginPeople} alt="" 
                            width={400}
                            height={400}/>
                        </div>{/* 
                        <Button
                            background="outline"
                            border="white"
                            className="w-[283px] flex-shrink h-[67px] text-2xl"
                            onClick={() => navigate('/')}
                        >
                            Acessar portal de vagas
                        </Button> */}
                        {/* <styles.SectionCard.ButtonPortalLogin>Acessar portal de vagas</styles.SectionCard.ButtonPortalLogin> */}
                        {/* <AchorLink
                            onClick={() =>
                                window.open(
                                    'https://www.soujunior.tech',
                                    '_blank',
                                )
                            }
                        >
                            Conheça SouJunior Tech
                        </AchorLink> */}
                    </div>{/* 
                    <div className="flex-grow-[.5]">
                        <img src={verticalLine} alt="" />
                    </div> */}
                    <div className="login-card flex">
                        <LoginCard />
                    </div>
                </styles.SectionCard>
            </div>
        </main>
        </styles.MainLogin>
    );
};

export default Login;
