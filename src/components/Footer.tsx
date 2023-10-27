import {
    RiFacebookCircleFill,
    RiLinkedinBoxFill,
    RiInstagramFill,
    RiGithubFill,
    RiDiscordFill,
} from 'react-icons/ri';
import logoIcon from '../assets/imgs/logo-icon-name-h.svg';

export function Footer() {
    return (

        <footer className="border-t border-gray-dark/30 bg-gray-light w-full h-72">
            <div className="flex md:flex-row flex-col my-14 justify-center ">

                <div className="md:mr-12 flex flex-col text-center md:text-start items-center md:items-start md:ml-14">
                    <img src={logoIcon} width="265px" alt="Logo SouJunior" />
                    <h2 className="font-semibold text-gray-darker text-[25px] mt-1 ">
                        #MovimentoSouJunior
                    </h2>
                    <p className="text-gray-darker text-sm leading-4 max-w-[355px]">
                        O SouJunior ajuda você a encontrar um lugar de destaque
                        para sua primeira experiência profissional!
                    </p>
                    <p className="text-blue text-xs mt-2">
                        © 2022 SouJunior Todos os direitos reservados.
                    </p>
                    <div className="flex text-blue text-3xl mt-3 mb-10 md:mb-0">
                        <a href="https://www.facebook.com">
                            <RiFacebookCircleFill />
                        </a>
                        <a
                            href="https://www.linkedin.com/company/soujunior/"
                            className="ml-3"
                        >
                            <RiLinkedinBoxFill />
                        </a>
                        <a
                            href="https://www.instagram.com/soujunior.tech/"
                            className="ml-3"
                        >
                            <RiInstagramFill />
                        </a>
                        <a href="https://github.com/SouJunior" className="ml-3">
                            <RiGithubFill />
                        </a>
                        <a href="https://discord.gg/R5RAxFVC" className="ml-3">
                            <RiDiscordFill />
                        </a>
                    </div>
                </div>
                <div className="md:border-l border-gray-dark/50 gap-20 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 lg:gap-10 md:gap-5  lg:justify-center">

                
                    <div className="flex flex-col items-center md:items-start md:pl-[66px] mt-1 font-canada">
                        <h3 className="text-blue text-xl font-semibold">
                            SouJunior
                        </h3>
                        <a
                            href="/"
                            className="text-gray-darker mt-1.5 text-[17px] leading-5"
                        >
                            Sobre nós
                        </a>
                        <a
                            href="https://github.com/SouJunior"
                            className="text-gray-darker mt-1 text-[17px] leading-5"
                        >
                            Github
                        </a>
                        <a
                            href="https://github.com/SouJunior"
                            className="text-gray-darker mt-1 text-[17px] leading-5"
                        >
                            Github
                        </a>
                    </div>
                    <div className="flex flex-col items-center md:items-start md:ml-20 mt-1 font-canada">
                        <h3 className="text-blue text-xl font-semibold">
                            Suporte
                        </h3>
                        <a
                            href="/"
                            className="text-gray-darker mt-1.5 text-[17px] leading-5"
                        >
                            Cadastro
                        </a>
                        <a
                            href="https://github.com/SouJunior"
                            className="text-gray-darker mt-1 text-[17px] leading-5"
                        >
                            Github
                        </a>
                        <a
                            href="https://github.com/SouJunior"
                            className="text-gray-darker mt-1 text-[17px] leading-5"
                        >
                            Github
                        </a>
                    </div>
                    <div className="flex flex-col items-center md:items-start md:ml-20 mt-1 font-canada">
                        <h3 className="text-blue text-xl font-semibold">
                            Time
                        </h3>
                        <a
                            href="/"
                            className="text-gray-darker mt-1.5 text-[17px] leading-5"
                        >
                            Cadastro
                        </a>
                        <a
                            href="https://github.com/SouJunior"
                            className="text-gray-darker mt-1 text-[17px] leading-5"
                        >
                            Github
                        </a>
                        <a
                            href="https://github.com/SouJunior"
                            className="text-gray-darker mt-1 text-[17px] leading-5"
                        >
                            Github
                        </a>
                    </div>
                    <div className="flex flex-col items-center md:items-start md:ml-20 mt-1 mb-5 font-canada">
                        <h3 className="text-blue text-xl font-semibold">
                            Apoio
                        </h3>
                        <a
                            href="/"
                            className="text-gray-darker mt-1.5 text-[17px] leading-5"
                        >
                            Cadastro
                        </a>
                        <a
                            href="https://github.com/SouJunior"
                            className="text-gray-darker mt-1 text-[17px] leading-5"
                        >
                            Github
                        </a>
                        <a
                            href="https://github.com/SouJunior"
                            className="text-gray-darker mt-1 text-[17px] leading-5"
                        >
                            Github
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
