export const MeetSouJunior: React.FC = () => {
    return (
        <div
            className="flex flex-col items-center gap-4 text-center
                        md:gap-[1.125rem]
                        lg:items-start"
        >
            <h2
                className="text-blue-950 text-xl font-semibold font-canada leading-normal
                            md:text-4xl md:leading-10
                            lg:leading-[3rem]"
            >
                Conheça a SouJunior
            </h2>

            <div
                className="text-center justify-center
                        lg:text-start"
            >
                <p
                    className="text-blue-900 text-sm font-normal font-font-canada leading-tight
                            md:text-base md:leading-snug mb-4
                            "
                >
                    A {''}
                    <strong>SouJunior {''}</strong>
                    oferece a oportunidade de trabalhar com produtos digitais e
                    adquirir habilidades valiosas para sua transição de
                    carreira.
                </p>

                <p
                    className="text-blue-900 text-sm font-normal font-font-canada leading-tight
                            md:text-base md:leading-snug
                            "
                >
                    Com nosso apoio, você terá a chance de desenvolver
                    competências e aprofundar o conhecimento em áreas de seu
                    interesse, aumentando as chances de sucesso na sua
                    trajetória profissional.
                </p>
            </div>
        </div>
    );
};
