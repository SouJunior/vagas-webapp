import logoSouJunior from '@assets/imgs/Logotipo-SouJunior Empresas.svg';
import { LazyImage } from '@components/Ui/lazy-image';
import { ACCESSIBILITY_CLASSES } from '@utils/accessibility';
import React from 'react';
import { Link } from 'react-router-dom';
import type { CompaniesHeaderProps } from '../types';

export const CompaniesHeader: React.FC<CompaniesHeaderProps> = ({
  navigationItems = [
    { label: 'Home', href: '/' },
    { label: 'Sobre nós', href: 'https://www.soujunior.tech/sobre-nos' },
  ],
  className = '',
}) => {
  return (
    <header className={`sticky top-0 z-[999] bg-white shadow-sm ${className}`}>
      <div className="mx-auto max-w-7xl px-4 py-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className={`flex-shrink-0 rounded-sm ${ACCESSIBILITY_CLASSES.focusRing}`}
            aria-label="Voltar para página inicial"
          >
            <LazyImage
              src={logoSouJunior}
              alt="Logo SouJunior Empresas"
              className="h-12 w-auto lg:h-16"
              ariaLabel="Logo da SouJunior Empresas"
            />
          </Link>

          <nav role="navigation" aria-label="Navegação principal">
            <ul className="flex items-center gap-4 lg:gap-8">
              {navigationItems.map((item) => (
                <li key={item.href} className="list-none">
                  <Link
                    to={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-1 rounded-sm text-base font-semibold text-[#082E54] transition-colors hover:text-[#338AFF] lg:text-xl ${ACCESSIBILITY_CLASSES.focusRing}`}
                    aria-label={`${item.label} (abre em nova aba)`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};
