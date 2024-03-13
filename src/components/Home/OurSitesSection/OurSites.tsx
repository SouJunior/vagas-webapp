import { Description, Img, Title, Container } from './styles';

interface OurSitesCardProps {
    Link: string;
    Title: string;
    Img: string;
    Description: string;
}

const OurSitesCard: React.FC<OurSitesCardProps> = (props) => {
    return (
        <Container>
            <a
                href={props.Link}
                target="_blank"
                aria-label={`Visitar ${props.Title}`}
            >
                <abbr
                    title={`Clique e seja redirecionado para ${props.Title}.`}
                >
                    <Title>{props.Title}</Title>
                </abbr>
            </a>

            <a
                href={props.Link}
                target="_blank"
                aria-label={`Visitar ${props.Title}`}
            >
                <abbr
                    title={`Clique e seja redirecionado para ${props.Title}.`}
                >
                    <Img src={props.Img} alt={`Imagem de ${props.Title}`} />
                </abbr>
            </a>

            <a
                href={props.Link}
                target="_blank"
                aria-label={`Visitar ${props.Title}`}
            >
                <abbr
                    title={`Clique e seja redirecionado para ${props.Title}.`}
                >
                    <Description>{props.Description}</Description>
                </abbr>
            </a>
        </Container>
    );
};

export default OurSitesCard;
