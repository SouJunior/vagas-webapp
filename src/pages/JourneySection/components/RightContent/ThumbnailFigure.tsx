import styled from "styled-components"

const Figure = styled.img`
    width: 40px;
    hight: 40px;
    color: #344054;
`

interface ThumbnailFigureInterface {
    src: string;
  }

const ThumbnailFigure: React.FC<ThumbnailFigureInterface> = ({ src }) => {

    return (
        <Figure src={src}/>
    )
}

export default ThumbnailFigure