import { Fragment, useContext, useEffect } from 'react';
import { AuthContext } from '../../../contexts/Auth/AuthContext';

export const HandleInputsRender = (
    arr: any,
    register: any,
    setValue: any,
): [] => {
    const auth = useContext(AuthContext);

    useEffect(() => {
        setValue('email', auth.user.email);
        setValue('cnpj', auth.user.cnpj);
        setValue('nome', auth.user.companyName);
        setValue('site', auth.user.companySite);
        setValue('instagram', auth.user.otherSite.instagram);
        setValue('linkedin', auth.user.otherSite.linkedin);
        setValue('twitter', auth.user.otherSite.twitter);
    }, [
        auth.user.email,
        auth.user.cnpj,
        auth.user.companyName,
        auth.user.companySite,
        auth.user.otherSite.instagram,
        auth.user.otherSite.linkedin,
        auth.user.otherSite.twitter,
        setValue,
    ]);

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
