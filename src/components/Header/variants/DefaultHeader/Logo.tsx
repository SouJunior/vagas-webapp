import logoSouJunior from '@assets/imgs/Logotipo-SouJunior.svg';

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
    <>
      <button
        onClick={onClick}
        className="h-8 w-52 cursor-pointer border-0 bg-transparent p-0 focus:outline-none"
        aria-label="Logo SouJunior"
      >
        <img
          src={logoSouJunior}
          alt="Logo SouJunior"
          className="h-10 w-full object-contain"
        />
      </button>
    </>
  );
};

export default Logo;
