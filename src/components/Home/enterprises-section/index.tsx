import { Button } from '../../Ui/button';

import { LazyImage } from '../../Ui/lazy-image';

import enterprisesHome from '../../../assets/imgs/hero-home.svg';
import decorateHome from '../../../assets/imgs/decorate-home.svg';

function EnterprisesLazyImage() {
    return (
        <LazyImage
            src={enterprisesHome}
            alt="Mulher branca em pé, sorrindo e olhando para a direita, segurando um notebook nas mãos"
            className="ml-10 lg:w-[450px]  object-cover"
        />
    );
}

function EnterprisesLazyBackgroundImage() {
    return (
        <LazyImage
            src={decorateHome}
            alt=""
            className="absolute top-0 left-[45%] hidden lg:block "
        />
    );
}

export function EnterprisesSection() {
    return (
        <div className={`container relative mx-auto `}>
            <p className="text-blue-200 font-canada text-base md:text-xl font-medium">
                Para empresas
            </p>
            <div
                className="
                flex flex-col items-center lg:flex-row-reverse lg:justify-between lg:pl-[117px] 
            "
            >
                <div
                    className="
                flex justify-center  items-end p-0 mb-4 md:mb-0 mt-5 md:mt-4  lg:items-end  lg:h-[416px] 
                "
                >
                    <EnterprisesLazyImage />
                </div>

                <div
                    className="
                    flex flex-col justify-center items-center lg:items-start pt-4 md:pt-9 lg:pt-0 max-w-[500px]
                "
                >
                    <h1
                        className="
                    font-canada text-xl md:text-4xl lg:text-[40px] text-center lg:text-left font-semibold text-blue-300
                    "
                    >
                        Sua empresa com os maiores talentos da área!
                    </h1>

                    <p
                        className="
                    mt-2 md:mt-4 lg:mt-[18px] max-w-[350px] md:max-w-[400px] lg:max-w-[420px] text-center lg:text-left font-canada font-normal text-sm md:text-base text-blue-200
                    "
                    >
                        Um portal de juniores para seu banco de talentos.{' '}
                        <span className="font-semibold">
                            Cadastre-se agora mesmo!
                        </span>
                    </p>

                    <div
                        className="
                    flex justify-center lg:justify-start
                    "
                    >
                        <Button
                            intent="primary"
                            className="mt-4  lg:mt-8"
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
