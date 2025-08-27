export const MeetSouJunior: React.FC = () => {
  return (
    <div className="flex flex-col items-center gap-4 text-center md:gap-[1.125rem] lg:items-start">
      <h2 className="font-canada text-xl font-semibold leading-normal text-blue-950 md:text-4xl md:leading-10 lg:leading-[3rem]">
        Conheça a SouJunior
      </h2>

      <div className="justify-center text-center lg:text-start">
        <p className="font-font-canada mb-4 text-sm font-normal leading-tight text-blue-900 md:text-base md:leading-snug">
          A {''}
          <strong>SouJunior {''}</strong>
          oferece a oportunidade de trabalhar com produtos digitais e adquirir
          habilidades valiosas para sua transição de carreira.
        </p>

        <p className="font-font-canada text-sm font-normal leading-tight text-blue-900 md:text-base md:leading-snug">
          Com nosso apoio, você terá a chance de desenvolver competências e
          aprofundar o conhecimento em áreas de seu interesse, aumentando as
          chances de sucesso na sua trajetória profissional.
        </p>
      </div>
    </div>
  );
};
