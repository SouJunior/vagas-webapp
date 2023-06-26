import { Fragment, useContext, useEffect } from 'react';
import { AuthContext } from '../../../contexts/Auth/AuthContext';

import { useForm } from 'react-hook-form';

//TODO: Isso é um componente não uma função
export const HandleInputsRender = (arr: any): [] => {
    const { register, setValue } = useForm();

    const auth = useContext(AuthContext);

    useEffect(() => {
        setValue('email', auth.user.email);
        setValue('cnpj', auth.user.cnpj);
        setValue('nome', auth.user.companyName);
    }, [auth.user.cnpj, auth.user.companyName, auth.user.email, setValue]);

    return arr.map((element: any) => {
        const isDisabled =
            element.name === 'email' ||
            element.name === 'cnpj' ||
            element.name === 'nome';

        return (
            <Fragment key={element.id}>
                <label>{element.label}</label>
                <input
                    type={element.type}
                    {...register(element.name)}
                    placeholder={element.placeholder}
                    disabled={isDisabled}
                />
            </Fragment>
        );
    });
};
