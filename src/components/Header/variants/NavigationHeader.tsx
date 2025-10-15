import Hamburger from 'hamburger-react';
import React, { useState } from 'react';
import { RiArrowLeftLine as ArrowLeftIcon } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import type { NavigationHeaderProps } from '../types';

export const NavigationHeader: React.FC<NavigationHeaderProps> = ({
  backTo,
  pageName,
  className = '',
}) => {
  const [isMobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {isMobileOpen && (
        <nav className="fixed inset-0 z-[998]">
          <div className="fixed left-0 top-0 flex h-screen w-[350px] animate-[fadeIn_0.5s_both] flex-col items-center justify-between bg-white text-left opacity-0 transition-all duration-200 max-[500px]:!w-[90vw] max-[330px]:!w-screen min-[835px]:hidden">
            <ul className="mt-6 flex w-4/5 flex-col items-start justify-center">
              <li className="my-[5px] flex cursor-pointer items-center gap-2 bg-gradient-to-r from-blue-900 to-blue-900 bg-[length:0%_3px] bg-[50%_calc(100%-0px)] bg-no-repeat px-[15px] py-[5px] text-[22pt] font-semibold capitalize text-blue-900 transition-[background-size] duration-300 hover:bg-[length:100%_3px] max-md:text-[18pt]">
                SouJunior
              </li>
              <li className="my-[5px] flex cursor-pointer items-center gap-2 bg-gradient-to-r from-blue-900 to-blue-900 bg-[length:0%_3px] bg-[50%_calc(100%-0px)] bg-no-repeat px-[15px] py-[5px] text-[22pt] font-semibold capitalize text-blue-900 transition-[background-size] duration-300 hover:bg-[length:100%_3px] max-md:text-[18pt]">
                Suporte
              </li>
              <li className="my-[5px] flex cursor-pointer items-center gap-2 bg-gradient-to-r from-blue-900 to-blue-900 bg-[length:0%_3px] bg-[50%_calc(100%-0px)] bg-no-repeat px-[15px] py-[5px] text-[22pt] font-semibold capitalize text-blue-900 transition-[background-size] duration-300 hover:bg-[length:100%_3px] max-md:text-[18pt]">
                Time
              </li>
              <li className="my-[5px] flex cursor-pointer items-center gap-2 bg-gradient-to-r from-blue-900 to-blue-900 bg-[length:0%_3px] bg-[50%_calc(100%-0px)] bg-no-repeat px-[15px] py-[5px] text-[22pt] font-semibold capitalize text-blue-900 transition-[background-size] duration-300 hover:bg-[length:100%_3px] max-md:text-[18pt]">
                Apoio
              </li>
              <hr />
            </ul>
          </div>
          <div
            className="absolute inset-0 -z-10 backdrop-blur-[8px] min-[835px]:hidden"
            onClick={() => setMobileOpen(false)}
          ></div>
        </nav>
      )}
      <div
        className={`fixed left-0 right-0 top-0 z-[999] mb-4 flex h-[6.1875rem] flex-row items-center justify-around border-b border-gray bg-gray-light p-5 max-[700px]:justify-center ${className}`}
      >
        <div className="ham-menu hidden text-blue-900 max-[835px]:flex max-[700px]:absolute max-[700px]:left-5">
          <Hamburger toggled={isMobileOpen} toggle={setMobileOpen} />
        </div>
        <Link
          to={backTo}
          className="link absolute left-16 text-3xl max-[835px]:hidden"
        >
          <ArrowLeftIcon size={44} className="text-blue" />
        </Link>
        <div className="main flex flex-row items-center justify-between max-[700px]:flex-col max-[700px]:text-center">
          <img
            width={198}
            src="/assets/logo-icon-name-h.svg"
            alt="Logotipo-estendida-com-ícone-da-SouJunior"
          />
          <span className="mx-3 h-1 w-1 rounded-full bg-gray-dark" />
          <h2 className="text-2xl font-normal text-gray-darker max-[700px]:font-bold">
            {pageName}
          </h2>
        </div>
      </div>
    </>
  );
};
