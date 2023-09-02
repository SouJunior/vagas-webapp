import * as yup from 'yup';

export const createJobForm = yup.object().shape({
    title: yup
        .string() 
        .required('O título é obrigatório')
        .max(30, 'O título deve ter no máximo 30 caracteres'),
    description: yup
        .string()
        .required('A descrição é obrigatória')
        .max(3000, 'Este campo deve ter no máximo 3000 caracteres'),
    prerequisites: yup
        .string()
        .required('Os Pré-requisitos são obrigatórios')
        .max(3000, 'Este campo deve ter no máximo 3000 caracteres'),
    benefits: yup
        .string()
        .notRequired()
        .max(3000, 'Este campo deve ter no máximo 3000 caracteres'),
    salaryMin: yup
        .number()
        .typeError('O valor mínimo deve ser um número')
        .positive('O valor mínimo deve ser positivo')
        .notRequired()
        .test(
            'min-max-salaryMin',
            'O valor mínimo deve ser menor que o valor máximo',
            function (value: any) {
                const { salaryMax } = this.parent;
                return !salaryMax || value <= salaryMax;
            },
        ),
    salaryMax: yup
        .number()
        .typeError('O valor máximo deve ser um número')
        .positive('O valor máximo deve ser positivo'),

    type: yup.string().required('O tipo é obrigatório'),

    typeContract: yup
            .mixed()
            .oneOf(['CLT', 'PJ', 'Outro'], 'Selecione uma opção válida')
            .required('A opção é obrigatória'),
    indefinideContract: yup
        .string()
        .required('A opção é obrigatória'),
    contractType: yup.string().when('indefinideContract', {
            is: 'false',
            then: yup.string().required('Campo obrigatório'),
          }),
    modality: yup
        .mixed()
        .oneOf(
            [ 'HYBRID', 'IN_PERSON', 'REMOTE' ],
            'Selecione uma opção válida',
        )
        .required('A opção é obrigatória'),

    federalUnit: yup.string().when('modality', {
        is: (modality: string) => modality !== 'REMOTE',
        then: yup
            .string()
            .required('O preenchimento do campo UF é obrigatório.'),
    }),
    city: yup.string().when('modality', {
        is: (modality: string) => modality !== 'REMOTE',
        then: yup
            .string()
            .required('O preenchimento do campo Cidade é obrigatório.'),
    }),
    affirmative: yup.string().required('A seleção é obrigatória'),
    affirmativeType: yup.array().when('affirmative', {
        is: 'true',
        then: yup.array().test('is-selected', 'Selecione uma opção', (value: any) => value && value.length > 0),
        otherwise: yup.array(),
      }),
      
    
});
