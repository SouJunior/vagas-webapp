import { HTMLAttributes } from "react";
import { Link, Path } from "react-router-dom";

import { RiArrowLeftLine as ArrowLeftIcon } from "react-icons/ri";
import logoIconName from "../../assets/imgs/logo-icon-name-h.svg";

/*
* Esse tipo vem da assinatura que o attr 'to' do component Link 
* ¬ do react-router-dom pode receber
*/ 
interface HeaderProps {
  backTo: string | Partial<Path>; 
  title: string;
}

export default function Header({
  backTo,
  title,
  ...props
}: HeaderProps & HTMLAttributes<HTMLElement>) {

  return (
    <header
      {...props}
      className="bg-gray-light border-b border-gray absolute top-0 left-0
      right-0 flex items-center justify-center p-5 mb-4 h-16"
    >
	
      <Link 
		to={backTo} 
		className="absolute left-16 text-3xl"
	  >
        <ArrowLeftIcon className="text-blue w-8 h-8" />
      </Link>
	  
      <img
        width={130}
        src={logoIconName}
        alt="Logotipo-estendida-com-ícone-da-SouJunior"
      />
	  
      <span className="h-1 w-1 mx-3 bg-gray-dark rounded-full" />
	  
      <h2 className="text-base text-gray-darker font-normal">
		{title}
	  </h2>
	  
    </header>
  );
  
}
