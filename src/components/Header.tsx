import { HTMLAttributes } from 'react';
import { RiArrowLeftLine as ArrowLeftIcon } from 'react-icons/ri';
import { Link, To } from 'react-router-dom';
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
                className="bg-gray-light border-b border-gray absolute top-0 left-0
            right-0 flex items-center justify-center p-5 mb-4 h-[6.1875rem]"
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
                    <span className="h-1 w-1 mx-3 bg-gray-dark rounded-full" />
                    <h2 className="text-2xl text-gray-darker font-normal">
                        {pageName}
                    </h2>
                </div>
            </MainHeader>
        </>
    );
}
