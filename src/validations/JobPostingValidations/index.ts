import * as Yup from 'yup';

export const aboutCompanySchema = Yup.object({
  companyName: Yup.string().required('Campo obrigatório.'),
  companyWebsite: Yup.string()
    .url('URL inválida.')
    .required('O site da empresa é obrigatório.'),
  aboutTheCompany: Yup.string()
    .required('Este campo é obrigatório.')
    .max(500, 'Limite atingido.'),
});

export const jobSchema = Yup.object({
  position: Yup.string().required('Campo obrigatório.'),
  areaOfActivity: Yup.string().required('Campo obrigatório.'),
  jobDescription: Yup.string()
    .required('Campo obrigatório.')
    .max(500, 'Limite atingido.'),
  responsibilities: Yup.string().required('Campo obrigatório.'),
  requirements: Yup.string().required('Campo obrigatório.'),
  location: Yup.string().required('Digite uma cidade válida.'),
  benefits: Yup.string().required('Campo obrigatório.'),
  affirmativeVacancies: Yup.array()
    .of(Yup.string())
    .min(1, 'Selecione pelo menos uma opção')
    .required('Campo obrigatório'),
});

export const workModelSchema = Yup.object({
  workingDay: Yup.string().required('Campo obrigatório.'),
  workModel: Yup.string().required('Campo obrigatório.'),
  workRegime: Yup.string().required('Campo obrigatório.'),
});

export const processStepsSchema = Yup.object({
  processSteps: Yup.array()
    .min(1, 'Selecione pelo menos uma etapa.')
    .required('Campo obrigatório'),
});
