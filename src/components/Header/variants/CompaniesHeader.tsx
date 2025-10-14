import React from 'react';
import { Link } from 'react-router-dom';
import logoSouJunior from '../../../assets/imgs/Logotipo-SouJunior Empresas.svg';
import type { CompaniesHeaderProps } from '../types';

export const CompaniesHeader: React.FC<CompaniesHeaderProps> = ({
  showNavigation = true,
  navigationItems = [
    { label: 'Home', href: '/' },
    { label: 'Sobre nós', href: '#' },
  ],
  className = '',
}) => {
  return (
    <header className={`sticky top-0 z-[999] bg-white ${className}`}>
      <div className="mx-auto max-w-[87.5rem] px-4 py-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <img
              src={logoSouJunior}
              alt="Logo SouJunior"
              className="h-8 w-auto max-w-[12.75rem] lg:h-12"
            />
          </Link>

          {/* Navigation */}
          {showNavigation && (
            <nav className="hidden md:block">
              <ul className="flex items-center gap-6">
                {navigationItems.map((item, index) => (
                  <li key={index} className="list-none">
                    <Link
                      to={item.href}
                      className="text-base font-semibold text-[#002C66] transition-colors hover:text-[#338AFF] lg:text-xl"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          )}

          {/* Mobile menu button - placeholder for future implementation */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-[#002C66]"
              aria-label="Abrir menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
