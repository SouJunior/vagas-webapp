import React from "react";
import serachIcon from "../../assets/svg/search.svg";
export type SuggetionLabelProps = {
    label: string;
};

const SuggestionLabel = ({ label }: SuggetionLabelProps) => {
    return (
        <span className="rounded border border-blue-300 py-2 px-4 flex items-center w-fit cursor-pointer hover:bg-sky-100 justify-center ">
            <img
                src={serachIcon}
                alt="ícone lupa cinza"
                className="mr-1 w-4 h-4"
            />
            <p className="font-semibold text-gray-500">{label}</p>
        </span>
    );
};

export default SuggestionLabel;

