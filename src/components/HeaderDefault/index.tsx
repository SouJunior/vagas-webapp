import { Turn as Hamburger } from 'hamburger-react';
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import Logo from '@components/Header/variants/DefaultHeader/Logo';
import MenuLinks from '@components/Header/variants/DefaultHeader/MenuLinks';
import MobileMenu from '@components/Header/variants/DefaultHeader/MobileMenu';

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
      <header className="sticky top-0 z-[999] flex h-28 w-full items-center justify-between bg-white px-4">
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
            label="Abrir menu"
          />
        </div>
      </header>
    </>
  );
};

export default HeaderDefault;
