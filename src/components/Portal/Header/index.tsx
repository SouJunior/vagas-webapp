import {
    Header,
    ProfilePicture,
    UserButton,
    Name,
    Email,
    MenuPicture,
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

const Index = () => {
    const auth: any = useContext(AuthContext);
    const navigate = useNavigate();

    const handleNavigation = () => {
        navigate('/handle-profile');
    };

    const [visible, setVisible] = useState(false);

    return (
        <>
            <Header>
                <div>
                    <HeaderLogo
                        src={LogoImage}
                        width="194px"
                        height="29px"
                        alt="logo"
                    />
                </div>
                <UserButton>
                    <ProfilePicture
                        onClick={handleNavigation}
                        src={ProfileImage}
                        alt="foto de perfil"
                    />
                    <UserInfo onClick={() => setVisible(!visible)}>
                        {auth.user.type === 'USER' ? (
                            <Name>{auth.user.name}</Name>
                        ) : (
                            <Name>{auth.user.companyName}</Name>
                        )}
                        <Email>{auth.user.email}</Email>
                    </UserInfo>
                    <MenuPicture
                        onClick={() => setVisible(!visible)}
                        src={MenuImage}
                        alt="menu"
                    />
                </UserButton>
            </Header>
            {visible && <Menu />}
        </>
    );
};

export default Index;
