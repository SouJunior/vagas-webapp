
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Turn as Hamburger } from 'hamburger-react';

import logoSouJunior from "../../assets/imgs/Logotipo-SouJunior.svg";
import closeMenu from "../../assets/imgs/x.svg";

interface MenuLinksProps {
  isHomePage: boolean;
  onNavigate?: () => void;
}

const MenuLinks: React.FC<MenuLinksProps> = ({ isHomePage, onNavigate }) => {

    const style = "font-semibold text-[16px] md:text-[20px] leading-[120%]";     

    return (
    <ul className="flex flex-col md:flex-row items-end gap-4">
        <li className='list-none'>
            <a
                href="https://vagas.soujunior.tech/"
                rel="noreferrer"
                target="_blank"
                className={`${style} ${
                isHomePage
                    ? "pointer-events-none text-[#338AFF] cursor-not-allowed"
                    : "text-[#002C66]"
                }`}
                tabIndex={isHomePage ? -1 : 0}
                onClick={onNavigate}
            >
                Home
            </a>
        </li>
        <li className='list-none'>
            <a
                href="https://vagas.soujunior.tech/login"
                rel="noreferrer"
                target="_blank"
                className={`text-[#002C66] ${style}`}
                onClick={onNavigate}
            >
                Sou Candidato
            </a>
        </li>
        <li className='list-none'>
            <a
                href="https://vagas.soujunior.tech/login"
                rel="noreferrer"
                target="_blank"
                className={`text-[#002C66] ${style}`}
                onClick={onNavigate}
            >
                Sou Empresa
            </a>
        </li>
    </ul>
)};

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  isHomePage: boolean;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose, isHomePage }) => {
  if (!isOpen) return null;
  return (
    <>
      <div className="fixed top-0 right-0 bg-white drop-shadow-2xl w-64 h-80 z-[999]">
        <div className="flex items-start justify-between m-4">
          <button
            onClick={onClose}
            aria-label="Fechar menu"
            type="button"
          >
            <img
              src={closeMenu}
              alt="Ícone de fechar menu"
              className="w-6 h-6"
            />
          </button>
          <MenuLinks isHomePage={isHomePage} onNavigate={onClose} />
        </div>
      </div>
      <div
        className="w-screen h-full z-30 absolute backdrop-blur-md"
        onClick={onClose}
        aria-label="Fechar menu"
        tabIndex={0}
        role="button"
      />
    </>
  );
};

const HeaderDefault: React.FC = () => {
  const [isMobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const handleLogoClick = () => {
    if (isHomePage) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/');
    }
  };

  return (
    <>
      <MobileMenu
        isOpen={isMobileOpen}
        onClose={() => setMobileOpen(false)}
        isHomePage={isHomePage}
      />
      <header className="fixed top-0 flex w-screen bg-white h-28 items-center justify-between px-4 z-40">
        <div className="w-52 h-8">
          <img
            src={logoSouJunior}
            alt="Logo SouJunior"
            onClick={handleLogoClick}
            className="cursor-pointer"
          />
        </div>
        <nav className="hidden md:block">
          <MenuLinks isHomePage={isHomePage} />
        </nav>
        <div className="md:hidden">
          <Hamburger
            toggled={isMobileOpen}
            toggle={setMobileOpen}
            color="#323232"
            size={24}
            label="Abrir menu"
          />
        </div>
      </header>
    </>
  );
};

export default HeaderDefault;