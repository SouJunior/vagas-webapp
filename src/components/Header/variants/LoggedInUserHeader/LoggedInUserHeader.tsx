import { LazyImage } from '@components/Ui/lazy-image';
import { ACCESSIBILITY_CLASSES } from '@utils/accessibility';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../../contexts/Auth/AuthContext';

import LogoSouJunior from '../../../../assets/imgs/Logotipo-SouJunior.svg';
import type { LoggedInUserHeaderProps } from '../../types';
import { HeaderUserMenu } from './HeaderUserMenu';

export const LoggedInUserHeader: React.FC<LoggedInUserHeaderProps> = ({
  userName,
  email,
  profileImage,
  onLogout,
}) => {
  const auth = useContext(AuthContext);

  if (!auth) {
    throw new Error('LoggedInUserHeader must be used within an AuthProvider');
  }

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
          src={LogoSouJunior}
          alt="Logo da SouJunior"
          className="h-10 w-auto"
          ariaLabel="Logo da SouJunior"
        />
      </Link>
      {userName && email && (
        <HeaderUserMenu
          userName={userName}
          email={email}
          profileImage={profileImage}
          onLogout={handleLogout}
        />
      )}
    </header>
  );
};
