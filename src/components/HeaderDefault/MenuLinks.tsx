import { NavLink, Link } from 'react-router-dom';

interface MenuLinksProps {
    isHomePage: boolean;
    onNavigate?: () => void;
}

const style = 'font-semibold text-[16px] md:text-[20px] leading-[120%]';

const MenuLinks = ({ isHomePage, onNavigate }: MenuLinksProps) => (
    <ul className="flex flex-col md:flex-row items-end gap-4">
        <li className="list-none">
            <NavLink
                to="/"
                className={`${style} ${
                    isHomePage
                        ? 'pointer-events-none text-[#338AFF] cursor-not-allowed'
                        : 'text-[#002C66]'
                }`}
                tabIndex={isHomePage ? -1 : 0}
                onClick={onNavigate}
            >
                Home
            </NavLink>
        </li>
        <li className="list-none">
            <Link
                to="/login"
                className={`text-[#002C66] ${style}`}
                onClick={onNavigate}
            >
                Sou Candidato
            </Link>
        </li>
        <li className="list-none">
            <Link
                to="/login"
                className={`text-[#002C66] ${style}`}
                onClick={onNavigate}
            >
                Sou Empresa
            </Link>
        </li>
    </ul>
);

export default MenuLinks;
