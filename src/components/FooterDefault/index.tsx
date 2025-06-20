import { ReactNode } from 'react';
import ScrollToTopButton from '../ScrollToTopButton';
import SocialLinks from '../SocialLinks';

type FooterLink = {
    label: string;
    href: string;
    disabled?: boolean;
};

const institucionalLinks: FooterLink[] = [
    {
        label: 'Site SouJunior',
        href: 'https://www.soujunior.tech/',
    },
    {
        label: 'Indique uma vaga',
        href: '',
        disabled: true,
    },
    {
        label: 'Faça parte',
        href: 'https://www.soujunior.tech/?#participation',
    },
    {
        label: 'Ouvidoria',
        href: 'https://www.soujunior.tech/ouvidoria',
    },
];

const canaisLinks: FooterLink[] = [
    {
        label: 'SouJunior Labs',
        href: 'https://docs.google.com/forms/d/e/1FAIpQLSd1IspO3Hwylce2kHtIsmyBAkH7p3VFmdYUmdL75YXZ-DSNBA/viewform',
    },
    {
        label: 'SouJunior Talks',
        href: 'https://discord.gg/64sXAewKEC',
    },
    {
        label: 'Blog da SouJunior',
        href: 'https://blog.soujunior.tech/',
    },
];

const FooterLinksSection = ({
    title,
    links,
    children,
}: {
    title: string;
    links?: FooterLink[];
    children?: ReactNode;
}) => (
    <div className="flex flex-col gap-3">
        <h3 className="text-[18px] font-medium text-[#338AFF]">{title}</h3>
        {links && (
            <ul className="flex flex-col gap-3">
                {links.map(({ label, href, disabled }) => (
                    <li
                        key={label}
                        className={`list-none text-[14px] leading-[30px] m-0 text-[#002C66] hover:text-[#046ad0] max-w-[300px]
                        ${disabled ? 'pointer-events-none opacity-50' : ''}`}
                    >
                        <a
                            href={href}
                            rel="noreferrer"
                            target="_blank"
                            tabIndex={disabled ? -1 : 0}
                            aria-disabled={disabled}
                        >
                            {label}
                        </a>
                    </li>
                ))}
            </ul>
        )}
        {children && <div>{children}</div>}
    </div>
);

const FooterDefault = () => (
    <footer className="w-screen bg-white">
        <div
            className="flex flex-col flex-wrap justify-between my-6 mx-4
                            lg:flex-row lg:mx-8"
        >
            <div style={{ cursor: 'pointer' }}>
                <ScrollToTopButton />
            </div>
            <div
                className=" flex flex-col gap-8 my-6 mx-0                     
                                md:flex-row md:justify-end md:mt-6 md:mr-4 md:mb-8 md:ml-4
                                lg:gap-20 "
            >
                <FooterLinksSection
                    title="Institucional"
                    links={institucionalLinks}
                />
                <FooterLinksSection
                    title="Canais SouJunior"
                    links={canaisLinks}
                />
                <FooterLinksSection title="Redes Sociais">
                    <SocialLinks />
                </FooterLinksSection>
            </div>
        </div>
    </footer>
);

export default FooterDefault;
