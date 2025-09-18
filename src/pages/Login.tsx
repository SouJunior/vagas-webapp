import { useNavigate } from 'react-router-dom';
import { Button } from '../components/Button';
import extendedLogoImg from '../assets/imgs/logotipo-icone-extendida.svg';
import loginPeople from '../assets/imgs/login-people.svg';
import verticalLine from '../assets/imgs/verticalLine.svg';
import LoginCard from '../components/LoginCard';
import { AchorLink } from './styles/Main.styled';

const Login = () => {
  const navigate = useNavigate();
  const handleKeyPress = (event: React.KeyboardEvent) => {
    // Check if the key pressed is 'Enter' or 'Space'
    if (event.key === 'Enter' || event.key === ' ') {
      navigate('/');
    }
  };

  return (
    <main className="h-screen w-full overflow-y-auto bg-hero-pattern bg-cover bg-no-repeat md:w-full">
      <div className="container m-auto h-screen max-w-screen-xl">
        <section className="flex h-screen flex-col items-center lg:mb-20 lg:flex-row">
          <div className="titles flex h-5/6 max-h-[725px] flex-grow flex-col items-center max-[1024px]:hidden lg:items-center">
            <img
              className="max-w-md flex-grow"
              src={extendedLogoImg}
              alt="Logo-sou-junior-square"
              onClick={() => navigate('/')}
              onKeyDown={() => handleKeyPress}
              style={{ cursor: 'pointer' }}
            />
            <div className="max-w-xl flex-grow text-center lg:text-center">
              <img src={loginPeople} alt="logo-sou-junior" />
            </div>
            <Button
              background="outline"
              border="white"
              className="h-[67px] w-[283px] flex-shrink text-2xl"
              onClick={() => navigate('/')}
            >
              Acessar portal de vagas
            </Button>
            <AchorLink
              onClick={() =>
                window.open('https://www.soujunior.tech', '_blank')
              }
            >
              Conheça SouJunior Tech
            </AchorLink>
          </div>
          <div className="flex-grow-[.5] max-[1023px]:hidden">
            <img src={verticalLine} alt="" />
          </div>
          <div className="login-card max-[1024px]:justify-content flex h-screen max-[1024px]:items-center">
            <LoginCard />
          </div>
        </section>
      </div>
    </main>
  );
};

export default Login;
