import * as S from './styles';

interface OurSitesCardProps {
    Link: string;
    Title: string;
    Img: string;
    Description: string;
}

const OurSitesCard: React.FC<OurSitesCardProps> = (props) => {
    return (
        <a
            href={props.Link}
            target="_blank"
            aria-label={`Visitar ${props.Title}`}
            rel="noreferrer"
        >
            <S.Container>
                <S.Title>{props.Title}</S.Title>

                <S.ContainerImg>
                    <S.Img src={props.Img} alt={`Imagem de ${props.Title}`} />
                </S.ContainerImg>

                <S.Description>{props.Description}</S.Description>
            </S.Container>
        </a>
    );
};

export default OurSitesCard;
