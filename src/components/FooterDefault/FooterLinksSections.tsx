import { ReactNode } from 'react';
import { Link } from 'react-router-dom';

import { FooterLink } from './Links/types';

interface FooterLinksSectionProps {
    title: string;
    links?: FooterLink[];
    children?: ReactNode;
}

const FooterLinksSection = ({
    title,
    links,
    children,
}: FooterLinksSectionProps) => (
    <div className="flex flex-col gap-3">
        <h3 className="text-[18px] font-medium text-[#338AFF]">{title}</h3>
        {links && (
            <ul className="flex flex-col gap-3">
                {links.map(({ label, to, disabled }) => (
                    <li
                        key={`${to}-${label}`}
                        className={`list-none text-[14px] leading-[30px] m-0 text-[#002C66] hover:text-[#046ad0] max-w-[300px]
            ${disabled ? 'pointer-events-none opacity-50' : ''}`}
                    >
                        <Link
                            to={to}
                            tabIndex={disabled ? -1 : 0}
                            aria-disabled={disabled}
                        >
                            {label}
                        </Link>
                    </li>
                ))}
            </ul>
        )}
        {children && <div>{children}</div>}
    </div>
);

export default FooterLinksSection;
