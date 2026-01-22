import * as Yup from 'yup';

export const step0Schema = Yup.object().shape({
  companyName: Yup.string().required('Campo obrigatório.'),
  companyWebsite: Yup.string()
    .url('URL inválida.')
    .required('O site da empresa é obrigatório.'),
  aboutTheCompany: Yup.string()
    .required('Este campo é obrigatório.')
    .max(500, 'Limite atingido.'),
});

export const step1Schema = Yup.object().shape({
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

export const step2Schema = Yup.object().shape({
  workingDay: Yup.string().required('Campo obrigatório.'),
  workModel: Yup.string().required('Campo obrigatório.'),
  workRegime: Yup.string().required('Campo obrigatório.'),
});

export const step3Schema = Yup.object().shape({
  steps: Yup.array().min(1, 'Selecione pelo menos uma etapa.').required(),
});
