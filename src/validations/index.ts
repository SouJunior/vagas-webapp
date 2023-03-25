import * as yup from "yup";

function validarCNPJ(cnpj: string | undefined = ''):boolean {
   if (!cnpj) return false;
   cnpj = cnpj?.replace(/[^\d]+/g, '') || '';

   
  if (cnpj == '') return false;

  if (cnpj.length !== 14) return false;

  // Elimina CNPJs invalidos conhecidos
  if (
    cnpj === '00000000000000' ||
    cnpj === '11111111111111' ||
    cnpj === '22222222222222' ||
    cnpj === '33333333333333' ||
    cnpj === '44444444444444' ||
    cnpj === '55555555555555' ||
    cnpj === '66666666666666' ||
    cnpj === '77777777777777' ||
    cnpj === '88888888888888' ||
    cnpj === '99999999999999'
  ) {
    return false;
  }

  // Valida DVs
  let tamanho = cnpj.length - 2;
  let numeros = cnpj.substring(0, tamanho);
  const digitos = cnpj.substring(tamanho);
  let soma = 0;
  let pos = tamanho - 7;
  for (let i = tamanho; i >= 1; i--) {
    soma += parseInt(numeros.charAt(tamanho - i)) * pos--;
    if (pos < 2) pos = 9;
  }
  let resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);
  if (resultado !== parseInt(digitos.charAt(0))) return false;

  tamanho = tamanho + 1;
  numeros = cnpj.substring(0, tamanho);
  soma = 0;
  pos = tamanho - 7;
  for (let i = tamanho; i >= 1; i--) {
    soma += parseInt(numeros.charAt(tamanho - i)) * pos--;
    if (pos < 2) pos = 9;
  }
  resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);
  if (resultado !== parseInt(digitos.charAt(1))) return false;

  return true;
}


export const formSchema = yup.object().shape({
  email: yup
    .string()
    .required("O campo Email é obrigatório")
    .email("Email precisa ser válido. Exemplo: email@gmail.com"),
  password: yup
    .string()
    .required("O campo Senha é obrigatório")
    .min(6, "A senha precisa ter no mínimo 6 caracteres")
    .max(20, "A senha precisa ter no máximo 20 caracteres")
    .matches(
      /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*\W+)(?=^.{6,20}$).*$/,
      "A senha deve conter 1 letra maiúscula, 1 minúscula, 1 número, 1 caracter especial !@#$% etc..."
    ),
    registerEmail: yup
    .string()
    .required("O campo Email é obrigatório")
    .email("Email precisa ser válido. Exemplo: email@gmail.com"),
    registerPassword: yup
    .string()
    .required("O campo Senha é obrigatório")
    .min(6, "A senha precisa ter no mínimo 6 caracteres")
    .max(20, "A senha precisa ter no máximo 20 caracteres")
    .matches(
      /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*\W+)(?=^.{6,20}$).*$/,
      "A senha deve conter 1 letra maiúscula, 1 minúscula, 1 número, 1 caracter especial !@#$% etc..."
    ),
    confirmPassword: yup
    .string()
    .required("Confirme sua senha")
    .oneOf([yup.ref("registerPassword"), null], "As senhas precisam ser iguais"),
    registerName: yup
    .string()
    .required("O campo de nome é obrigatório"),
    registerCnpj: yup
    .string()
    .required("CNPJ é obrigatório")
    .matches(/^\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}$/, 'CNPJ inválido')
    .test('test-cnpj', 'CNPJ inválido', (cnpj) => validarCNPJ(cnpj ?? '')),
    privacyTerms: yup
    .bool()
    .required("Você deve aceitar os termos de privacidade para continuar")
    .oneOf([true], "Você deve aceitar os termos de privacidade para continuar")
});


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