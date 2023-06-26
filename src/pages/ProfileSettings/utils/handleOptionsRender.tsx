//TODO: Isso é um componente não uma função
export const HandleOptionsRender = (arr: any): [] => {
    return arr.map((element: any) => {
        const key = element.id

        return (
            <option key={key} value={element.sigla}>
                {element.nome}
            </option>
        );
    });
};