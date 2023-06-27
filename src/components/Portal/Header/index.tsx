import {
    HeaderWrapper,
    ProfileImg,
    UserArea,
    Name,
    Email,
    OpenMenuBtn,
    HeaderLogo,
    UserInfo,
} from './styles';
import Menu from '../Menu';
import LogoImage from '../../../assets/imgs/logotipo-icone-extendida.svg';
import MenuImage from '../../../assets/imgs/vertical-menu.svg';
import ProfileImage from '../../../assets/imgs/profile-image.svg';

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

    const [visible, setVisible] = useState(false);

    return (
        <>
            <HeaderWrapper>
                <div>
                    <HeaderLogo
                        src={ LogoImage}
                        width="194px"
                        height="29px"
                        alt="logo"
                    />
                </div>
                <UserArea>
                    {/* <span onClick={() => setVisible(!visible)}> */}
                    <span>
                        <UserInfo>
                            {auth.user.type === 'USER' ? (
                                <Name>{auth.user.name}</Name>
                            ) : (
                                <Name>{auth.user.companyName}</Name>
                            )}
                            <Email>{auth.user.email}</Email>
                        </UserInfo>
                        {/* <OpenMenuBtn src={MenuImage} alt="menu" /> */}
                    </span>
                    <ProfileImg
                        onClick={() => setVisible(!visible)}
                        // onClick={handleNavigation}
                        src={ auth.user.profile ? auth.user.profile : ProfileImage}
                        alt="foto de perfil"
                        width={'16%'}
                    />
                    {/* <span onClick={() => setVisible(!visible)}>
                        <UserInfo> ... */}
                </UserArea>
            </HeaderWrapper>
            <span onMouseLeave={() => setVisible(!visible)}>{visible && <Menu />}</span>
        </>
    );
};

export default Header;
