import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Turn as Hamburger } from 'hamburger-react';

import MobileMenu from './MobileMenu';
import MenuLinks from './MenuLinks';
import Logo from './Logo';

interface HeaderDefaultProps {
    isActive: boolean;
}

const HeaderDefault: React.FC<HeaderDefaultProps> = ({ isActive }) => {
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
            <header className="fixed top-0 flex w-full bg-white h-28 items-center justify-between px-4 z-40">
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
