import React, { HTMLInputTypeAttribute, ReactNode } from "react";
import { Wrapper } from "./styles";
import cidades from "../../../helpers/city.json";
type InputTypeProps = {
    type: HTMLInputTypeAttribute;
    startLabel: string;
    placeholder: string;
    endIcon?: string;
    listName?: string;
};

const InputField = ({
    type,
    startLabel,
    placeholder,
    endIcon,
    listName,
}: InputTypeProps) => {
    const citys = cidades.map((cidade, index) => (
        <option key={index} value={cidade.nome} id={cidade.sigla}>
            {cidade.nome}
        </option>
    ));

    return (
        <Wrapper>
            <label htmlFor={startLabel} className="ml-4">
                <>
                    <span>{startLabel}</span>
                    {endIcon && (
                        <img
                            src={endIcon}
                            alt="icon location pin"
                            className=""
                        />
                    )}
                    <input
                        type={type}
                        placeholder={placeholder}
                        id={startLabel}
                        list={listName}
                    />
                </>
                {listName && <datalist id="citys">{citys}</datalist>}
            </label>
        </Wrapper>
    );
};

export default InputField;

