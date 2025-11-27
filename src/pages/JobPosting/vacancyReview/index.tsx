import React, { useState } from 'react';

import { Button } from '@components/Ui/button';
import { Label } from '@components/Ui/label';

export interface AreaProps {
  id: string;
  name: string;
  icon: React.ReactNode;
}

export const JobPosting: React.FC = () => {
  function toggleStep(value: string, checked: boolean) {
    updateField(
      'steps',
      checked
        ? [...formData.steps, value]
        : formData.steps.filter((v: string) => v !== value),
    );
  }

  const [formData, setFormData] = useState<{
    companyName: string;
    companyWebsite: string;
    aboutTheCompany: string;
    position: string;
    areaOfActivity: string;
    jobDescription: string;
    responsibilities: string;
    requirements: string;
    location: string;
    wage: string;
    benefits: string;
    categories: string[];
    workingDay: string;
    workModel: string;
    workRegime: string;
    steps: string[];
    affirmativeVacancies: string;
  }>({
    affirmativeVacancies: '',
    companyName: '',
    companyWebsite: '',
    aboutTheCompany: '',
    position: '',
    areaOfActivity: '',
    jobDescription: '',
    responsibilities: '',
    requirements: '',
    location: '',
    wage: '',
    benefits: '',
    categories: [],
    workingDay: '',
    workModel: '',
    workRegime: '',
    steps: [],
  });

  function updateField(field: string, value: any) {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  }

  return (
    <>
      <main className="flex items-center justify-center bg-[#FBFDFF] font-canada">
        <section className="flex h-full w-[676px] flex-col items-center justify-center p-4 text-center md:py-6 lg:p-8 lg:pb-0">
          <h1 className="mt-8 text-[32px] font-medium leading-[120%] text-[#001633]">
            Revisão da Vaga
          </h1>
          <div className="mt-6 flex w-[676px] items-start justify-center rounded-2xl border border-[#DEDEDE] bg-[#FFFFFF] pb-2 pl-10 pt-6">
            <div className="w-[442px] pl-10">
              <h1 className="mb-6 text-start text-[24px] font-medium leading-[120%]">
                Sobre a empresa
              </h1>
              <div className="flex flex-col items-start">
                <Label
                  htmlFor="companyName"
                  className="mb-2 text-[16px] font-medium leading-[1.2]"
                >
                  Nome da empresa
                </Label>
                <p className="mb-6 text-start text-[16px] font-light leading-[1.4]">
                  SouJunior
                </p>
              </div>

              <div className="flex flex-col items-start">
                <Label
                  className="mb-2 text-[16px] font-medium leading-[1.2]"
                  htmlFor="companyWebsite"
                >
                  Site da empresa
                </Label>
                <p className="mb-6 text-start text-[16px] font-light leading-[1.4]">
                  https://www.soujunior.tech
                </p>
              </div>
              <div className="flex w-[442px] flex-col items-start">
                <Label
                  className="mb-2 text-[16px] font-medium leading-[1.2]"
                  htmlFor="aboutTheCompany"
                >
                  Sobre a empresa
                </Label>
                <p className="mb-6 text-start text-[16px] font-light leading-[1.4]">
                  A SouJunior é uma iniciativa sem fins lucrativos dedicada a
                  capacitar profissionais no início de carreira, oferecendo uma
                  oportunidade única de desenvolvimento para quem deseja
                  ingressar no mercado de trabalho. Nosso objetivo é fornecer a
                  esses talentos iniciais as ferramentas e a experiência prática
                  necessárias para se destacarem no competitivo mundo
                  profissional.
                </p>
              </div>
            </div>
            <div className="ml-8 pr-8 text-[16px] font-medium leading-[120%] text-[#003986] underline">
              <a href="">Editar</a>
            </div>
          </div>

          <div className="mt-3 flex w-[676px] items-start justify-center rounded-2xl border border-[#DEDEDE] bg-[#FFFFFF] pb-2 pl-10 pt-6">
            <div className="w-[442px] pl-10">
              <h1 className="mb-6 text-start text-[24px] font-medium leading-[120%]">
                Modelo de trabalho
              </h1>
              <div className="flex flex-col items-start">
                <Label
                  htmlFor="companyName"
                  className="mb-2 text-[16px] font-medium leading-[1.2]"
                >
                  Cargo
                </Label>
                <p className="mb-6 text-start text-[16px] font-light leading-[1.4]">
                  Desenvolvedor Front-end
                </p>
              </div>

              <div className="flex flex-col items-start">
                <Label
                  htmlFor="companyName"
                  className="mb-2 text-[16px] font-medium leading-[1.2]"
                >
                  Área de atuação
                </Label>
                <p className="mb-6 text-start text-[16px] font-light leading-[1.4]">
                  Tecnologia
                </p>
              </div>

              <div className="flex flex-col items-start">
                <Label
                  htmlFor="companyName"
                  className="mb-2 text-[16px] font-medium leading-[1.2]"
                >
                  Descrição da vaga
                </Label>
                <p className="mb-6 text-start text-[16px] font-light leading-[1.4]">
                  Buscamos Desenvolvedor(a) Front-End Júnior para atuar na
                  criação e manutenção de interfaces web responsivas,
                  colaborando com o time de design e back-end. É importante ter
                  conhecimento em HTML, CSS, JavaScript e frameworks modernos.
                  Valorizamos pessoas colaborativas e com vontade de aprender e
                  crescer junto com o time.
                </p>
              </div>

              <div className="flex flex-col items-start">
                <Label
                  htmlFor="companyName"
                  className="mb-2 text-[16px] font-medium leading-[1.2]"
                >
                  Responsabilidades
                </Label>
                <p className="mb-6 text-start text-[16px] font-light leading-[1.4]">
                  Colaborar com o time de design e back-end na implementação de
                  novas funcionalidades. Corrigir bugs, realizar testes básicos
                  e aplicar boas práticas de código. Apoiar na documentação e
                  evolução contínua dos projetos, aprendendo e se desenvolvendo
                  junto à equipe.
                </p>
              </div>

              <div className="flex flex-col items-start">
                <Label
                  htmlFor="companyName"
                  className="mb-2 text-[16px] font-medium leading-[1.2]"
                >
                  Requisitos
                </Label>
                <p className="mb-6 text-start text-[16px] font-light leading-[1.4]">
                  Conhecimento em HTML, CSS e JavaScript; noções de frameworks
                  como React, Vue ou Angular; versionamento com Git;
                  desenvolvimento responsivo; noções de consumo de APIs REST;
                  boa lógica de programação e atenção a detalhes.
                </p>
              </div>

              <div className="flex flex-col items-start">
                <Label
                  htmlFor="companyName"
                  className="mb-2 text-[16px] font-medium leading-[1.2]"
                >
                  Local
                </Label>
                <p className="mb-6 text-start text-[16px] font-light leading-[1.4]">
                  São Paulo, SP
                </p>
              </div>

              <div className="flex flex-col items-start">
                <Label
                  htmlFor="companyName"
                  className="mb-2 text-[16px] font-medium leading-[1.2]"
                >
                  Salário
                </Label>
                <p className="mb-6 text-start text-[16px] font-light leading-[1.4]">
                  R$ 3.500,00
                </p>
              </div>

              <div className="flex flex-col items-start">
                <Label
                  htmlFor="companyName"
                  className="mb-2 text-[16px] font-medium leading-[1.2]"
                >
                  Benefícios
                </Label>
                <p className="mb-6 text-start text-[16px] font-light leading-[1.4]">
                  Vale alimentação, vale refeição, convênio médico, Wellhub,
                  bolsa de estudos com instuições parceiras.
                </p>
              </div>

              <div className="flex flex-col items-start">
                <Label
                  htmlFor="companyName"
                  className="mb-2 text-[16px] font-medium leading-[1.2]"
                >
                  Vaga afirmativa
                </Label>
                <p className="mb-4 text-start text-[16px] font-light leading-[1.4]">
                  Mulheres, Pessoas negras, LGBTQIAP+
                </p>
              </div>
            </div>
            <div className="ml-8 pr-8 text-[16px] font-medium leading-[120%] text-[#003986] underline">
              <a href="">Editar</a>
            </div>
          </div>

          <div className="mt-3 flex w-[676px] items-start justify-center rounded-2xl border border-[#DEDEDE] bg-[#FFFFFF] pb-2 pl-10 pt-6">
            <div className="w-[442px] pl-10">
              <h1 className="mb-6 text-start text-[24px] font-medium leading-[120%]">
                Modelo de trabalho
              </h1>
              <div className="flex flex-col items-start">
                <Label
                  htmlFor="companyName"
                  className="mb-2 text-[16px] font-medium leading-[1.2]"
                >
                  Jornada de trabalho
                </Label>
                <p className="mb-6 text-start text-[16px] font-light leading-[1.4]">
                  Integral
                </p>
              </div>

              <div className="flex flex-col items-start">
                <Label
                  className="mb-2 text-[16px] font-medium leading-[1.2]"
                  htmlFor="companyWebsite"
                >
                  Modalidade de trabalho
                </Label>
                <p className="mb-6 text-start text-[16px] font-light leading-[1.4]">
                  Remoto
                </p>
              </div>
              <div className="flex w-[442px] flex-col items-start">
                <Label
                  className="mb-2 text-[16px] font-medium leading-[1.2]"
                  htmlFor="aboutTheCompany"
                >
                  Regime de trabalho
                </Label>
                <p className="mb-2 text-start text-[16px] font-light leading-[1.4]">
                  CLT
                </p>
              </div>
            </div>
            <div className="ml-8 pr-8 text-[16px] font-medium leading-[120%] text-[#003986] underline">
              <a href="">Editar</a>
            </div>
          </div>

          <div className="mt-3 flex w-[676px] items-start justify-center rounded-2xl border border-[#DEDEDE] bg-[#FFFFFF] pb-2 pl-10 pt-6">
            <div className="w-[442px] pl-10">
              <h1 className="mb-6 text-start text-[24px] font-medium leading-[120%]">
                Etapas do processo seletivo
              </h1>
              <div className="flex flex-col items-start">
                <p className="mb-4 text-start text-[16px] font-light leading-[1.4]">
                  Análise de currículo
                </p>
                <p className="mb-4 text-start text-[16px] font-light leading-[1.4]">
                  Entrevista com RH
                </p>
                <p className="mb-4 text-start text-[16px] font-light leading-[1.4]">
                  Entrevista técnica
                </p>
                <p className="mb-4 text-start text-[16px] font-light leading-[1.4]">
                  Entrevista com o gestor
                </p>
              </div>
            </div>
            <div className="ml-8 pr-8 text-[16px] font-medium leading-[120%] text-[#003986] underline">
              <a href="">Editar</a>
            </div>
          </div>

          <div className="mb-8 flex w-[676px] justify-end pt-4">
            <Button intent="tertiary">Cancelar</Button>

            <Button
              // onClick={() => setStep(step - 1)}
              intent="secondary"
              className="ml-6 text-[#003986]"
            >
              Salvar para depois
            </Button>

            <Button
              intent="primary"
              // onClick={() => setStep(step + 1)}
              className="ml-6"
            >
              Publicar
            </Button>
          </div>
        </section>
      </main>
    </>
  );
};
