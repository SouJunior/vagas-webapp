import { useNavigate } from 'react-router-dom';
import { Button } from '../components/Button';
import extendedLogoImg from '../assets/imgs/logotipo-icone-extendida.svg';
import loginPeople from '../assets/imgs/login-people.svg';
import verticalLine from '../assets/imgs/verticalLine.svg';
import LoginCard from '../components/LoginCard';
import { AchorLink } from './styles/Main.styled';

import '../App.css';

const Login = () => {
    const navigate = useNavigate();

    return (
        <main className="bg-hero-pattern bg-cover bg-no-repeat w-full h-screen md:w-full overflow-y-auto">
            <div className="container max-w-screen-xl m-auto h-screen ">
                <section className="flex flex-col items-center h-screen lg:flex-row lg:mb-20">
                    <div className="titles max-h-[725px] flex flex-col flex-grow items-center lg:items-center h-5/6 max-[1024px]:hidden">
                        <img
                            className="max-w-md flex-grow"
                            src={extendedLogoImg}
                            alt="Logo-sou-junior-square"
                            style={{ cursor: 'pointer' }}
                        />
                        <div className="max-w-xl flex-grow text-center lg:text-center">
                            <img src={loginPeople} alt="logo-sou-junior" />
                        </div>
                        <Button
                            background="outline"
                            border="white"
                            className="w-[283px] flex-shrink h-[67px] text-2xl"
                            onClick={() => navigate('/')}
                        >
                            Acessar portal de vagas
                        </Button>
                        <AchorLink
                            onClick={() =>
                                window.open(
                                    'https://www.soujunior.tech',
                                    '_blank',
                                )
                            }
                        >
                            Conheça SouJunior Tech
                        </AchorLink>
                    </div>
                    <div className="flex-grow-[.5] max-[1023px]:hidden">
                        <img src={verticalLine} alt="" />
                    </div>
                    <div className="login-card flex h-screen max-[1024px]:items-center max-[1024px]:justify-content">
                        <LoginCard />
                    </div>
                </section>
            </div>
        </main>
    );
};

export default Login;
