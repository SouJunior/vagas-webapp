import type { ChangeEvent } from 'react';
import React, { useState } from 'react';
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
          <h4 className="mt-24 text-3xl font-semibold tracking-wide text-gray-600">
            Informe a equipe do SouJunior o problema desta vaga
          </h4>
          <h4 className="mb-[28px]">
            Após denunciar a vaga nossa equipe ira tomar as devidas providências
            em relação a denúncia.
          </h4>
          <hr className="mb-7" />
        </header>

        <Outlet />

        <section className="relative mb-[77px] min-h-[530px] gap-5 sm:flex sm:justify-between">
          <div className="relative flex">
            <div className="absolute flex h-9 w-full items-center justify-between rounded-t-md bg-red-700 px-2">
              <p className="text-base font-semibold text-white">
                Denunciar está vaga
              </p>
              <img src={importantIcon} alt="Warning Icon" />
            </div>
            <div className="mb-5 flex flex-1 flex-col sm:mb-0">
              <div className="relative z-50 mt-9 flex h-96 h-[600px] max-w-[583px] overflow-scroll rounded-md rounded-t-none border-2 border-red-700">
                <div className="my-4 w-full px-5">
                  <h2 className="text-gray-para text-2xl font-bold text-gray-600">
                    UX Designer Junior
                  </h2>
                  <p className="font-semibold text-gray-600">Empresa Verde</p>
                  <p className="mb-7 text-sm text-gray-600">
                    Bento Gonçalves, Rio Grande do Sul, Brasil
                  </p>
                  <h4 className="text-sm font-semibold text-gray-600">
                    REMOTO - JUNIOR - PJ
                  </h4>
                  <div className="my-3 rounded border px-5 py-4 text-sm text-gray-600">
                    <p>Tempo Integral</p>
                    <p>51-200 funcionários</p>

                    <Link to="/" className="text-blue-500">
                      Recrutando agora
                    </Link>
                  </div>
                  <p className="text-sm text-gray-600">
                    Procuramos um profissional para ocupar a posição de UX
                    Designer em um cliente referência no setor de produção de
                    imunobiológicos (vacinas) e análises laboratoriais
                    veterinários.
                  </p>
                  <p className="my-3 font-medium text-gray-600">
                    Culturalmente, procuramos uma pessoa que:
                  </p>
                  <ul className="ml-5 list-disc text-sm text-gray-600">
                    <li>seja curiosa por natureza;</li>
                    <li>perfil mão na massa e ágil;</li>
                    <li>sabe ouvir e se comunicar;</li>
                    <li>busca e tenha um histórico de aprendizado contínuo;</li>
                    <li>
                      busca e fomenta a colaboração, mas também tenha as suas
                      contribuições individuais inovadoras;
                    </li>
                    <li>
                      entenda o objetivo e propósito da empresa, e consiga atuar
                      com autonomia dentro de suas responsabilidades.
                    </li>
                  </ul>
                  <p className="my-3 font-medium text-gray-600">
                    {' '}
                    Responsabilidades e atribuições:
                  </p>
                  <p className="my-3 font-medium text-gray-600">
                    Culturalmente, procuramos uma pessoa que:
                  </p>
                  <ul className="ml-5 list-disc text-sm text-gray-600">
                    <li>seja curiosa por natureza;</li>
                    <li>perfil mão na massa e ágil;</li>
                    <li>sabe ouvir e se comunicar;</li>
                    <li>busca e tenha um histórico de aprendizado contínuo;</li>
                    <li>
                      busca e fomenta a colaboração, mas também tenha as suas
                      contribuições individuais inovadoras;
                    </li>
                    <li>
                      entenda o objetivo e propósito da empresa, e consiga atuar
                      com autonomia dentro de suas responsabilidades.
                    </li>
                  </ul>
                  <p className="my-3 font-medium text-gray-600">
                    {' '}
                    Responsabilidades e atribuições:
                  </p>
                  <p className="my-3 font-medium text-gray-600">
                    Culturalmente, procuramos uma pessoa que:
                  </p>
                  <ul className="ml-5 list-disc text-sm text-gray-600">
                    <li>seja curiosa por natureza;</li>
                    <li>perfil mão na massa e ágil;</li>
                    <li>sabe ouvir e se comunicar;</li>
                    <li>busca e tenha um histórico de aprendizado contínuo;</li>
                    <li>
                      busca e fomenta a colaboração, mas também tenha as suas
                      contribuições individuais inovadoras;
                    </li>
                    <li>
                      entenda o objetivo e propósito da empresa, e consiga atuar
                      com autonomia dentro de suas responsabilidades.
                    </li>
                  </ul>
                  <p className="my-3 font-medium text-gray-600">
                    {' '}
                    Responsabilidades e atribuições:
                  </p>
                  <p className="my-3 font-medium text-gray-600">
                    Culturalmente, procuramos uma pessoa que:
                  </p>
                  <ul className="ml-5 list-disc text-sm text-gray-600">
                    <li>seja curiosa por natureza;</li>
                    <li>perfil mão na massa e ágil;</li>
                    <li>sabe ouvir e se comunicar;</li>
                    <li>busca e tenha um histórico de aprendizado contínuo;</li>
                    <li>
                      busca e fomenta a colaboração, mas também tenha as suas
                      contribuições individuais inovadoras;
                    </li>
                    <li>
                      entenda o objetivo e propósito da empresa, e consiga atuar
                      com autonomia dentro de suas responsabilidades.
                    </li>
                  </ul>
                  <p className="my-3 font-medium text-gray-600">
                    {' '}
                    Responsabilidades e atribuições:
                  </p>
                </div>
              </div>
              <div className="mt-6 flex hidden items-center justify-between rounded-lg border bg-[#FCFCFC] px-6 py-4 md:flex">
                <div>
                  <h4 className="font-semibold text-gray-600">
                    Contate o suporte SouJunior
                  </h4>
                  <Link to="/suporte" className="text-blue-500 underline">
                    https://www.soujunior/suporte
                  </Link>
                  <p className="text-gray-600">soujunior@suporte.com</p>
                </div>
                <div>
                  <img src={mailIcon} alt="Mail Icon" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-1 flex-col rounded-md border px-3 py-7 md:px-6">
            <h4 className="text-gray-para mb-2 text-xl font-bold tracking-wide text-gray-600 md:mb-1 md:text-2xl">
              Por que está denúnciando está vaga?
            </h4>
            <p className="mb-4 text-sm font-normal">
              Informe abaixo a informação mais relevante para a denuncia da
              vaga!
            </p>
            <hr />
            <div className="relative mb-8">
              <textarea
                name="message_report"
                placeholder="Descreva a causa da denúncia?"
                className="mt-5 min-h-[527px] w-full resize-none rounded-lg border px-4 py-4"
                value={message}
                onChange={handleMessage}
                maxLength={MAX_LENGTH}
              ></textarea>
              <span className="absolute bottom-4 right-4 text-sm text-gray-600">
                {count}/{MAX_LENGTH}
              </span>
            </div>
            <div className="w-full md:flex">
              <button className="mb-4 mr-0 flex w-full flex-1 items-center justify-center rounded bg-red-600 px-6 py-3 font-semibold text-white hover:bg-red-700 md:mb-0 md:mr-4 md:flex md:w-auto md:flex-1">
                Denunciar
              </button>
              <button className="mr-0 flex w-full flex-1 items-center justify-center rounded border border-blue-600 bg-transparent px-6 py-3 text-blue-600 md:mr-0 md:flex md:w-auto md:flex-1">
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
