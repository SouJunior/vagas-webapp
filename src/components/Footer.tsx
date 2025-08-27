import {
  RiFacebookCircleFill,
  RiLinkedinBoxFill,
  RiInstagramFill,
  RiGithubFill,
  RiDiscordFill,
} from 'react-icons/ri';

export function Footer() {
  return (
    <footer className="h-72 w-full border-t border-gray-dark/30 bg-gray-light">
      <div className="my-14 flex flex-col justify-center md:flex-row">
        <div className="flex flex-col items-center text-center md:ml-14 md:mr-12 md:items-start md:text-start">
          <img
            src="/assets/logo-icon-name-h.svg"
            width="265px"
            alt="Logo SouJunior"
          />
          <h2 className="mt-1 text-[25px] font-semibold text-gray-darker">
            #MovimentoSouJunior
          </h2>
          <p className="max-w-[355px] text-sm leading-4 text-gray-darker">
            O SouJunior ajuda você a encontrar um lugar de destaque para sua
            primeira experiência profissional!
          </p>
          <p className="mt-2 text-xs text-blue">
            © 2022 SouJunior Todos os direitos reservados.
          </p>
          <div className="mb-10 mt-3 flex text-3xl text-blue md:mb-0">
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
        <div className="grid grid-cols-2 gap-20 border-gray-dark/50 md:grid-cols-2 md:gap-5 md:border-l lg:grid-cols-2 lg:justify-center lg:gap-10 xl:grid-cols-4">
          <div className="mt-1 flex flex-col items-center font-canada md:items-start md:pl-[66px]">
            <h3 className="text-xl font-semibold text-blue">SouJunior</h3>
            <a
              href="/"
              className="mt-1.5 text-[17px] leading-5 text-gray-darker"
            >
              Sobre nós
            </a>
            <a
              href="https://github.com/SouJunior"
              className="mt-1 text-[17px] leading-5 text-gray-darker"
            >
              Github
            </a>
            <a
              href="https://github.com/SouJunior"
              className="mt-1 text-[17px] leading-5 text-gray-darker"
            >
              Github
            </a>
          </div>
          <div className="mt-1 flex flex-col items-center font-canada md:ml-20 md:items-start">
            <h3 className="text-xl font-semibold text-blue">Suporte</h3>
            <a
              href="/"
              className="mt-1.5 text-[17px] leading-5 text-gray-darker"
            >
              Cadastro
            </a>
            <a
              href="https://github.com/SouJunior"
              className="mt-1 text-[17px] leading-5 text-gray-darker"
            >
              Github
            </a>
            <a
              href="https://github.com/SouJunior"
              className="mt-1 text-[17px] leading-5 text-gray-darker"
            >
              Github
            </a>
          </div>
          <div className="mt-1 flex flex-col items-center font-canada md:ml-20 md:items-start">
            <h3 className="text-xl font-semibold text-blue">Time</h3>
            <a
              href="/"
              className="mt-1.5 text-[17px] leading-5 text-gray-darker"
            >
              Cadastro
            </a>
            <a
              href="https://github.com/SouJunior"
              className="mt-1 text-[17px] leading-5 text-gray-darker"
            >
              Github
            </a>
            <a
              href="https://github.com/SouJunior"
              className="mt-1 text-[17px] leading-5 text-gray-darker"
            >
              Github
            </a>
          </div>
          <div className="mb-5 mt-1 flex flex-col items-center font-canada md:ml-20 md:items-start">
            <h3 className="text-xl font-semibold text-blue">Apoio</h3>
            <a
              href="/"
              className="mt-1.5 text-[17px] leading-5 text-gray-darker"
            >
              Cadastro
            </a>
            <a
              href="https://github.com/SouJunior"
              className="mt-1 text-[17px] leading-5 text-gray-darker"
            >
              Github
            </a>
            <a
              href="https://github.com/SouJunior"
              className="mt-1 text-[17px] leading-5 text-gray-darker"
            >
              Github
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
