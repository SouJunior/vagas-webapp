import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router';
import LogoImage from '../../../assets/imgs/logotipo-icone-extendida.svg';
import { AuthContext } from '../../../contexts/Auth/AuthContext';
import { mockCompanyData } from '../../../Mocks/CompanyMock';
import {
  Email,
  HeaderLogo,
  HeaderWrapper,
  LoginBtn,
  Name,
  ProfileImg,
  UserArea,
  UserInfo,
} from '../../Portal/Header/styles';
import Menu from '../../Portal/Menu';
import type { PortalCompanyHeaderProps } from '../types';

export const PortalCompanyHeader: React.FC<PortalCompanyHeaderProps> = ({
  showUserMenu = true,
  onMenuClick,
  className = '',
}) => {
  const auth = useContext(AuthContext) as any;
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);

  // Usa mock se não houver usuário autenticado
  const userData = auth?.user || mockCompanyData;

  const handleClick = () => {
    if (auth?.user) {
      setVisible(!visible);
      onMenuClick?.();
    } else {
      navigate('/login');
    }
  };

  const handleKeyDown = (ev: React.KeyboardEvent<HTMLElement>) => {
    if (ev.key === 'Enter') {
      handleClick();
    }
  };

  return (
    <>
      <HeaderWrapper className={className}>
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

        {showUserMenu && (
          <UserArea>
            <span>
              {auth.user || mockCompanyData ? (
                <UserInfo>
                  {userData.type === 'USER' ? (
                    <Name>{userData.name}</Name>
                  ) : (
                    <Name>{userData.companyName}</Name>
                  )}
                  <Email>{userData.email}</Email>
                </UserInfo>
              ) : (
                <LoginBtn onClick={handleClick}>Fazer Login</LoginBtn>
              )}
            </span>

            <ProfileImg
              onClick={handleClick}
              onKeyDown={handleKeyDown}
              src={userData.profile ?? '/assets/profile-image.svg'}
              alt="foto de perfil"
              tabIndex={0}
              width={'50px'}
            />
          </UserArea>
        )}
      </HeaderWrapper>
      {showUserMenu && (
        <span onMouseLeave={() => setVisible(false)}>
          {visible && <Menu />}
        </span>
      )}
    </>
  );
};
