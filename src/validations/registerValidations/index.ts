import * as yup from 'yup';

function validarCNPJ(cnpj: string | undefined = ''): boolean {
    if (!cnpj) return false;
    cnpj = cnpj?.replace(/[^\d]+/g, '') || '';

    if (cnpj === '') return false;

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

export const schemaValidationRegisterForm = yup.object().shape({
    registerEmail: yup
        .string()
        .required('O campo Email é obrigatório')
        .email('Email precisa ser válido. Exemplo: email@gmail.com'),

    // valida password
    registerPassword: yup
        .string()
        .required('O campo Senha é obrigatório')
        .min(6, 'A senha precisa ter no mínimo 6 caracteres')
        .max(20, 'A senha precisa ter no máximo 20 caracteres')
        .matches(
            /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*\W+)(?=^.{6,20}$).*$/,
            'A senha deve conter 1 letra maiúscula, 1 minúscula, 1 número, 1 caracter especial !@#$% etc...',
        ),

    // Confirma password
    confirmPassword: yup
        .string()
        .required('Confirme sua senha')
        .oneOf(
            [yup.ref('registerPassword'), null],
            'As senhas precisam ser iguais',
        ),
    registerName: yup.string().required('O campo de nome é obrigatório'),

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
