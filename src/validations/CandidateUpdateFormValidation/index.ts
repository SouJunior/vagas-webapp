import * as yup from 'yup';
import { state } from '../../pages/ProfileSettings/data/location';

export const CandidateUpdateFormSchema = yup.object().shape({
    name: yup
        .string()
        .required('O campo "Nome completo" é obrigatório'),
    phoneNumber1: yup
        .string()
        .required('O campo "Telefone 1" é obrigatório'),
    city: yup
        .string()
        .required('O campo "Cidade" é obrigatório'),
    fileInput1:yup
        .mixed()
        .required('O campo "Currículo 1" é obrigatório'),
        /*.test('O campo "Currículo 1" é obrigatório', (file) => {
            if ()) return true 
            return false;
        }),*/
    uf: yup
        .string()
        .oneOf(state, 'O campo "UF" é obrigatório'),
});
