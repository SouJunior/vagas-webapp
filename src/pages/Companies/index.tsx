import React from 'react';
import * as s from '../styles/HomeCompaniesStyles';

import HireImage from '../../assets/imgs/companies.svg';

import img from './assets/Learn.png';

import { Card } from './components/Card';

import * as I from './components/Icons';

import FooterDefault from '@components/FooterDefault';
import Header from '@components/Header/index';
import useEmblaCarousel from 'embla-carousel-react';
import logoClaro from './assets/empresas-parceiras/Logo-claro.png';
import logoCoca from './assets/empresas-parceiras/Logo-Coca.png';
import logoGlobo from './assets/empresas-parceiras/Logo-Globo.png';
import logoHp from './assets/empresas-parceiras/Logo-HP.png';
import logoPositivo from './assets/empresas-parceiras/Logo-Positivo.png';

export default function Companies() {
  const [emblaRef, emblaApi] = useEmblaCarousel();
  const [currentSlideIndex, setCurrentSlideIndex] = React.useState(0);

  const parceiras = [
    {
      url: logoClaro,
    },
    {
      url: logoCoca,
    },
    {
      url: logoHp,
    },
    {
      url: logoGlobo,
    },
    {
      url: logoPositivo,
    },
    {
      url: logoClaro,
    },
    {
      url: logoCoca,
    },
    {
      url: logoHp,
    },
    {
      url: logoGlobo,
    },
    {
      url: logoPositivo,
    },
  ] as const;

  type arrType = typeof parceiras;

  const chunkArray = (arr: arrType, size: number) => {
    const result = [];
    for (let i = 0; i < arr.length; i += size) {
      result.push(arr.slice(i, i + size));
    }
    return result;
  };

  const slides = React.useMemo(() => chunkArray(parceiras, 5), [parceiras]);

  const scrollNext = React.useCallback(() => {
    if (emblaApi && emblaApi.canScrollNext()) {
      emblaApi.scrollNext();
      setCurrentSlideIndex((prev) => prev + 1);
    }
  }, [currentSlideIndex, slides.length, emblaApi]);

  return (
    <>
      <Header variant="companies" />

      <s.HireJuniorsSection>
        <s.Container>
          <s.HireSectionWrapper>
            <div>
              <s.HireTitle>Contrate Juniores!</s.HireTitle>
              <s.HireDescription>
                Encontre talentos iniciantes prontos para crescer com sua
                empresa.
              </s.HireDescription>

              <s.ButtonRegister>Cadastre sua empresa</s.ButtonRegister>
            </div>

            <s.Image src={HireImage} alt="Ilustração da seção de contratação" />
          </s.HireSectionWrapper>
        </s.Container>
      </s.HireJuniorsSection>

      <section>
        <s.Container>
          <s.Subtitle as={'h2'}>
            Por que contratar um profissional júnior?
          </s.Subtitle>

          <s.Explanation>
            O mercado de tecnologia é dinâmico e competitivo, o que exige das
            empresas criatividade na hora de compor suas equipes. Nesse cenário,
            contratar profissionais juniores em tech pode trazer benefícios
            significativos tanto para a organização quanto para os colaboradores
            mais experientes. A seguir, destacamos as principais vantagens dessa
            escolha estratégica:
          </s.Explanation>

          <s.CardsWrapper>
            <Card
              heading="Disposição para aprender"
              description="Profissionais juniores entram no mercado com entusiasmo e vontade de conhecimento. Essa disposição para aprender e se adaptar a novas ferramentas e metodologias permite que se alinhem rapidamente aos objetivos e valores da empresa."
              img={img}
            />

            <Card
              heading="Custo-benefício atrativo"
              description="Contratar um júnior é, geralmente, mais econômico do que investir diretamente em profissionais mais seniores. Isso permite à empresa alocar recursos em treinamento e desenvolvimento, garantindo que o colaborador cresça dentro da organização e atenda às demandas específicas do negócio."
              img={I.Cost}
            />

            <Card
              heading="Novas perspectivas"
              description="Por estarem iniciando na área, esses profissionais podem trazer ideias inovadoras e questionamentos que desafiam o status quo. Essa visão nova pode ser crucial em um setor que valoriza tanto a criatividade quanto a inovação."
              img={I.Idea}
            />

            <Card
              heading="Formação moldada às necessidades da empresa"
              description="Ao investir em talentos juniores, as empresas têm a oportunidade de formar profissionais sob medida, alinhados à sua cultura e processos. Isso pode gerar maior engajamento e retenção, já que o colaborador sente que está crescendo junto com a empresa."
              img={I.Mindset}
            />

            <Card
              heading="Facilidade de integração"
              description="Profissionais juniores, por estarem começando a carreira, geralmente têm maior flexibilidade para se adaptarem a diferentes equipes, estilos de gestão e projetos."
              img={I.Team}
            />

            <Card
              heading="Investimento de longo prazo"
              description="Contratar um profissional júnior em tech não é apenas uma ação de curto prazo para preencher uma vaga, mas um investimento estratégico no futuro da sua empresa. "
              img={I.Growth}
            />
          </s.CardsWrapper>

          <s.Call>
            Aposte no potencial e na capacidade de evolução dos juniores – eles
            podem ser o <strong>diferencial competitivo</strong> que sua equipe
            precisa!
          </s.Call>
        </s.Container>
      </section>

      <s.SecaoCarrossel>
        <s.Container>
          {slides.length > 0 ? (
            <>
              <s.title>Empresas parceiras</s.title>
              <s.CarrosselWrapper>
                <s.ButtonNext
                  onClick={scrollNext}
                  disabled={currentSlideIndex === slides.length - 1}
                  aria-label="Próximo slide"
                >
                  {'>'}
                </s.ButtonNext>
                <s.CarrosselViewPort ref={emblaRef}>
                  <s.CarrosselContainer>
                    {slides.map((group, index) => (
                      <s.CarrosselSlide key={index}>
                        <s.slideGroup>
                          {group.map((logo, idx) => (
                            <img
                              src={logo.url}
                              key={idx}
                              loading="lazy"
                              alt={`logo da empresa parceira ${idx + 1}`}
                            />
                          ))}
                        </s.slideGroup>
                      </s.CarrosselSlide>
                    ))}
                  </s.CarrosselContainer>
                </s.CarrosselViewPort>
              </s.CarrosselWrapper>

              <s.WrapperCTA>
                <s.ButtonCTA>Cadastre sua empresa</s.ButtonCTA>
              </s.WrapperCTA>
            </>
          ) : (
            <s.title>Seja um parceiro</s.title>
          )}
        </s.Container>
      </s.SecaoCarrossel>

      <FooterDefault />
    </>
  );
}
