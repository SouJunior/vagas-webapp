import * as yup from 'yup';
import { state } from '../../pages/ProfileSettings/data/location';

export const CandidateUpdateFormSchema = yup.object().shape({
    profPic: yup
        .mixed()
<<<<<<< HEAD
        .test('fileSize', 'A imagem deve ser menor que 8MB.', (value: any) => {
            return value && value[0].size < 8000000;
        }),
    name: yup.string().required('O campo "Nome completo" é obrigatório'),
    phoneNumber1: yup.string().required('O campo "Telefone 1" é obrigatório'),
    city: yup.string().required('O campo "Cidade" é obrigatório'),
    fileInput1: yup
=======
        .test("fileSize", 'A imagem deve ser menor que 8MB.', (value)  => {
            if (value[0]?.size) {
                return value[0].size < 8000000;
            }
            return true; 
        }
        ),
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
>>>>>>> 86c211e9daa44bb41ffc5317d3ed2f242650b9c2
        .mixed()
        .test(
            'required',
            'O campo "Currículo 1" é obrigatório',
            (files: any) => files.length > 0,
        ),
    uf: yup.string().oneOf(state, 'O campo "UF" é obrigatório'),
});
