import logoSouJunior from '../../assets/imgs/Logotipo-SouJunior.svg';

interface LogoProps {
    onClick: () => void;
}

const Logo = ({ onClick }: LogoProps) => (
    <div className="w-52 h-8">
        <img
            src={logoSouJunior}
            alt="Logo SouJunior"
            onClick={onClick}
            className="cursor-pointer"
        />
    </div>
);

export default Logo;
