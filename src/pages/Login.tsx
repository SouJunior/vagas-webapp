import { Button } from '../components/Button';
import extendedLogoImg from '../assets/imgs/logotipo-icone-extendida.svg';
import LoginCard from '../components/LoginCard';

import '../App.css';

const Login = () => {
    return (
        <main className="bg-hero-pattern bg-cover bg-no-repeat h-screen">
            <div className="container max-w-screen-lg m-auto">
                <section className="flex justify-center items-center">
                    <div className="titles">
                        <img
                            className="w-[450px]"
                            src={extendedLogoImg}
                            alt="Logo-sou-junior-square"
                        />
                        <h1 className="text-white text-[78px] leading-[94px] my-8">
                            Onde o Júnior
                            <br /> tem vez!
                        </h1>
                        <Button
                            background="outline"
                            border="white"
                            className="w-[283px] h-[67px] text-2xl"
                            style={{ position: 'absolute' }}
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
                    <div className='login-card'>
                        <LoginCard />
                    </div>
                </section>
            </div>
        </main>
    );
};

export default Login;
