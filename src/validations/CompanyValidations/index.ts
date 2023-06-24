import * as yup from 'yup';
import { validarCNPJ } from './utils';

export const schemaCompanyLoginForm = yup.object().shape({
    // valida email
    email: yup
        .string()
        .required('O campo e-mail é obrigatório'),
    // Valida password
    password: yup
        .string()
        .required('O campo senha é obrigatório'),
});

export const schemaCompanyRegisterForm = yup.object().shape({
    // Valida nome
    registerName: yup.string().required('O campo de nome é obrigatório'),

    registerEmail: yup
        .string()
        .required('O campo Email é obrigatório')
        .email('Email precisa ser válido. Exemplo: email@gmail.com'),

    // valida password
    registerPassword: yup
        .string()
        .required('O campo Senha é obrigatório')
        .min(8, 'A senha precisa ter no mínimo 8 caracteres')
        .max(20, 'A senha pode ter no máximo 20 caracteres')
        .matches(
            /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*\W+)(?=^.{6,20}$).*$/,
            'A senha deve conter 1 letra maiúscula, 1 minúscula, 1 número, 1 caracter especial !@#$% etc...',
        ),

    // Confirma password
    passwordConfirm: yup
        .string()
        .required('Confirme sua senha')
        .oneOf(
            [yup.ref('registerPassword'), null],
            'As senhas precisam ser iguais',
        ),

    // Valida CNPJ
    
    registerCnpj: yup
        .string()
        .required('CNPJ é obrigatório')
        .matches(/^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/, 'CNPJ inválido')
        .test('test-cnpj', 'CNPJ inválido', (cnpj) => validarCNPJ(cnpj ?? '')),
    privacyTerms: yup
        .bool()
        .required('Você deve aceitar os termos de privacidade para continuar')
        .oneOf(
            [true],
            'Você deve aceitar os termos de privacidade para continuar',
        ),
});
