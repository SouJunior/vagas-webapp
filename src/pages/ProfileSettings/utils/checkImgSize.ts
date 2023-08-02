export const checkImgZise = (img: File) => {
    if(!img || img === null) return

    if(img && img.size > 8 * Math.pow(10, 6)) {
        return (
            "A imagem deve ser menor que 8 MB."
        )
    }
}