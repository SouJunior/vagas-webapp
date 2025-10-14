import logoSouJunior from '@assets/imgs/Logotipo-SouJunior.svg';
import { LazyImage } from '@components/Ui/lazy-image';
import { ACCESSIBILITY_CLASSES } from '@utils/accessibility';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import {
  AuthContext,
  type AuthContextType,
} from '../../../../contexts/Auth/AuthContext';

import type { PortalCompanyHeaderComponentProps } from '../../types';
import { HeaderUserMenu } from './HeaderUserMenu';

export const PortalCompanyHeader: React.FC<
  PortalCompanyHeaderComponentProps
> = ({
  companyName = 'Empresa',
  email = 'empresa@example.com',
  profileImage,
  onLogout,
}) => {
  const auth = useContext(AuthContext) as AuthContextType;

  const handleLogout = () => {
    if (onLogout) {
      onLogout();
    } else {
      auth.logout();
    }
  };
  return (
    <header className="sticky top-0 z-[999] flex h-28 w-full items-center justify-between bg-white px-8">
      <Link
        to="/"
        className={`flex-shrink-0 rounded-sm ${ACCESSIBILITY_CLASSES.focusRing}`}
        aria-label="Voltar para página inicial"
      >
        <LazyImage
          src={logoSouJunior}
          alt="Logo SouJunior Empresas"
          className="h-10 w-auto"
          ariaLabel="Logo da SouJunior Empresas"
        />
      </Link>

      <HeaderUserMenu
        companyName={companyName}
        email={email}
        profileImage={profileImage}
        onLogout={handleLogout}
      />
    </header>
  );
};
