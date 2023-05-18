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
            <a href={props.Link}>
                <Title>{props.Title}</Title>
            </a>
            <Img src={props.Img} />
            <Description>{props.Description}</Description>
        </Container>
    );
};

export default OurSitesCard;
