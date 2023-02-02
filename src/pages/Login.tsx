import { Button } from '../components/Button';
import extendedLogoImg from '../assets/imgs/logotipo-icone-extendida.svg';
import LoginCard from '../components/LoginCard';

import '../App.css';

const Login = () => {
    return (
        <main className="bg-hero-pattern bg-cover bg-no-repeat w-full h-screen md:w-full">
            <div className="container max-w-screen-xl m-auto">
                <section className="flex flex-col justify-between items-center lg:flex-row">
                    <div className="titles flex flex-col items-center mb-0 mx-auto mt-10 lg:items-start lg:mt-0 lg:mb-36">
                        <img
                            className="max-w-md"
                            src={extendedLogoImg}
                            alt="Logo-sou-junior-square"
                        />
                        <div className="max-w-xl text-center lg:text-start">
                            <h1 className="text-white text-7xl leading-normal my-8">
                                Onde o Júnior tem vez!
                            </h1>
                        </div>
                        <Button
                            background="outline"
                            border="white"
                            className="w-[283px] h-[67px] text-2xl"
                            onClick={() =>
                                window.open(
                                    'https://www.soujunior.tech',
                                    '_blank',
                                )
                            }
                        >
                            Saiba mais
                        </Button>
                    </div>
                    <div className="login-card mx-auto">
                        <LoginCard />
                    </div>
                </section>
            </div>
        </main>
    );
};

export default Login;
