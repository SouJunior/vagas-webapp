import {
    HeaderWrapper,
    ProfileImg,
    UserArea,
    Name,
    Email,
    HeaderLogo,
    UserInfo,
    LoginBtn,
} from './styles';
import Menu from '../Menu';
import LogoImage from '../../../assets/imgs/logotipo-icone-extendida.svg';
import { AuthContext } from '../../../contexts/Auth/AuthContext';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router';

const Header = () => {
    const auth: any = useContext(AuthContext);
    const navigate = useNavigate();

    //TODO: Ao utilizar esse componente header, temos uma aninhamento de redirecionamento
    // ao clicar no link que redireciona para a pagina atual, sobrepondo vários redirecionamentos
    // const handleNavigation = () => {
    //     navigate('/profile-settings');
    // };

    const handleClick = () => {
        if (auth.user) {
            setVisible(!visible);
        } else {
            navigate('/login');
        }
    };

    const handleKeyDown = (ev: React.KeyboardEvent<HTMLElement>) => {
        if (ev.key === 'Enter') {
            handleClick();
        }
    };

    const [visible, setVisible] = useState(false);

    const navigateHeader = useNavigate()

    const backToHome = () => {
        navigateHeader('/')
        window.scrollTo({top:0, behavior:'smooth'})
    }

    return (
        <>
            <HeaderWrapper>
                <div>
                    <a href={'/candidate-portal'}>
                        <HeaderLogo
                            src={LogoImage}
                            width="194px"
                            height="29px"
                            alt="logo"
                        />
                    </a>
                </div>

                <UserArea>
                    <span>
                        {auth.user ? (
                            <UserInfo>
                                {auth.user.type === 'USER' ? (
                                    <Name>{auth.user.name}</Name>
                                ) : (
                                    <Name>{auth.user.companyName}</Name>
                                )}
                                <Email>{auth.user.email}</Email>
                            </UserInfo>
                        ) : (
                            <LoginBtn onClick={handleClick}>
                                Fazer Login
                            </LoginBtn>
                        )}
                    </span>

                    <ProfileImg
                        onClick={handleClick}
                        onKeyDown={handleKeyDown}
                        src={
                            auth.user
                                ? auth.user.profile ?? "/assets/profile-image.svg"
                                : "/assets/profile-image.svg"
                        }
                        alt="foto de perfil"
                        tabIndex={0}
                        width={'50px'}
                    />
                </UserArea>
            </HeaderWrapper>
            <span onMouseLeave={() => setVisible(!visible)}>
                {visible && <Menu />}
            </span>
        </>
    );
};

export default Header;
