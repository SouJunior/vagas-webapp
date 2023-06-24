import { Fragment, useContext } from "react";
import { AuthContext } from "../../../contexts/Auth/AuthContext";

export const HandleInputsRender = (arr: any): [] => {
    const auth = useContext(AuthContext);

    return arr.map((element: any, index: any) => {
        return (
            <Fragment key={index}>
                <label>{element.label}</label>
                <input
                    type={element.type}
                    name={element.name}
                    placeholder={(element.name === "email" && auth.user.email) || 
                    (element.name === "cnpj" && auth.user.cnpj) || 
                    (element.name === "nome" && auth.user.companyName) ||
                    (element.name !== "email" && element.name !== "cnpj" && element.name !== "nome" && element.placeholder)}
                    disabled={(element.name === "email") || (element.name === "cnpj") || (element.name === "nome")}
                />
            </Fragment>
        );
    });
};