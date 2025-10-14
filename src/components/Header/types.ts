export type HeaderVariant = 'default' | 'companies' | 'portalCompany';

export interface BaseHeaderProps {
  variant: HeaderVariant;
  className?: string;
}

export interface DefaultHeaderProps extends BaseHeaderProps {
  variant: 'default';
}

export interface CompaniesHeaderProps extends BaseHeaderProps {
  variant: 'companies';
  showNavigation?: boolean;
  navigationItems?: Array<{
    label: string;
    href: string;
  }>;
}

export interface PortalCompanyHeaderProps extends BaseHeaderProps {
  variant: 'portalCompany';
  showUserMenu?: boolean;
  onMenuClick?: () => void;
}

export type HeaderProps =
  | DefaultHeaderProps
  | CompaniesHeaderProps
  | PortalCompanyHeaderProps;

export interface HeaderStyleProps {
  variant: HeaderVariant;
  isActive?: boolean;
  isMobileOpen?: boolean;
  feedJob?: boolean;
}
