import SectionImage from '../../../assets/imgs/candidate-section.png';
import MobileSectionImage from '../../../assets/imgs/candidate-section-mobile.png';
import { LazyImage } from '../../Ui/lazy-images';

import { useNavigate } from 'react-router';

export const CandidateSection = ({
}) => {

    const navigate = useNavigate();

    const ImageDescription = "Imagem de uma jovem, mexendo em um tablet em busca como se estivesse pesquisando por algo";

    const handleClick = () => {
        navigate('/candidate-settings');
    };

    return (
        <div className="
            w-full h-[600px] min-w-[390px] p-8 gap-12 opacity-100 flex bg-[rgba(51,138,255,0.05)]
    max-[769px]:flex max-[769px]:flex-col max-[769px]:items-center max-[769px]:min-h-[641px]
    max-[391px]:min-h-[464px] max-[391px]:h-[464px] max-[391px]:w-[390px] max-[391px]:p-0
">
            <figure className="flex-shrink-0">
                <LazyImage
                    src={SectionImage}
                    alt={ImageDescription}
                    className="hidden lg:block w-full max-w-2xl"
                    ariaLabel={ImageDescription}
                />

                <LazyImage
                    src={MobileSectionImage}
                    alt={ImageDescription}
                    className="hidden sm:block lg:hidden w-[298px] h-[261px] absolute top-[1280px] bottom-[200px] left-[268px]"
                    ariaLabel={ImageDescription}
                />

                <LazyImage
                    src={MobileSectionImage}
                    alt={ImageDescription}
                    className="block sm:hidden w-[210px] h-[183.5px] absolute top-[950px] bottom-[200px] left-[120px]"
                    ariaLabel={ImageDescription}
                />
            </figure>

            <div className="
        flex flex-col w-[582px] text-[rgba(0,57,134,1)] font-[Radio Canada] relative
        max-[769px]:w-[768px] max-[769px]:h-[641px] max-[769px]:justify-center max-[769px]:items-center max-[769px]:min-w-[390px] max-[769px]:max-w-[1440px] max-[769px]:pt-6 max-[769px]:relative max-[769px]:top-[120px]
        max-[391px]:w-[358px] max-[391px]:top-[80px] max-[391px]:flex max-[391px]:justify-center max-[391px]:items-center max-[391px]:text-center
    ">
                <p className="
            font-medium text-[20px] leading-[120%] mb-[74px]
            max-[769px]:absolute max-[769px]:-top-[170px] max-[769px]:right-[280px] max-[769px]:w-full max-[769px]:text-center max-[769px]:z-[3]
            max-[391px]:absolute max-[391px]:-top-[105px] max-[391px]:-left-[120px] max-[391px]:text-[16px]
        ">
                    Para candidatos
                </p>

                <h2 className="
            font-semibold text-[40px] leading-[120%] text-[rgba(0,44,102,1)] mb-[10px]
            max-[769px]:text-[36px]
            max-[391px]:text-[20px] max-[391px]:max-w-[358px] max-[391px]:text-center
            ">
                    Encontre oportunidades para você!
                </h2>

                <p className="
            font-normal text-[16px] leading-[140%] max-w-[400px] my-[18px]
            max-[769px]:text-[16px] max-[769px]:min-w-[600px] max-[769px]:text-center
            max-[391px]:text-[14px] max-[391px]:px-[130px] max-[391px]:my-[10px]
        ">
                    Um portal exclusivo para profissionais em início de carreira!
                </p>

                <p className="
            font-normal text-[16px] leading-[140%] max-w-[400px]
            max-[391px]:text-[14px]
        ">
                    Toda jornada tem um primeiro passo.
                </p>

                <p className="
            font-bold
            max-[391px]:text-[14px]
        ">
                    Cadastre-se e encontre a sua vaga!
                </p>

                <button
                    onClick={handleClick}
                    className="
                w-[206px] h-[44px] rounded-lg bg-[rgba(0,57,134,1)] text-white mt-[28px] flex justify-center items-center
                max-[391px]:h-[36px] max-[391px]:mt-[18px] max-[391px]:text-[16px]
            "
                >
                    Quero me candidatar
                </button>
            </div>
        </div>
    );
};
