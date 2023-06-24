export const handleOptionsRender = (arr: any): [] => {
    return arr.map((element: any, index: any) => {
        return (
            <option key={index} value={element.sigla}>
                {element.nome}
            </option>
        );
    });
};