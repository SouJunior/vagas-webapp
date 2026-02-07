import React, { useState } from 'react';

import { Button } from '@components/Ui/button';

import { useNavigate } from 'react-router';
import { useLocation } from 'react-router-dom';

import { useApi } from '@hooks/useApi';
import type { FormDataType } from '../data/FormDataType';

import { VacancyReviewCard } from '@components/Ui/vacancy-review-card';

export const VacancyReview: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const formData = location.state as FormDataType | null;

  React.useEffect(() => {
    if (!formData) {
      navigate('/register-vacancy');
    }
  }, [formData, navigate]);

  const [loading, setLoading] = useState(false);
  const api = useApi();

  if (!formData) {
    return null;
  }

  async function handlePublish() {
    try {
      setLoading(true);

      if (formData) {
        const payload = {
          ...formData,
          wage: formData.wage.replace('R$', '').trim(),
        };

        await api.publishVacancy(payload);
      }

      navigate('/sucesso');
    } catch (error) {
      console.error(error);
      alert('Erro ao publicar a vaga');
    } finally {
      setLoading(false);
    }
  }

  const card1 = {
    cardTitle: 'Sobre a empresa',
    items: [
      {
        label: 'Nome da empresa',
        value: formData.companyName,
      },
      {
        label: 'Site da empresa',
        value: formData.companyWebsite,
      },
      {
        label: 'Nome da empresa',
        value: formData.companyName,
      },
    ],
  };

  const card2 = {
    cardTitle: 'Sobre a vaga',
    items: [
      {
        label: 'Cargo',
        value: formData.position,
      },
      {
        label: 'Área de atuação',
        value: formData.areaOfActivity,
      },
      {
        label: 'Descrição da vaga',
        value: formData.jobDescription,
      },
      {
        label: 'Responsabilidades',
        value: formData.responsibilities,
      },
      {
        label: 'Requisitos',
        value: formData.requirements,
      },
      {
        label: 'Local',
        value: formData.location,
      },
      {
        label: 'Salário',
        value: `R$ ${formData.wage}`,
      },
      { label: 'Benefícios', value: formData.benefits },
      {
        label: 'Vaga afirmativa',
        value: formData.affirmativeVacancies.join(', '),
      },
    ],
  };

  const card3 = {
    cardTitle: 'Modelo de trabalho',
    items: [
      {
        label: 'Jornada de trabalho',
        value: formData.workingDay,
      },
      {
        label: 'Modalidade de trabalho',
        value: formData.workModel,
      },
      {
        label: 'Regime de trabalho',
        value: formData.workRegime,
      },
    ],
  };

  const card4 = {
    cardTitle: 'Etapas do processo seletivo',
    items: [
      {
        value: formData.processSteps,
      },
    ],
  };

  return (
    <>
      <main className="flex items-center justify-center bg-[#FBFDFF] font-canada">
        <section className="flex h-full w-[676px] flex-col items-center justify-center p-4 text-center max-[391px]:max-w-[326px] sm:max-w-[80%] md:py-6 lg:p-8 lg:pb-0">
          <h1 className="mb-6 mt-2 text-4xl font-medium leading-tight text-[#001633] max-[391px]:text-[20px]">
            Revisão da Vaga
          </h1>
          <VacancyReviewCard
            cardTitle={card1.cardTitle}
            items={card1.items}
            formData={formData}
            stepForEditing={0}
          />
          <VacancyReviewCard
            cardTitle={card2.cardTitle}
            items={card2.items}
            formData={formData}
            stepForEditing={1}
          />
          <VacancyReviewCard
            cardTitle={card3.cardTitle}
            items={card3.items}
            formData={formData}
            stepForEditing={2}
          />
          <VacancyReviewCard
            cardTitle={card4.cardTitle}
            items={card4.items}
            formData={formData}
            stepForEditing={3}
          />

          <div className="mb-8 flex w-full max-w-[676px] justify-end pt-4 max-[391px]:h-[156px] max-[391px]:flex-col max-[391px]:items-center max-[391px]:justify-between">
            <Button
              intent="tertiary"
              onClick={async () => {
                navigate('/', { state: formData });
              }}
            >
              Cancelar
            </Button>

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
