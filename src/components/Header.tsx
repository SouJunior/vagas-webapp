import { HTMLAttributes } from 'react';
import { RiArrowLeftLine as ArrowLeftIcon } from 'react-icons/ri';
import { Link, To } from 'react-router-dom';
import logoIconName from '../assets/imgs/logo-icon-name-h.svg';

interface HeaderProps extends HTMLAttributes<HTMLElement> {
    backTo: To;
    pageName: string;
}
/**
 * Variação 2 do cabeçalho do website
 */
export default function Header({
    backTo,
    pageName,
    ...props
}: HeaderProps) {
    return (
        <header
            {...props}
            className="bg-gray-light border-b border-gray absolute top-0 left-0
            right-0 flex items-center justify-center p-5 mb-4 h-16"
        >
            <Link to={backTo} className="absolute left-16 text-3xl">
                <ArrowLeftIcon className="text-blue w-8 h-8" />
            </Link>
            <img
                width={130}
                src={logoIconName}
                alt="Logotipo-estendida-com-ícone-da-SouJunior"
            />
            <span className="h-1 w-1 mx-3 bg-gray-dark rounded-full" />
            <h2 className="text-base text-gray-darker font-normal">{pageName}</h2>
        </header>
    );
}
