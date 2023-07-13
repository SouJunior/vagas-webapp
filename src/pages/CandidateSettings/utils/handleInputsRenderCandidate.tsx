import { Fragment, useContext } from 'react';
import { AuthContext } from '../../../contexts/Auth/AuthContext';
import { Required } from '../style';

export const HandleInputsRenderCandidate = (arr: any): [] => {
    const auth = useContext(AuthContext);

    return arr.map((element: any) => {
        return (
            <Fragment key={element.id}>
                <label>{element.label}<Required>*</Required></label>
                <input
                    type={element.type}
                    name={element.name}
                    defaultValue={
                        (element.name === 'email' && auth.user.email) ||
                        (element.name === 'name' && auth.user.name)
                    }
                    disabled={element.name === "email"}
                />
            </Fragment>
        );
    });
};
