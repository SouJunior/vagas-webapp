import React from 'react';
import type { HeaderProps } from './types';
import { CompaniesHeader } from './variants/CompaniesHeader';
import { DefaultHeader } from './variants/DefaultHeader/DefaultHeader';
import { PortalCompanyHeader } from './variants/PortalCompanyHeader';

const Header: React.FC<HeaderProps> = (props) => {
  switch (props.variant) {
    case 'default':
      return <DefaultHeader {...props} />;
    case 'companies':
      return <CompaniesHeader {...props} />;
    case 'portalCompany':
      return <PortalCompanyHeader {...props} />;
    default:
      return <DefaultHeader variant="default" />;
  }
};

export default Header;
