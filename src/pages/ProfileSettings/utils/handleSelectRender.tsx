import { Fragment } from "react";

export const handleSelectRender = (arr: any): [] => {
    return arr.map((element: any, index: any) => {
        return (
            <Fragment key={index}>
                <label>{element.label}</label>
                <input
                    type={element.type}
                    name={element.name}
                    placeholder={element.placeholder}
                />
            </Fragment>
        );
    });
};