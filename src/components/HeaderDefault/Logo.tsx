import logoSouJunior from '../../assets/imgs/Logotipo-SouJunior.svg';

interface LogoProps {
    onClick: () => void;
}

const Logo = ({ onClick }: LogoProps) => {
    const handleKeyDown = (event: React.KeyboardEvent) => {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            onClick();
        }
    };

    return (
        <div className="w-52 h-8">
            <img
                src={logoSouJunior}
                alt="Logo SouJunior"
                onClick={onClick}
                onKeyDown={handleKeyDown}
                tabIndex={0}
                className="cursor-pointer"
                role="button"
            />
        </div>
    );
};

export default Logo;
