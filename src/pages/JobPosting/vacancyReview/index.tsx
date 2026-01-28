import React, { useState } from 'react';

import { Button } from '@components/Ui/button';
import { Label } from '@components/Ui/label';

import { useNavigate } from 'react-router';
import { useLocation } from 'react-router-dom';

import { useApi } from '@hooks/useApi';
import type { FormDataType } from '../data/FormDataType';

export const VacancyReview: React.FC = () => {
  const navigate = useNavigate();

  const { state: formData } = useLocation() as {
    state: FormDataType;
  };

  const [loading, setLoading] = useState(false);
  const api = useApi();

  async function handlePublish() {
    try {
      setLoading(true);

      const payload = {
        ...formData,
        wage: formData.wage.replace('R$', '').trim(),
      };

      await api.publishVacancy(payload);

      navigate('/sucesso');
    } catch (error) {
      console.error(error);
      alert('Erro ao publicar a vaga');
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <main className="flex items-center justify-center bg-[#FBFDFF] font-canada">
        <section className="flex h-full w-[676px] flex-col items-center justify-center p-4 text-center max-[391px]:max-w-[326px] sm:max-w-[80%] md:py-6 lg:p-8 lg:pb-0">
          <h1 className="mt-8 text-[32px] font-medium leading-[120%] text-[#001633] max-[391px]:text-[20px]">
            Revisão da Vaga
          </h1>
          <div className="mt-6 flex w-full max-w-[676px] items-start justify-center rounded-2xl border border-[#DEDEDE] bg-[#FFFFFF] pb-2 pl-10 pt-6 max-[391px]:relative max-[391px]:w-[358px] max-[391px]:pl-0">
            <div className="w-[442px] pl-10 max-[391px]:max-w-[326px] max-[391px]:pl-2">
              <h1 className="mb-6 text-start text-[24px] font-medium leading-[120%] max-[391px]:text-[20px]">
                Sobre a empresa
              </h1>
              <div className="flex flex-col items-start">
                <Label
                  htmlFor="companyName"
                  className="mb-2 text-[16px] font-medium leading-[1.2]"
                >
                  Nome da empresa
                </Label>
                <p className="mb-6 break-all text-start text-[16px] font-light leading-[1.4] max-[391px]:text-[14px]">
                  {formData.companyName}
                </p>
              </div>

              <div className="flex flex-col items-start">
                <Label
                  className="mb-2 text-[16px] font-medium leading-[1.2]"
                  htmlFor="companyWebsite"
                >
                  Site da empresa
                </Label>
                <p className="mb-6 break-all text-start text-[16px] font-light leading-[1.4] max-[391px]:text-[14px]">
                  {formData.companyWebsite}
                </p>
              </div>
              <div className="flex w-[442px] flex-col items-start">
                <Label
                  className="mb-2 text-[16px] font-medium leading-[1.2]"
                  htmlFor="aboutTheCompany"
                >
                  Sobre a empresa
                </Label>
                <p className="mb-6 break-all text-start text-[16px] font-light leading-[1.4] max-[391px]:text-[14px]">
                  {formData.aboutTheCompany}
                </p>
              </div>
            </div>
            <div className="ml-8 pr-8 text-[16px] font-medium leading-[120%] text-[#003986] underline max-[391px]:absolute max-[391px]:left-28 max-[391px]:top-7 max-[391px]:text-[14px]">
              <a
                href=""
                onClick={(e) => {
                  e.preventDefault();
                  navigate('/register-vacancy', {
                    state: {
                      formData,
                      stepForEditing: 0,
                    },
                  });
                }}
              >
                Editar
              </a>
            </div>
          </div>

          <div className="mt-3 flex w-full max-w-[676px] items-start justify-center rounded-2xl border border-[#DEDEDE] bg-[#FFFFFF] pb-2 pl-10 pt-6 max-[391px]:relative max-[391px]:w-[358px] max-[391px]:pl-0">
            <div className="w-[442px] pl-10 max-[391px]:max-w-[326px] max-[391px]:pl-2">
              <h1 className="mb-6 text-start text-[24px] font-medium leading-[120%] max-[391px]:text-[20px]">
                Sobre a vaga
              </h1>
              <div className="flex flex-col items-start">
                <Label
                  htmlFor="position"
                  className="mb-2 text-[16px] font-medium leading-[1.2]"
                >
                  Cargo
                </Label>
                <p className="mb-6 text-start text-[16px] font-light leading-[1.4] max-[391px]:text-[14px]">
                  {formData.position}
                </p>
              </div>
              <div className="flex flex-col items-start">
                <Label
                  htmlFor="areaOfActivity"
                  className="mb-2 text-[16px] font-medium leading-[1.2]"
                >
                  Área de atuação
                </Label>
                <p className="mb-6 text-start text-[16px] font-light leading-[1.4] max-[391px]:text-[14px]">
                  {formData.areaOfActivity}
                </p>
              </div>

              <div className="flex flex-col items-start">
                <Label
                  htmlFor="jobDescription"
                  className="mb-2 text-[16px] font-medium leading-[1.2]"
                >
                  Descrição da vaga
                </Label>
                <p className="mb-6 break-all text-start text-[16px] font-light leading-[1.4] max-[391px]:text-[14px]">
                  {formData.jobDescription}
                </p>
              </div>

              <div className="flex flex-col items-start">
                <Label
                  htmlFor="responsibilities"
                  className="mb-2 text-[16px] font-medium leading-[1.2]"
                >
                  Responsabilidades
                </Label>
                <p className="mb-6 text-start text-[16px] font-light leading-[1.4] max-[391px]:text-[14px]">
                  {formData.responsibilities}
                </p>
              </div>
              <div className="flex flex-col items-start">
                <Label
                  htmlFor="requirements"
                  className="mb-2 text-[16px] font-medium leading-[1.2]"
                >
                  Requisitos
                </Label>
                <p className="mb-6 text-start text-[16px] font-light leading-[1.4] max-[391px]:text-[14px]">
                  {formData.requirements}
                </p>
              </div>
              <div className="flex flex-col items-start">
                <Label
                  htmlFor="location"
                  className="mb-2 text-[16px] font-medium leading-[1.2]"
                >
                  Local
                </Label>
                <p className="mb-6 text-start text-[16px] font-light leading-[1.4] max-[391px]:text-[14px]">
                  {formData.location}
                </p>
              </div>
              <div className="flex flex-col items-start">
                <Label
                  htmlFor="wage"
                  className="mb-2 text-[16px] font-medium leading-[1.2]"
                >
                  Salário
                </Label>
                <p className="mb-6 text-start text-[16px] font-light leading-[1.4] max-[391px]:text-[14px]">
                  R$ {formData.wage}
                </p>
              </div>
              <div className="flex flex-col items-start">
                <Label
                  htmlFor="benefits"
                  className="mb-2 text-[16px] font-medium leading-[1.2]"
                >
                  Benefícios
                </Label>
                <p className="mb-6 text-start text-[16px] font-light leading-[1.4] max-[391px]:text-[14px]">
                  {formData.benefits}
                </p>
              </div>
              <div className="flex flex-col items-start">
                <Label
                  htmlFor="affirmativeVacancies"
                  className="mb-2 text-[16px] font-medium leading-[1.2]"
                >
                  Vaga afirmativa
                </Label>
                <p className="mb-4 text-start text-[16px] font-light leading-[1.4] max-[391px]:text-[14px]">
                  {formData.affirmativeVacancies.join(', ')}
                </p>
              </div>
            </div>
            <div className="ml-8 pr-8 text-[16px] font-medium leading-[120%] text-[#003986] underline max-[391px]:absolute max-[391px]:left-28 max-[391px]:top-7 max-[391px]:text-[14px]">
              <a
                href=""
                onClick={(e) => {
                  e.preventDefault();
                  navigate('/register-vacancy', {
                    state: {
                      formData,
                      stepForEditing: 1,
                    },
                  });
                }}
              >
                Editar
              </a>
            </div>
          </div>

          <div className="mt-3 flex w-full max-w-[676px] items-start justify-center rounded-2xl border border-[#DEDEDE] bg-[#FFFFFF] pb-2 pl-10 pt-6 max-[391px]:relative max-[391px]:w-[358px] max-[391px]:pl-0">
            <div className="w-[442px] pl-10 max-[391px]:max-w-[326px] max-[391px]:pl-2">
              <h1 className="mb-6 text-start text-[24px] font-medium leading-[120%] max-[391px]:text-[20px]">
                Modelo de trabalho
              </h1>
              <div className="flex flex-col items-start">
                <Label
                  htmlFor="workingDay"
                  className="mb-2 text-[16px] font-medium leading-[1.2]"
                >
                  Jornada de trabalho
                </Label>
                <p className="mb-6 text-start text-[16px] font-light leading-[1.4] max-[391px]:text-[14px]">
                  {formData.workingDay}
                </p>
              </div>

              <div className="flex flex-col items-start">
                <Label
                  className="mb-2 text-[16px] font-medium leading-[1.2]"
                  htmlFor="workModel"
                >
                  Modalidade de trabalho
                </Label>
                <p className="mb-6 text-start text-[16px] font-light leading-[1.4] max-[391px]:text-[14px]">
                  {formData.workModel}
                </p>
              </div>
              <div className="flex w-[442px] flex-col items-start">
                <Label
                  className="mb-2 text-[16px] font-medium leading-[1.2]"
                  htmlFor="workRegime"
                >
                  Regime de trabalho
                </Label>
                <p className="mb-2 text-start text-[16px] font-light leading-[1.4] max-[391px]:text-[14px]">
                  {formData.workRegime}
                </p>
              </div>
            </div>
            <div className="ml-8 w-full max-w-[442px] pr-8 text-[16px] font-medium leading-[120%] text-[#003986] underline max-[391px]:absolute max-[391px]:left-28 max-[391px]:top-7 max-[391px]:text-[14px]">
              <a
                href=""
                onClick={(e) => {
                  e.preventDefault();
                  navigate('/register-vacancy', {
                    state: {
                      formData,
                      stepForEditing: 2,
                    },
                  });
                }}
              >
                Editar
              </a>
            </div>
          </div>

          <div className="mt-3 flex w-full max-w-[676px] items-start justify-center rounded-2xl border border-[#DEDEDE] bg-[#FFFFFF] pb-2 pl-10 pt-6 max-[391px]:relative max-[391px]:w-[358px] max-[391px]:pl-0">
            <div className="w-[442px] pl-10 max-[391px]:max-w-[326px] max-[391px]:pl-2">
              <h1 className="mb-6 w-[240px] text-start text-[24px] font-medium leading-[120%] max-[391px]:text-[20px]">
                Etapas do processo seletivo
              </h1>
              <div className="flex flex-col items-start">
                {formData.steps.map((o) => (
                  <p className="mb-4 text-start text-[16px] font-light leading-[1.4] max-[391px]:text-[14px]">
                    {o}
                  </p>
                ))}
              </div>
            </div>
            <div className="ml-8 pr-8 text-[16px] font-medium leading-[120%] text-[#003986] underline max-[391px]:absolute max-[391px]:left-28 max-[391px]:top-7 max-[391px]:text-[14px]">
              <a
                href=""
                onClick={(e) => {
                  e.preventDefault();
                  navigate('/register-vacancy', {
                    state: {
                      formData,
                      stepForEditing: 3,
                    },
                  });
                }}
              >
                Editar
              </a>
            </div>
          </div>

          <div className="mb-8 flex w-full max-w-[676px] justify-end pt-4 max-[391px]:h-[156px] max-[391px]:flex-col max-[391px]:items-center max-[391px]:justify-between">
            <Button intent="tertiary">Cancelar</Button>

            <Button
              intent="secondary"
              className="ml-6 text-center text-[#003986] max-[391px]:w-[186px]"
            >
              Salvar para depois
            </Button>

            <Button
              intent="primary"
              className="ml-6 max-[391px]:w-[186px]"
              disabled={loading}
              onClick={handlePublish}
            >
              {loading ? 'Publicando...' : 'Publicar'}
            </Button>
          </div>
        </section>
      </main>
    </>
  );
};
