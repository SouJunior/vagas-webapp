export const handleOptionsRender = (arr: any): [] => {
    return arr.map((element: any) => {

        const key = element.id

        return (
            <option key={key} value={element.sigla}>
                {element.nome}
            </option>
        );
    });
};