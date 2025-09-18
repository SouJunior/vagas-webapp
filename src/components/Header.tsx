import type { HTMLAttributes } from 'react';
import { RiArrowLeftLine as ArrowLeftIcon } from 'react-icons/ri';
import type { To } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Hamburger from 'hamburger-react';
import { MainHeader } from '../pages/styles/Main.styled';
import { Menu, MobileHeader } from './HeaderDefault/styles';

interface HeaderProps extends HTMLAttributes<HTMLElement> {
  backTo: To;
  pageName: string;
}
/**
 * Variação 2 do cabeçalho do website
 */
export default function Header({ backTo, pageName, ...props }: HeaderProps) {
  const [isMobileOpen, setMobileOpen] = useState(false);
  const [isMobileSize, setIsMobileSize] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileSize(window.innerWidth < 1250);
    };

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      {isMobileOpen && (
        <MobileHeader>
          <div className="wrapper">
            <ul>
              <li>SouJunior</li>
              <li>Suporte</li>
              <li>Time</li>
              <li>Apoio</li>
              <hr />
            </ul>
          </div>
          <div
            className="background"
            onClick={() => setMobileOpen(false)}
          ></div>
        </MobileHeader>
      )}
      <MainHeader
        {...props}
        className="absolute left-0 right-0 top-0 mb-4 flex h-[6.1875rem] items-center justify-center border-b border-gray bg-gray-light p-5"
      >
        <Menu className="ham-menu">
          <Hamburger toggled={isMobileOpen} toggle={setMobileOpen} />
        </Menu>
        <Link to={backTo} className="link absolute left-16 text-3xl">
          <ArrowLeftIcon size={44} className="text-blue" />
        </Link>
        <div className="main">
          <img
            width={198}
            src="/assets/logo-icon-name-h.svg"
            alt="Logotipo-estendida-com-ícone-da-SouJunior"
          />
          <span className="mx-3 h-1 w-1 rounded-full bg-gray-dark" />
          <h2 className="text-2xl font-normal text-gray-darker">{pageName}</h2>
        </div>
      </MainHeader>
    </>
  );
}
