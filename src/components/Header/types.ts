export type HeaderVariant =
  | 'default'
  | 'companies'
  | 'portalCompany'
  | 'navigation';

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
  companyName?: string;
  email?: string;
  profileImage?: string;
  onLogout?: () => void;
}

export interface NavigationHeaderProps extends BaseHeaderProps {
  variant: 'navigation';
  backTo: string;
  pageName: string;
}

export type HeaderProps =
  | DefaultHeaderProps
  | CompaniesHeaderProps
  | PortalCompanyHeaderProps
  | NavigationHeaderProps;

export interface HeaderStyleProps {
  variant: HeaderVariant;
  isActive?: boolean;
  isMobileOpen?: boolean;
  feedJob?: boolean;
}

export interface HeaderUserMenuProps {
  companyName: string;
  email: string;
  profileImage?: string;
  onLogout?: () => void;
}

export interface PortalCompanyHeaderComponentProps {
  companyName?: string;
  email?: string;
  profileImage?: string;
  onLogout?: () => void;
}
