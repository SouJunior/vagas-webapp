import * as yup from 'yup';

export const emailSchema = yup.object().shape({
  email: yup
    .string()
    .required('O campo e-mail é obrigatório')
    .email('o e-mail precisa ser válido. Exemplo: email@gmail.com'),
});
