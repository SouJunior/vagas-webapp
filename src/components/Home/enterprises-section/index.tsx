import React from 'react';

import heroHome from '../../../assets/imgs/hero-home.svg';
import decorateHome from '../../../assets/imgs/decorate-home.svg';

import { Button } from '../../Ui/ButtonUi/Button';

export function EnterprisesSection() {
    const [isVisible, setIsVisible] = React.useState<boolean>(false);

    React.useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <div
            className={`container relative mx-auto transition-all duration-700 ease-out
                                ${
                                    isVisible
                                        ? 'opacity-100 translate-y-0'
                                        : 'opacity-0 translate-y-4'
                                }`}
        >
            <p className="text-blue-dark200 font-canada text-base md:text-xl font-medium">
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
                    <img
                        className="
                        ml-10 lg:w-[450px]  object-cover
                        "
                        src={heroHome}
                        alt="Mulher branca em pé, sorrindo e olhando para a direita, segurando um notebook nas mãos"
                    />
                </div>

                <div
                    className="
                    flex flex-col justify-center items-center lg:items-start pt-4 md:pt-9 lg:pt-0 max-w-[500px]
                "
                >
                    <h1
                        className="
                    font-canada text-xl md:text-4xl lg:text-[40px] text-center lg:text-left font-semibold text-blue-dark300
                    "
                    >
                        Sua empresa com os maiores talentos da área!
                    </h1>

                    <p
                        className="
                    mt-2 md:mt-4 lg:mt-[18px]  text-center lg:text-left font-canada font-normal text-sm md:text-base text-blue-dark200
                    "
                    >
                        Um portal de juniores para seu banco de talentos.
                        <br />
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
            <img
                src={decorateHome}
                alt=""
                className="absolute top-0 left-[45%] hidden lg:block "
            />
        </div>
    );
}
