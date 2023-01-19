import { Button } from '../components/Button';
import extendedLogoImg from '../assets/imgs/logotipo-icone-extendida.svg';
import LoginCard from '../components/LoginCard';

import CircleDetails from '../assets/imgs/Circles-details.svg'

const Login = () => {
    return (
        <>
        <div className='w-full h-screen absolute bg-cover bg-no-repeat' style={{ background: `url(${CircleDetails})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}></div>
        <main className="grid lg:grid-cols-2 px-4 bg-blue-gradient h-screen">
            <section className="lg:pl-16 pl-24 mt-44">
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
                >
                    <a href="https://www.soujunior.tech" target="blank">
                        Saiba mais
                    </a>
                </Button>
            </section>

            <section>
                <div>
                    <LoginCard />
                </div>
            </section>
        </main>
        </>
    );
};

export default Login;
