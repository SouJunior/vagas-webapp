import {
    RiFacebookCircleFill,
    RiLinkedinBoxFill,
    RiInstagramFill,
    RiGithubFill,
    RiDiscordFill,
} from 'react-icons/ri';
import logoIcon from '../assets/imgs/logo-icon-name-h.svg';

export function ExtendedFooter() {
    return (
        <footer className="border-t-2 border-[#E0EDFD]">
            <div className="flex my-14 ml-14 bg-gray-light">
                <div className="mr-14">
                    <img src={logoIcon} width="265px" />
                    <h2 className="font-semibold text-gray-darker text-[25px] mt-2 ">
                        #MovimentoSouJunior
                    </h2>
                    <p className="text-gray-darker text-sm leading-4">
                        O SouJunior ajuda você a encontrar um lugar de
                        <br /> destaque para sua primeira experiência
                        profissional!
                    </p>
                    <a className="text-blue text-xs mt-2">
                        © 2022 SouJunior Todos os direitos reservados.
                    </a>
                    <div className="flex text-blue text-3xl mt-2">
                        <a href="" className="">
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
                        <a href="https://discord.gg/F2F2WqmB" className="ml-3">
                            <RiDiscordFill />
                        </a>
                    </div>
                </div>
                <div className="flex flex-col pl-16 border-l-2 border-[#DEDEDE] font-canada">
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
                <div className="flex flex-col ml-20 font-canada">
                    <h3 className="text-blue text-xl font-semibold">Suporte</h3>
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
                <div className="flex flex-col ml-20 font-canada">
                    <h3 className="text-blue text-xl font-semibold">Time</h3>
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
                <div className="flex flex-col ml-20 font-canada">
                    <h3 className="text-blue text-xl font-semibold">Apoio</h3>
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
        </footer>
    );
}
