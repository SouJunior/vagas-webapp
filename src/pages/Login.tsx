import React from 'react';
import { Button } from '../components/Button';
import extendedLogoImg from '../assets/imgs/logotipo-icone-extendida.svg';

const Login = () => {
    return (
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
                    <a href="https://www.soujunior.tech" target="blank">Saiba mais</a>
                </Button>
            </section>

            <section>
                {/* aqui irá o login card */}
                <div>Login Card</div>
            </section>
        </main>
    );
};

export default Login;
