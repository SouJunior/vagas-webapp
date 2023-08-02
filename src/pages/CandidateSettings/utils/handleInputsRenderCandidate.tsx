import { Fragment, useContext } from 'react';
import { AuthContext } from '../../../contexts/Auth/AuthContext';
import { ErrorMessages, Required, Spacing } from '../style';

export const HandleInputsRenderCandidate = (arr: any, register: any, errors: any): [] => {

    const auth = useContext(AuthContext);

    return arr.map((element: any) => {
        return (
            <Fragment key={element.id}>
                <label>{element.label}<Required>*</Required></label>
                <input
                    type={element.type}
                    {...register(element.name)}
                    defaultValue={
                        (element.name === "email" && auth.user.email) ||
                        (element.name === "name" && auth.user.name)
                    }
                    disabled={element.name === "email"}
                />
                {
                    element.name === "name" &&
                    <ErrorMessages>
                        {errors.name && <>{errors.name.message}</>}
                    </ErrorMessages>
                }
                <Spacing />
            </Fragment>
        );
    });
};
