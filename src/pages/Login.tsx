import React from "react";
import { Button } from "../components/Button";
import extendedLogoImg from "../assets/imgs/logotipo-icone-extendida.svg";

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
          Saiba mais
        </Button>
      </section>

      <section>
        {/* aqui irá o login card */}
        <div>Login Card</div>

        <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
            <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
                <h1 className="text-3xl font-extrabold text-center text-blue-700" >
                   SouJunior
                </h1>
                <h2>Entrar</h2>
                <form className="mt-6">
                    <div className="mb-2">
                        <label className="block text-sm font-semibold text-gray-800">
                            Email
                        </label>
                        <input
                            type="email"
                            className="block w-full px-4 py-2 mt-2 text-blue-700 bg-white border rounded-md focus:border-purple-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"/>
                    </div>
                    <div className="mb-2">
                        <label
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            className="block w-full px-4 py-2 mt-2 text-blue-700 bg-white border rounded-md focus:border-blue-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                    <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Me mantenha conectado</label>
                    <div className="mt-6">
                        <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-700 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
                            Entrar
                        </button>
                        <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-700 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
                            Criar conta
                        </button>
                    </div>
                </form>

              
            </div>
        </div>
      </section>
    </main>
  );
};

export default Login;
