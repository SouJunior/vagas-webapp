import { Button } from '../../Ui/button';

import { LazyImage } from '../../Ui/lazy-image';

import decorateHome from '../../../assets/imgs/decorate-home.svg';
import enterprisesHome from '../../../assets/imgs/hero-home.svg';

function EnterprisesLazyImage() {
  return (
    <LazyImage
      src={enterprisesHome}
      alt="Mulher branca em pé, sorrindo e olhando para a direita, segurando um notebook nas mãos"
      className="ml-10 object-cover lg:w-[450px]"
    />
  );
}

function EnterprisesLazyBackgroundImage() {
  return (
    <LazyImage
      src={decorateHome}
      alt=""
      className="absolute left-[45%] top-0 hidden lg:block"
    />
  );
}

export function EnterprisesSection() {
  return (
    <div className={`container relative`}>
      <p className="font-canada text-base font-medium text-blue-200 md:text-xl">
        Para empresas
      </p>
      <div className="flex flex-col items-center lg:flex-row-reverse lg:justify-between lg:pl-[117px]">
        <div className="mb-4 mt-5 flex items-end justify-center p-0 md:mb-0 md:mt-4 lg:h-[416px] lg:items-end">
          <EnterprisesLazyImage />
        </div>

        <div className="flex max-w-[500px] flex-col items-center justify-center pt-4 md:pt-9 lg:items-start lg:pt-0">
          <h1 className="text-center font-canada text-xl font-semibold text-blue-300 md:text-4xl lg:text-left lg:text-[40px]">
            Sua empresa com os maiores talentos da área!
          </h1>

          <p className="mt-2 max-w-[350px] text-center font-canada text-sm font-normal text-blue-200 md:mt-4 md:max-w-[400px] md:text-base lg:mt-[18px] lg:max-w-[420px] lg:text-left">
            Um portal de juniores para seu banco de talentos.{' '}
            <span className="font-semibold">Cadastre-se agora mesmo!</span>
          </p>

          <div className="flex justify-center lg:justify-start">
            <Button
              intent="primary"
              className="mt-4 lg:mt-8"
              aria-label="Quero Contratar"
            >
              quero contratar
            </Button>
          </div>
        </div>
      </div>
      <EnterprisesLazyBackgroundImage />
    </div>
  );
}
