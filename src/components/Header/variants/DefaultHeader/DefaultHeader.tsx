import { Turn as Hamburger } from 'hamburger-react';
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import type { DefaultHeaderProps } from '../../types';
import Logo from './Logo';
import MenuLinks from './MenuLinks';
import MobileMenu from './MobileMenu';

export const DefaultHeader: React.FC<DefaultHeaderProps> = ({
  className = '',
}) => {
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
      <header
        className={`sticky top-0 z-[999] flex h-28 w-full items-center justify-between bg-white px-8 ${className}`}
      >
        <Logo onClick={handleLogoClick} />
        <nav className="hidden md:block">
          <MenuLinks isHomePage={isHomePage} />
        </nav>
        <div className="md:hidden">
          <Hamburger
            toggled={isMobileOpen}
            toggle={setMobileOpen}
            color="#323232"
            size={24}
            label={isMobileOpen ? 'Fechar menu' : 'Abrir menu'}
          />
        </div>
      </header>
    </>
  );
};
