import * as yup from 'yup';

export const schemaValidationLoginForm = yup.object().shape({
    // valida email
    email: yup
        .string()
        .required('O campo Email é obrigatório')
        .email('Email precisa ser válido. Exemplo: email@gmail.com'),
    // Validae password
    password: yup
        .string()
        .required('O campo Senha é obrigatório')
        .min(6, 'A senha precisa ter no mínimo 6 caracteres')
        .max(20, 'A senha precisa ter no máximo 20 caracteres')
        .matches(
            /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*\W+)(?=^.{6,20}$).*$/,
            'A senha deve conter 1 letra maiúscula, 1 minúscula, 1 número, 1 caracter especial !@#$% etc...',
        ),
});
