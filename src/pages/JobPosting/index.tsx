import React, { useState } from 'react';

import { Textarea } from '@/components/Ui/textarea';
import { Button } from '@components/Ui/button';
import { Checkbox } from '@components/Ui/checkbox';
import { DropdownList } from '@components/Ui/dropdown-list';
import { Input } from '@components/Ui/input';
import { Label } from '@components/Ui/label';
import { RadioGroup } from '@components/Ui/radio-button';
import { Stepper } from '@components/Ui/stepper/stepper';
import { Link } from 'react-router-dom';

import logoSouJunior from '@assets/imgs/Logotipo-SouJunior.svg';
import logoEmpresa from '@assets/imgs/logo-empresa.svg';
import menu from '@assets/imgs/menu-reticencias.svg';

import { stagesSelectionProcess } from './data/stagesSelectionProcess';

import {
  step0Schema,
  step1Schema,
  step2Schema,
  step3Schema,
} from '@validations/JobPostingValidations';

import type { FormDataType } from './data/FormDataType';

import { LazyImage } from '@components/Ui/lazy-image';
import { ACCESSIBILITY_CLASSES } from '@utils/accessibility';
import { useNavigate } from 'react-router';
import { useLocation } from 'react-router-dom';

export const JobPosting: React.FC = () => {
  const navigate = useNavigate();

  const { state: dataForEditing } = useLocation();

  const [step, setStep] = useState(() => {
    return dataForEditing?.stepForEditing ?? 0;
  });

  const [formData, setFormData] = useState<FormDataType>(() => {
    return (
      dataForEditing?.formData ?? {
        affirmativeVacancies: ['Não se aplica'],
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
        workingDay: '',
        workModel: '',
        workRegime: '',
        processSteps: ['Análise de currículo'],
      }
    );
  });

  const steps = [
    { label: 'Sobre a empresa' },
    { label: 'Sobre a vaga' },
    { label: 'Modelo de trabalho' },
    { label: 'Etapas do processo seletivo' },
  ];

  function toggleStep(value: string, checked: boolean) {
    updateField(
      'processSteps',
      checked
        ? [...formData.processSteps, value]
        : formData.processSteps.filter((v: string) => v !== value),
    );
  }

  function updateField(field: string, value: any) {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  }

  const schemas = [step0Schema, step1Schema, step2Schema, step3Schema];

  async function validateStep() {
    try {
      await schemas[step].validate(formData, { abortEarly: false });
      return { valid: true, errors: {} };
    } catch (err: any) {
      const formattedErrors: Record<string, string> = {};
      if (err.inner && Array.isArray(err.inner)) {
        err.inner.forEach((e: any) => {
          formattedErrors[e.path] = e.message;
        });
      }
      return { valid: false, errors: formattedErrors };
    }
  }

  const [errors, setErrors] = useState<Record<string, string>>({});

  async function handleStepperClick(nextStep: number) {
    if (nextStep < step) {
      setErrors({});
      setStep(nextStep);
      return;
    }

    const result = await validateStep();

    if (result.valid) {
      setErrors({});
      setStep(nextStep);
    } else {
      setErrors(result.errors);
    }
  }

  return (
    <>
      <header className={`sticky top-0 z-[999] bg-white`}>
        <div className="mx-auto w-full py-6 lg:px-8">
          <div className="flex items-center justify-between">
            <Link
              to="/"
              className={`flex-shrink-0 rounded-sm ${ACCESSIBILITY_CLASSES.focusRing}`}
              aria-label="Voltar para página inicial"
            >
              <LazyImage
                src={logoSouJunior}
                alt="Logo SouJunior Empresas"
                className="h-[40px] w-[320px] max-[391px]:h-[32px] max-[391px]:w-[222px] lg:h-16"
                ariaLabel="Logo da SouJunior Empresas"
              />
            </Link>

            <div className="flex items-center justify-center">
              <LazyImage
                src={logoEmpresa}
                alt="Logo SouJunior Empresas"
                className="h-[42px] w-[42px] lg:h-16"
                ariaLabel="Logo da SouJunior Empresas"
              />
              <div className="ml-2 flex flex-col justify-center text-[#002C66] max-[391px]:hidden">
                <p className="text-lg font-medium leading-tight">Empresa</p>
                <p className="mt-1 text-sm leading-tight">
                  empresa@example.com
                </p>
              </div>
              <LazyImage
                src={menu}
                alt="Menu de opções"
                className="h-[32px] w-[32px] lg:h-16"
                ariaLabel="Abrir menu de opções"
              />
            </div>
          </div>
        </div>
      </header>

      <main className="flex w-full items-center justify-center bg-[#FBFDFF] font-canada">
        <section className="flex h-full w-[676px] flex-col items-center justify-center px-4 text-center max-[391px]:w-[390px] max-[391px]:pl-4 sm:max-w-[80%] sm:px-6 md:max-w-[80%] md:py-4 lg:p-8 lg:pb-0">
          <h1 className="text-2xl font-[500] text-[#001633]">
            Cadastro de Vaga
          </h1>
          <p className="text-base font-normal leading-relaxed">
            Preencha os campos para cadastrar sua vaga. Depois, escolha se
            deseja publicar agora ou salvar para publicar depois.
          </p>

          <div className="mt-6 flex w-[676px] flex-col items-center justify-center rounded-2xl border border-[#DEDEDE] bg-[#FFFFFF] pb-2 pt-6 max-[391px]:pl-4">
            <Stepper
              steps={steps}
              step={step}
              onStepChange={handleStepperClick}
            />

            {step === 0 && (
              <div className="w-[443px] space-y-4">
                <h2 className="mb-6 mt-6 text-start text-xl font-medium leading-tight">
                  Sobre a empresa
                </h2>

                <div className="flex flex-col items-start">
                  <Label
                    htmlFor="companyName"
                    className="mb-1 text-base font-medium leading-[20px]"
                  >
                    Nome da empresa
                  </Label>
                  <Input
                    className={`mb-1 h-[46px] w-full max-w-[443px] max-[391px]:max-w-[326px] ${errors.companyName ? 'border-[#FF1F00] placeholder:text-red-500' : ''}`}
                    id="companyName"
                    type="text"
                    placeholder="Nome da empresa"
                    value={formData.companyName}
                    onChange={(e) => updateField('companyName', e.target.value)}
                  />
                  {errors.companyName && (
                    <p className="mb-4 text-[12px] text-red-500">
                      {errors.companyName}
                    </p>
                  )}
                </div>

                <div className="flex flex-col items-start">
                  <Label
                    className="mb-1 text-base font-medium leading-[20px]"
                    htmlFor="companyWebsite"
                  >
                    Site da empresa
                  </Label>
                  <Input
                    className={`w-full max-w-[443px] max-[391px]:max-w-[326px] ${errors.companyWebsite ? 'border-[#FF1F00] placeholder:text-red-500' : ''} mb-1 h-[46px]`}
                    id="companyWebsite"
                    type="text"
                    placeholder="Site da empresa"
                    value={formData.companyWebsite}
                    onChange={(e) =>
                      updateField('companyWebsite', e.target.value)
                    }
                  />
                  {errors.companyWebsite && (
                    <p className="mb-4 text-[12px] text-red-500">
                      {errors.companyWebsite}
                    </p>
                  )}
                </div>

                <div className="flex flex-col items-start">
                  <Label
                    className="mb-1 text-base font-medium leading-[20px]"
                    htmlFor="aboutTheCompany"
                  >
                    Sobre a empresa
                  </Label>
                  <Textarea
                    className={`mb-1 h-[140px] w-full max-w-[443px] placeholder:font-canada placeholder:text-base placeholder:font-normal placeholder:leading-[22px] placeholder:text-[#9CA3AF] focus:border-blue-light300 focus:text-blue-800 focus:placeholder:text-blue-800 max-[391px]:max-w-[326px] ${errors.aboutTheCompany ? 'border-[#FF1F00] placeholder:text-red-500' : ''}`}
                    id="aboutTheCompany"
                    placeholder="Insira um breve resumo sobre a empresa e sua cultura"
                    value={formData.aboutTheCompany}
                    onChange={(e) =>
                      updateField('aboutTheCompany', e.target.value)
                    }
                  />
                  <div className="mb-8 flex max-[391px]:mb-4">
                    <p
                      className={`mr-2 text-[12px] font-normal ${formData.aboutTheCompany.length > 500 ? 'text-red-500' : 'text-[#9CA3AF]'}`}
                    >
                      {formData.aboutTheCompany.length}/500
                      {formData.aboutTheCompany.length > 500 ? '.' : ''}
                    </p>
                    {errors.aboutTheCompany && (
                      <p className="text-[12px] text-red-500">
                        {errors.aboutTheCompany}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            )}

            {step === 1 && (
              <div className="w-[443px] space-y-4">
                <h2 className="mb-6 mt-6 text-start text-xl font-medium leading-tight">
                  Sobre a vaga
                </h2>

                <div className="flex flex-col items-start">
                  <Label
                    htmlFor="position"
                    className="mb-1 text-base font-medium leading-[20px]"
                  >
                    Cargo
                  </Label>
                  <Input
                    className={`mb-1 h-[46px] w-full max-w-[443px] max-[391px]:max-w-[326px] ${errors.position ? 'border-[#FF1F00] placeholder:text-red-500' : ''}`}
                    id="position"
                    type="text"
                    placeholder="Ex. Product Manager"
                    value={formData.position}
                    onChange={(e) => updateField('position', e.target.value)}
                  />
                  {errors.position && (
                    <p className="mb-4 text-[12px] text-red-500">
                      {errors.position}
                    </p>
                  )}
                </div>

                <div className="flex flex-col items-start">
                  <Label
                    className="mb-1 text-base font-medium leading-[20px]"
                    htmlFor="areaOfActivity"
                  >
                    Área de atuação
                  </Label>
                  <Input
                    className={`mb-1 h-[46px] w-full max-w-[443px] max-[391px]:max-w-[326px] ${errors.areaOfActivity ? 'border-[#FF1F00] placeholder:text-red-500' : ''}`}
                    id="areaOfActivity"
                    type="text"
                    placeholder="Ex. Produtos"
                    value={formData.areaOfActivity}
                    onChange={(e) =>
                      updateField('areaOfActivity', e.target.value)
                    }
                  />
                  {errors.areaOfActivity && (
                    <p className="mb-4 text-[12px] text-red-500">
                      {errors.areaOfActivity}
                    </p>
                  )}
                </div>

                <div className="flex flex-col items-start">
                  <Label
                    className="mb-1 text-base font-medium leading-[20px]"
                    htmlFor="jobDescription"
                  >
                    Descrição da Vaga
                  </Label>
                  <Textarea
                    className={`mb-1 h-[140px] w-full max-w-[443px] placeholder:font-canada placeholder:text-base placeholder:font-normal placeholder:leading-[22px] placeholder:text-[#9CA3AF] focus:border-blue-light300 focus:text-blue-800 focus:placeholder:text-blue-800 max-[391px]:max-w-[326px] ${errors.jobDescription ? 'border-[#FF1F00] placeholder:text-red-500' : ''}`}
                    id="jobDescription"
                    placeholder="Insira um breve resumo sobre a vaga"
                    value={formData.jobDescription}
                    onChange={(e) =>
                      updateField('jobDescription', e.target.value)
                    }
                  />
                  <div className="mb-4 flex">
                    <p
                      className={`mr-2 text-[12px] font-normal ${formData.jobDescription.length > 500 ? 'text-red-500' : 'text-[#9CA3AF]'}`}
                    >
                      {formData.jobDescription.length}/500
                      {formData.jobDescription.length > 500 ? '.' : ''}
                    </p>
                    {errors.jobDescription && (
                      <p className="text-[12px] text-red-500">
                        {errors.jobDescription}
                      </p>
                    )}
                  </div>
                </div>

                <div className="flex flex-col items-start">
                  <Label
                    className="mb-1 text-base font-medium leading-[20px]"
                    htmlFor="responsibilities"
                  >
                    Responsabilidades
                  </Label>
                  <Input
                    className={`mb-1 h-[46px] w-full max-w-[443px] max-[391px]:max-w-[326px] ${errors.responsibilities ? 'border-[#FF1F00] placeholder:text-red-500' : ''}`}
                    id="responsibilities"
                    type="text"
                    placeholder="Insira quais responsabilidades a vaga requer"
                    value={formData.responsibilities}
                    onChange={(e) =>
                      updateField('responsibilities', e.target.value)
                    }
                  />
                  {errors.responsibilities && (
                    <p className="mb-4 text-[12px] text-red-500">
                      {errors.responsibilities}
                    </p>
                  )}
                </div>

                <div className="flex flex-col items-start">
                  <Label
                    className="mb-1 text-base font-medium leading-[20px]"
                    htmlFor="requirements"
                  >
                    Requisitos
                  </Label>
                  <Input
                    className={`mb-1 h-[46px] w-full max-w-[443px] max-[391px]:max-w-[326px] ${errors.requirements ? 'border-[#FF1F00] placeholder:text-red-500' : ''}`}
                    id="requirements"
                    type="text"
                    placeholder="Insira os requisitos necessários da vaga"
                    value={formData.requirements}
                    onChange={(e) =>
                      updateField('requirements', e.target.value)
                    }
                  />
                  {errors.requirements && (
                    <p className="mb-4 text-[12px] text-red-500">
                      {errors.requirements}
                    </p>
                  )}
                </div>

                <div className="flex flex-col items-start">
                  <Label
                    className="mb-1 text-base font-medium leading-[20px]"
                    htmlFor="location"
                  >
                    Local
                  </Label>
                  <Input
                    className={`mb-1 h-[46px] w-full max-w-[443px] max-[391px]:max-w-[326px] ${errors.location ? 'border-[#FF1F00] placeholder:text-red-500' : ''}`}
                    id="location"
                    type="text"
                    placeholder="Ex. São Paulo"
                    value={formData.location}
                    onChange={(e) => updateField('location', e.target.value)}
                  />
                  {errors.location && (
                    <p className="mb-4 text-[12px] text-red-500">
                      {errors.location}
                    </p>
                  )}
                </div>

                <div className="flex flex-col items-start">
                  <div className="justify-cente flex items-center">
                    <Label
                      className="mb-1 text-base font-medium leading-[20px]"
                      htmlFor="wage"
                    >
                      Salário
                    </Label>
                    <p className="mb-1 ml-1 text-base font-normal leading-[20px]">
                      (Opcional)
                    </p>
                  </div>
                  <Input
                    id="wage"
                    type="text"
                    placeholder="R$ 5.000,00"
                    value={formData.wage}
                    onChange={(e) => {
                      const raw = e.target.value.replace(/\D/g, '');
                      const number = Number(raw) / 100;

                      updateField(
                        'wage',
                        raw
                          ? number.toLocaleString('pt-BR', {
                              style: 'currency',
                              currency: 'BRL',
                            })
                          : '',
                      );
                    }}
                  />
                </div>

                <div className="flex flex-col items-start">
                  <Label
                    className="mb-1 text-base font-medium leading-[20px]"
                    htmlFor="benefits"
                  >
                    Benefícios
                  </Label>
                  <Input
                    className={`mb-1 h-[46px] w-full max-w-[443px] max-[391px]:max-w-[326px] ${errors.benefits ? 'border-[#FF1F00] placeholder:text-red-500' : ''}`}
                    id="benefits"
                    type="text"
                    placeholder="Ex. Vale refeição, alimentação..."
                    value={formData.benefits}
                    onChange={(e) => updateField('benefits', e.target.value)}
                  />
                  {errors.benefits && (
                    <p className="mb-4 text-[12px] text-red-500">
                      {errors.benefits}
                    </p>
                  )}
                </div>

                <div className="flex flex-col items-start">
                  <Label
                    className="mb-1 text-base font-medium leading-[20px]"
                    htmlFor="affirmativeVacancies"
                  >
                    Vaga Afirmativa
                  </Label>

                  <div className="min-h-[50px]">
                    <DropdownList
                      value={formData.affirmativeVacancies}
                      onValueChange={(values) =>
                        updateField('affirmativeVacancies', values)
                      }
                    >
                      <DropdownList.Popover>
                        <DropdownList.Trigger
                          placeholder=""
                          label="Selecione"
                          className={`flex h-full w-[443px] text-base text-[#A2A9B4] ${errors.affirmativeVacancies ? 'border-[#FF1F00] text-red-500' : ''}`}
                        />

                        <DropdownList.Content className="font-canada text-base placeholder:text-red-700">
                          <DropdownList.Item
                            value="Não se aplica"
                            label="Não se aplica"
                          />
                          <DropdownList.Item value="PCD" label="PCD" />
                          <DropdownList.Item
                            value="LGBTQIAP+"
                            label="LGBTQIAP+"
                          />
                          <DropdownList.Item
                            value="Mulheres"
                            label="Mulheres"
                          />
                          <DropdownList.Item
                            value="Pessoas negras"
                            label="Pessoas negras"
                          />
                        </DropdownList.Content>
                      </DropdownList.Popover>
                    </DropdownList>
                  </div>
                  {errors.affirmativeVacancies && (
                    <p className="mb-6 text-[12px] text-red-500">
                      {errors.affirmativeVacancies}
                    </p>
                  )}
                </div>
              </div>
            )}
            {step === 2 && (
              <div className="mb-4 w-[443px] space-y-4">
                <h2 className="mb-6 mt-6 text-start text-xl font-medium leading-tight">
                  Modelo de trabalho
                </h2>
                <div className="mt-2 flex flex-col items-start">
                  <Label
                    className="mb-1 text-base font-medium leading-[20px]"
                    htmlFor="workingDay"
                  >
                    Jornada de Trabalho
                  </Label>
                  <RadioGroup
                    className="mb-2 mt-2"
                    name="workingDay"
                    options={[
                      { label: 'Integral', value: 'integral' },
                      { label: 'Parcial', value: 'partial' },
                      { label: 'Estágio', value: 'internship' },
                      { label: 'Freelancer', value: 'freelancer' },
                    ]}
                    selectedValue={formData.workingDay}
                    onChange={(value) => updateField('workingDay', value)}
                  />
                  {errors.workingDay && (
                    <p className="mb-4 text-[12px] text-red-500">
                      {errors.workingDay}
                    </p>
                  )}
                </div>

                <div className="mt-2 flex flex-col items-start">
                  <Label
                    className="mb-1 text-base font-medium leading-[20px]"
                    htmlFor="workModel"
                  >
                    Modelo de Trabalho
                  </Label>
                  <RadioGroup
                    className="mb-2 mt-2"
                    name="workModel"
                    options={[
                      { label: 'Remoto', value: 'Remoto' },
                      { label: 'Híbrido', value: 'Híbrido' },
                      { label: 'Presencial', value: 'Presencial' },
                    ]}
                    selectedValue={formData.workModel}
                    onChange={(value) => updateField('workModel', value)}
                  />
                  {errors.workModel && (
                    <p className="mb-4 text-[12px] text-red-500">
                      {errors.workModel}
                    </p>
                  )}
                </div>

                <div className="mt-2 flex flex-col items-start">
                  <Label
                    className="mb-1 text-base font-medium leading-[20px]"
                    htmlFor="workRegime"
                  >
                    Regime de Trabalho
                  </Label>
                  <RadioGroup
                    className="mb-2 mt-2"
                    name="workRegime"
                    options={[
                      { label: 'CLT', value: 'CLT' },
                      { label: 'PJ', value: 'PJ' },
                    ]}
                    selectedValue={formData.workRegime}
                    onChange={(value) => updateField('workRegime', value)}
                  />
                  {errors.workRegime && (
                    <p className="mb-4 text-[12px] text-red-500">
                      {errors.workRegime}
                    </p>
                  )}
                </div>
              </div>
            )}
            {step === 3 && (
              <div className="w-[443px] space-y-4 font-canada">
                <h2 className="mt-10 pl-1 text-start text-xl font-medium leading-tight">
                  Etapas do processo seletivo
                </h2>
                <div className="pl-1 text-start text-base font-normal leading-relaxed text-[#666666]">
                  <p>Selecione as etapas do processo seletivo para a vaga.</p>
                  <p className="mb-6">
                    Apenas a análise de currículo é obrigatória.
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  {stagesSelectionProcess.map((o) => (
                    <Checkbox
                      className="m-2 text-[22px] max-[391px]:text-base"
                      key={o.value}
                      label={o.label}
                      checked={formData.processSteps.includes(o.value)}
                      onChange={(e) => {
                        if (
                          o.value === 'Análise de currículo' &&
                          !e.target.checked
                        )
                          return;
                        toggleStep(o.value, e.target.checked);
                      }}
                    />
                  ))}
                  {errors.processSteps && (
                    <p className="mb-4 ml-2 text-start text-[12px] text-red-500">
                      {errors.processSteps}
                    </p>
                  )}
                </div>
              </div>
            )}
            <div className="mb-4 mt-6 flex w-[250px] justify-between pt-4">
              {step === steps.length - 1 && (
                <Button
                  intent="secondary"
                  onClick={async () => {
                    navigate('/', { state: formData });
                  }}
                  className="h-[44px] w-[113px] text-[#003986]"
                >
                  Cancelar
                </Button>
              )}

              {step === steps.length - 1 && (
                <Button
                  intent="primary"
                  className="h-[44px] w-[113px]"
                  onClick={async () => {
                    const result = await validateStep();
                    if (result.valid) {
                      setErrors({});
                      navigate('/vacancy-review', { state: formData });
                    } else {
                      setErrors(result.errors);
                    }
                  }}
                >
                  Revisar
                </Button>
              )}
            </div>
          </div>
          <div className="mb-8 flex w-[676px] justify-between pt-4">
            {step === 0 && (
              <Button
                className="text-[#003986] max-[391px]:h-[36px]"
                intent="secondary"
              >
                Voltar
              </Button>
            )}

            {step > 0 && step < steps.length - 1 && (
              <Button
                onClick={() => setStep(step - 1)}
                intent="secondary"
                className="mb-8 text-[#003986] max-[391px]:h-[36px]"
              >
                Retornar
              </Button>
            )}

            {step !== steps.length - 1 && (
              <Button
                intent="primary"
                onClick={async () => {
                  const result = await validateStep();
                  if (result.valid) {
                    setErrors({});
                    setStep(step + 1);
                  } else {
                    setErrors(result.errors);
                  }
                }}
                className="mb-8 max-[391px]:h-[36px]"
              >
                Avançar
              </Button>
            )}
          </div>
        </section>
      </main>
    </>
  );
};
