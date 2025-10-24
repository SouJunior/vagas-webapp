import MobileSectionImage from '../../../assets/imgs/candidate-section-mobile.svg';
import SectionImage from '../../../assets/imgs/candidate-section.svg';
import { LazyImage } from '../../Ui/lazy-image';

import { useNavigate } from 'react-router';

import { Button } from '../../Ui/button';

export const CandidateSection = () => {
  const navigate = useNavigate();

  const ImageDescription =
    'Imagem de uma jovem, mexendo em um tablet como se estivesse pesquisando por algo';

  const handleClick = () => {
    navigate('/candidate-settings');
  };

  return (
    <section className="bg-[rgba(51,138,255,0.05)] opacity-100">
      <div className="container mx-auto flex w-full flex-col items-start justify-center gap-6 p-6 max-[769px]:h-[641px] max-[769px]:items-center max-[451px]:h-[464px] max-[391px]:h-[464px] lg:h-[641px] lg:flex-row lg:gap-12 lg:p-8">
        <div className="w-full lg:w-1/2">
          <figure className="relative flex flex-shrink-0 items-center justify-center">
            <LazyImage
              src={SectionImage}
              alt={ImageDescription}
              className="hidden w-full max-w-2xl lg:block"
              ariaLabel={ImageDescription}
            />

            <LazyImage
              src={MobileSectionImage}
              alt={ImageDescription}
              className="relative top-[40px] hidden h-auto w-[280px] sm:block lg:hidden"
              ariaLabel={ImageDescription}
            />

            <LazyImage
              src={MobileSectionImage}
              alt={ImageDescription}
              className="relative top-[5px] block h-auto w-[210px] max-[451px]:top-[30px] sm:hidden"
              ariaLabel={ImageDescription}
            />
          </figure>
        </div>
        <div className="relative flex w-full max-w-[582px] flex-col items-end justify-center text-center font-canada text-[rgba(0,57,134,1)] max-[769px]:mt-6 max-[769px]:items-center lg:w-1/2 lg:max-w-none lg:items-start lg:text-left">
          <p className="mb-[120px] text-[20px] font-semibold leading-[120%] max-[769px]:absolute max-[769px]:-top-[290px] max-[769px]:right-[50px] max-[769px]:z-[3] max-[769px]:w-full max-[769px]:text-start max-[451px]:absolute max-[451px]:-left-[10px] max-[451px]:-top-[240px] max-[451px]:text-[16px] max-[391px]:absolute max-[391px]:-left-[10px] max-[391px]:-top-[240px] max-[391px]:text-[16px]">
            Para candidatos
          </p>

          <h2 className="mb-3 text-[40px] font-semibold leading-[120%] text-[rgba(0,44,102,1)] max-[769px]:text-[20px] max-[451px]:my-0 max-[391px]:min-w-[390px] max-[391px]:text-[20px] sm:max-w-[90%] sm:text-[32px] max-[769px]:sm:max-w-[100%]">
            Encontre oportunidades para você!
          </h2>

          <p className="my-4 max-w-[400px] text-[16px] font-normal leading-[140%] max-[451px]:my-2 max-[451px]:text-[14px] max-[391px]:my-2 max-[391px]:text-[14px] sm:max-w-[70%] max-[769px]:sm:max-w-[90%]">
            Um portal exclusivo para profissionais em início de carreira!
          </p>

          <p className="max-w-[400px] text-[16px] font-normal leading-[140%] max-[451px]:text-[14px] max-[391px]:text-[14px] sm:max-w-[90%]">
            Toda jornada tem um primeiro passo.
          </p>

          <p className="font-bold max-[451px]:text-[14px] max-[391px]:text-[14px]">
            Cadastre-se e encontre a sua vaga!
          </p>

          <Button
            onClick={handleClick}
            intent={'primary'}
            className="mt-8 w-[206px]"
          >
            Quero me candidatar
          </Button>
        </div>
      </div>
    </section>
  );
};
