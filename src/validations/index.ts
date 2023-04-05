import * as yup from "yup";

export const createJobForm = yup.object().shape({
  title: yup
  .string()
  .required("O título é obrigatório")
  .max(30, 'O título deve ter no máximo 30 caracteres'),
  description: yup
  .string()
  .required("A descrição é obrigatória")
  .max(3000, 'Este campo deve ter no máximo 3000 caracteres'),
  prerequisites: yup
  .string()
  .required("Os Pré-requisitos são obrigatórios")
  .max(3000, 'Este campo deve ter no máximo 3000 caracteres'),
  benefits: yup
  .string()
  .max(3000, 'Este campo deve ter no máximo 3000 caracteres'),
  type: yup
  .mixed()
  .required('A opção é obrigatória'),
  type_contract: yup
  .mixed()
  .oneOf(['CLT', 'PJ', 'Outro'], 'Selecione uma opção válida')
  .required('A opção é obrigatória'),
  other_type_contract: yup
  .string()
  .when('type_contract', {
    is: (value: any) => value === 'Outro',
    then: yup.string().required('Descreva o tipo de contrato'),
  }),
  contract_time: yup
  .string()
  .required('Descreva o tempo de contrato'),
  minValue: yup
  .number()
    .typeError('O valor mínimo deve ser um número')
    .positive('O valor mínimo deve ser positivo')
    .required('O valor mínimo é obrigatório')
    .test(
      'min-max',
      'O valor mínimo deve ser menor que o valor máximo',
      function (value: any) {
        const { maxValue } = this.parent;
        return !maxValue || value <= maxValue;
      }
    ),
    
  maxValue: yup
    .number()
      .typeError('O valor máximo deve ser um número')
      .positive('O valor máximo deve ser positivo')
      .required('O valor máximo é obrigatório')
      .test(
        'min-max',
        'O valor máximo deve ser maior que o valor mínimo',
        function (value: any) {
          const { minValue } = this.parent;
          return !minValue || value >= minValue;
        }
        ),
  modality: yup
  .mixed()
  .oneOf(['Remoto', 'Híbrido', 'Presencial'], 'Selecione uma opção válida')
  .required('A opção é obrigatória'),
  uf: yup
  .mixed()
  .when('modality', {
    is: (modality: string) => modality !== 'Remoto',
    then: yup.string().required('O preenchimento do campo UF é obrigatório.'),
  }),
  headquarters: yup
  .string()
  .when('modality', {
    is: (modality: string) => modality !== 'Remoto',
    then: yup.string().required('O preenchimento do campo UF é obrigatório.'),
  }),
  affirmative: yup
  .string()
  .required('A seleção é obrigatória'),
  affirmative_type: yup
  .mixed()
  .when('affirmative', {
    is: 'true',
    then: yup.string().required('Descreva o tipo de contrato').oneOf(['Mulheres Cis ou Trans', 'Pessoa preta ou parda', 'PCD', '60+', 'LGBTQIA+'], 'Selecione uma opção válida')
  }),

})