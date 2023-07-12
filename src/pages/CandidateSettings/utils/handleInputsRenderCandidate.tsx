import { Fragment, useContext } from 'react';
import { AuthContext } from '../../../contexts/Auth/AuthContext';

export const HandleInputsRenderCandidate = (arr: any): [] => {
    const auth = useContext(AuthContext);

    return arr.map((element: any, index: any) => {
        return (
            <Fragment key={index}>
                <label>{element.label}</label>
                <input
                    type={element.type}
                    name={element.name}
                    value={
                        (element.name === 'email' && auth.user.email) ||
                        (element.name === 'nome' && auth.user.name)
                    }
                    disabled={element.name === 'email'}
                />
            </Fragment>
        );
    });
};
