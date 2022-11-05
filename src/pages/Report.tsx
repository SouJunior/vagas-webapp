import React, { useState, ChangeEvent } from 'react';
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { Container } from '../components/styles/Container.styled';
import Header from '../components/Header';
import mailIcon from '../assets/imgs/mail.svg';
import importantIcon from '../assets/imgs/important_vector.png';

const Report = () => {
    const [count, setCount] = useState(0);
    const [message, setMessage] = useState('');

    const handleMessage = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setMessage(() => e.target.value);
        setCount(e.target.value.length);
    };

    const MAX_LENGTH = 2000;
    return (
        <div>
            <Header pageName="Central de denúncias" backTo="/" />
            <Container>
                <header className="text-center align-middle">
                    <h4 className="font-semibold text-gray-600 text-3xl tracking-wide mt-24">
                        Informe a equipe do SouJunior o problema desta vaga
                    </h4>
                    <h4 className="mb-[28px]">
                        Após denunciar a vaga nossa equipe ira tomar as devidas
                        providências em relação a denúncia.
                    </h4>
                    <hr className="mb-7" />
                </header>

                <Outlet />

                <section className="min-h-[530px] sm:flex sm:justify-between gap-5 relative mb-[77px]">
                    <div className="relative flex ">
                        <div className="h-9 w-full bg-red-700 rounded-t-md absolute flex justify-between items-center px-2">
                            <p className="text-white font-semibold text-base">
                                Denunciar está vaga
                            </p>
                            <img src={importantIcon} alt="Warning Icon" />
                        </div>
                        <div className="flex flex-col flex-1 mb-5 sm:mb-0">
                            <div className="flex h-[600px] max-w-[583px] rounded-t-none border-2 border-red-700 mt-9 relative rounded-md h-96 overflow-scroll z-50">
                                <div className="px-5 my-4 w-full ">
                                    <h2 className="font-bold text-2xl text-gray-para text-gray-600">
                                        UX Designer Junior
                                    </h2>
                                    <p className="text-gray-600 font-semibold">
                                        Empresa Verde
                                    </p>
                                    <p className="text-gray-600 text-sm mb-7">
                                        Bento Gonçalves, Rio Grande do Sul,
                                        Brasil
                                    </p>
                                    <h4 className="text-gray-600 text-sm font-semibold">
                                        REMOTO - JUNIOR - PJ
                                    </h4>
                                    <div className="py-4 px-5 border rounded my-3 text-sm text-gray-600">
                                        <p>Tempo Integral</p>
                                        <p>51-200 funcionários</p>

                                        <Link to="/" className="text-blue-500">
                                            Recrutando agora
                                        </Link>
                                    </div>
                                    <p className="text-gray-600 text-sm">
                                        Procuramos um profissional para ocupar a
                                        posição de UX Designer em um cliente
                                        referência no setor de produção de
                                        imunobiológicos (vacinas) e análises
                                        laboratoriais veterinários.
                                    </p>
                                    <p className="font-medium text-gray-600 my-3">
                                        Culturalmente, procuramos uma pessoa
                                        que:
                                    </p>
                                    <ul className="list-disc ml-5 text-gray-600 text-sm">
                                        <li>seja curiosa por natureza;</li>
                                        <li>perfil mão na massa e ágil;</li>
                                        <li>sabe ouvir e se comunicar;</li>
                                        <li>
                                            busca e tenha um histórico de
                                            aprendizado contínuo;
                                        </li>
                                        <li>
                                            busca e fomenta a colaboração, mas
                                            também tenha as suas contribuições
                                            individuais inovadoras;
                                        </li>
                                        <li>
                                            entenda o objetivo e propósito da
                                            empresa, e consiga atuar com
                                            autonomia dentro de suas
                                            responsabilidades.
                                        </li>
                                    </ul>
                                    <p className="font-medium text-gray-600 my-3">
                                        {' '}
                                        Responsabilidades e atribuições:
                                    </p>
                                    <p className="font-medium text-gray-600 my-3">
                                        Culturalmente, procuramos uma pessoa
                                        que:
                                    </p>
                                    <ul className="list-disc ml-5 text-gray-600 text-sm">
                                        <li>seja curiosa por natureza;</li>
                                        <li>perfil mão na massa e ágil;</li>
                                        <li>sabe ouvir e se comunicar;</li>
                                        <li>
                                            busca e tenha um histórico de
                                            aprendizado contínuo;
                                        </li>
                                        <li>
                                            busca e fomenta a colaboração, mas
                                            também tenha as suas contribuições
                                            individuais inovadoras;
                                        </li>
                                        <li>
                                            entenda o objetivo e propósito da
                                            empresa, e consiga atuar com
                                            autonomia dentro de suas
                                            responsabilidades.
                                        </li>
                                    </ul>
                                    <p className="font-medium text-gray-600 my-3">
                                        {' '}
                                        Responsabilidades e atribuições:
                                    </p>
                                    <p className="font-medium text-gray-600 my-3">
                                        Culturalmente, procuramos uma pessoa
                                        que:
                                    </p>
                                    <ul className="list-disc ml-5 text-gray-600 text-sm">
                                        <li>seja curiosa por natureza;</li>
                                        <li>perfil mão na massa e ágil;</li>
                                        <li>sabe ouvir e se comunicar;</li>
                                        <li>
                                            busca e tenha um histórico de
                                            aprendizado contínuo;
                                        </li>
                                        <li>
                                            busca e fomenta a colaboração, mas
                                            também tenha as suas contribuições
                                            individuais inovadoras;
                                        </li>
                                        <li>
                                            entenda o objetivo e propósito da
                                            empresa, e consiga atuar com
                                            autonomia dentro de suas
                                            responsabilidades.
                                        </li>
                                    </ul>
                                    <p className="font-medium text-gray-600 my-3">
                                        {' '}
                                        Responsabilidades e atribuições:
                                    </p>
                                    <p className="font-medium text-gray-600 my-3">
                                        Culturalmente, procuramos uma pessoa
                                        que:
                                    </p>
                                    <ul className="list-disc ml-5 text-gray-600 text-sm">
                                        <li>seja curiosa por natureza;</li>
                                        <li>perfil mão na massa e ágil;</li>
                                        <li>sabe ouvir e se comunicar;</li>
                                        <li>
                                            busca e tenha um histórico de
                                            aprendizado contínuo;
                                        </li>
                                        <li>
                                            busca e fomenta a colaboração, mas
                                            também tenha as suas contribuições
                                            individuais inovadoras;
                                        </li>
                                        <li>
                                            entenda o objetivo e propósito da
                                            empresa, e consiga atuar com
                                            autonomia dentro de suas
                                            responsabilidades.
                                        </li>
                                    </ul>
                                    <p className="font-medium text-gray-600 my-3">
                                        {' '}
                                        Responsabilidades e atribuições:
                                    </p>
                                </div>
                            </div>
                            <div className="bg-[#FCFCFC] border rounded-lg mt-6 py-4 px-6 flex items-center justify-between hidden md:flex">
                                <div>
                                    <h4 className="font-semibold text-gray-600">
                                        Contate o suporte SouJunior
                                    </h4>
                                    <Link
                                        to="/suporte"
                                        className="underline text-blue-500"
                                    >
                                        https://www.soujunior/suporte
                                    </Link>
                                    <p className="text-gray-600">
                                        soujunior@suporte.com
                                    </p>
                                </div>
                                <div>
                                    <img src={mailIcon} alt="Mail Icon" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-1 border md:px-6 py-7 px-3 rounded-md flex-col">
                        <h4 className="font-bold md:text-2xl text-xl mb-2 md:mb-1 text-gray-para text-gray-600 tracking-wide">
                            Por que está denúnciando está vaga?
                        </h4>
                        <p className="font-normal text-sm mb-4">
                            Informe abaixo a informação mais relevante para a
                            denuncia da vaga!
                        </p>
                        <hr />
                        <div className="relative mb-8">
                            <textarea
                                name="message_report"
                                placeholder="Descreva a causa da denúncia?"
                                className="px-4 border py-4 rounded-lg mt-5 min-h-[527px] resize-none w-full"
                                value={message}
                                onChange={handleMessage}
                                maxLength={MAX_LENGTH}
                            ></textarea>
                            <span className="text-sm text-gray-600 absolute bottom-4 right-4">
                                {count}/{MAX_LENGTH}
                            </span>
                        </div>
                        <div className="w-full md:flex">
                            <button className="bg-red-600 md:flex md:flex-1 md:w-auto w-full hover:bg-red-700 text-white py-3 px-6 font-semibold rounded md:mb-0 mb-4 md:mb-0 flex flex-1 justify-center items-center md:mr-4 mr-0">
                                Denunciar
                            </button>
                            <button className="bg-transparent border border-blue-600 py-3 px-6 md:flex md:flex-1 md:w-auto w-full rounded md:mr-0 mr-0 text-blue-600 flex flex-1 justify-center items-center">
                                Cancelar
                            </button>
                        </div>
                    </div>
                </section>
            </Container>
        </div>
    );
};

export default Report;
