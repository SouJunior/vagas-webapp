import SectionImage from '../../../assets/imgs/candidate-section.png';
import MobileSectionImage from '../../../assets/imgs/candidate-section-mobile.png';
import { LazyImage } from '../../Ui/lazy-images';

import { useNavigate } from 'react-router';

export const CandidateSection = () => {

    const navigate = useNavigate();

    const ImageDescription = "Imagem de uma jovem, mexendo em um tablet em busca como se estivesse pesquisando por algo";

    const handleClick = () => {
        navigate('/candidate-settings');
    };

    return (
        <div
            className="
            flex flex-col items-center 
            w-full max-w-[1440px] min-w-[360px] 
            h-[600px] p-6 gap-6 bg-[rgba(51,138,255,0.05)] opacity-100 lg:h-[641px]
            max-[391px]:h-[464px]

            lg:flex-row lg:gap-12 lg:p-8 
        ">

            <figure className="relative flex-shrink-0 flex justify-center items-center mt-8">

                <LazyImage
                    src={SectionImage}
                    alt={ImageDescription}
                    className="hidden lg:block w-full max-w-2xl"
                    ariaLabel={ImageDescription}
                />

                <LazyImage
                    src={MobileSectionImage}
                    alt={ImageDescription}
                    className="hidden sm:block lg:hidden w-[280px] h-auto relative top-[20px]"
                    ariaLabel={ImageDescription}
                />


                <LazyImage
                    src={MobileSectionImage}
                    alt={ImageDescription}
                    className="block sm:hidden w-[210px] h-auto relative top-[5px]"
                    ariaLabel={ImageDescription}
                />
            </figure>


            <div
                className="
                flex flex-col w-full max-w-[582px] text-[rgba(0,57,134,1)] font-[Radio Canada] relative
                items-center text-center
                lg:items-start lg:text-left
                sm:pt-6
            ">
                <p className="font-medium text-[20px] leading-[120%] mb-[74px] 
                    max-[769px]:absolute max-[769px]:-top-[290px] max-[769px]:right-[270px] max-[769px]:w-full max-[769px]:text-center max-[769px]:z-[3]
                    max-[391px]:absolute max-[391px]:-top-[240px] max-[391px]:-left-[100px] max-[391px]:text-[16px]
                ">
                    Para candidatos
                </p>

                <h2
                    className="
                    font-semibold text-[40px] leading-[120%] text-[rgba(0,44,102,1)] mb-3
                    sm:text-[32px] max-[769px]:text-[20px]
                    max-[391px]:text-[20px] max-[391px]:min-w-[390px]
                ">
                    Encontre oportunidades para você!
                </h2>

                <p
                    className="
                    font-normal text-[16px] leading-[140%] max-w-[400px] my-4
                    sm:max-w-[90%]
                    max-[391px]:text-[14px] max-[391px]:my-2
                ">
                    Um portal exclusivo para profissionais em início de carreira!
                </p>

                <p className="font-normal text-[16px] leading-[140%] 
                    max-w-[400px] sm:max-w-[90%] 
                    max-[391px]:text-[14px]
                ">
                    Toda jornada tem um primeiro passo.
                </p>

                <p className="font-bold max-[391px]:text-[14px]">
                    Cadastre-se e encontre a sua vaga!
                </p>

                <button
                    onClick={handleClick}
                    className="
                    w-[206px] h-[44px] rounded-lg bg-[rgba(0,57,134,1)] text-white mt-6 
                    flex justify-center items-center
                    max-[391px]:h-[36px] max-[391px]:mt-4 max-[391px]:text-[14px]
                ">
                    Quero me candidatar
                </button>
            </div>
        </div>
    );
};