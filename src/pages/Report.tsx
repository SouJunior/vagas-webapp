import React, { useState } from 'react';
import logo from '../assets/image/logo_soujunior.svg';
import importantIcon from '../assets/image/important_vector.png';
import { Link } from 'react-router-dom';
import mailIcon from '../assets/svg/mail.svg';
import logoFooterIcon from '../assets/svg/logo_footer.svg';
import facebookIcon from '../assets/svg/facebook.svg';
import linkedinIcon from '../assets/svg/linkedin.svg';
import instagramIcon from '../assets/svg/instagram.svg';
import discordIcon from '../assets/svg/discord.svg';
import githubIcon from '../assets/svg/github.svg';
import arrowLeftIcon from '../assets/svg/arrow-left.svg';

const Report = () => {
  const [count, setCount] = useState(1);
  const [message, setMessage] = useState('');

  const MAX_LENGTH = 2000;

  function handleMessage(e: any): void {
    setMessage(() => e.target.value);
    setCount(e.target.value.length);
  }

  return (
    <>
      <header className="flex justify-center w-full bg-[#FCFCFC] items-center h-16">
        <img
          src={arrowLeftIcon}
          alt="seta azul virada para esquerda"
          className="absolute left-6 top-3"
        />
        <img src={logo} alt="Logo da 'sou junior'" className="hidden md:flex" />
        <span className="bg-gray-400 w-1 h-1 rounded-full mx-3 hidden md:flex"></span>
        <h4 className="text-gray-500 md:text-2xl text-xl ">
          Central de denúncias
        </h4>
      </header>
      <main className="max-w-screen-lg md:m-auto  flex flex-col mx-3">
        <article className="text-center align-middle">
          <h4 className="tracking-wide mt-6 mb-1 font-semibold text-gray-600 md:text-2xl text-xl ">
            Informe a equipe do SouJunior o problema desta vaga
          </h4>
          <p className="text-sm mb-6">
            Após denunciar a vaga nossa equipe ira tomar as devidas providências
            em relação a denúncia.
          </p>
        </article>
        <hr className="mb-7" />
        <section className="min-h-[530px] sm:flex sm:justify-between gap-7 relative ">
          <div className="relative flex flex-1">
            <div className="h-9 bg-red-700  border-spacing-0 rounded-t-md absolute w-full left-0 flex justify-between items-center  px-2 ">
              <p className="text-white font-semibold text-base">
                Denunciar está vaga
              </p>
              <img src={importantIcon} alt="warning icon" />
            </div>
            <div className="flex flex-col flex-1 mb-5 sm:mb-0">
              <div className="flex  max-w-[583px] rounded-t-none border-2  border-red-700 mt-9 relative rounded-md   h-96 overflow-scroll  z-50">
                <div className="px-5 my-4 w-full ">
                  <h2 className="font-bold text-2xl text-gray-para text-gray-600">
                    UX Designer Junior
                  </h2>
                  <p className="text-gray-600">Empresa Verde</p>
                  <p className="text-gray-600 text-sm">
                    Bento Gonçalves, Rio Grande do Sul, Brasil
                  </p>
                  <h4 className="text-gray-600 text-sm">
                    REMOTO - JUNIOR - PJ
                  </h4>
                  <div className="py-4 px-5 border rounded my-3 text-sm text-gray-600">
                    <p>Tempo Integral</p>
                    <p>51-200 funcionários</p>

                    <Link to="/" className="underline text-blue-500">
                      Recrutando agora
                    </Link>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Procuramos um profissional para ocupar a posição de UX
                    Designer em um cliente referência no setor de produção de
                    imunobiológicos (vacinas) e análises laboratoriais
                    veterinários.
                  </p>
                  <p className="font-medium  text-gray-600 my-3">
                    Culturalmente, procuramos uma pessoa que:
                  </p>
                  <ul className="list-disc ml-5 text-gray-600 text-sm">
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
                  <p className="font-medium  text-gray-600 my-3">
                    {' '}
                    Responsabilidades e atribuições:
                  </p>
                  <p className="font-medium  text-gray-600 my-3">
                    Culturalmente, procuramos uma pessoa que:
                  </p>
                  <ul className="list-disc ml-5 text-gray-600 text-sm">
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
                  <p className="font-medium  text-gray-600 my-3">
                    {' '}
                    Responsabilidades e atribuições:
                  </p>
                  <p className="font-medium  text-gray-600 my-3">
                    Culturalmente, procuramos uma pessoa que:
                  </p>
                  <ul className="list-disc ml-5 text-gray-600 text-sm">
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
                  <p className="font-medium  text-gray-600 my-3">
                    {' '}
                    Responsabilidades e atribuições:
                  </p>
                  <p className="font-medium  text-gray-600 my-3">
                    Culturalmente, procuramos uma pessoa que:
                  </p>
                  <ul className="list-disc ml-5 text-gray-600 text-sm">
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
                  <p className="font-medium  text-gray-600 my-3">
                    {' '}
                    Responsabilidades e atribuições:
                  </p>
                </div>
              </div>
              <div className="bg-[#FCFCFC] border mt-6 py-4 px-6 flex items-center justify-between hidden md:flex">
                <div>
                  <h4 className="font-semibold  text-gray-600">
                    Contate o suporte SouJunior
                  </h4>
                  <Link to="/suporte" className="underline text-blue-500">
                    https://www.soujunior/suporte
                  </Link>
                  <p className="text-gray-600">soujunior@suporte.com</p>
                </div>
                <div>
                  <img src={mailIcon} alt="ícone de um correio eletrônico" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-1 border md:px-6 py-7 px-3 rounded-md flex-col">
            <h4 className="font-bold md:text-2xl text-xl mb-2 md:mb-1 text-gray-para text-gray-600 tracking-wide">
              Por que está denúnciando está vaga?
            </h4>
            <p className="font-normal text-sm mb-4">
              Informe abaixo a informação mais relevante para a denuncia da
              vaga!
            </p>
            <hr />
            <div className="relative mb-8">
              <textarea
                name="message_report"
                id=""
                placeholder="Descreva a causa da denúncia?"
                className="px-4 py-4 border rounded mt-5 min-h-[300px] resize-none w-full "
                value={message}
                onChange={handleMessage}
                maxLength={MAX_LENGTH}
              ></textarea>
              <span className="text-sm text-gray-600 absolute bottom-4 right-4    ">
                {count}/{MAX_LENGTH}
              </span>
            </div>
            <div className="w-full md:flex">
              <button className="bg-red-600 md:flex md:flex-1 md:w-auto w-full hover:bg-red-700  text-white py-3 px-6 font-bold rounded md:mb-0 mb-4 md:mb-0 flex flex-1 justify-center items-center md:mr-4 mr-0">
                Denunciar
              </button>
              <button className="bg-transparent border border-blue-600  py-3 px-6 font-bold md:flex md:flex-1 md:w-auto w-full rounded md:mr-0 mr-0  text-blue-600 flex flex-1 justify-center items-center">
                Cancelar
              </button>
            </div>
          </div>
        </section>
        <div className="bg-[#FCFCFC] border mt-6 py-4 px-6 flex items-center justify-between sm:hidden">
          <div>
            <h4 className="font-semibold  text-gray-600">
              Contate o suporte SouJunior
            </h4>
            <Link to="/suporte" className="underline text-blue-500">
              https://www.soujunior/suporte
            </Link>
            <p className="text-gray-600">soujunior@suporte.com</p>
          </div>
          <div>
            <img src={mailIcon} alt="ícone de um correio eletrônico" />
          </div>
        </div>
      </main>
      <footer className="px-3 sm:px-6 md:py-14 py-8 w-full  bg-[#FCFCFC] border mt-8 md:mt-18 grid lg:grid-flow-col  md:grid-flow-row md:grid-cols-3  sm:grid-cols-1">
        <div className="md:border-r-2 max-w-xl">
          <img
            src={logoFooterIcon}
            alt="logo da empresa sou junior com a cor azul"
          />
          <h3 className="font-bold text-gray-600 text-2xl">
            #MovimentoSouJunior
          </h3>
          <p className="text-gray-600 my-1">
            O SouJuior ajuda você a encontrar um lugar de{' '}
            <br className="sm:flex hidden" />
            destaque para a sua primeira experiência profissional!
          </p>
          <small className="text-blue-600 ">
            © 2022 SouJunior Todos os direitos reservados.
          </small>
          <div className="flex mt-2">
            <a href="javascript:void(0)">
              <img
                src={facebookIcon}
                alt="ícone do facebook"
                className="mr-4"
              />
            </a>
            <a href="https://www.linkedin.com/company/soujunior/">
              <img
                src={linkedinIcon}
                alt="ícone do linkedin"
                className="mr-4"
              />
            </a>
            <a href="">
              <img
                src={instagramIcon}
                alt="ícone do instagram"
                className="mr-4"
              />
            </a>
            <a href="https://github.com/SouJunior">
              {' '}
              <img src={githubIcon} alt="ícone do github" className="mr-4" />
            </a>
            <a href="">
              {' '}
              <img src={discordIcon} alt="ícone do discord" className="mr-4" />
            </a>
          </div>
        </div>

        <div
          className="
                px-0 md:pr-16 md:flex justify-start"
        >
          <div className="flex flex-col px-0 md:px-12  py-3">
            <h4 className="text-primary font-bold text-xl mb-2 text-blue-600">
              SouJunior
            </h4>
            <Link to="/" className="mb-2 hover:underline">
              Sobre nós
            </Link>
            <Link to="/" className="mb-2 hover:underline">
              Github
            </Link>
            <Link to="/" className="mb-2 hover:underline">
              Github
            </Link>
          </div>
          <div className="flex flex-col px-0 py-3">
            <h4 className="text-primary font-bold text-xl mb-2 text-blue-600">
              Suporte
            </h4>
            <Link to="/" className="mb-2 hover:underline">
              Sobre nós
            </Link>
            <Link to="/" className="mb-2 hover:underline">
              Github
            </Link>
            <Link to="/" className="mb-2 hover:underline">
              Github
            </Link>
          </div>
        </div>
        <div className="  md:py-0  md:px-3 md:flex justify-start md:justify-start  ">
          <div className="flex flex-col md:px-11 py-3">
            <h4 className="text-primary font-bold text-xl mb-2 text-blue-600">
              Time
            </h4>
            <Link to="/" className="mb-2 hover:underline">
              Sobre nós
            </Link>
            <Link to="/" className="mb-2 hover:underline">
              Github
            </Link>
            <Link to="/" className="mb-2 hover:underline">
              Github
            </Link>
          </div>
          <div className="flex flex-col px-0 py-3">
            <h4 className="text-primary font-bold text-xl mb-2 text-blue-600">
              Apoio
            </h4>
            <Link to="/" className="mb-2 hover:underline">
              Sobre nós
            </Link>
            <Link to="/" className="mb-2 hover:underline">
              Github
            </Link>
            <Link to="/" className="mb-2 hover:underline">
              Github
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Report;
